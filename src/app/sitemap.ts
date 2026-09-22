import type { MetadataRoute } from 'next';
import { brakeArticle } from '@/lib/brake-article';
import { batteryArticle } from '@/lib/battery-article';
import { mg4Article } from '@/lib/mg4-article';
import { publicSiteRoutes, siteOrigin } from '@/lib/public-site-routes';

export default function sitemap(): MetadataRoute.Sitemap {
  return publicSiteRoutes.map(path => ({
    url: `${siteOrigin}${path}`,
    // Only publish a modification date when it is maintained with the content.
    ...(path === brakeArticle.path ? { lastModified: brakeArticle.updatedAt } : {}),
    ...(path === batteryArticle.path ? { lastModified: batteryArticle.updatedAt } : {}),
    ...(path === mg4Article.path ? { lastModified: mg4Article.updatedAt } : {}),
  }));
}
