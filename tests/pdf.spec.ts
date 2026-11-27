// "Save as PDF": the printed CV must be complete, A4, short enough and free of private data.
// The PDF is made the way the browser's print dialog makes it (print stylesheet, A4 from @page),
// then read back with pdf.js (Mozilla's PDF engine, the one inside Firefox).
import { test, expect, type Page } from '@playwright/test';
import { getDocument } from 'pdfjs-dist/legacy/build/pdf.mjs';
import { en } from '../src/data/en';
import { de } from '../src/data/de';
import { LANGUAGES, LINKEDIN_PRINT, CERT_GROUPS } from '../src/data/site';
import type { Content } from '../src/data/types';

const MAX_PAGES = 4;                         // v1 prints on 4 pages per language
const A4 = { width: 595.28, height: 841.89 }; // in PDF points (1/72 inch)

/** Collapse every kind of whitespace into one space. */
const norm = (s: string) => s.replace(/\s+/g, ' ').trim();
/** Remove all whitespace: a line can wrap after a hyphen ("post-|transaction"), and the
 *  extracted text then has a space there. Comparing without spaces ignores where lines break. */
const squash = (s: string) => s.replace(/\s+/g, '');

async function makePdf(page: Page, path: string) {
  await page.goto(path);
  await page.evaluate(() => document.fonts.ready);
  return page.pdf({ preferCSSPageSize: true });   // = Print → Save as PDF, "Background graphics" off
}

async function readPdf(data: Buffer) {
  const doc = await getDocument({ data: new Uint8Array(data), useSystemFonts: false }).promise;
  const pages = [];
  for (let n = 1; n <= doc.numPages; n++) {
    const p = await doc.getPage(n);
    const content = await p.getTextContent();
    const text = content.items.map((i) => ('str' in i ? i.str + (i.hasEOL ? ' ' : '') : '')).join('');
    pages.push({ width: p.view[2], height: p.view[3], text });
  }
  const text = norm(pages.map((p) => p.text).join(' '));
  return { pages, text, squashed: squash(text) };
}

for (const content of [en, de] as Content[]) {
  const path = LANGUAGES.find((l) => l.lang === content.lang)!.path;

  test.describe(`PDF ${content.lang.toUpperCase()}`, () => {
    test('is A4, at most 4 pages, and has the whole CV', async ({ page }) => {
      const pdf = await readPdf(await makePdf(page, path));

      expect(pdf.pages.length, 'page count').toBeLessThanOrEqual(MAX_PAGES);
      for (const p of pdf.pages) {
        expect(p.width).toBeCloseTo(A4.width, 0);
        expect(p.height).toBeCloseTo(A4.height, 0);
      }

      // Every piece of CV text from the data file must be in the PDF.
      // (In v2 the jobs fold away on screen: this proves they are all open on paper.)
      const expected = [
        content.role, content.location, content.pitch,
        ...Object.values(content.headings),
        ...content.profile,
        ...content.jobs.flatMap((j) => [j.title, j.place, j.steps, j.project, ...j.bullets.map((b) => (b.lead ?? '') + b.text)]),
        ...CERT_GROUPS.flatMap((g) => [g.title, ...g.badges.map((b) => b.name)]),
        ...content.skills.flatMap((e) => [e.term, e.detail]),
        ...content.languages.flatMap((e) => [e.term, e.detail]),
        ...content.education.flatMap((e) => [e.term, e.detail]),
        content.interests,
        content.footer.trademark,
        LINKEDIN_PRINT,                   // the LinkedIn address is printed, since a button can't be clicked on paper
      ].filter((s): s is string => !!s);
      const missing = expected.map(norm).filter((s) => !pdf.squashed.includes(squash(s)));
      expect(missing, 'text missing from the PDF').toEqual([]);
    });

    test('has no screen-only parts and no private data', async ({ page }) => {
      const pdf = await readPdf(await makePdf(page, path));

      expect(pdf.text, 'print button').not.toContain(content.printLabel);
      expect(pdf.text, 'portrait caption (photo is hidden on paper)').not.toContain(norm(content.portrait.caption));
      expect(pdf.text, 'e-mail address').not.toMatch(/[\w.+-]+@[\w-]+\.[a-z]{2,}/i);
      expect(pdf.text, 'phone number').not.toMatch(/\+?\d[\d ()/-]{7,}\d/);
    });

    test('the print button opens the print dialog', async ({ page }) => {
      // Replace window.print with a counter: a real dialog would block the test browser.
      await page.addInitScript(() => {
        (window as unknown as { printed: number }).printed = 0;
        window.print = () => { (window as unknown as { printed: number }).printed++; };
      });
      await page.goto(path);
      await page.getByRole('button', { name: content.printLabel }).first().click();
      expect(await page.evaluate(() => (window as unknown as { printed: number }).printed)).toBe(1);
    });
  });
}
