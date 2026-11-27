// Accessibility: axe-core (the engine inside Lighthouse's accessibility audit) must find
// 0 violations on every page, in light and dark mode, on a desktop and a phone screen.
import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { PAGES } from './pages';

const SCHEMES = ['light', 'dark'] as const;
const SCREENS = [
  { name: 'desktop', viewport: { width: 1280, height: 800 } },
  { name: 'phone', viewport: { width: 390, height: 844 } },
];

for (const page of PAGES) {
  for (const colorScheme of SCHEMES) {
    for (const screen of SCREENS) {
      test(`axe: ${page.name} · ${colorScheme} · ${screen.name}`, async ({ browser }) => {
        const context = await browser.newContext({ colorScheme, viewport: screen.viewport });
        const tab = await context.newPage();
        await tab.goto(page.path);
        await tab.evaluate(() => document.fonts.ready);

        const results = await new AxeBuilder({ page: tab })
          // WCAG 2.0–2.2, levels A and AA, plus axe's own best-practice rules
          .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa', 'best-practice'])
          .analyze();

        // On failure, print rule, element and help link instead of a huge object
        const summary = results.violations.map((v) =>
          `${v.id} (${v.impact}): ${v.help}\n  ${v.nodes.map((n) => n.target.join(' ')).join('\n  ')}\n  ${v.helpUrl}`);
        expect(summary, summary.join('\n\n')).toEqual([]);
        await context.close();
      });
    }
  }
}
