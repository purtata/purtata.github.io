// The shape of one language file (en.ts, de.ts).
// TypeScript checks both files against this, so a missing or misspelt field in the
// German text is a build error instead of a silently empty spot on the page.

export type Lang = 'en' | 'de';

/** A list item. `lead` is printed in bold before `text` (include the space or comma in `text`). */
export interface Bullet {
  lead?: string;
  text: string;
}

/** A date shown to people (`label`) plus the machine-readable form for <time datetime> (`date`, e.g. "2025-07"). */
export interface DateLabel {
  date: string;
  label: string;
}

export interface Job {
  title: string;
  /** Start date. Leave out to print only `place` (for date ranges without <time>). */
  from?: DateLabel;
  /** End date, or a word like "present" for the current job. */
  to?: DateLabel | string;
  /** Everything after the dates: "Warsaw · Remote". */
  place: string;
  /** Promotion steps, e.g. "Junior 2017–2018 · Engineer 2019". */
  steps?: string;
  /** Client and product line. */
  project?: string;
  bullets: Bullet[];
}

/** A term and its description, for <dl> lists (skills, languages, education). */
export interface Entry {
  term: string;
  detail: string;
}

export interface Content {
  lang: Lang;

  meta: {
    title: string;
    description: string;
    ogDescription: string;
    ogImageAlt: string;
  };

  langNavLabel: string;
  portrait: { alt: string; caption: string; note: string };
  role: string;
  location: string;
  pitch: string;
  printLabel: string;

  headings: {
    profile: string;
    experience: string;
    certifications: string;
    skills: string;
    languages: string;
    education: string;
    interests: string;
  };

  profile: string[];
  jobs: Job[];
  /** The text around the Certification Checker link. */
  certNote: { before: string; link: string; after: string };
  skills: Entry[];
  languages: Entry[];
  education: Entry[];
  interests: string;
  footer: { copyright: string; trademark: string };
}
