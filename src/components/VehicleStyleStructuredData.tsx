import { serializeImageMetadata } from '@/lib/image-credits';
import { siteOrigin } from '@/lib/public-site-routes';
import { vehicleStylePublicInfo as info } from '@/lib/vehicle-style/public-info';

// One app entity across its embedded Home experience and public guide.
// No ratings or reviews are invented to satisfy Google's rich-result requirements.
export default function VehicleStyleStructuredData({ pagePath }: { pagePath: '/' | '/vehicle-style' }) {
  const guideUrl = `${siteOrigin}/vehicle-style`;
  const appId = `${guideUrl}#app`;
  const pageUrl = new URL(pagePath, siteOrigin).href;
  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        inLanguage: 'th-TH',
        isPartOf: { '@id': `${siteOrigin}/#website` },
        ...(pagePath === '/vehicle-style'
          ? { mainEntity: { '@id': appId } }
          : { mentions: { '@id': appId } }),
      },
      {
        '@type': 'WebApplication',
        '@id': appId,
        name: info.name,
        alternateName: 'Vehicle Style',
        url: guideUrl,
        description: `${info.description} ${info.trial} · ${info.usage} ${info.disclaimer}`,
        inLanguage: 'th-TH',
        applicationCategory: 'DesignApplication',
        browserRequirements: 'ต้องเปิด JavaScript และเชื่อมต่ออินเทอร์เน็ต',
        publisher: { '@id': `${siteOrigin}/#organization` },
        mainEntityOfPage: { '@id': `${guideUrl}#webpage` },
        featureList: [...info.features],
        isAccessibleForFree: true,
        offers: {
          '@type': 'Offer',
          price: 0,
          priceCurrency: 'THB',
          description: `${info.trial} · ${info.usage}`,
          url: `${siteOrigin}/#vehicle-style`,
        },
      },
    ],
  };
  return <script data-vehicle-style-schema type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeImageMetadata(graph) }} />;
}
