import { siteOrigin } from '@/lib/public-site-routes';

// Public editorial identity; this is not a legal name or a storefront claim.
export const siteName = 'EVSELECTS';
export const editorialOrganization = {
  '@type': 'Organization',
  '@id': `${siteOrigin}/#organization`,
  name: siteName,
  alternateName: ['EVSELECTS.COM'],
  url: `${siteOrigin}/`,
} as const;

export const siteIdentitySchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      ...editorialOrganization,
      sameAs: ['https://www.facebook.com/evselects'],
    },
    {
      '@type': 'WebSite',
      '@id': `${siteOrigin}/#website`,
      name: siteName,
      alternateName: 'EVSELECTS.COM',
      url: `${siteOrigin}/`,
      inLanguage: 'th-TH',
      publisher: { '@id': editorialOrganization['@id'] },
    },
  ],
} as const;
