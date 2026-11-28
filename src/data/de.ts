// German text of the CV (reviewed by a native speaker). Change en.ts too when this changes.
import type { Content } from './types';

export const de: Content = {
  lang: 'de',

  meta: {
    title: 'Krzysztof Piotrowski · Lead / Senior Guidewire Engineer',
    description: 'Lead / Senior Guidewire Engineer (PolicyCenter, ClaimCenter, BillingCenter), seit 2017 in der Entwicklung von Versicherungssystemen. KI-gestützte Softwareentwicklung mit Claude Code.',
    ogDescription: 'PolicyCenter, ClaimCenter und BillingCenter seit 2017. KI-gestützte Softwareentwicklung mit Claude Code.',
    ogImageAlt: 'Krzysztof Piotrowski, Lead / Senior Guidewire Engineer',
  },

  ui: {
    langNav: 'Sprache',
    sectionsNav: 'Abschnitte',
    menu: 'Menü',
    facts: 'Eckdaten',
    expandAll: 'Alle aufklappen',
    collapseAll: 'Alle zuklappen',
    now: 'heute',
    print: 'Als PDF speichern',
    darkMode: 'Dunkelmodus',
  },

  portrait: {
    alt: 'KI-generiertes Porträt von Krzysztof Piotrowski in Sepiatönen, mit einem digitalen Raster über dem Gesicht und leuchtenden Augen hinter der Brille',
    caption: 'So sieht mich Claude nach einer langen Session.',
    note: 'KI-generiertes Porträt',
  },
  role: 'Lead / Senior Guidewire Engineer',
  location: 'Rawicz, Polen · Remote',
  pitch: 'Seit 2017 entwickle ich Versicherungssysteme in Guidewire, für Versicherer in Deutschland, der Schweiz und Polen. In meinem Team leite ich den Umstieg auf KI-gestützte Softwareentwicklung mit Claude Code.',

  facts: {
    guidewireYears: 'Jahre Guidewire-Erfahrung',
    certifications: 'Guidewire-Zertifizierungen',
    markets: 'Versicherungsmärkte: DE · CH · PL',
    businessYears: 'Jahre als Inhaber im Bank- und Versicherungsvertrieb',
  },

  sections: {
    profile: { label: 'Profil', heading: 'Profil', menu: 'Profil' },
    experience: { label: 'Berufserfahrung', heading: 'Berufliche Stationen', menu: 'Berufserfahrung' },
    certifications: { label: 'Zertifizierungen', heading: 'Guidewire-zertifiziert', menu: 'Zertifizierungen' },
    skills: { label: 'Kenntnisse', heading: 'Womit ich arbeite', menu: 'Kenntnisse' },
    more: { label: 'Mehr', heading: 'Sprachen, Ausbildung & Interessen', menu: 'Sprachen & mehr' },
  },
  more: { languages: 'Sprachen', education: 'Ausbildung', interests: 'Interessen' },

  profile: [
    'Senior Guidewire Developer, seit 2017 in der Entwicklung von Versicherungssystemen. Ich arbeite mit PolicyCenter, ClaimCenter und BillingCenter, in Konfiguration und Integration, für Versicherer in Deutschland, der Schweiz und Polen. Ich bin zertifizierter Guidewire Associate InsuranceSuite Developer und Configuration Specialist für PolicyCenter, ClaimCenter und BillingCenter.',
    'In meinem aktuellen Team leite ich die KI-gestützte Softwareentwicklung. Ich nutze Claude Code für agentische Entwicklung, baue das Harness und die Werkzeuge, die das auf einer großen Guidewire-Codebasis zuverlässig machen, und liefere damit Features und messbare Performance-Verbesserungen.',
    'Vor der Softwareentwicklung habe ich über acht Jahre Bankfilialen und Versicherungsagenturen geführt. Ich kenne also die fachliche Seite der Systeme, die ich baue.',
  ],

  jobs: [
    {
      role: 'Senior Guidewire Developer',
      org: 'Baloise Solution Hub',
      from: { date: '2025-07', label: 'Juli 2025' },
      to: 'heute',
      place: 'Warschau · Bad Homburg · Remote · gemischtes Team beim deutschen Kunden (Beratung und interne Entwicklung)',
      summary: 'HelvetiaBaloise Deutschland · PolicyCenter Bestandsführung · KI-Teamlead',
      tags: ['PolicyCenter', 'Claude Code', 'Performance', 'Agentic AI'],
      bullets: [
        { lead: 'KI-Teamlead:', text: ' Ich habe agentische, KI-gestützte Entwicklung in einem Team von 20 Personen (8 Entwickler) eingeführt und treibe sie voran. Entwickler und BAs aus mehreren Teams habe ich in Claude Code eingearbeitet (Setup, gemeinsame Artefakte, Lessons Learned).' },
        { lead: 'Lokale „Software Factory“ auf Basis von Claude Code:', text: ' eine autonome Pipeline, die ein Jira-Ticket von der Aufnahme bis zur geprüften Übergabe begleitet, mit spezialisierten Agenten für Scoping, Analyse, Planung, Umsetzung und Verifikation sowie einem unabhängigen „Skeptiker“-Review. Funktioniert über PolicyCenter, BillingCenter und ClaimCenter hinweg.' },
        { lead: 'KI-Skills:', text: ' Guidewire-Code-Review gegen Akzeptanzkriterien, Skills mit Guidewire-spezifischem Fachwissen, Analyse von Profiler-Exporten, Log-Analyse mit Schutz vor Produktionszugriffen und Umwandlung von BA-Story-Cards und BPMN-Diagrammen in Text.' },
        { lead: 'Performance-Optimierung auf Basis von Profiling:', text: ' den Großteil der SQL-Abfragen in einem zentralen Verlängerungsprozess eliminiert, die Abfragen einer schweren Maske auf einen Bruchteil reduziert, einen häufig genutzten Lookup mit einem Cluster-Cache um ein Mehrfaches beschleunigt, N+1-Ladevorgänge durch Batch-Loads ersetzt und systemübergreifende Aufrufe überarbeitet, um Timeouts bei großen Accounts zu beheben.' },
        { lead: 'Fachliche Analyse:', text: ' User Stories vor der Entwicklung gemeinsam mit den BAs schärfen; Produktionsvorfälle auf Produktionsdaten untersuchen (SQL, Splunk) und die Ursachen in Änderungen an Stories und Lösungen überführen, mit verständlichen Zusammenfassungen auf Englisch und Deutsch für BAs und Tester.' },
        { text: 'PolicyCenter-Prozesse für neue Produkte gebaut: Wohngebäude-, Hausrat- und Gewerbeversicherung.' },
        { text: 'Wartung und Fehlerbehebung bestehender Produktprozesse, vor allem in der Kfz-Versicherung.' },
        { text: 'Mentoring und Schulung von Entwicklern und BAs.' },
      ],
    },
    {
      role: 'Senior / Lead Guidewire Developer',
      org: 'Beesafe',
      from: { date: '2023-05', label: 'Mai 2023' },
      to: { date: '2025-06', label: 'Juni 2025' },
      place: 'Warschau',
      summary: 'Beesafe / Compensa Polen · Kernteam',
      tags: ['PolicyCenter', 'ClaimCenter', 'BillingCenter'],
      bullets: [
        { text: 'Guidewire-Anwendungen im Kernteam gewartet und weiterentwickelt, in enger Zusammenarbeit mit anderen Teams und den Fachbereichen.' },
        { text: 'PolicyCenter: alle Vertragstransaktionen, die Nachverarbeitung und Integrationen mit anderen Systemen; Produktmodell: Systemtabellen, APD, neue Deckungen und Unterstützung der Aktuare bei Tarifänderungen.' },
        { text: 'ClaimCenter: Schadenmeldung (FNOL), vom Kunden benötigte Unterlagen und die Schadenakte; Integration mit Tractable (externer Dienst zur Bewertung von Fahrzeugschäden).' },
        { text: 'Neue Sparten importiert und für neue Produkte vollständig konfiguriert.' },
        { text: 'BillingCenter-Anwender unterstützt und geschult.' },
        { text: 'Alles Nötige getan, damit Produktion und Geschäft wie erwartet laufen.' },
      ],
    },
    {
      role: 'Junior → Senior Software Engineer',
      org: 'Capgemini',
      from: { date: '2017-11', label: 'November 2017' },
      to: { date: '2023-04', label: 'April 2023' },
      place: 'Wrocław',
      summary: 'AXA Deutschland · Guidewire PolicyCenter · Junior 2017–2018 · Engineer 2019 · Senior 2020–2023',
      tags: ['PolicyCenter', 'Integration', 'Datenmigration'],
      bullets: [
        { text: 'Vertragstransaktionen und deren Nachverarbeitung konfiguriert, einschließlich erweiterter Konfiguration von Standard-Jobs und kundenspezifischen Prozessen.' },
        { text: 'PolicyCenter-Integrationen gebaut: GW Messaging, SOAP- und REST-Services, Provisioning-Systeme, Dokumentenerstellung.' },
        { text: 'Asynchrone Verarbeitung konfiguriert: Workflows, Batch-Prozesse, Work Queues.' },
        { text: 'Datenmigration unterstützt: Datenmapping, Migrations-Submissions, Batch-Verarbeitung nach der Migration.' },
        { text: 'Nebenprojekt Zurich Schweiz: Vertriebsunterstützung und ein Proof of Concept für ein Cyberversicherungsprodukt.' },
        { text: 'Aktiv in der Capgemini Guidewire Community: Mentoring, Schulungen, Recruiting und Onboarding neuer Kolleginnen und Kollegen.' },
      ],
    },
    {
      role: 'Junior Software Engineer',
      org: 'Tieto',
      from: { date: '2017-04', label: 'April 2017' },
      to: { date: '2017-10', label: 'Oktober 2017' },
      place: 'Wrocław',
      summary: 'Android · Multimedia-Framework für Sony',
      bullets: [
        { text: 'Mobile Android-Apps entwickelt.' },
        { text: 'Android Multimedia Framework für Sony weiterentwickelt und debuggt.' },
      ],
    },
    {
      role: 'Frühere Laufbahn: Bank- und Versicherungswesen',
      org: 'PZU · Finanse Domowe · Alior Bank',
      from: { date: '2009', label: '2009' },
      to: { date: '2017', label: '2017' },
      summary: 'Rawicz · parallel als eigene Unternehmen geführt',
      earlier: true,
      bullets: [
        { lead: 'PZU', text: ', Versicherungsagent / Inhaber (2015 – 2017): Vertrieb von Schaden- und Unfallversicherungen (Kfz, Wohnen, Reise, Gewerbe).' },
        { lead: 'Finanse Domowe', text: ', Filialleiter / Inhaber (2014 – 2017): Beratung zu Baufinanzierungen und Versicherungen, Teamführung.' },
        { lead: 'Alior Bank', text: ', Franchisepartner / Inhaber (2009 – 2014): Leitung von zwei Bankfilialen (Rawicz und Góra), mit aktivem Vertrieb und höchsten Standards im Kundenservice.' },
      ],
    },
    {
      role: 'IT-Berater',
      org: 'Poradnia Psychologiczno-Pedagogiczna w Rawiczu',
      from: { date: '2003-11', label: 'November 2003' },
      to: { date: '2007-11', label: 'November 2007' },
      place: 'Rawicz',
      earlier: true,
      bullets: [
        { text: 'Softwareinstallation, Hardwarekonfiguration und Anwenderbetreuung.' },
      ],
    },
  ],

  certNote: {
    text: 'Seit Palisades liegen die produktspezifischen Guidewire-Zertifizierungen auf Ace-Level; darauf bereite ich mich gerade vor.',
    button: 'Im Certification Checker prüfen',
    hint: 'Vorname „Krzysztof“ und Nachname „Piotrowski“ eingeben.',
  },

  skills: [
    { term: 'Guidewire', detail: 'PolicyCenter, ClaimCenter, BillingCenter, ContactManager (self-managed InsuranceSuite 10.2) · Konfiguration von Vertragstransaktionen · Produktmodell (APD, Systemtabellen) · PCF · Unterstützung der Tarifierung' },
    { term: 'Guidewire-Integrationen und -Verarbeitung', detail: 'GW Messaging, SOAP, REST, Workflows, Batch-Prozesse, Work Queues, Datenmigration' },
    { term: 'KI-gestützte Softwareentwicklung', detail: 'Claude Code, Multi-Agenten-Workflows, Design von Agenten und Skills, KI-Code-Review, Context Engineering (Wissensbasen)' },
    { term: 'Programmiersprachen', detail: 'Gosu, Java, SQL' },
    { term: 'Tools und Methoden', detail: 'Git, Bitbucket, Jenkins, GitHub Actions, Jira, GUnit, Guidewire Profiler, Splunk, Scrum, SAFe' },
    { term: 'Kommunikation und Führung', detail: 'Fachbereich ↔ IT auf Polnisch, Englisch und Deutsch · Teamführung und Mentoring · Schulung und Onboarding · Kundenorientierung und Verhandlungsgeschick aus meinen eigenen Bank- und Versicherungsgeschäften' },
  ],

  languages: [
    { term: 'Polnisch', detail: 'Muttersprache', level: 6 },
    { term: 'Englisch', detail: 'C1', level: 5 },
    { term: 'Deutsch', detail: 'B2', level: 4 },
  ],

  education: [
    { term: 'Technische Universität Wrocław (Politechnika Wrocławska)', detail: 'Master of Engineering (Magister inżynier), Management und Marketing (Schwerpunkt: Informationstechnologien im Management) · 2004 – 2010' },
    { term: 'Software Development Academy, Wrocław', detail: 'Kurs „Java from Scratch“ · 2016 – 2017' },
  ],

  interests: 'LEGO-Sets sammeln.',

  footer: {
    copyright: '© 2026 Krzysztof Piotrowski. Keine Cookies, kein Tracking.',
    trademark: 'Guidewire und die Guidewire-Certified-Logos sind Marken der Guidewire Software, Inc.',
  },
};
