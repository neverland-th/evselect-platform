import Link from 'next/link';

/** For visible, non-anchor UI labels only; never use inside an existing link. */
export default function BrandText({ text }: { text: string }) {
  return <>{text.split(/(\bEVSELECTS?\b)/g).map((part, index) => /^EVSELECTS?$/.test(part)
    ? <Link key={index} href="/" className="underline decoration-current/30 underline-offset-4 hover:decoration-current">{part}</Link>
    : part)}</>;
}
