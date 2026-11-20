# CV content (source of truth for the website)

> **Translations:** the Polish and German versions live directly in `pl/index.html` and `de/index.html`. When this text changes, change those two pages too.
>
> **Status: DRAFT v3 (AI work report + 360° feedback).** Krzysztof reviews this, and once he approves it, it becomes the text of the website (Phase 3).
> Markers:
> - **[?]**: Krzysztof to confirm or fill in. Never invented.

---

## Header

**Krzysztof Piotrowski**
Senior Guidewire Developer
Rawicz, Poland · Remote
LinkedIn: https://www.linkedin.com/in/krzysztof-piotrowski-22235b139
Contact: LinkedIn only (no phone, no address, no contact form)

---

## Profile

Senior Guidewire Developer building insurance systems since 2017. I work on PolicyCenter, ClaimCenter, BillingCenter and ContactManager, across configuration and integration, for insurers in Germany, Switzerland and Poland. I'm a certified Guidewire Associate InsuranceSuite Developer (current release, Qusar) and a Configuration Specialist for PolicyCenter, ClaimCenter and BillingCenter.

In my current team I lead the move to AI-assisted engineering. I use Claude Code for agentic development, build the harness and tooling that make it reliable on a large Guidewire codebase, and use it to deliver features and measurable performance gains. I'm usually the first person new joiners call.

Before software, I spent over seven years running bank branches and insurance agencies, so I know the business side of the systems I build.

---

## Experience

### Baloise Solution Hub — Senior Guidewire Developer
*July 2025 – present · Warsaw · Bad Homburg (Germany) · Remote*
Project: **HelvetiaBaloise Germany**, PolicyCenter Policy Management · mixed German client team (consultancy and in-house developers)

- **AI team lead:** I introduced and promote agentic, AI-assisted development in a team of 20 (8 developers) and onboarded developers across teams to Claude Code (setup, shared artifacts, lessons learned), including a shared knowledge base of validated patterns and lessons learned that every AI session starts from, and a Community of Practice position paper on AI-generated tests.
- **Built a local "software factory" on Claude Code:** an autonomous pipeline that takes a Jira ticket from intake to a reviewed handover, with specialised agents for scoping, analysis, planning, execution, verification and an independent "skeptic" review. Guardrails: no autonomous pushes, one commit per slice, a decision log, and explicit flags for business assumptions. Works across PolicyCenter, BillingCenter and ClaimCenter.
- **Built a set of supporting AI skills:** Guidewire code review against acceptance criteria, profiler-export analysis (N+1 queries, SQL traced to Gosu callers), log investigation with a non-production guardrail, converting BA story cards and BPMN diagrams to text, and Guidewire knowledge skills (SQL with schema validation, GUnit, effective dating, workflows).
- **Delivered many tickets with AI support** (features, bugs, performance), for example a multi-phase premium-regulation feature, producer change as a policy change, data migrations, and a cross-system PolicyCenter / ClaimCenter / BillingCenter integration.
- **Profiling-driven performance work:** eliminated most of the SQL in a key renewal process, cut a heavy screen to a fraction of its queries, made a hot lookup several times faster with a cluster cache, replaced N+1 loads with batch loads, and reworked cross-system calls to fix timeouts on large accounts.
- **Business and production analysis:** shape user stories with BAs before development; investigate production incidents on production data (SQL, Splunk) and turn the root causes into story and solution changes, with plain-language summaries in English and German for BAs and testers.
- Built PolicyCenter processes for new products: residential building, household and commercial insurance.
- Maintain and fix existing product processes, mainly motor insurance (KFZ).
- Mentor and train developers and stay active in code reviews; support recruitment and volunteered for the people-lead role.

### Beesafe sp. z o.o. — Senior / Lead Guidewire Developer
*May 2023 – June 2025 · Warsaw*
Project: **Beesafe / Compensa Poland**, all four Guidewire applications

- Maintained and developed PolicyCenter, ClaimCenter, BillingCenter and ContactManager in the core team, working closely with other teams and business owners.
- PolicyCenter product model: system tables, APD, new coverages, and support for actuaries in rating changes.
- Designed and implemented ClaimCenter business processes: FNOL, required documents from the client, and the claim file.
- Designed and implemented the ClaimCenter integration with **Tractable** (an external vehicle-damage estimation service): sending claim requests and processing the returned repair pricing.
- Imported new lines of business into ClaimCenter and fully configured them for new products.
- Supported and trained BillingCenter users.

### Capgemini — Junior Software Engineer → Software Engineer → Senior Software Engineer
*November 2017 – April 2023 · Wrocław*
Junior Nov 2017 – Dec 2018 · Engineer Jan 2019 – Dec 2019 · Senior Jan 2020 – Apr 2023
Main project: **AXA Germany**, Guidewire PolicyCenter

- Configured policy transactions and post-transaction processing, including advanced configuration of out-of-the-box jobs and customer-specific processes.
- Built PolicyCenter integrations: GW Messaging, SOAP and REST services, provisioning systems, document production.
- Configured asynchronous processing: workflows, batch processes, work queues.
- Supported data migration: data mapping, migration submissions, post-migration batch processing.
- Side project, **Zurich Switzerland**: sales support and a proof of concept for a cyber insurance product.
- Active in the Capgemini Guidewire Community: mentoring, training, recruitment and onboarding of new joiners.

### Tieto — Junior Software Engineer
*April 2017 – October 2017 · Wrocław*

- Developed Android mobile applications.
- Developed and debugged the Android Multimedia Framework for Sony.

### Earlier career: banking and insurance (2009 – 2017)

- **PZU** — Insurance Agent / Business Owner · *March 2015 – May 2017 · Rawicz area*: sold non-life products (motor, home, travel, business).
- **Finanse Domowe** (credit brokerage branch) — Branch Manager / Business Owner · *January 2014 – March 2017 · Rawicz*: served mortgage and insurance clients and managed the team.
- **Alior Bank S.A.** — Franchise Partner / Business Owner · *November 2009 – March 2014 · Rawicz*: ran two bank branches (Rawicz and Góra); sales, with the highest customer-service standards.

*(The roles overlapped because I ran them in parallel as my own businesses.)*

### Early IT (2003 – 2007)

- **IT Consultant**, Poradnia Psychologiczno-Pedagogiczna w Rawiczu: software installation, hardware configuration, user support.

---

## Certifications (Guidewire)

Verify: [Guidewire Certification Checker](https://education.guidewire.com/lmt/lmtlogin.prHome?site=guidewire#certification-checker): enter First Name "Krzysztof" and Last Name "Piotrowski".

1. **Associate — InsuranceSuite Developer** (Guidewire Cloud): Qusar · Palisades · Olos · Niseko. *Re-certified on every release since Niseko.*
2. **Specialist — PolicyCenter Configuration** (Cloud): Olos · Niseko · earlier: Mammoth
3. **Specialist — ClaimCenter Configuration** (Cloud): Olos · Niseko · earlier: Mammoth
4. **Specialist — BillingCenter Configuration** (Cloud): Olos · Niseko · earlier: Mammoth
5. **Self-Managed Specialist — PolicyCenter / ClaimCenter / BillingCenter Configuration**

Note for the page: *Since Palisades, Guidewire's product-specific certifications sit at the Ace level; I'm currently working towards them.*

---

## Skills

- **Guidewire:** PolicyCenter, ClaimCenter, BillingCenter, ContactManager (self-managed InsuranceSuite 10.2) · product model (APD, system tables) · PCF · rating support
- **Guidewire integration and processing:** GW Messaging, SOAP, REST, workflows, batch processes, work queues, data migration
- **AI-assisted engineering:** Claude Code, multi-agent workflows, agent and skill design, AI code review, context engineering (knowledge bases)
- **Languages:** Gosu, Java, SQL
- **Tools and practices:** Git, Bitbucket, Jenkins, GitHub Actions, Jira, GUnit, Guidewire Profiler, Splunk, Scrum, SAFe
- **Communication and leadership:** clear communication between business and IT, in Polish, English and German · team leadership and mentoring · training and onboarding · client-facing and negotiation skills from years of running my own bank and insurance businesses

## What colleagues say

*Anonymous quotes from my 2026 360° feedback (client team), word for word.*

> "When using AI he does not just trust the solution from AI but also challenges the solution to really solve issues."

> "In every call he takes the necessary time to explain technical background, repeats what was discussed to ensure mutual understanding…"

> "He helps everyone in the team without needing to be asked. And the results are outstanding."

## Languages

- Polish: native
- English: C1
- German: B2

## Education

- **Wrocław University of Science and Technology:** Master of Engineering, Management and Marketing (specialisation: Information Technologies in Management), 2004 – 2010
- **Software Development Academy, Wrocław:** "Java from Scratch" course, 2016 – 2017

## Interests

- Collecting LEGO sets.
