import type { MetadataRoute } from 'next';
import { siteOrigin } from '@/lib/public-site-routes';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // Crawl preferences only; protected routes remain enforced by src/proxy.ts.
      disallow: [
        '/api/', '/products', '/product/', '/categories', '/vehicles',
        '/fitment', '/dealers', '/export', '/competitors',
      ],
    },
    sitemap: [`${siteOrigin}/sitemap_index.xml`, `${siteOrigin}/sitemap.xml`],
  };
}
