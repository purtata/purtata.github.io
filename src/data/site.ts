// Facts that are the same in every language: name, links, certifications.
// Translated text lives in en.ts and de.ts.

import type { Content, Lang } from './types';

export const SITE_URL = 'https://krzysztofpiotrowski.com';
export const NAME = 'Krzysztof Piotrowski';
export const JOB_TITLE = 'Lead / Senior Guidewire Engineer';
export const LINKEDIN_URL = 'https://www.linkedin.com/in/krzysztof-piotrowski-22235b139';
export const LINKEDIN_PRINT = 'linkedin.com/in/krzysztof-piotrowski-22235b139';
export const CERT_CHECKER_URL = 'https://education.guidewire.com/lmt/lmtlogin.prHome?site=guidewire#certification-checker';
export const OG_IMAGE = '/assets/og-image.png';

/** Last content change. Goes into sitemap.xml as <lastmod>: bump it when the CV text changes. */
export const LAST_UPDATED = '2026-11-28';

/** Every language version of the page. The first one is the default (x-default in hreflang). */
export const LANGUAGES: { lang: Lang; path: string; label: string; ogLocale: string }[] = [
  { lang: 'en', path: '/', label: 'EN', ogLocale: 'en_GB' },
  { lang: 'de', path: '/de/', label: 'DE', ogLocale: 'de_DE' },
];

export const pathOf = (lang: Lang) => LANGUAGES.find((l) => l.lang === lang)!.path;

export const absolute = (path: string) => SITE_URL + path;

// ---------- Guidewire certifications ----------
// Badge rules (Guidewire brand guide): shown at 94 × 106 px, never smaller, never modified,
// captions below the mark. Files are 2× (188 × 212) for sharp screens.

export interface Badge {
  img: string;
  alt: string;
  /** Caption under the badge: the product, then the release names in smaller text. */
  name: string;
  releases?: string;
}

export interface CertGroup {
  title: string;
  badges: Badge[];
}

// Order = the order of the cards: the two single badges share a row, then the two rows of three.
export const CERT_GROUPS: CertGroup[] = [
  {
    title: 'Associate',
    badges: [
      { img: 'gw-associate-is-developer.png', alt: 'Guidewire Certified Associate: InsuranceSuite Developer badge',
        name: 'InsuranceSuite Developer', releases: 'Qusar · Palisades · Olos · Niseko' },
    ],
  },
  {
    title: 'Specialist · Integration',
    badges: [
      { img: 'gw-specialist-is-integration.png', alt: 'Guidewire Certified Specialist: InsuranceSuite Integration badge',
        name: 'InsuranceSuite', releases: 'Las Leñas' },
    ],
  },
  {
    title: 'Specialist · Configuration',
    badges: [
      { img: 'gw-specialist-pc-config.png', alt: 'Guidewire Certified Specialist: PolicyCenter Configuration badge',
        name: 'PolicyCenter', releases: 'Olos · Niseko · Mammoth' },
      { img: 'gw-specialist-cc-config.png', alt: 'Guidewire Certified Specialist: ClaimCenter Configuration badge',
        name: 'ClaimCenter', releases: 'Olos · Niseko · Mammoth' },
      { img: 'gw-specialist-bc-config.png', alt: 'Guidewire Certified Specialist: BillingCenter Configuration badge',
        name: 'BillingCenter', releases: 'Olos · Niseko · Mammoth' },
    ],
  },
  {
    title: 'Self-Managed Specialist · Configuration',
    badges: [
      { img: 'gw-self-managed-pc.png', alt: 'Guidewire Certified Self-Managed Specialist: PolicyCenter Configuration badge', name: 'PolicyCenter' },
      { img: 'gw-self-managed-cc.png', alt: 'Guidewire Certified Self-Managed Specialist: ClaimCenter Configuration badge', name: 'ClaimCenter' },
      { img: 'gw-self-managed-bc.png', alt: 'Guidewire Certified Self-Managed Specialist: BillingCenter Configuration badge', name: 'BillingCenter' },
    ],
  },
];

// ---------- Key facts (the numbers in the hero) ----------

/** First Guidewire job (Capgemini, AXA Germany). */
const GUIDEWIRE_SINCE = { year: 2017, month: 11 };

/** Full years since a month, on the day the site is built (so the number grows with the next deploy). */
function fullYearsSince({ year, month }: { year: number; month: number }, today = new Date()) {
  const months = (today.getFullYear() - year) * 12 + (today.getMonth() + 1 - month);
  return Math.floor(months / 12);
}

export const FACTS = {
  guidewireYears: fullYearsSince(GUIDEWIRE_SINCE),
  certifications: CERT_GROUPS.reduce((n, g) => n + g.badges.length, 0),
  markets: 3,         // Germany, Switzerland, Poland
  businessYears: 8,   // 2009 – 2017, own bank and insurance businesses
};

// ---------- Structured data (JSON-LD) ----------
// Tells search engines "this page is about a person". Same facts in every language;
// only the page URL and inLanguage change.

const CREDENTIALS = [
  'Guidewire Certified Associate: InsuranceSuite Developer (Qusar)',
  'Guidewire Certified Specialist: PolicyCenter Configuration',
  'Guidewire Certified Specialist: ClaimCenter Configuration',
  'Guidewire Certified Specialist: BillingCenter Configuration',
  'Guidewire Certified Specialist: InsuranceSuite Integration',
];

export function jsonLd(content: Content) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    url: absolute(pathOf(content.lang)),
    inLanguage: content.lang,
    mainEntity: {
      '@type': 'Person',
      name: NAME,
      jobTitle: JOB_TITLE,
      url: absolute('/'),
      image: absolute(OG_IMAGE),
      sameAs: [LINKEDIN_URL],
      worksFor: { '@type': 'Organization', name: 'Baloise Solution Hub' },
      address: { '@type': 'PostalAddress', addressLocality: 'Rawicz', addressCountry: 'PL' },
      alumniOf: { '@type': 'CollegeOrUniversity', name: 'Wrocław University of Science and Technology' },
      knowsLanguage: ['pl', 'en', 'de'],
      knowsAbout: ['Guidewire PolicyCenter', 'Guidewire ClaimCenter', 'Guidewire BillingCenter', 'Gosu', 'Java',
        'Insurance software', 'AI-assisted software engineering', 'Claude Code'],
      hasCredential: CREDENTIALS.map((name) => ({
        '@type': 'EducationalOccupationalCredential',
        name,
        credentialCategory: 'certification',
        recognizedBy: { '@type': 'Organization', name: 'Guidewire Software' },
      })),
    },
  };
}
