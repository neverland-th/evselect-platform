import type { MetadataRoute } from 'next';
import { brakeArticle } from '@/lib/brake-article';
import { batteryArticle } from '@/lib/battery-article';
import { mg4Article } from '@/lib/mg4-article';
import { camberArticle } from '@/lib/camber-article';
import { shockTypesArticle } from '@/lib/shock-types-article';
import { thaiRoadsArticle } from '@/lib/thai-roads-article';
import { zeekr7xArticle } from '@/lib/zeekr-7x-article';
import { hybridEvArticle } from '@/lib/hybrid-ev-article';
import { atto3Article } from '@/lib/atto3-article';
import { sealArticle } from '@/lib/seal-article';
import { deepalS05Article } from '@/lib/deepal-s05-article';
import { deepalS07Article } from '@/lib/deepal-s07-article';
import { geelyEx2Article } from '@/lib/geely-ex2-article';
import { teslaModelYLArticle } from '@/lib/tesla-model-y-l-article';
import { zeekr009Article } from '@/lib/zeekr-009-article';
import { publicSiteRoutes, siteOrigin } from '@/lib/public-site-routes';

export default function sitemap(): MetadataRoute.Sitemap {
  return publicSiteRoutes.map(path => ({
    url: `${siteOrigin}${path}`,
    // Only publish a modification date when it is maintained with the content.
    ...(path === brakeArticle.path ? { lastModified: brakeArticle.updatedAt } : {}),
    ...(path === batteryArticle.path ? { lastModified: batteryArticle.updatedAt } : {}),
    ...(path === mg4Article.path ? { lastModified: mg4Article.updatedAt } : {}),
    ...(path === camberArticle.path ? { lastModified: camberArticle.updatedAt } : {}),
    ...(path === shockTypesArticle.path ? { lastModified: shockTypesArticle.updatedAt } : {}),
    ...(path === thaiRoadsArticle.path ? { lastModified: thaiRoadsArticle.updatedAt } : {}),
    ...(path === zeekr7xArticle.path ? { lastModified: zeekr7xArticle.updatedAt } : {}),
    ...(path === sealArticle.path ? { lastModified: sealArticle.updatedAt } : {}),
    ...(path === deepalS05Article.path ? { lastModified: deepalS05Article.updatedAt } : {}),
    ...(path === deepalS07Article.path ? { lastModified: deepalS07Article.updatedAt } : {}),
    ...(path === geelyEx2Article.path ? { lastModified: geelyEx2Article.updatedAt } : {}),
    ...(path === teslaModelYLArticle.path ? { lastModified: teslaModelYLArticle.updatedAt } : {}),
    ...(path === zeekr009Article.path ? { lastModified: zeekr009Article.updatedAt } : {}),
    ...(path === atto3Article.path ? { lastModified: atto3Article.updatedAt } : {}),
    ...(path === hybridEvArticle.path ? { lastModified: hybridEvArticle.updatedAt } : {}),
  }));
}
