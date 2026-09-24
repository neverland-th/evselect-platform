/** Resolve destinations against the public origin, never against the preview host. */
export function webLinkProps(href: string) {
  try {
    const url = new URL(href, 'https://evselects.com');
    if (['http:', 'https:'].includes(url.protocol) && !['evselects.com', 'www.evselects.com'].includes(url.hostname)) {
      return { target: '_blank' as const, rel: 'noopener noreferrer' };
    }
  } catch { /* Invalid hrefs are rejected by the publication audit. */ }
  return { target: undefined, rel: undefined };
}
