const blogPosts = require('./src/data/blog-posts.json');

// Blog yazıları için gerçek tarihler; diğer sayfalarda lastmod hiç yazılmaz
// (her build'de "bugün" damgalamak, arama motorlarının lastmod'u yok saymasına yol açar)
const lastmodByPath = Object.fromEntries(
  blogPosts.map((p) => [
    `/blog/${p.slug}`,
    `${p.dateModified || p.date}T00:00:00+03:00`,
  ])
);

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://fennixmedya.com',
  generateRobotsTxt: false,
  exclude: [],
  changefreq: 'weekly',
  priority: 0.7,
  transform: async (config, path) => {
    // Higher priority for homepage and service pages
    let priority = 0.7;
    let changefreq = 'weekly';
    
    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    } else if (path === '/hizmetler' || path.startsWith('/hizmetler/')) {
      priority = 0.9;
    } else if (path === '/portfolyo') {
      priority = 0.8;
    } else if (path.startsWith('/blog/') && path !== '/blog') {
      priority = 0.7;
      changefreq = 'monthly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: lastmodByPath[path],
    };
  },
};
