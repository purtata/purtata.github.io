// The light/dark switch: follows the device until clicked, remembers a click, forgets it when
// switched back to the device's theme, and never changes the printed CV.
import { test, expect, type Page } from '@playwright/test';

const LIGHT_BG = 'rgb(255, 255, 255)';
const DARK_BG = 'rgb(20, 35, 31)';        // #14231F
const bodyBg = (page: Page) => page.evaluate(() => getComputedStyle(document.body).backgroundColor);
const saved = (page: Page) => page.evaluate(() => localStorage.getItem('theme'));

test.use({ reducedMotion: 'reduce' });

for (const device of ['light', 'dark'] as const) {
  const other = device === 'light' ? 'dark' : 'light';

  test(`${device} device: follows it, a click switches to ${other} and is remembered`, async ({ page }) => {
    await page.emulateMedia({ colorScheme: device });
    await page.goto('/');
    const button = page.locator('.bar .js-theme');
    await expect(button).toHaveAttribute('aria-pressed', String(device === 'dark'));
    expect(await bodyBg(page)).toBe(device === 'light' ? LIGHT_BG : DARK_BG);
    expect(await saved(page)).toBeNull();

    await button.click();
    await expect(button).toHaveAttribute('aria-pressed', String(other === 'dark'));
    expect(await bodyBg(page)).toBe(other === 'light' ? LIGHT_BG : DARK_BG);
    expect(await saved(page)).toBe(other);

    // Remembered on the next page, including the other language and the 404 page
    for (const path of ['/de/', '/404.html']) {
      await page.goto(path);
      await expect(page.locator('html')).toHaveAttribute('data-theme', other);
      expect(await bodyBg(page)).toBe(other === 'light' ? LIGHT_BG : DARK_BG);
    }

    // Back to the device's theme: the choice is forgotten, the page follows the device again
    await page.goto('/');
    await button.click();
    await expect(page.locator('html')).not.toHaveAttribute('data-theme');
    expect(await saved(page)).toBeNull();
    expect(await bodyBg(page)).toBe(device === 'light' ? LIGHT_BG : DARK_BG);
  });
}

test('phone: the switch is in the menu, not in the bar', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.emulateMedia({ colorScheme: 'light' });
  await page.goto('/');
  await expect(page.locator('.bar .js-theme')).toBeHidden();
  await page.locator('.burger').click();
  const button = page.locator('#menu .js-theme');
  await button.click();
  await expect(button).toHaveAttribute('aria-pressed', 'true');
  await expect(page.locator('.bar .js-theme')).toHaveAttribute('aria-pressed', 'true');   // both stay in sync
  expect(await bodyBg(page)).toBe(DARK_BG);
});

// Print overrides the theme with a selector that also beats :root[data-theme="dark"]
for (const how of ['dark device', 'switched to dark'] as const) {
  test(`${how}: the printed CV is still light`, async ({ page }) => {
    await page.emulateMedia({ colorScheme: how === 'dark device' ? 'dark' : 'light' });
    await page.goto('/');
    if (how === 'switched to dark') await page.locator('.bar .js-theme').click();
    expect(await bodyBg(page)).toBe(DARK_BG);
    await page.emulateMedia({ media: 'print' });
    expect(await bodyBg(page)).toBe(LIGHT_BG);
    expect(await page.evaluate(() => getComputedStyle(document.body).color)).toBe('rgb(46, 73, 66)');   // #2E4942
  });
}
