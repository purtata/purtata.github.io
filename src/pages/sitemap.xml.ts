// Generates /sitemap.xml at build time from the language list, so a new language
// version can't be forgotten here. Same URL and content as the hand-written file before
// (Search Console already knows this address).
import { LANGUAGES, LAST_UPDATED, absolute } from '../data/site';

export function GET() {
  const alternates = [
    ...LANGUAGES.map((l) => `    <xhtml:link rel="alternate" hreflang="${l.lang}" href="${absolute(l.path)}"/>`),
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${absolute(LANGUAGES[0].path)}"/>`,
  ].join('\n');

  const urls = LANGUAGES.map((l) => `  <url>
    <loc>${absolute(l.path)}</loc>
    <lastmod>${LAST_UPDATED}</lastmod>
${alternates}
  </url>`).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
