import { serializeImageMetadata } from '@/lib/image-credits';
import { siteOrigin } from '@/lib/public-site-routes';
import { getVehicleStyleApplicationSchema } from '@/lib/vehicle-style/structured-data';

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
      getVehicleStyleApplicationSchema(),
    ],
  };
  return <script data-vehicle-style-schema type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeImageMetadata(graph) }} />;
}
