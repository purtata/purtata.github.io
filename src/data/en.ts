// English text of the CV. Source of truth: content.md (local). Change de.ts too when this changes.
import type { Content } from './types';

export const en: Content = {
  lang: 'en',

  meta: {
    title: 'Krzysztof Piotrowski · Lead / Senior Guidewire Engineer',
    description: 'Lead / Senior Guidewire Engineer (PolicyCenter, ClaimCenter, BillingCenter) building insurance systems since 2017. AI-assisted engineering with Claude Code.',
    ogDescription: 'PolicyCenter, ClaimCenter and BillingCenter since 2017. AI-assisted engineering with Claude Code.',
    ogImageAlt: 'Krzysztof Piotrowski, Lead / Senior Guidewire Engineer',
  },

  langNavLabel: 'Language',
  portrait: {
    alt: 'AI-generated portrait of Krzysztof Piotrowski in sepia tones, a digital grid across his face and glowing eyes behind his glasses',
    caption: 'How Claude sees me after a long session.',
    note: 'AI-generated portrait',
  },
  role: 'Lead / Senior Guidewire Engineer',
  location: 'Rawicz, Poland · Remote',
  pitch: "Building insurance systems on Guidewire since 2017, for insurers in Germany, Switzerland and Poland. I lead my team's move to AI-assisted engineering with Claude Code.",
  printLabel: 'Save as PDF',

  headings: {
    profile: 'Profile',
    experience: 'Experience',
    certifications: 'Certifications',
    skills: 'Skills',
    languages: 'Languages',
    education: 'Education',
    interests: 'Interests',
  },

  profile: [
    "Senior Guidewire Developer building insurance systems since 2017. I work on PolicyCenter, ClaimCenter and BillingCenter, across configuration and integration, for insurers in Germany, Switzerland and Poland. I'm a certified Guidewire Associate InsuranceSuite Developer and a Configuration Specialist for PolicyCenter, ClaimCenter and BillingCenter.",
    'In my current team I lead AI-assisted engineering. I use Claude Code for agentic development, build the harness and tooling that make it reliable on a large Guidewire codebase, and use it to deliver features and measurable performance gains.',
    'Before software, I spent over eight years running bank branches and insurance agencies, so I know the business side of the systems I build.',
  ],

  jobs: [
    {
      title: 'Senior Guidewire Developer · Baloise Solution Hub',
      from: { date: '2025-07', label: 'July 2025' },
      to: 'present',
      place: 'Warsaw · Bad Homburg (Germany) · Remote',
      project: 'HelvetiaBaloise Germany, PolicyCenter Policy Management · mixed German client team (consultancy and in-house developers)',
      bullets: [
        { lead: 'AI team lead:', text: ' I introduced and promote agentic, AI-assisted development in a team of 20 (8 developers) and onboarded developers and BAs across teams to Claude Code (setup, shared artifacts, lessons learned).' },
        { lead: 'Built a local "software factory" on Claude Code:', text: ' an autonomous pipeline that takes a Jira ticket from intake to a reviewed handover, with specialised agents for scoping, analysis, planning, execution, verification and an independent "skeptic" review. Works across PolicyCenter, BillingCenter and ClaimCenter.' },
        { lead: 'Built a set of AI skills:', text: ' Guidewire code review against acceptance criteria, Guidewire-specific domain knowledge skills, profiler-export analysis, log investigation with a non-production guardrail, and converting BA story cards and BPMN diagrams to text.' },
        { lead: 'Profiling-driven performance work:', text: ' eliminated most of the SQL in a key renewal process, cut a heavy screen to a fraction of its queries, made a hot lookup several times faster with a cluster cache, replaced N+1 loads with batch loads, and reworked cross-system calls to fix timeouts on large accounts.' },
        { lead: 'Business analysis:', text: ' shape user stories with BAs before development; investigate production incidents on production data (SQL, Splunk) and turn the root causes into story and solution changes, with plain-language summaries in English and German for BAs and testers.' },
        { text: 'Built PolicyCenter processes for new products: residential building, household and commercial insurance.' },
        { text: 'Maintain and fix existing product processes, mainly motor insurance (KFZ).' },
        { text: 'Mentor and train developers and BAs.' },
      ],
    },
    {
      title: 'Senior / Lead Guidewire Developer · Beesafe',
      from: { date: '2023-05', label: 'May 2023' },
      to: { date: '2025-06', label: 'June 2025' },
      place: 'Warsaw',
      project: 'Beesafe / Compensa Poland, PolicyCenter, ClaimCenter and BillingCenter',
      bullets: [
        { text: 'Maintained and developed Guidewire applications in the core team, working closely with other teams and business owners.' },
        { text: 'PolicyCenter: all transactions, post-processing, and integrations with other systems; product model: system tables, APD, new coverages, and support for actuaries in rating changes.' },
        { text: 'ClaimCenter: FNOL, required documents from the client, and the claim file; integration with Tractable (an external vehicle-damage estimation service).' },
        { text: 'Imported new lines of business and fully configured them for new products.' },
        { text: 'Supported and trained BillingCenter users.' },
        { text: 'Did whatever it took to keep production and the business performing as expected.' },
      ],
    },
    {
      title: 'Junior → Senior Software Engineer · Capgemini',
      from: { date: '2017-11', label: 'November 2017' },
      to: { date: '2023-04', label: 'April 2023' },
      place: 'Wrocław',
      steps: 'Junior 2017–2018 · Engineer 2019 · Senior 2020–2023',
      project: 'AXA Germany, Guidewire PolicyCenter',
      bullets: [
        { text: 'Configured policy transactions and post-transaction processing, including advanced configuration of out-of-the-box jobs and customer-specific processes.' },
        { text: 'Built PolicyCenter integrations: GW Messaging, SOAP and REST services, provisioning systems, document production.' },
        { text: 'Configured asynchronous processing: workflows, batch processes, work queues.' },
        { text: 'Supported data migration: data mapping, migration submissions, post-migration batch processing.' },
        { text: 'Side project, Zurich Switzerland: sales support and a proof of concept for a cyber insurance product.' },
        { text: 'Active in the Capgemini Guidewire Community: mentoring, training, recruitment and onboarding of new joiners.' },
      ],
    },
    {
      title: 'Junior Software Engineer · Tieto',
      from: { date: '2017-04', label: 'April 2017' },
      to: { date: '2017-10', label: 'October 2017' },
      place: 'Wrocław',
      bullets: [
        { text: 'Developed Android mobile applications.' },
        { text: 'Developed and debugged the Android Multimedia Framework for Sony.' },
      ],
    },
    {
      title: 'Earlier career: banking and insurance',
      place: '2009 – 2017 · Rawicz · roles run in parallel as my own businesses',
      bullets: [
        { lead: 'PZU', text: ', Insurance Agent / Business Owner (2015 – 2017): sold non-life products (motor, home, travel, business).' },
        { lead: 'Finanse Domowe', text: ', Branch Manager / Business Owner (2014 – 2017): served mortgage and insurance clients and managed the team.' },
        { lead: 'Alior Bank', text: ', Franchise Partner / Business Owner (2009 – 2014): ran two bank branches (Rawicz and Góra), with active sales and the highest standards of customer service.' },
      ],
    },
    {
      title: 'IT Consultant · Poradnia Psychologiczno-Pedagogiczna w Rawiczu',
      from: { date: '2003-11', label: 'November 2003' },
      to: { date: '2007-11', label: 'November 2007' },
      place: 'Rawicz',
      bullets: [
        { text: 'Software installation, hardware configuration and user support.' },
      ],
    },
  ],

  certNote: {
    before: "Since Palisades, Guidewire's product-specific certifications sit at the Ace level; I'm currently working towards them.",
    link: 'Verify in the Guidewire Certification Checker',
    after: ': enter first name "Krzysztof" and last name "Piotrowski".',
  },

  skills: [
    { term: 'Guidewire', detail: 'PolicyCenter, ClaimCenter, BillingCenter, ContactManager (self-managed InsuranceSuite 10.2) · transactions configuration · product model (APD, system tables) · PCF · rating support' },
    { term: 'Guidewire integration and processing', detail: 'GW Messaging, SOAP, REST, workflows, batch processes, work queues, data migration' },
    { term: 'AI-assisted engineering', detail: 'Claude Code, multi-agent workflows, agent and skill design, AI code review, context engineering (knowledge bases)' },
    { term: 'Programming languages', detail: 'Gosu, Java, SQL' },
    { term: 'Tools and practices', detail: 'Git, Bitbucket, Jenkins, GitHub Actions, Jira, GUnit, Guidewire Profiler, Splunk, Scrum, SAFe' },
    { term: 'Communication and leadership', detail: 'Clear communication between business and IT, in Polish, English and German · team leadership and mentoring · training and onboarding · client-facing and negotiation skills from years of running my own bank and insurance businesses' },
  ],

  languages: [
    { term: 'Polish', detail: 'native' },
    { term: 'English', detail: 'C1' },
    { term: 'German', detail: 'B2' },
  ],

  education: [
    { term: 'Wrocław University of Science and Technology', detail: 'Master of Engineering, Management and Marketing (Information Technologies in Management) · 2004 – 2010' },
    { term: 'Software Development Academy, Wrocław', detail: '"Java from Scratch" course · 2016 – 2017' },
  ],

  interests: 'Collecting LEGO sets.',

  footer: {
    copyright: '© 2026 Krzysztof Piotrowski. No cookies, no tracking.',
    trademark: 'Guidewire and the Guidewire Certified logos are trademarks of Guidewire Software, Inc.',
  },
};
