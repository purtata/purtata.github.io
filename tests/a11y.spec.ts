// Accessibility: axe-core (the engine inside Lighthouse's accessibility audit) must find
// 0 violations on every page, in light and dark mode, on a desktop and a phone screen,
// with the menu open, and with JavaScript switched off.
import { test, expect, type Page } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { PAGES } from './pages';

const SCHEMES = ['light', 'dark'] as const;
const SCREENS = [
  { name: 'desktop', viewport: { width: 1280, height: 800 } },
  { name: 'phone', viewport: { width: 390, height: 844 } },
];
const CV_PAGES = PAGES.filter((p) => p.name !== '404');

async function expectNoViolations(page: Page) {
  await page.evaluate(() => document.fonts.ready);
  const results = await new AxeBuilder({ page })
    // WCAG 2.0–2.2, levels A and AA, plus axe's own best-practice rules
    .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa', 'best-practice'])
    .analyze();

  // On failure, print rule, element and help link instead of a huge object
  const summary = results.violations.map((v) =>
    `${v.id} (${v.impact}): ${v.help}\n  ${v.nodes.map((n) => n.target.join(' ')).join('\n  ')}\n  ${v.helpUrl}`);
  expect(summary, summary.join('\n\n')).toEqual([]);
}

/** Open every job, so axe also checks the text inside the folded ones (hidden text is skipped). */
async function expandAll(page: Page) {
  const button = page.locator('#toggle-all');
  if (await button.count()) await button.click();
}

for (const colorScheme of SCHEMES) {
  for (const screen of SCREENS) {
    test.describe(`${colorScheme} · ${screen.name}`, () => {
      // Playwright gives every test a fresh page with these settings and closes it afterwards,
      // also when the test fails.
      // reducedMotion: elements that fade in are shown at once. Otherwise axe would measure contrast
      // halfway through a fade, and skip everything below the screen (still invisible until scrolled to).
      test.use({ colorScheme, viewport: screen.viewport, reducedMotion: 'reduce' });

      for (const { name, path } of PAGES) {
        test(`axe: ${name}`, async ({ page }) => {
          await page.goto(path);
          await expandAll(page);
          await expectNoViolations(page);
        });
      }
    });
  }

  test.describe(`${colorScheme} · special states`, () => {
    test.use({ colorScheme, reducedMotion: 'reduce' });

    for (const { name, path } of CV_PAGES) {
      test(`axe: ${name}, menu open`, async ({ page }) => {
        await page.goto(path);
        await page.locator('.burger').click();
        await expect(page.locator('#menu nav a').first()).toBeFocused();
        await expectNoViolations(page);
      });
    }

    // "JavaScript off" for the page only: axe itself needs JavaScript, so instead of switching it off
    // in the browser, the test removes the page's own scripts from the HTML before the browser gets it.
    for (const { name, path } of CV_PAGES) {
      test(`axe: ${name}, no JS`, async ({ page }) => {
        await page.route(path, async (route) => {
          const response = await route.fetch();
          const html = (await response.text()).replace(/<script(?![^>]*ld\+json)[^>]*>[\s\S]*?<\/script>/g, '');
          await route.fulfill({ response, body: html });
        });
        await page.goto(path);
        await expect(page.locator('html')).not.toHaveClass(/(^| )js( |$)/);   // proof the scripts are gone
        await expectNoViolations(page);
      });
    }
  });
}
