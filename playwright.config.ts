// Browser checks (accessibility, links, PDF) against the built site.
// `npm run test:browser` starts `astro preview` (serves dist/), runs tests/*.spec.ts, then stops it.
import { defineConfig, devices } from '@playwright/test';

// Not 4321: that is `npm run dev`'s port, and the checks must run on the build, not the dev server.
const PORT = 4322;

export default defineConfig({
  testDir: 'tests',
  forbidOnly: !!process.env.CI,          // a forgotten test.only() fails CI instead of skipping the rest
  reporter: process.env.CI ? [['github'], ['list']] : 'list',
  use: { baseURL: `http://localhost:${PORT}` },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
  webServer: {
    command: `npm run preview -- --port ${PORT}`,
    url: `http://localhost:${PORT}/`,
    reuseExistingServer: false,             // always start a fresh preview of dist/
  },
});
