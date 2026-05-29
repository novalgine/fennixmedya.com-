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
    } else if (path.startsWith('/hizmetler/')) {
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
      lastmod: new Date().toISOString(),
    };
  },
};
