// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.depannageplombiercharleroi.be',
  trailingSlash: 'always',
  redirects: {
    '/blog/prolonger-duree-vie-chauffe-eau/': '/blog/panne-chauffe-eau-urgence-charleroi/',
    '/blog/signes-panne-chauffe-eau-charleroi/': '/blog/panne-chauffe-eau-urgence-charleroi/',
    '/blog/wc-bouche-charleroi/': '/blog/debouchage-urgent-charleroi/',
    '/blog/mauvaises-odeurs-canalisations-charleroi/': '/blog/debouchage-urgent-charleroi/',
    '/blog/remplacer-baignoire-douche-charleroi/': '/blog/renovation-salle-de-bain-charleroi/',
    '/blog/installation-douche-italienne-charleroi/': '/blog/renovation-salle-de-bain-charleroi/',
    '/blog/pourquoi-opter-toilette-suspendue-charleroi/': '/blog/renovation-salle-de-bain-charleroi/',
    '/blog/filtre-eau-ou-adoucisseur-charleroi/': '/blog/eviter-calcaire-plomberie-charleroi/',
    '/blog/regler-reducteur-pression-eau-charleroi/': '/blog/problemes-pression-eau-charleroi/',
    '/blog/plombier-de-garde-charleroi/': '/services/depannage-urgence/',
    '/blog/depannage-plomberie-charleroi-tuyaux-casses/': '/services/depannage-urgence/',
    '/blog/detection-fuite-non-destructive-charleroi/': '/services/detection-fuites/'
  },
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      serialize(item) {
        if (item.url === 'https://www.depannageplombiercharleroi.be/') {
          item.priority = 1.0;
          item.changefreq = 'daily';
        } else if (item.url.includes('/services/depannage-urgence/')) {
          item.priority = 0.95;
          item.changefreq = 'daily';
        } else if (item.url.includes('/services/')) {
          item.priority = 0.90;
          item.changefreq = 'weekly';
        } else if (item.url.includes('/locations/')) {
          item.priority = 0.85;
          item.changefreq = 'weekly';
        } else if (item.url.includes('/blog/')) {
          item.priority = 0.85;
          item.changefreq = 'weekly';
        } else if (item.url.includes('/contact/')) {
          item.priority = 0.80;
          item.changefreq = 'monthly';
        } else if (item.url.includes('/about/')) {
          item.priority = 0.70;
          item.changefreq = 'monthly';
        }
        return item;
      },
    }),
  ],
});
