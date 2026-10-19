// Phone numbers are stored as one string with the country code first:
// "+880 1712345678", "+44 7123456789". The code is always required.

import { z } from 'zod';

export interface DialCode {
  iso: string;
  name: string;
  code: string; // "+880"
}

export const DIAL_CODES: DialCode[] = [
  { iso: 'GB', name: 'United Kingdom', code: '+44' },
  { iso: 'BD', name: 'Bangladesh', code: '+880' },
  { iso: 'IN', name: 'India', code: '+91' },
  { iso: 'PK', name: 'Pakistan', code: '+92' },
  { iso: 'IE', name: 'Ireland', code: '+353' },
  { iso: 'US', name: 'United States', code: '+1' },
  { iso: 'AF', name: 'Afghanistan', code: '+93' },
  { iso: 'AL', name: 'Albania', code: '+355' },
  { iso: 'DZ', name: 'Algeria', code: '+213' },
  { iso: 'AD', name: 'Andorra', code: '+376' },
  { iso: 'AO', name: 'Angola', code: '+244' },
  { iso: 'AR', name: 'Argentina', code: '+54' },
  { iso: 'AM', name: 'Armenia', code: '+374' },
  { iso: 'AU', name: 'Australia', code: '+61' },
  { iso: 'AT', name: 'Austria', code: '+43' },
  { iso: 'AZ', name: 'Azerbaijan', code: '+994' },
  { iso: 'BH', name: 'Bahrain', code: '+973' },
  { iso: 'BY', name: 'Belarus', code: '+375' },
  { iso: 'BE', name: 'Belgium', code: '+32' },
  { iso: 'BZ', name: 'Belize', code: '+501' },
  { iso: 'BJ', name: 'Benin', code: '+229' },
  { iso: 'BT', name: 'Bhutan', code: '+975' },
  { iso: 'BO', name: 'Bolivia', code: '+591' },
  { iso: 'BA', name: 'Bosnia and Herzegovina', code: '+387' },
  { iso: 'BW', name: 'Botswana', code: '+267' },
  { iso: 'BR', name: 'Brazil', code: '+55' },
  { iso: 'BN', name: 'Brunei', code: '+673' },
  { iso: 'BG', name: 'Bulgaria', code: '+359' },
  { iso: 'BF', name: 'Burkina Faso', code: '+226' },
  { iso: 'BI', name: 'Burundi', code: '+257' },
  { iso: 'KH', name: 'Cambodia', code: '+855' },
  { iso: 'CM', name: 'Cameroon', code: '+237' },
  { iso: 'CA', name: 'Canada', code: '+1' },
  { iso: 'CV', name: 'Cape Verde', code: '+238' },
  { iso: 'CF', name: 'Central African Republic', code: '+236' },
  { iso: 'TD', name: 'Chad', code: '+235' },
  { iso: 'CL', name: 'Chile', code: '+56' },
  { iso: 'CN', name: 'China', code: '+86' },
  { iso: 'CO', name: 'Colombia', code: '+57' },
  { iso: 'KM', name: 'Comoros', code: '+269' },
  { iso: 'CG', name: 'Congo', code: '+242' },
  { iso: 'CD', name: 'Congo (DRC)', code: '+243' },
  { iso: 'CR', name: 'Costa Rica', code: '+506' },
  { iso: 'CI', name: "Côte d'Ivoire", code: '+225' },
  { iso: 'HR', name: 'Croatia', code: '+385' },
  { iso: 'CU', name: 'Cuba', code: '+53' },
  { iso: 'CY', name: 'Cyprus', code: '+357' },
  { iso: 'CZ', name: 'Czech Republic', code: '+420' },
  { iso: 'DK', name: 'Denmark', code: '+45' },
  { iso: 'DJ', name: 'Djibouti', code: '+253' },
  { iso: 'DO', name: 'Dominican Republic', code: '+1' },
  { iso: 'EC', name: 'Ecuador', code: '+593' },
  { iso: 'EG', name: 'Egypt', code: '+20' },
  { iso: 'SV', name: 'El Salvador', code: '+503' },
  { iso: 'GQ', name: 'Equatorial Guinea', code: '+240' },
  { iso: 'ER', name: 'Eritrea', code: '+291' },
  { iso: 'EE', name: 'Estonia', code: '+372' },
  { iso: 'SZ', name: 'Eswatini', code: '+268' },
  { iso: 'ET', name: 'Ethiopia', code: '+251' },
  { iso: 'FJ', name: 'Fiji', code: '+679' },
  { iso: 'FI', name: 'Finland', code: '+358' },
  { iso: 'FR', name: 'France', code: '+33' },
  { iso: 'GA', name: 'Gabon', code: '+241' },
  { iso: 'GM', name: 'Gambia', code: '+220' },
  { iso: 'GE', name: 'Georgia', code: '+995' },
  { iso: 'DE', name: 'Germany', code: '+49' },
  { iso: 'GH', name: 'Ghana', code: '+233' },
  { iso: 'GI', name: 'Gibraltar', code: '+350' },
  { iso: 'GR', name: 'Greece', code: '+30' },
  { iso: 'GT', name: 'Guatemala', code: '+502' },
  { iso: 'GN', name: 'Guinea', code: '+224' },
  { iso: 'GW', name: 'Guinea-Bissau', code: '+245' },
  { iso: 'GY', name: 'Guyana', code: '+592' },
  { iso: 'HT', name: 'Haiti', code: '+509' },
  { iso: 'HN', name: 'Honduras', code: '+504' },
  { iso: 'HK', name: 'Hong Kong', code: '+852' },
  { iso: 'HU', name: 'Hungary', code: '+36' },
  { iso: 'IS', name: 'Iceland', code: '+354' },
  { iso: 'ID', name: 'Indonesia', code: '+62' },
  { iso: 'IR', name: 'Iran', code: '+98' },
  { iso: 'IQ', name: 'Iraq', code: '+964' },
  { iso: 'IL', name: 'Israel', code: '+972' },
  { iso: 'IT', name: 'Italy', code: '+39' },
  { iso: 'JM', name: 'Jamaica', code: '+1' },
  { iso: 'JP', name: 'Japan', code: '+81' },
  { iso: 'JO', name: 'Jordan', code: '+962' },
  { iso: 'KZ', name: 'Kazakhstan', code: '+7' },
  { iso: 'KE', name: 'Kenya', code: '+254' },
  { iso: 'XK', name: 'Kosovo', code: '+383' },
  { iso: 'KW', name: 'Kuwait', code: '+965' },
  { iso: 'KG', name: 'Kyrgyzstan', code: '+996' },
  { iso: 'LA', name: 'Laos', code: '+856' },
  { iso: 'LV', name: 'Latvia', code: '+371' },
  { iso: 'LB', name: 'Lebanon', code: '+961' },
  { iso: 'LS', name: 'Lesotho', code: '+266' },
  { iso: 'LR', name: 'Liberia', code: '+231' },
  { iso: 'LY', name: 'Libya', code: '+218' },
  { iso: 'LI', name: 'Liechtenstein', code: '+423' },
  { iso: 'LT', name: 'Lithuania', code: '+370' },
  { iso: 'LU', name: 'Luxembourg', code: '+352' },
  { iso: 'MO', name: 'Macau', code: '+853' },
  { iso: 'MG', name: 'Madagascar', code: '+261' },
  { iso: 'MW', name: 'Malawi', code: '+265' },
  { iso: 'MY', name: 'Malaysia', code: '+60' },
  { iso: 'MV', name: 'Maldives', code: '+960' },
  { iso: 'ML', name: 'Mali', code: '+223' },
  { iso: 'MT', name: 'Malta', code: '+356' },
  { iso: 'MR', name: 'Mauritania', code: '+222' },
  { iso: 'MU', name: 'Mauritius', code: '+230' },
  { iso: 'MX', name: 'Mexico', code: '+52' },
  { iso: 'MD', name: 'Moldova', code: '+373' },
  { iso: 'MC', name: 'Monaco', code: '+377' },
  { iso: 'MN', name: 'Mongolia', code: '+976' },
  { iso: 'ME', name: 'Montenegro', code: '+382' },
  { iso: 'MA', name: 'Morocco', code: '+212' },
  { iso: 'MZ', name: 'Mozambique', code: '+258' },
  { iso: 'MM', name: 'Myanmar', code: '+95' },
  { iso: 'NA', name: 'Namibia', code: '+264' },
  { iso: 'NP', name: 'Nepal', code: '+977' },
  { iso: 'NL', name: 'Netherlands', code: '+31' },
  { iso: 'NZ', name: 'New Zealand', code: '+64' },
  { iso: 'NI', name: 'Nicaragua', code: '+505' },
  { iso: 'NE', name: 'Niger', code: '+227' },
  { iso: 'NG', name: 'Nigeria', code: '+234' },
  { iso: 'KP', name: 'North Korea', code: '+850' },
  { iso: 'MK', name: 'North Macedonia', code: '+389' },
  { iso: 'NO', name: 'Norway', code: '+47' },
  { iso: 'OM', name: 'Oman', code: '+968' },
  { iso: 'PS', name: 'Palestine', code: '+970' },
  { iso: 'PA', name: 'Panama', code: '+507' },
  { iso: 'PG', name: 'Papua New Guinea', code: '+675' },
  { iso: 'PY', name: 'Paraguay', code: '+595' },
  { iso: 'PE', name: 'Peru', code: '+51' },
  { iso: 'PH', name: 'Philippines', code: '+63' },
  { iso: 'PL', name: 'Poland', code: '+48' },
  { iso: 'PT', name: 'Portugal', code: '+351' },
  { iso: 'QA', name: 'Qatar', code: '+974' },
  { iso: 'RO', name: 'Romania', code: '+40' },
  { iso: 'RU', name: 'Russia', code: '+7' },
  { iso: 'RW', name: 'Rwanda', code: '+250' },
  { iso: 'SA', name: 'Saudi Arabia', code: '+966' },
  { iso: 'SN', name: 'Senegal', code: '+221' },
  { iso: 'RS', name: 'Serbia', code: '+381' },
  { iso: 'SC', name: 'Seychelles', code: '+248' },
  { iso: 'SL', name: 'Sierra Leone', code: '+232' },
  { iso: 'SG', name: 'Singapore', code: '+65' },
  { iso: 'SK', name: 'Slovakia', code: '+421' },
  { iso: 'SI', name: 'Slovenia', code: '+386' },
  { iso: 'SO', name: 'Somalia', code: '+252' },
  { iso: 'ZA', name: 'South Africa', code: '+27' },
  { iso: 'KR', name: 'South Korea', code: '+82' },
  { iso: 'SS', name: 'South Sudan', code: '+211' },
  { iso: 'ES', name: 'Spain', code: '+34' },
  { iso: 'LK', name: 'Sri Lanka', code: '+94' },
  { iso: 'SD', name: 'Sudan', code: '+249' },
  { iso: 'SR', name: 'Suriname', code: '+597' },
  { iso: 'SE', name: 'Sweden', code: '+46' },
  { iso: 'CH', name: 'Switzerland', code: '+41' },
  { iso: 'SY', name: 'Syria', code: '+963' },
  { iso: 'TW', name: 'Taiwan', code: '+886' },
  { iso: 'TJ', name: 'Tajikistan', code: '+992' },
  { iso: 'TZ', name: 'Tanzania', code: '+255' },
  { iso: 'TH', name: 'Thailand', code: '+66' },
  { iso: 'TL', name: 'Timor-Leste', code: '+670' },
  { iso: 'TG', name: 'Togo', code: '+228' },
  { iso: 'TT', name: 'Trinidad and Tobago', code: '+1' },
  { iso: 'TN', name: 'Tunisia', code: '+216' },
  { iso: 'TR', name: 'Turkey', code: '+90' },
  { iso: 'TM', name: 'Turkmenistan', code: '+993' },
  { iso: 'UG', name: 'Uganda', code: '+256' },
  { iso: 'UA', name: 'Ukraine', code: '+380' },
  { iso: 'AE', name: 'United Arab Emirates', code: '+971' },
  { iso: 'UY', name: 'Uruguay', code: '+598' },
  { iso: 'UZ', name: 'Uzbekistan', code: '+998' },
  { iso: 'VE', name: 'Venezuela', code: '+58' },
  { iso: 'VN', name: 'Vietnam', code: '+84' },
  { iso: 'YE', name: 'Yemen', code: '+967' },
  { iso: 'ZM', name: 'Zambia', code: '+260' },
  { iso: 'ZW', name: 'Zimbabwe', code: '+263' }
];

// Longest codes first, so "+880" is found before "+88" could ever match.
const CODES_BY_LENGTH = Array.from(new Set(DIAL_CODES.map((d) => d.code))).sort(
  (a, b) => b.length - a.length
);

/** "+880 1712-345678" -> { code: "+880", number: "1712345678" }. */
export const splitPhone = (value?: string | null) => {
  const raw = String(value || '').trim();
  // Saved values carry the code before the first space.
  const spaced = /^(\+\d{1,4})\s+(.*)$/.exec(raw);
  if (spaced) return { code: spaced[1], number: spaced[2].replace(/\D/g, '') };
  if (raw.startsWith('+')) {
    const compact = '+' + raw.slice(1).replace(/\D/g, '');
    const code = CODES_BY_LENGTH.find((c) => compact.startsWith(c));
    if (code) return { code, number: compact.slice(code.length) };
  }
  // No recognisable code - the number is kept and the code left to choose.
  return { code: '', number: raw.replace(/\D/g, '') };
};

/** { "+880", "1712345678" } -> "+880 1712345678"; empty when both are. */
export const joinPhone = (code: string, number: string) => {
  const digits = number.replace(/\D/g, '');
  if (!code && !digits) return '';
  return `${code} ${digits}`.trim();
};

const PHONE_PATTERN = /^\+\d{1,4} \d{4,14}$/;

/**
 * Whether a value is a full number with its country code. Older values saved
 * without the space ("+8801712345678") count too.
 */
export const isValidPhone = (value?: string | null) => {
  const { code, number } = splitPhone(value);
  return PHONE_PATTERN.test(joinPhone(code, number));
};

/** The message to show for a phone value, or undefined when it is fine. */
export const phoneError = (value?: string | null, required = true) => {
  const { code, number } = splitPhone(value);
  if (!code && !number) return required ? 'Phone number is required' : undefined;
  if (!code) return 'Select a country code';
  if (!number) return 'Enter the phone number';
  if (!isValidPhone(value)) return 'Enter a valid phone number';
  return undefined;
};

/** A required phone number with its country code, e.g. "+880 1712345678". */
export const phoneSchema = (label = 'Phone number') =>
  z
    .string()
    .trim()
    .min(1, `${label} is required`)
    .refine((v) => splitPhone(v).code !== '', 'Select a country code')
    .refine(isValidPhone, 'Enter a valid phone number with country code');
