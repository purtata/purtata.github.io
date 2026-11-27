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
export const LAST_UPDATED = '2026-11-25';

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
  /** Caption lines under the badge: the first is the product, the rest are release names. */
  name: string;
  releases?: string[];
}

export interface CertGroup {
  title: string;
  /** Lowest-value group, shown with a quieter heading. */
  minor?: boolean;
  badges: Badge[];
}

export const CERT_GROUPS: CertGroup[] = [
  {
    title: 'Associate',
    badges: [
      { img: 'gw-associate-is-developer.png', alt: 'Guidewire Certified Associate: InsuranceSuite Developer badge',
        name: 'InsuranceSuite Developer', releases: ['Qusar · Palisades', 'Olos · Niseko'] },
    ],
  },
  {
    title: 'Specialist · Configuration',
    badges: [
      { img: 'gw-specialist-pc-config.png', alt: 'Guidewire Certified Specialist: PolicyCenter Configuration badge',
        name: 'PolicyCenter', releases: ['Olos · Niseko · Mammoth'] },
      { img: 'gw-specialist-cc-config.png', alt: 'Guidewire Certified Specialist: ClaimCenter Configuration badge',
        name: 'ClaimCenter', releases: ['Olos · Niseko · Mammoth'] },
      { img: 'gw-specialist-bc-config.png', alt: 'Guidewire Certified Specialist: BillingCenter Configuration badge',
        name: 'BillingCenter', releases: ['Olos · Niseko · Mammoth'] },
    ],
  },
  {
    title: 'Self-Managed Specialist · Configuration',
    minor: true,
    badges: [
      { img: 'gw-self-managed-pc.png', alt: 'Guidewire Certified Self-Managed Specialist: PolicyCenter Configuration badge', name: 'PolicyCenter' },
      { img: 'gw-self-managed-cc.png', alt: 'Guidewire Certified Self-Managed Specialist: ClaimCenter Configuration badge', name: 'ClaimCenter' },
      { img: 'gw-self-managed-bc.png', alt: 'Guidewire Certified Self-Managed Specialist: BillingCenter Configuration badge', name: 'BillingCenter' },
    ],
  },
  {
    title: 'Specialist · Integration',
    badges: [
      { img: 'gw-specialist-is-integration.png', alt: 'Guidewire Certified Specialist: InsuranceSuite Integration badge',
        name: 'InsuranceSuite', releases: ['Las Leñas'] },
    ],
  },
];

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
