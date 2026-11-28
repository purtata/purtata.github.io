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
  role: string;
  /** Employer, shown under the role. */
  org: string;
  from: DateLabel;
  /** End date, or a word like "present" for the current job. */
  to: DateLabel | string;
  /** Everything after the dates in the open job: "Warsaw · Remote". Leave out for no date line. */
  place?: string;
  /** One line under the title, visible while the job is folded. */
  summary?: string;
  tags?: string[];
  /** Older roles: a slightly smaller title. */
  earlier?: boolean;
  bullets: Bullet[];
}

/** A term and its description, for <dl> lists (skills, education). */
export interface Entry {
  term: string;
  detail: string;
}

/** A spoken language. `level` fills the meter: 6 of 6 = native. */
export interface Language extends Entry {
  level: 1 | 2 | 3 | 4 | 5 | 6;
}

/** One page section: the small numbered label, the heading, and the link text in the menu. */
export interface Section {
  label: string;
  heading: string;
  menu: string;
}

export type SectionId = 'profile' | 'experience' | 'certifications' | 'skills' | 'more';

export interface Content {
  lang: Lang;

  meta: {
    title: string;
    description: string;
    ogDescription: string;
    ogImageAlt: string;
  };

  /** Small labels and names for screen readers. */
  ui: {
    langNav: string;
    sectionsNav: string;
    menu: string;
    facts: string;
    expandAll: string;
    collapseAll: string;
    /** End of the current job in the timeline column: "2025 – now". */
    now: string;
    print: string;
    /** The light/dark switch. A fixed name; whether dark mode is on is told by aria-pressed. */
    darkMode: string;
  };

  portrait: { alt: string; caption: string; note: string };
  role: string;
  location: string;
  pitch: string;

  /** The labels under the numbers in the hero. The numbers come from site.ts. */
  facts: {
    guidewireYears: string;
    certifications: string;
    markets: string;
    businessYears: string;
  };

  sections: Record<SectionId, Section>;
  /** Headings of the three columns in the last section. */
  more: { languages: string; education: string; interests: string };

  profile: string[];
  jobs: Job[];
  /** Under the badges: the note, the Certification Checker button and how to search there. */
  certNote: { text: string; button: string; hint: string };
  skills: Entry[];
  languages: Language[];
  education: Entry[];
  interests: string;
  footer: { copyright: string; trademark: string };
}
