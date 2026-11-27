// Browser checks (accessibility, links) against the built site.
// `npm run test:browser` starts `astro preview` (serves dist/), runs tests/*.spec.ts, then stops it.
import { defineConfig, devices } from '@playwright/test';

const PORT = 4321;

export default defineConfig({
  testDir: 'tests',
  forbidOnly: !!process.env.CI,          // a forgotten test.only() fails CI instead of skipping the rest
  reporter: process.env.CI ? [['github'], ['list']] : 'list',
  use: { baseURL: `http://localhost:${PORT}` },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
  webServer: {
    command: `npm run preview -- --port ${PORT}`,
    url: `http://localhost:${PORT}/`,
    reuseExistingServer: !process.env.CI,   // locally, use a preview you already have running
  },
});
