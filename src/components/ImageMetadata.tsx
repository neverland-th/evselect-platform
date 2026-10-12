import { imageObjectsForPage, serializeImageMetadata } from '@/lib/image-credits';
import kw from '../../public/images/articles/kw-coilover-adjustable.webp';
import tein from '../../public/images/articles/damper-guide/tein-flex-z.webp';
import bilstein from '../../public/images/articles/damper-guide/bilstein-b16.webp';
import bc from '../../public/images/articles/damper-guide/bc-zr.webp';
import ohlins from '../../public/images/articles/damper-guide/ohlins-road-track-tesla.jpg';
import hksS from '../../public/images/articles/damper-guide/hks-hipermax-s.webp';
import hksR from '../../public/images/articles/damper-guide/hks-hipermax-r.webp';
import bangkok from '../../public/images/articles/damper-guide/bangkok-ratchadamri.webp';
import race from '../../public/images/articles/damper-guide/bmw-m4-gt3-spa.webp';

const importedImages = {
  '/images/articles/kw-coilover-adjustable.avif': kw.src,
  '/images/articles/damper-guide/tein-flex-z.webp': tein.src,
  '/images/articles/damper-guide/bilstein-b16.webp': bilstein.src,
  '/images/articles/damper-guide/bc-zr.webp': bc.src,
  '/images/articles/damper-guide/ohlins-road-track-tesla.jpg': ohlins.src,
  '/images/articles/damper-guide/hks-hipermax-s.webp': hksS.src,
  '/images/articles/damper-guide/hks-hipermax-r.webp': hksR.src,
  '/images/articles/damper-guide/bangkok-ratchadamri.webp': bangkok.src,
  '/images/articles/damper-guide/bmw-m4-gt3-spa.webp': race.src,
};

export default function ImageMetadata({ pagePath, assets }: { pagePath: string; assets?: readonly string[] }) {
  // Listing cards can pass an imported derivative URL rather than the original
  // credit-registry path. Resolve it back before filtering, retaining stable IDs.
  const creditedAssets = assets?.map(asset =>
    Object.entries(importedImages).find(([, imported]) => imported === asset)?.[0] ?? asset,
  );
  const images = imageObjectsForPage(pagePath, creditedAssets, importedImages);
  if (!images.length) return null;
  return <script data-image-metadata type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeImageMetadata({ '@context': 'https://schema.org', '@graph': images }) }} />;
}
