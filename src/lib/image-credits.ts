import records from '@/data/image-credits.json';
import { siteOrigin } from '@/lib/public-site-routes';

export type ImageCreditRecord = {
  id: string; asset: string; alt: string; pages: string[]; creditText: string;
  creator?: string; source?: string; reference?: string; originalTitle?: string;
  license?: string; licenseName?: string; notes: string[];
};

export const imageCredits: readonly ImageCreditRecord[] = records;

export function imageObjectsForPage(pagePath: string, assets?: readonly string[], contentUrls: Record<string, string> = {}) {
  return imageCredits.filter(image => image.pages.includes(pagePath) && (!assets || assets.includes(image.asset))).map(image => ({
    '@type': 'ImageObject',
    '@id': `${siteOrigin}${image.asset}#image`,
    contentUrl: new URL(contentUrls[image.asset] || image.asset, siteOrigin).href,
    name: image.originalTitle || image.alt,
    description: image.alt,
    creditText: image.creditText,
    ...(image.creator ? { creator: { '@type': 'Person', name: image.creator } } : {}),
    ...(image.source ? { isBasedOn: image.source } : {}),
    ...(image.reference ? { about: { '@type': 'Thing', url: image.reference } } : {}),
    ...(image.license ? { license: image.license } : {}),
    mainEntityOfPage: `${siteOrigin}${pagePath}`,
    subjectOf: { '@type': 'WebPage', url: `${siteOrigin}/image-credits#${image.id}` },
  }));
}

// Metadata is data, not markup. Never trust a source string inside a script tag.
export function serializeImageMetadata(value: unknown) {
  return JSON.stringify(value).replace(/</g, '\\u003c');
}
