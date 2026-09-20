import { createHash } from 'node:crypto';
import { parseHTML } from 'linkedom';
import { XMLParser, XMLValidator } from 'fast-xml-parser';

const origin = 'https://evselects.com';
const normalize = value => (value || '').replace(/\s+/g, ' ').trim();
const ignored = 'script,style,head,noscript,template,[hidden],[aria-hidden="true"]';

// Next's imported-image cache URL differs between local and Vercel adapters.
// This text/link gate is not a binary-image review; image verification is separate.
export function imageIdentity(src) {
  if (!src) return src;
  try {
    const url = new URL(src, origin);
    if (!['evselects.com', 'www.evselects.com'].includes(url.hostname)) return src;
    const asset = url.pathname === '/_next/image' ? url.searchParams.get('url') : url.pathname;
    if (asset?.startsWith('/_next/static/')) {
      return asset.replace('/static/immutable/', '/static/').replace(/(\/media\/[^/]+)\.[^.]+\.(avif|webp|png|jpe?g|gif|svg)$/i, '$1.$2');
    }
  } catch { /* Preserve malformed source for subsequent asset checks. */ }
  return src;
}

export function internalTarget(href, route = '/') {
  try {
    const url = new URL(href, origin + route);
    if (!['https:', 'http:'].includes(url.protocol) || !['evselects.com', 'www.evselects.com'].includes(url.hostname)) return null;
    return { path: url.pathname.replace(/\/$/, '') || '/', query: url.search, hash: decodeURIComponent(url.hash.slice(1)) };
  } catch { return null; }
}

// SSR inventory, not a browser, semantic relevance judgement, or human reader review.
export function inspectPage(html, route) {
  const { document } = parseHTML(html);
  const issues = [];
  const add = (code, detail) => issues.push({ code, detail });
  const textOf = element => {
    const copy = element.cloneNode(true);
    for (const node of copy.querySelectorAll(ignored)) node.remove();
    return normalize(copy.textContent);
  };
  const headings = [...document.querySelectorAll('h1,h2,h3,h4,h5,h6')]
    .filter(e => !e.closest(ignored)).map(e => ({ level: Number(e.localName[1]), text: textOf(e) }));
  if (headings.filter(h => h.level === 1).length !== 1) add('h1-count', String(headings.filter(h => h.level === 1).length));
  let previous = 0;
  for (const heading of headings) {
    if (heading.level > previous + 1) add('heading-skip', `H${previous} > H${heading.level}: ${heading.text}`);
    previous = heading.level;
  }
  const links = [];
  for (const a of document.querySelectorAll('a')) {
    if (a.closest(ignored)) continue;
    const href = a.getAttribute('href') || '';
    const text = textOf(a);
    const imageAlt = normalize([...a.querySelectorAll('img')].map(img => img.getAttribute('alt')).join(' '));
    const label = text || imageAlt || normalize(a.getAttribute('aria-label'));
    const target = internalTarget(href, route);
    const global = !a.closest('main') || !!a.closest('nav,footer,header,[role="navigation"]');
    const paragraph = a.closest('p,li,td,dd');
    const context = paragraph ? textOf(paragraph) : '';
    const contextual = !global && !!paragraph && context.length > text.length + 8 && !!target && target.path !== route;
    const scope = global ? 'navigation' : contextual ? 'contextual-candidate' : 'body-navigation';
    const openTarget = a.getAttribute('target') || '';
    const rel = a.getAttribute('rel') || '';
    links.push({ href, text, label, target, scope, openTarget, rel, destinationTitle: '', ...(contextual ? { context } : {}) });
    if (href && target) {
      if (openTarget && openTarget !== '_self') add('internal-new-tab', `${text || label} → ${href}`);
    } else if (/^(https?:)?\/\//i.test(href)) {
      if (openTarget !== '_blank') add('external-not-new-tab', `${text || label} → ${href}`);
      else if (!['noopener', 'noreferrer'].every(token => rel.toLowerCase().split(/\s+/).includes(token))) add('unsafe-new-tab', href);
    }
    if (!href || /^(javascript:|#$)/i.test(href)) add('invalid-href', label || '(empty)');
    if (!label) add('empty-anchor', href);
    if (target && /^(คลิกที่นี่|อ่านต่อ|อ่านเพิ่มเติม|เพิ่มเติม|click here|read more)[\s→↗!]*$/i.test(text)) add('generic-anchor', `${text} → ${href}`);
    if (a.querySelector('a')) add('nested-anchor', href);
  }
  const brands = [];
  function visit(node) {
    if (node.nodeType === 3) {
      const parent = node.parentElement;
      if (parent && !parent.closest(ignored) && /\bEVSELECTS?\b/i.test(node.textContent || '')) {
        const href = parent.closest('a')?.getAttribute('href') || null;
        const target = href ? internalTarget(href, route) : null;
        if (!target || target.path !== '/' || target.query || target.hash) {
          const occurrence = { text: normalize(node.textContent), href };
          brands.push(occurrence);
          add('brand-not-home', `${occurrence.text} → ${href || '(unlinked)'}`);
        }
      }
    } else for (const child of node.childNodes || []) visit(child);
  }
  visit(document.body);
  const contextual = links.filter(link => link.scope === 'contextual-candidate');
  if (route.startsWith('/articles/') && !contextual.length) add('no-contextual-link', 'No inline contextual internal-link candidate in the article body');
  const ids = [...document.querySelectorAll('[id],a[name]')].map(e => e.getAttribute('id') || e.getAttribute('name'));
  const mainText = textOf(document.querySelector('main') || document.body);
  const images = [...document.querySelectorAll('img')].map(e => ({ src: e.getAttribute('src'), alt: e.getAttribute('alt') }));
  const title = document.querySelector('title')?.textContent || '';
  const canonical = document.querySelector('link[rel="canonical"]')?.getAttribute('href') || '';
  const robots = [...document.querySelectorAll('meta[name="robots"],meta[name="googlebot"]')].map(e => e.getAttribute('content')).join(',');
  const fingerprintImages = images.map(img => ({ ...img, src: imageIdentity(img.src) }));
  const fingerprint = createHash('sha256').update(JSON.stringify({ title, canonical, robots, mainText, headings, links, brands, images: fingerprintImages })).digest('hex');
  return { route, title, canonical, robots, headings, links, brands, ids, images, issues, fingerprint, nonLinkableContexts: 'Metadata, JSON-LD, alt/aria attributes and pixels are excluded from brand-text linking.' };
}

export function parseSitemap(xml, kind) {
  if (XMLValidator.validate(xml) !== true) throw new Error('Malformed sitemap XML');
  const doc = new XMLParser({ ignoreAttributes: false }).parse(xml);
  const root = doc[kind];
  if (!root || root['@_xmlns'] !== 'http://www.sitemaps.org/schemas/sitemap/0.9') throw new Error(`Expected ${kind} namespace`);
  const entries = root[kind === 'urlset' ? 'url' : 'sitemap'];
  const items = entries ? (Array.isArray(entries) ? entries : [entries]) : [];
  if (!items.length) throw new Error('Empty sitemap');
  return items.map(entry => {
    if (typeof entry.loc !== 'string' || !entry.loc.startsWith(origin + '/') || new URL(entry.loc).hash || new URL(entry.loc).search) throw new Error('Noncanonical sitemap location');
    return { url: entry.loc, modified: entry.lastmod || null };
  });
}

export function blockingPages(pages, baseline, strict = false) {
  return pages.filter(page => page.issues.length && (strict || baseline[page.route] !== page.fingerprint));
}
