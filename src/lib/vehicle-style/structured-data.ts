import { siteOrigin } from '@/lib/public-site-routes';
import { vehicleStylePublicInfo as info } from './public-info';

// Shared by the visible pages and the optional agent discovery manifest.
export function getVehicleStyleApplicationSchema() {
  const guideUrl = `${siteOrigin}/vehicle-style`;
  return {
    '@type': 'WebApplication',
    '@id': `${guideUrl}#app`,
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
  };
}
