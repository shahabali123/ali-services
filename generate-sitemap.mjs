import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import blogs from './src/blogs/blog.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// TODO: Replace with your actual domain
const BASE_URL = 'https://naxgat.com';

const generateSitemap = () => {
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>${BASE_URL}/</loc>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>
${blogs
    .map((blog) => {
        return `    <url>
        <loc>${BASE_URL}/blog/${blog.id}</loc>
        <lastmod>${new Date(blog.date).toISOString().split('T')[0]}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
    </url>`;
    })
    .join('\n')}
</urlset>`;

    const publicDir = path.join(__dirname, 'public');
    if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir);

    fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
    console.log('✅ sitemap.xml generated successfully!');
};

generateSitemap();