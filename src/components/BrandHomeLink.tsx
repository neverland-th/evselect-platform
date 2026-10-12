import Link from 'next/link';

/** Use only for visible brand text outside an existing link. */
export default function BrandHomeLink() {
  return <Link prefetch={false} href="/" className="underline decoration-current/30 underline-offset-4 hover:text-lime-800">EVSELECTS</Link>;
}
