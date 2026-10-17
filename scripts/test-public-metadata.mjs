import assert from 'node:assert/strict';
import test from 'node:test';
import { parseHTML } from 'linkedom';
import { parseSitemap } from './lib/content-links.mjs';

const base = process.env.BASE_URL;
assert.ok(base, 'Set BASE_URL to the actual built or deployed site');
const urls = parseSitemap(await (await fetch(new URL('/sitemap.xml', base))).text(), 'urlset');

test('Every published page has concise metadata and one consistent site name', async () => {
  for (const entry of urls) {
    const route = new URL(entry.url).pathname;
    const response = await fetch(new URL(route, base));
    assert.equal(response.status, 200, route);
    const { document } = parseHTML(await response.text());
    assert.doesNotMatch(document.title, /\bEVSELECT\b/, route);
    assert.match(document.title, /EVSELECTS/, route);
    // These are editorial display budgets, not Google ranking requirements.
    assert.ok(document.title.length <= 65, `${route}: title ${document.title.length}`);
    const description = document.querySelector('meta[name="description"]')?.getAttribute('content');
    assert.ok(description && description.length <= 160, `${route}: description ${description?.length}`);
    assert.doesNotMatch(description, /\bEVSELECT\b/, route);
    if (!route.endsWith('.html')) {
      assert.equal(document.querySelector('meta[property="og:site_name"]')?.getAttribute('content'), 'EVSELECTS', route);
      assert.equal(document.querySelector('meta[property="og:title"]')?.getAttribute('content'), document.title, route);
      const nodes = [...document.querySelectorAll('script[type="application/ld+json"]')].flatMap(s => {
        const json = JSON.parse(s.textContent); return json['@graph'] || [json];
      });
      const identity = nodes.find(n => n['@type'] === 'Organization' && n['@id'] === 'https://evselects.com/#organization');
      assert.equal(identity?.name, 'EVSELECTS', route);
    }
  }
});

test('Home accessory CTA delivers actual interior selection advice, not just vehicle photographs', async () => {
  const { document } = parseHTML(await (await fetch(base)).text());
  const guide = document.getElementById('tesla-interior-guide');
  assert.ok(guide);
  assert.equal(guide.querySelectorAll('ul > li').length, 3);
  for (const topic of ['พรมปูพื้น', 'ถาดคอนโซล', 'ที่เก็บของ', 'พวงมาลัยขวา', 'ไม่ใช่สินค้าที่เราเปิดขาย']) assert.ok(guide.textContent.includes(topic));
  const cta = document.querySelector('#ev-upgrade-map a[href="#tesla-interior-guide"]');
  assert.equal(cta?.textContent.trim(), 'ดูวิธีเลือกของแต่งภายใน Tesla');
  for (const a of guide.querySelectorAll('a[href^="https:"]')) {
    assert.equal(new URL(a.href).hostname, 'shop.tesla.com');
    assert.equal(a.getAttribute('target'), '_blank');
    assert.equal(a.getAttribute('rel'), 'noopener noreferrer');
  }
  assert.equal(document.querySelectorAll('#tesla-accessories article').length, 2, 'Preserve the existing photo card layout');
  assert.equal(document.querySelectorAll('link[rel="stylesheet"]').length, 0, 'Built Home receives styles inline');
  assert.ok(document.querySelector('img[alt="EVSELECTS"]')?.getAttribute('src').includes('logo-evselects'));
});

test('Home prioritizes the hero without removing off-screen content or weakening CSP', async () => {
  const response = await fetch(base);
  const { document } = parseHTML(await response.text());
  const hero = document.querySelector('main img');
  const preload = [...document.querySelectorAll('link[rel="preload"][as="image"]')]
    .find(link => (link.getAttribute('imagesrcset') || link.getAttribute('imageSrcSet') || '').includes('tesla-model-3-white-user'));
  assert.ok(preload, 'Responsive hero preload is in server HTML');
  assert.equal(hero.getAttribute('loading'), 'eager');
  assert.equal(hero.getAttribute('decoding'), 'sync', 'Present the primary image with the initial paint');
  assert.equal(hero.getAttribute('width'), '1176');
  assert.equal(hero.getAttribute('height'), '733');
  for (const id of ['ev-accessories', 'tesla-accessories', 'home-faq', 'launch']) {
    assert.ok(document.getElementById(id)?.textContent.trim().length > 150, `${id} stays readable in HTML`);
  }
  assert.ok(document.querySelector('.home-content'));
  assert.ok(document.querySelector('link[rel="icon"][href="/logo-evselects.png"]'), 'Corrected EVSELECTS favicon metadata');
  const css = [...document.querySelectorAll('style')].map(style => style.textContent).join('\n');
  const preloadUrls = new Set([...document.querySelectorAll('link[rel="preload"][as="font"]')].map(link => link.getAttribute('href')));
  const heroFaces = [...css.matchAll(/@font-face\{([^}]+)\}/g)].map(match => match[1])
    .filter(face => face.includes('font-family:Prompt;') && face.includes('font-weight:800;'));
  for (const subset of ['U+E01-E5B', 'U+??']) {
    const face = heroFaces.find(face => face.includes(subset));
    assert.ok(face, `Keep the original Prompt 800 ${subset} font`);
    assert.ok(preloadUrls.has(face.match(/url\(([^)]+)\)/)?.[1]), `Preload ${subset} instead of a delayed font request`);
  }
  assert.equal(response.headers.get('content-security-policy'), 'upgrade-insecure-requests');
  const report = response.headers.get('content-security-policy-report-only');
  assert.ok(report?.includes("object-src 'none'"));
  assert.ok(!report.includes('upgrade-insecure-requests'), 'Do not send the ignored report-only directive');
});

test('Toolbar images have scoped report-only permissions without relaxing the studio policy', async () => {
  const home = await fetch(base);
  const report = home.headers.get('content-security-policy-report-only');
  const images = report?.split(';').map(value => value.trim()).find(value => value.startsWith('img-src '));
  assert.ok(images?.includes('https://vercel.live'));
  assert.ok(images?.includes('https://vercel.com'));
  assert.equal(home.headers.get('content-security-policy'), 'upgrade-insecure-requests');
  const studio = await fetch(new URL('/vehicle-style/studio', base));
  assert.equal(studio.status, 401, 'Unauthenticated studio still requires its access code');
  const policy = studio.headers.get('content-security-policy');
  for (const directive of ["script-src 'self'", "img-src 'self' data: blob:", "connect-src 'self'", "frame-ancestors 'none'"]) {
    assert.ok(policy?.includes(directive), `Preserve studio ${directive}`);
  }
  assert.doesNotMatch(policy, /vercel\.live|vercel\.com|unsafe-inline|unsafe-eval/);
  // next start proxies the upstream response headers differently from Vercel.
  // frame-ancestors is checked above on both; require the edge override live.
  if (!['127.0.0.1', 'localhost', '[::1]'].includes(new URL(base).hostname)) {
    assert.equal(studio.headers.get('x-frame-options'), 'DENY');
  }
});
