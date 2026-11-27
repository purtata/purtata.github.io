// Astro configuration. Astro turns the templates in src/pages into plain HTML files
// in dist/ at build time ("static site generation"): the browser gets the same kind
// of files as before, only now they are generated instead of written by hand.
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://krzysztofpiotrowski.com',   // used for absolute URLs (canonical, OG, sitemap)
  trailingSlash: 'always',                    // "/de/", never "/de": one URL per page
  build: { format: 'directory' },             // src/pages/de/index.astro → dist/de/index.html
});
