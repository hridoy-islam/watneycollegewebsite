import { countries, nationalities } from '@/types';

/**
 * CV parsing for the career application form.
 *
 * The server hands us the raw text of the uploaded PDF/DOCX; this turns that
 * into values the personal details step can drop straight into its fields.
 *
 * Two rules shape everything below.
 *
 * 1. A wrong value is worse than no value. The candidate has to notice and
 *    correct a mis-filled field, whereas an empty one is simply filled in as
 *    they were going to anyway. So every extractor here would rather return
 *    `undefined` than guess - dates of birth and titles are read only from an
 *    explicit label, never from the first thing in the document that looks
 *    vaguely like one.
 *
 * 2. Position matters. A CV names several people (referees, managers) and
 *    several addresses (employers, universities). The candidate's own details
 *    are in the header. Name, contact and address are therefore looked for in
 *    the first block of the document, not across the whole of it.
 */

/** Fields the personal details step can be pre-filled with. */
export interface ParsedCv {
  title?: string;
  firstName?: string;
  initial?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  dateOfBirth?: Date;
  /** Slug matching the nationality select's option values, e.g. "british". */
  nationality?: string;
  /** Slug matching the country select's option values, e.g. "united-kingdom". */
  countryOfResidence?: string;
  nationalInsuranceNumber?: string;
  postalAddressLine1?: string;
  postalAddressLine2?: string;
  postalCity?: string;
  postalPostCode?: string;
  /** Slug matching the country select's option values. */
  postalCountry?: string;
}

/**
 * How many non-empty lines from the top count as "the header". Long enough to
 * cover a name, a contact block and an address even when a CV spaces them out,
 * short enough to stop before the personal statement and the job history.
 */
const HEADER_LINES = 28;

/** The select components key off slugs, not display text. */
const toSlug = (value: string) => value.toLowerCase().replace(/\s/g, '-');

const countryBySlug = new Map(countries.map((c) => [toSlug(c), c]));
const nationalityBySlug = new Map(nationalities.map((n) => [toSlug(n), n]));

/**
 * What people actually write on a CV, mapped to the slug the select expects.
 * "UK" and "England" are far more common than "United Kingdom", and neither
 * appears in the country list at all.
 */
const COUNTRY_ALIASES: Record<string, string> = {
  uk: 'united-kingdom',
  'u.k.': 'united-kingdom',
  gb: 'united-kingdom',
  'great britain': 'united-kingdom',
  britain: 'united-kingdom',
  england: 'united-kingdom',
  scotland: 'united-kingdom',
  wales: 'united-kingdom',
  'northern ireland': 'united-kingdom',
  usa: 'united-states',
  'u.s.a.': 'united-states',
  us: 'united-states',
  'united states of america': 'united-states',
  america: 'united-states',
  uae: 'united-arab-emirates',
  'republic of ireland': 'ireland',
  'south korea': 'korea-south',
  'north korea': 'korea-north'
};

const NATIONALITY_ALIASES: Record<string, string> = {
  english: 'british',
  scottish: 'british',
  welsh: 'british',
  'northern irish': 'british',
  uk: 'british',
  'united kingdom': 'british',
  'u.k.': 'british',
  usa: 'american',
  us: 'american',
  'united states': 'american'
};

/**
 * Words that rule a line out as a person's name. A CV header is full of lines
 * that match "two capitalised words" - "Curriculum Vitae", "Personal Profile",
 * "Senior Developer" - and the old parser took the first of them.
 */
const NAME_STOPWORDS = new Set([
  'curriculum',
  'vitae',
  'cv',
  'resume',
  'résumé',
  'profile',
  'personal',
  'statement',
  'summary',
  'objective',
  'details',
  'information',
  'contact',
  'address',
  'email',
  'e-mail',
  'phone',
  'telephone',
  'mobile',
  'tel',
  'linkedin',
  'github',
  'portfolio',
  'website',
  'nationality',
  'education',
  'experience',
  'employment',
  'history',
  'skills',
  'references',
  'referees',
  'qualifications',
  'achievements',
  'interests',
  'hobbies',
  'languages',
  'about',
  'me'
]);

/** Post-nominals that trail a name and are not part of it. */
const POST_NOMINALS =
  /\b(BSc|MSc|BA|MA|MBA|PhD|DPhil|LLB|LLM|BEng|MEng|ACCA|ACA|CIMA|CIPD|FCCA|MRCP|MRCGP|RN|RGN|PGCE|QTS|Hons|MCIPS|PRINCE2)\b\.?/gi;

const TITLE_TOKENS: Record<string, string> = {
  mr: 'Mr',
  mrs: 'Mrs',
  miss: 'Miss',
  ms: 'Ms',
  dr: 'Dr',
  prof: 'Prof',
  professor: 'Prof'
};

/**
 * UK postcode, to the real format rather than "some letters and digits".
 * Kept case-insensitive because plenty of CVs are typed in lower case.
 */
const POSTCODE =
  /\b([A-Z]{1,2}\d[A-Z\d]?)\s*(\d[A-Z]{2})\b/i;

/**
 * National Insurance number. The prefix rules matter: without them the pattern
 * happily matches the middle of a reference number or a National Insurance
 * *heading* followed by something else.
 */
const NI_NUMBER =
  /\b([ABCEGHJKLMNOPRSTWXYZ][ABCEGHJKLMNPRSTWXYZ])\s*(\d{2})\s*(\d{2})\s*(\d{2})\s*([A-D])\b/i;

const MONTHS: Record<string, number> = {
  jan: 0,
  january: 0,
  feb: 1,
  february: 1,
  mar: 2,
  march: 2,
  apr: 3,
  april: 3,
  may: 4,
  jun: 5,
  june: 5,
  jul: 6,
  july: 6,
  aug: 7,
  august: 7,
  sep: 8,
  sept: 8,
  september: 8,
  oct: 9,
  october: 9,
  nov: 10,
  november: 10,
  dec: 11,
  december: 11
};

/** Street words, used to tell an address line from a job title. */
const STREET_WORDS =
  /\b(road|rd|street|st|lane|ln|avenue|ave|drive|dr|close|court|ct|crescent|way|place|pl|gardens|gdns|grove|terrace|park|hill|square|sq|walk|row|mews|rise|view|house|flat|apartment|apt|unit|block)\b/i;

/**
 * pdf-parse output is rarely clean: non-breaking spaces, soft hyphens, smart
 * quotes and stray carriage returns all show up and all break naive matching.
 */
const normalize = (raw: string): string =>
  raw
    .replace(/\r\n?/g, '\n')
    .replace(/­/g, '') // soft hyphen
    .replace(/[​-‍﻿]/g, '') // zero-width
    .replace(/[   ]/g, ' ') // non-breaking spaces
    .replace(/[‘’‛]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/[‐-―]/g, '-')
    // A contact header laid out as columns comes back out of pdf-parse with
    // the columns run together - "…@gmail.comwww.linkedin.com". Prising the
    // obvious joins apart keeps the next token from being swallowed whole.
    // Written with a capture group rather than a lookbehind: Safari only
    // gained lookbehind in 16.4, and an unsupported pattern throws when the
    // module loads, taking the whole form down with it.
    .replace(/([^\s])(www\.|https?:\/\/)/gi, '$1 $2')
    .replace(/[ \t]+/g, ' ')
    .split('\n')
    .map((line) => line.trim())
    .join('\n');

const nonEmptyLines = (text: string) =>
  text.split('\n').filter((line) => line.length > 0);

const titleCase = (value: string) =>
  value
    .toLowerCase()
    .split(/\s+/)
    .map((word) =>
      word
        .split('-')
        .map((part) =>
          part ? part.charAt(0).toUpperCase() + part.slice(1) : part
        )
        .join('-')
    )
    .join(' ');

/**
 * Reads the value off a `Label: value` line, looking on the next line too -
 * a two-column CV layout often puts the label and its value on separate lines.
 */
const labelledValue = (
  lines: string[],
  labels: RegExp
): string | undefined => {
  for (let i = 0; i < lines.length; i += 1) {
    const match = lines[i].match(
      new RegExp(`^\\s*(?:${labels.source})\\s*[:\\-–]?\\s*(.*)$`, 'i')
    );

    if (!match) continue;

    const inline = match[1]?.trim();
    if (inline) return inline;

    const next = lines[i + 1]?.trim();
    // A bare label followed by another label is a layout artefact, not a value.
    if (next && !next.includes(':')) return next;
  }

  return undefined;
};

const resolveCountry = (value?: string): string | undefined => {
  if (!value) return undefined;

  const cleaned = value.trim().replace(/[.,]+$/, '').toLowerCase();
  if (!cleaned) return undefined;

  if (COUNTRY_ALIASES[cleaned]) return COUNTRY_ALIASES[cleaned];

  const slug = toSlug(cleaned);
  return countryBySlug.has(slug) ? slug : undefined;
};

const resolveNationality = (value?: string): string | undefined => {
  if (!value) return undefined;

  const cleaned = value.trim().replace(/[.,]+$/, '').toLowerCase();
  if (!cleaned) return undefined;

  if (NATIONALITY_ALIASES[cleaned]) return NATIONALITY_ALIASES[cleaned];

  const slug = toSlug(cleaned);
  if (nationalityBySlug.has(slug)) return slug;

  // "British citizen", "Indian national" - take the leading adjective.
  const firstWord = cleaned.split(/\s+/)[0];
  if (NATIONALITY_ALIASES[firstWord]) return NATIONALITY_ALIASES[firstWord];

  return nationalityBySlug.has(firstWord) ? firstWord : undefined;
};

/**
 * Top-level domains seen on a CV, longest first so "com" wins over "co" when
 * both could start a label. Only used to find where a domain ends - an address
 * whose TLD is not listed is still accepted, it just is not trimmed.
 */
const TLDS = [
  'com',
  'org',
  'net',
  'edu',
  'gov',
  'info',
  'biz',
  'online',
  'site',
  'shop',
  'app',
  'dev',
  'tech',
  'email',
  'cloud',
  'live',
  'name',
  'pro',
  'xyz',
  'me',
  'tv',
  'io',
  'ai',
  'co',
  'uk',
  'us',
  'ca',
  'au',
  'in',
  'ie',
  'de',
  'fr',
  'es',
  'it',
  'nl',
  'be',
  'ch',
  'at',
  'se',
  'no',
  'dk',
  'fi',
  'pl',
  'pt',
  'gr',
  'cz',
  'ro',
  'hu',
  'ru',
  'ua',
  'tr',
  'br',
  'mx',
  'za',
  'ng',
  'ke',
  'gh',
  'ae',
  'sa',
  'pk',
  'bd',
  'lk',
  'np',
  'ph',
  'my',
  'sg',
  'th',
  'vn',
  'id',
  'cn',
  'jp',
  'kr',
  'nz'
].sort((a, b) => b.length - a.length);

/** Labels that take a country code after them: ".co.uk", ".ac.uk", ".com.au". */
const SECOND_LEVEL = new Set(['co', 'com', 'org', 'net', 'ac', 'gov', 'edu', 'sch', 'ltd', 'plc', 'me']);

const isCountryCode = (label: string) => label.length === 2 && /^[a-z]{2}$/.test(label);

/**
 * The hosts that turn up glued to the end of an email on a CV contact line.
 *
 * Splitting a label the moment it merely *starts* with a TLD is far too eager -
 * "company.com" would become "com" + "pany.com", and "department.ac.uk" would
 * become "de". So a label is only split when what follows the TLD is one of
 * these, which is what a run-together contact line actually contains.
 */
const LINK_HOSTS = [
  'www',
  'http',
  'https',
  'linkedin',
  'github',
  'gitlab',
  'facebook',
  'twitter',
  'instagram',
  'indeed',
  'medium',
  'behance',
  'dribbble',
  'stackoverflow',
  'portfolio',
  'youtube',
  'tiktok'
];

/**
 * Trims a domain back to where it really ends.
 *
 * pdf-parse runs a columnar contact header together, so the address arrives as
 * "gmail.comwww.linkedin.com" - the greedy domain pattern then swallows the
 * lot. Walking the labels and stopping at the first genuine TLD recovers
 * "gmail.com", including when the next link is glued straight onto the TLD
 * with no separator of any kind.
 */
const trimDomain = (domain: string): string => {
  const labels = domain.split('.');

  for (let i = 1; i < labels.length; i += 1) {
    const label = labels[i];

    // An exact TLD ends the domain - unless it is ".co" in ".co.uk".
    if (TLDS.includes(label)) {
      const next = labels[i + 1];
      if (SECOND_LEVEL.has(label) && next && isCountryCode(next)) {
        return labels.slice(0, i + 2).join('.');
      }
      return labels.slice(0, i + 1).join('.');
    }

    // A TLD with a link stuck to it: "comlinkedin" is "com" plus what came
    // next in the contact line. Only split when the tail is a link host, so a
    // real label that happens to start with a TLD - "company", "department" -
    // is left alone.
    const lower = label.toLowerCase();
    const glued = TLDS.find((tld) => {
      if (!lower.startsWith(tld) || lower.length === tld.length) return false;
      const tail = lower.slice(tld.length);
      return LINK_HOSTS.some((host) => tail.startsWith(host));
    });

    if (glued) {
      return [...labels.slice(0, i), glued].join('.');
    }
  }

  return domain;
};

/**
 * Cleans an address the pattern matched out of a run-together contact line.
 * Returns `undefined` when what is left no longer looks like an address, so a
 * badly mangled line yields nothing rather than nonsense.
 */
const cleanEmail = (raw: string): string | undefined => {
  const at = raw.lastIndexOf('@');
  if (at < 1) return undefined;

  let local = raw.slice(0, at);
  const domain = trimDomain(raw.slice(at + 1));

  // part legitimately starts with "+", and none starts with seven digits.
  local = local.replace(/^\+\d*/, '').replace(/^\d{7,}(?=[A-Za-z_])/, '');

  if (!local || !domain) return undefined;
  if (!/^[A-Za-z0-9._%+-]+$/.test(local)) return undefined;
  if (!/^[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,}$/.test(domain)) {
    return undefined;
  }

  return `${local}@${domain}`.toLowerCase();
};

const extractEmail = (
  header: string[],
  allLines: string[]
): string | undefined => {
  const pattern = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi;

  // The header first: a CV can quote a referee's address further down.
  for (const source of [header, allLines]) {
    for (const line of source) {
      for (const match of line.match(pattern) || []) {
        const email = cleanEmail(match);
        if (email) return email;
      }
    }
  }

  return undefined;
};

/**
 * Phone numbers are the easiest thing on a CV to get wrong: "2015 - 2019" and
 * a long reference number both look like one. So a candidate must have a
 * plausible digit count, and must not read as a pair of years.
 */
const extractPhone = (
  header: string[],
  allLines: string[]
): string | undefined => {
  const labelled = labelledValue(
    header,
    /phone|telephone|mobile|mob|tel|cell|contact(?: number| no\.?)?/
  );

  const candidates: string[] = [];
  if (labelled) candidates.push(labelled);

  const pattern = /(?:\+\d{1,3}[\s.-]?)?(?:\(0\)\s?)?\d[\d\s().-]{7,17}\d/g;
  for (const source of [header, allLines]) {
    for (const line of source) {
      // A line that is plainly a date range is not a phone number.
      if (/\b(19|20)\d{2}\s*[-–to]+\s*((19|20)\d{2}|present|current)\b/i.test(line)) {
        continue;
      }
      candidates.push(...(line.match(pattern) || []));
    }
    if (candidates.length) break;
  }

  for (const candidate of candidates) {
    const cleaned = candidate.trim().replace(/[\s.()-]+$/, '');
    const digits = cleaned.replace(/\D/g, '');

    if (digits.length < 10 || digits.length > 15) continue;
    // Four digits, a separator, four digits is a year range, not a number.
    if (/^(19|20)\d{2}(19|20)\d{2}$/.test(digits)) continue;

    return cleaned.replace(/\s{2,}/g, ' ');
  }

  return undefined;
};

/** Does this line read as a person's name rather than a heading? */
const looksLikeName = (line: string): boolean => {
  if (line.length > 60) return false;
  if (/[@\d]/.test(line)) return false;
  if (/https?:|www\.|linkedin|github/i.test(line)) return false;

  const tokens = line.split(/\s+/).filter(Boolean);
  if (tokens.length < 2 || tokens.length > 5) return false;

  return tokens.every((token) => {
    const word = token.replace(/[.,]/g, '').toLowerCase();
    if (!word) return false;
    if (NAME_STOPWORDS.has(word)) return false;
    return /^[a-zà-öø-ÿ'’-]+$/i.test(word);
  });
};

interface ParsedName {
  title?: string;
  firstName?: string;

  initial?: string;
  lastName?: string;
  /** The line the name was read from, so the address parser can skip it. */
  sourceLine?: string;
}

/**
 * Post-nominals leave debris behind: "Sarah Bennett BSc (Hons)" becomes
 * "Sarah Bennett ( )" once the letters are gone, and the brackets then stop
 * the line reading as a name.
 */
const stripQualifications = (line: string) =>
  line
    .replace(POST_NOMINALS, '')
    .replace(/\(\s*\)/g, '')
    .replace(/[(),]+\s*$/, '')
    .replace(/\s{2,}/g, ' ')
    .trim();

/** Splits a name line into title, first name, middle initial and surname. */
const splitName = (raw: string): ParsedName => {
  let line = stripQualifications(raw).replace(/[|]+\s*$/, '').trim();

  if (!line) return {};

  const result: ParsedName = { sourceLine: raw };

  // A leading title is the only place a title is trusted from.
  const titleMatch = line.match(/^(mr|mrs|miss|ms|dr|prof|professor)\b\.?\s+/i);
  if (titleMatch) {
    result.title = TITLE_TOKENS[titleMatch[1].toLowerCase()];
    line = line.slice(titleMatch[0].length).trim();
  }

  // "SMITH, John" - the surname comes first when a CV uses this form.
  const invertedMatch = line.match(/^([^,]+),\s*(.+)$/);
  if (invertedMatch) {
    line = `${invertedMatch[2].trim()} ${invertedMatch[1].trim()}`;
  }

  const tokens = line
    .split(/\s+/)
    .map((token) => token.replace(/[.,]/g, ''))
    .filter(Boolean);

  if (!tokens.length) return result;

  // ALL CAPS names are common and must not reach the form shouting.
  const cased = tokens.map((token) =>
    token === token.toUpperCase() ? titleCase(token) : token
  );

  result.firstName = cased[0];

  if (cased.length === 1) return result;

  result.lastName = cased[cased.length - 1];

  if (cased.length > 2) {
    // Everything between the first and last name is the middle name, kept in
    // full and joined when there is more than one - "John Paul" stays
    // "John Paul" rather than collapsing to "J".
    result.initial = cased.slice(1, -1).join(' ');
  }

  return result;
};

const extractName = (header: string[]): ParsedName => {
  const labelled = labelledValue(header, /(?:full |first |candidate )?name/);
  if (labelled && looksLikeName(labelled)) return splitName(labelled);

  for (const line of header) {
    // Strip a leading title so "Mr John Smith" still passes looksLikeName.
    const withoutTitle = line.replace(
      /^(mr|mrs|miss|ms|dr|prof|professor)\b\.?\s+/i,
      ''
    );
    const stripped = stripQualifications(withoutTitle);

    // "SMITH, John" reads as a name once the comma is treated as a separator.
    const flattened = stripped.replace(/,\s*/g, ' ');

    if (looksLikeName(stripped) || looksLikeName(flattened)) {
      return splitName(line);
    }
  }

  return {};
};

/**
 * Only ever read from an explicit label. An unlabelled date on a CV is a
 * graduation year or a job start date far more often than a birthday.
 */
const extractDateOfBirth = (lines: string[]): Date | undefined => {
  const value = labelledValue(
    lines,
    /date of birth|d\.?o\.?b\.?|birth date|born/
  );

  if (!value) return undefined;

  const date = parseDate(value);
  if (!date) return undefined;

  // Sanity check: a job applicant is between 14 and 100 years old.
  const age = (Date.now() - date.getTime()) / (365.25 * 24 * 60 * 60 * 1000);
  return age >= 14 && age <= 100 ? date : undefined;
};

/** Handles the date formats a UK CV actually uses. */
const parseDate = (value: string): Date | undefined => {
  const text = value.trim();

  // 1990-03-12
  const iso = text.match(/\b(\d{4})-(\d{2})-(\d{2})\b/);
  if (iso) {
    return buildDate(Number(iso[3]), Number(iso[2]) - 1, Number(iso[1]));
  }

  // 12/03/1990 - day first, as written in the UK.
  const numeric = text.match(/\b(\d{1,2})[\/.-](\d{1,2})[\/.-](\d{2,4})\b/);
  if (numeric) {
    const year = Number(numeric[3]);
    return buildDate(
      Number(numeric[1]),
      Number(numeric[2]) - 1,
      year < 100 ? 1900 + year : year
    );
  }

  // 12 March 1990 / 12th March 1990
  const dayFirst = text.match(
    /\b(\d{1,2})(?:st|nd|rd|th)?\s+([A-Za-z]+)\.?,?\s+(\d{4})\b/
  );
  if (dayFirst) {
    const month = MONTHS[dayFirst[2].toLowerCase()];
    if (month !== undefined) {
      return buildDate(Number(dayFirst[1]), month, Number(dayFirst[3]));
    }
  }

  // March 12, 1990
  const monthFirst = text.match(
    /\b([A-Za-z]+)\.?\s+(\d{1,2})(?:st|nd|rd|th)?,?\s+(\d{4})\b/
  );
  if (monthFirst) {
    const month = MONTHS[monthFirst[1].toLowerCase()];
    if (month !== undefined) {
      return buildDate(Number(monthFirst[2]), month, Number(monthFirst[3]));
    }
  }

  return undefined;
};

/** Builds a date only if the parts really describe that day. */
const buildDate = (
  day: number,
  month: number,
  year: number
): Date | undefined => {
  if (month < 0 || month > 11 || day < 1 || day > 31) return undefined;

  const date = new Date(year, month, day);

  return date.getFullYear() === year &&
    date.getMonth() === month &&
    date.getDate() === day
    ? date
    : undefined;
};

interface ParsedAddress {
  line1?: string;
  line2?: string;
  city?: string;
  postCode?: string;
  country?: string;
}

/**
 * The address is found from the postcode outwards.
 *
 * A postcode is the one unambiguous marker in an address block, so rather than
 * guessing at street names the parser locates it and reads backwards: the part
 * before it is the city, and the part before that is the street. This handles
 * both a comma-joined single line and a block spread over several lines, which
 * is how the two common CV layouts come out of pdf-parse.
 */
const extractAddress = (
  header: string[],
  allLines: string[],
  nameLine?: string
): ParsedAddress => {
  const result: ParsedAddress = {};

  /**
   * The candidate's name sits directly above their address on most CVs, and
   * the lines above the postcode are exactly where this looks. Words already
   * claimed by the name are therefore not address words.
   */
  const nameWords = new Set(
    (nameLine || '')
      .toLowerCase()
      .split(/[^a-zà-öø-ÿ']+/)
      .filter(Boolean)
  );

  /**
   * The lines above the postcode are usually the rest of the address, but on a
   * short CV they can reach the document heading - "Curriculum Vitae" sitting
   * two lines above an address used to end up as address line 2. No street is
   * named after any of these words.
   */
  const isHeading = (part: string) =>
    part
      .toLowerCase()
      .split(/[^a-z]+/)
      .filter(Boolean)
      .some((word) => NAME_STOPWORDS.has(word));

  const isNameFragment = (part: string) => {
    if (!nameWords.size) return false;
    if (/\d/.test(part)) return false;

    const words = part
      .toLowerCase()
      .split(/[^a-zà-öø-ÿ']+/)
      .filter(Boolean);

    return words.length > 0 && words.every((word) => nameWords.has(word));
  };

  const labelled = labelledValue(header, /address|postal address|home address/);
  const searchSpace = labelled ? [labelled, ...header] : header;

  let postcodeLineIndex = searchSpace.findIndex((line) => POSTCODE.test(line));
  let lines = searchSpace;

  // Fall back to the whole document only if the header held no postcode.
  if (postcodeLineIndex === -1) {
    postcodeLineIndex = allLines.findIndex((line) => POSTCODE.test(line));
    lines = allLines;
  }

  if (postcodeLineIndex === -1) return result;

  const postcodeLine = lines[postcodeLineIndex];
  const postcodeMatch = postcodeLine.match(POSTCODE)!;

  result.postCode =
    `${postcodeMatch[1]} ${postcodeMatch[2]}`.toUpperCase();

  // Everything on the postcode's line that comes before it, plus the two
  // lines above it - enough for "street / city / postcode" laid out
  // vertically, and harmless when the address is all on one line.
  const beforePostcode = postcodeLine
    .slice(0, postcodeMatch.index)
    .replace(/[,\s-]+$/, '');

  const parts = [
    ...lines
      .slice(Math.max(0, postcodeLineIndex - 3), postcodeLineIndex)
      .flatMap((line) => line.split(',')),
    ...beforePostcode.split(',')
  ]
    .map((part) =>
      part
        .replace(/^\s*(?:address|postal address|home address)\s*[:\-]\s*/i, '')
        .trim()
    )
    .filter(
      (part) =>
        part.length > 1 &&
        // Contact details often sit in the same block as the address.
        !/@|https?:|linkedin|github/i.test(part) &&
        !/^(?:phone|telephone|mobile|tel|email|e-mail)\b/i.test(part) &&
        // A bare phone number is not an address line.
        !/^[+\d][\d\s().-]{7,}$/.test(part) &&
        // Nor is the candidate's own name, sitting just above it.
        !isNameFragment(part) &&
        !isHeading(part)
    );

  if (!parts.length) return result;

  // A trailing country belongs in its own field, not in the address lines.
  const lastPart = parts[parts.length - 1];
  const country = resolveCountry(lastPart);
  if (country && parts.length > 1) {
    result.country = country;
    parts.pop();
  }

  if (parts.length) {
    // The part nearest the postcode is the city.
    result.city = titleCase(parts.pop()!.replace(/[.,]+$/, ''));
  }

  if (parts.length) {
    // Prefer a part that names a street; otherwise take the last one left.
    const streetIndex = parts.map((p) => STREET_WORDS.test(p)).lastIndexOf(true);
    const index = streetIndex === -1 ? parts.length - 1 : streetIndex;

    result.line1 = titleCase(parts[index]);

    const remainder = parts.filter((_, i) => i !== index);
    if (remainder.length) {
      result.line2 = titleCase(remainder[remainder.length - 1]);
    }
  }

  return result;
};

const extractNiNumber = (lines: string[]): string | undefined => {
  for (const line of lines) {
    const match = line.match(NI_NUMBER);
    if (match) {
      return `${match[1]}${match[2]}${match[3]}${match[4]}${match[5]}`.toUpperCase();
    }
  }

  return undefined;
};

/**
 * Pulls the personal details out of a CV's raw text.
 *
 * Every field is optional: a CV that does not state something leaves it
 * `undefined` rather than receiving a guess.
 */
export function parseCv(raw: string | null | undefined): ParsedCv {
  if (!raw || !raw.trim()) return {};

  const text = normalize(raw);
  const allLines = nonEmptyLines(text);
  const header = allLines.slice(0, HEADER_LINES);

  const result: ParsedCv = {};

  const name = extractName(header);
  if (name.title) result.title = name.title;
  if (name.firstName) result.firstName = name.firstName;
  if (name.initial) result.initial = name.initial;
  if (name.lastName) result.lastName = name.lastName;

  // An explicit "Title: Dr" line beats one inferred from the name line.
  const labelledTitle = labelledValue(header, /title|salutation/);
  if (labelledTitle) {
    const token = TITLE_TOKENS[labelledTitle.trim().replace(/\./g, '').toLowerCase()];
    if (token) result.title = token;
  }

  const email = extractEmail(header, allLines);
  if (email) result.email = email;

  const phone = extractPhone(header, allLines);
  if (phone) result.phone = phone;

  const dateOfBirth = extractDateOfBirth(allLines);
  if (dateOfBirth) result.dateOfBirth = dateOfBirth;

  const nationality = resolveNationality(
    labelledValue(allLines, /nationality|citizenship/)
  );
  if (nationality) result.nationality = nationality;

  const niNumber = extractNiNumber(allLines);
  if (niNumber) result.nationalInsuranceNumber = niNumber;

  const address = extractAddress(header, allLines, name.sourceLine);
  if (address.line1) result.postalAddressLine1 = address.line1;
  if (address.line2) result.postalAddressLine2 = address.line2;
  if (address.city) result.postalCity = address.city;
  if (address.postCode) result.postalPostCode = address.postCode;

  const country =
    address.country ||
    resolveCountry(labelledValue(allLines, /country(?: of residence)?/)) ||
    // A UK postcode places the address in the UK even when nothing says so.
    (address.postCode ? 'united-kingdom' : undefined);

  if (country) {
    result.postalCountry = country;
    result.countryOfResidence = country;
  }

  return result;
}
