/**
 * Splits an email body into the pieces a letter is drawn from.
 *
 * A template body is plain text with placeholders; once the API sends it, the
 * body saved on the email log has every placeholder filled in and signatures
 * turned into `<img>` tags (and the offer link into an `<a>`). This reads
 * both, so the template preview, the email log and the PDF all draw the
 * same letter - without handing the saved body to innerHTML.
 */

export type BodySegment =
  | { type: 'text'; value: string }
  | { type: 'image'; src: string }
  | { type: 'link'; href: string; text: string };

/** signatureId -> image URL, from the Signature settings page */
export type SignatureMap = Record<string, string>;

// [signature id="1"], [signature id='1'], [signature id=1]
const SIGNATURE_KEY = /^signature\s+id\s*=\s*["']?(\d+)["']?$/i;
const IMAGE_FILE = /\.(png|jpg|jpeg|gif|webp)$/i;

// <img ... src="x" ...>  |  <a ... href="x" ...>text</a>  |  [key]  |  {{key}}
const TOKEN =
  /<img\b[^>]*?\bsrc=["']([^"']+)["'][^>]*>|<a\b[^>]*?\bhref=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>|\[([^\]\n]+)\]|\{\{\s*([^}\s]+)\s*\}\}/gi;

interface ParseOptions {
  /** Values for placeholders still in the body - template previews only. */
  variables?: Record<string, string>;
  signatures?: SignatureMap;
}

/** One array of segments per line of the body. */
export const parseEmailBody = (
  body: string,
  { variables, signatures = {} }: ParseOptions = {}
): BodySegment[][] =>
  (body || '')
    .replace(/<br\s*\/?>/gi, '\n')
    .split('\n')
    .map((line) => {
      const segments: BodySegment[] = [];
      let text = '';
      let lastIndex = 0;

      const flush = () => {
        if (text) segments.push({ type: 'text', value: text });
        text = '';
      };

      for (const match of Array.from(line.matchAll(TOKEN))) {
        const [raw, imgSrc, href, linkText, bracketKey, braceKey] = match;
        text += line.slice(lastIndex, match.index);
        lastIndex = match.index! + raw.length;

        if (imgSrc) {
          flush();
          segments.push({ type: 'image', src: imgSrc });
          continue;
        }

        if (href) {
          flush();
          segments.push({
            type: 'link',
            href,
            text: linkText.replace(/<[^>]+>/g, '') || href
          });
          continue;
        }

        const key = (bracketKey ?? braceKey).trim();
        const signatureId = key.match(SIGNATURE_KEY)?.[1];

        // A sent body has no placeholders left, so square brackets in it are
        // the letter's own text - keep them unless we were asked to fill them.
        if (!variables && !signatureId) {
          text += raw;
          continue;
        }

        const value = signatureId ? signatures[signatureId] : variables?.[key];
        if (!value) continue;

        if (signatureId || IMAGE_FILE.test(value)) {
          flush();
          segments.push({ type: 'image', src: value });
        } else {
          text += value;
        }
      }

      text += line.slice(lastIndex);
      flush();
      return segments;
    });
