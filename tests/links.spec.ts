// Links: every link, image, stylesheet and font the site uses must load,
// and every #anchor must exist. External links are checked too (LinkedIn, Guidewire).
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
    urlRewriteExpressions: [{ pattern: /^https:\/\/krzysztofpiotrowski\.com/, replacement: baseURL! }],
    // LinkedIn answers bots with the made-up status 999. A warning, not a broken link.
    statusCodes: { '999': 'warn' },
  });

  const broken = result.links
    .filter((l) => l.state === 'BROKEN')
    .map((l) => `[${l.status}] ${l.url}  (on ${l.parent})`);
  expect(broken, broken.join('\n')).toEqual([]);
});
