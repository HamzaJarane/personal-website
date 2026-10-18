/**
 * Generates public/sitemap.xml from static routes and blog posts (blog.json).
 * Run automatically as part of `npm run build`.
 */
const fs = require('fs');

const SITE_URL = 'https://hamza.im';
const staticPages = [
  { path: '/', priority: '1.0', changefreq: 'monthly' },
  { path: '/blog', priority: '0.8', changefreq: 'weekly' },
  { path: '/work', priority: '0.9', changefreq: 'monthly' },
  { path: '/contact', priority: '0.9', changefreq: 'yearly' },
  { path: '/Hamza_Jarane_English.pdf', priority: '0.6', changefreq: 'monthly' },
  { path: '/Hamza_Jarane_Francais.pdf', priority: '0.6', changefreq: 'monthly' },
];

const blogIndex = JSON.parse(
  fs.readFileSync(`${__dirname}/../src/assets/json/blog.json`, 'utf-8')
);

const blogPages = blogIndex.map((post) => ({
  path: `/blog/${post.slug}`,
  priority: '0.7',
  changefreq: 'monthly',
  lastmod: post.published_at || undefined,
}));

const entries = [...staticPages, ...blogPages];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(
    (page) => `  <url>
    <loc>${SITE_URL}${page.path}</loc>${
      page.lastmod ? `\n    <lastmod>${page.lastmod}</lastmod>` : ''
    }
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

fs.writeFileSync(`${__dirname}/../public/sitemap.xml`, xml);
console.log(`✓ sitemap.xml generated with ${entries.length} URLs`);
