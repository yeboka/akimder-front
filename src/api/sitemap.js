// pages/api/sitemap.js
export default async function handler(req, res) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://www.akimpress.kz.com";

  // Статические страницы главной страницы
  const staticPages = [
    "/", // Главная страница
  ];

  // Генерация sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticPages
    .map((url) => {
      return `
            <url>
              <loc>${baseUrl}${url}</loc>
              <changefreq>daily</changefreq>
              <priority>1.0</priority>
            </url>
          `;
    })
    .join("")}
    </urlset>
  `;

  res.setHeader("Content-Type", "application/xml");
  res.write(sitemap);
  res.end();
}