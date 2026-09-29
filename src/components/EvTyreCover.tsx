import { getImageProps } from 'next/image';
import { evTyreArticle as article } from '@/lib/ev-tyre-article';

export default function EvTyreCover({ className = 'h-auto w-full', eager = false }: { className?: string; eager?: boolean }) {
  const common = { alt: article.imageAlt, sizes: '(max-width: 1024px) 100vw, 960px' };
  const { props: desktop } = getImageProps({ ...common, src: article.image, width: article.imageWidth, height: article.imageHeight });
  const { props: mobile } = getImageProps({ ...common, src: article.mobileImage, width: article.mobileImageWidth, height: article.mobileImageHeight });

  return <picture>
    <source media="(min-width: 768px)" srcSet={desktop.srcSet} sizes={desktop.sizes} width={article.imageWidth} height={article.imageHeight} />
    {/* getImageProps supplies Next.js optimized sources for native picture art direction. */}
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img {...mobile} alt={article.imageAlt} loading={eager ? 'eager' : 'lazy'} fetchPriority={eager ? 'high' : 'auto'} className={className} />
  </picture>;
}
