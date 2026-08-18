import { writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { PRODUCTS } from '../constants';
import { SUPPORTED_URL_LANGS, DEFAULT_URL_LANG } from '../i18n';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SITE_ORIGIN = 'https://croandtxet.cat';
const isVercel = process.env.VERCEL === '1';
const distDir = resolve(__dirname, '..', 'dist');

interface RouteDef {
  path: string; // without leading language segment, e.g. "" | "/shop" | "/product/alea"
  changefreq: string;
  priority: string;
}

const staticRoutes: RouteDef[] = [
  { path: '', changefreq: 'weekly', priority: '1.0' },
  { path: '/shop', changefreq: 'weekly', priority: '0.8' },
  { path: '/about', changefreq: 'monthly', priority: '0.5' },
  { path: '/contact', changefreq: 'monthly', priority: '0.5' },
  { path: '/privacy', changefreq: 'yearly', priority: '0.3' },
  { path: '/returns', changefreq: 'yearly', priority: '0.3' },
];

const productRoutes: RouteDef[] = PRODUCTS.map(p => ({
  path: `/product/${p.id}`,
  changefreq: 'monthly',
  priority: '0.8',
}));

const allRoutes = [...staticRoutes, ...productRoutes];

const alternateLinks = (path: string) =>
  SUPPORTED_URL_LANGS.map(
    l => `    <xhtml:link rel="alternate" hreflang="${l}" href="${SITE_ORIGIN}/${l}${path}" />`
  ).join('\n') +
  `\n    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_ORIGIN}/${DEFAULT_URL_LANG}${path}" />`;

const lastmod = new Date().toISOString().split('T')[0];

const urlEntries = SUPPORTED_URL_LANGS.flatMap(lang =>
  allRoutes.map(
    route => `  <url>
    <loc>${SITE_ORIGIN}/${lang}${route.path}</loc>
${alternateLinks(route.path)}
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )
).join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urlEntries}
</urlset>
`;

const robotsAllow = `User-agent: *
Allow: /

Sitemap: ${SITE_ORIGIN}/sitemap.xml
`;

const robotsDisallow = `User-agent: *
Disallow: /
`;

if (isVercel) {
  writeFileSync(resolve(distDir, 'sitemap.xml'), sitemap, 'utf-8');
  writeFileSync(resolve(distDir, 'robots.txt'), robotsAllow, 'utf-8');
  console.log(`[generate-sitemap] Wrote sitemap.xml (${allRoutes.length * SUPPORTED_URL_LANGS.length} URLs) and robots.txt (allow) to dist/`);
} else {
  writeFileSync(resolve(distDir, 'robots.txt'), robotsDisallow, 'utf-8');
  console.log('[generate-sitemap] Staging build (GitHub Pages): wrote robots.txt (disallow all), skipped sitemap.xml');
}
