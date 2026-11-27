// Links: every link, image, stylesheet and font the site uses must load,
// and every #anchor must exist. External links (LinkedIn, Guidewire) are checked too.
import { test, expect } from '@playwright/test';
import { LinkChecker } from 'linkinator';
import { PAGES } from './pages';

test('no broken links', async ({ baseURL }) => {
  test.setTimeout(120_000);
  const result = await new LinkChecker().check({
    // the pages, plus files nothing links to (so the crawler wouldn't find them)
    path: [...PAGES.map((p) => baseURL + p.path), `${baseURL}/tools/og-image.html`],
    recurse: true,                 // follow links within the site
    checkCss: true,                // fonts referenced in the CSS
    checkFragments: true,          // href="#profile" needs an element with id="profile"
    timeout: 20_000,
    retry: true,
    retryErrors: true,
    retryErrorsCount: 3,
    // Canonical, hreflang and og:image use the real domain. Check them against this build,
    // so a new page or image in a PR is found before it is live.
    urlRewriteExpressions: [{ pattern: /^https:\/\/(www\.)?krzysztofpiotrowski\.com(?=\/|$)/, replacement: baseURL! }],
  });

  const broken = result.links.filter((l) => l.state === 'BROKEN');
  const isOurs = (url: string) => url.startsWith(baseURL!);

  // Our own files: any failure is a real bug.
  // External sites: only "404 Not Found" / "410 Gone" means the link is dead. Anything else
  // (LinkedIn's made-up 999, 403/429 "no bots", timeouts, 5xx) is the site refusing
  // GitHub's servers, not our fault: shown as a warning in the test report, doesn't fail.
  const dead = broken.filter((l) => isOurs(l.url) || l.status === 404 || l.status === 410);
  for (const l of broken.filter((l) => !dead.includes(l))) {
    test.info().annotations.push({ type: 'warning', description: `external link answered ${l.status}: ${l.url}` });
  }

  const report = dead.map((l) => `[${l.status}] ${l.url}  (on ${l.parent})`);
  expect(report, report.join('\n')).toEqual([]);
});
