// Portfolyo videoları için video site haritası — postbuild'de next-sitemap'ten sonra çalışır.
// Kaynak: src/data/portfolio.ts (VideoObject şemasıyla aynı alanlar). Çıktı: public/sitemap-video.xml
import { readFileSync, writeFileSync } from "node:fs";

const SITE = "https://fennixmedya.com";
const src = readFileSync(new URL("../src/data/portfolio.ts", import.meta.url), "utf8");
const arrayStart = src.indexOf("export const portfolioData");
const items = [...src.slice(arrayStart).matchAll(/\{\s*id: "([^"]+)",[\s\S]*?uploadDate: "([^"]+)",\s*description: "([^"]+)",\s*title: "([^"]+)",[\s\S]*?videoSrc: "([^"]+)",\s*thumbnailSrc: "([^"]+)",/g)]
  .map(([, id, uploadDate, description, title, videoSrc, thumb]) => ({ id, uploadDate, description, title, videoSrc, thumb }));

if (items.length === 0) throw new Error("portfolio.ts'ten video okunamadı");
const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
  <url>
    <loc>${SITE}/portfolyo</loc>
${items.map((v) => `    <video:video>
      <video:thumbnail_loc>${SITE}${v.thumb}</video:thumbnail_loc>
      <video:title>${esc(v.title)}</video:title>
      <video:description>${esc(v.description)}</video:description>
      <video:content_loc>${SITE}${v.videoSrc}</video:content_loc>
      <video:publication_date>${v.uploadDate}</video:publication_date>
      <video:family_friendly>yes</video:family_friendly>
      <video:live>no</video:live>
    </video:video>`).join("\n")}
  </url>
</urlset>
`;
writeFileSync(new URL("../public/sitemap-video.xml", import.meta.url), xml);
console.log(`sitemap-video.xml: ${items.length} video`);
