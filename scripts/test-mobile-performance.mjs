import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { parseHTML } from 'linkedom';

const base = process.env.BASE_URL;
assert.ok(base, 'Set BASE_URL to a built or live origin');

test('Home includes the studio geometry without a render-blocking CSS waterfall', async () => {
  const response = await fetch(base);
  assert.equal(response.status, 200);
  const { document } = parseHTML(await response.text());
  assert.equal(document.querySelectorAll('link[rel="stylesheet"]').length, 0);
  const css = [...document.querySelectorAll('style')].map(style => style.textContent).join('\n');
  assert.match(css, /\.lt-app/);
  assert.match(css, /\.lt-stage\{[^}]*aspect-ratio:12\/7/);
  // Next's streamed Suspense payload can be outside its destination section
  // until React places it; the complete interface must still be in raw HTML.
  assert.ok(document.querySelector('.lt-app'), 'The real interface is server rendered, not removed for a score');
  assert.equal(document.querySelectorAll('canvas[width="2304"][height="1344"]').length, 2);
  assert.ok(document.querySelector('[data-vehicle-style-summary]')?.textContent.includes('โควตารวม 5 ครั้งต่อวัน'));
  assert.ok(document.querySelector('script[data-vehicle-style-schema]'));
  assert.equal(document.querySelector('[data-home-hero] a[href="#vehicle-style"]')?.textContent.trim(), 'ลองแต่งรถฟรี');
});

test('Off-screen canvas/image and status work is visibility gated with interaction and browser fallbacks', async () => {
  const source = await readFile(new URL('../src/components/vehicle-style/EVSELECTSStudio.tsx', import.meta.url), 'utf8');
  assert.match(source, /IntersectionObserver/);
  assert.match(source, /rootMargin: '0px'/);
  assert.match(source, /if \(!\('IntersectionObserver' in window\)\)/);
  assert.match(source, /onPointerDownCapture=\{\(\) => setActive\(true\)\}/);
  assert.match(source, /onFocusCapture=\{\(\) => setActive\(true\)\}/);
  assert.match(source, /if \(active\) void refreshStatus\(\)/);
  for (const dependencies of ['source, isDemo, active', 'carbonDemo, active']) {
    assert.ok(source.includes(`}, [${dependencies}]);`));
  }
  assert.equal((source.match(/if \(!active\) return;/g) || []).length, 3);
  assert.match(source, /return \(\) => observer\.disconnect\(\)/);
});

test('Keep all original Prompt weights while preloading only first-screen font faces', async () => {
  const { document } = parseHTML(await (await fetch(base)).text());
  const css = [...document.querySelectorAll('style')].map(style => style.textContent).join('\n');
  const preloaded = new Set([...document.querySelectorAll('link[rel="preload"][as="font"]')].map(link => link.getAttribute('href')));
  const faces = [...css.matchAll(/@font-face\{([^}]+)\}/g)].map(match => match[1]).filter(face => face.includes('font-family:Prompt;'));
  assert.equal(preloaded.size, 8, 'Four first-screen weights, each in Thai and Latin');
  for (const weight of ['300', '400', '500', '600', '700', '800']) {
    for (const subset of ['U+E01-E5B', 'U+??']) {
      const face = faces.find(face => face.includes(`font-weight:${weight};`) && face.includes(subset));
      assert.ok(face, `Original Prompt ${weight} ${subset} remains available`);
      const href = face.match(/url\(([^)]+)\)/)?.[1];
      assert.equal(preloaded.has(href), !['300', '500'].includes(weight), `Preload policy for ${weight} ${subset}`);
    }
  }
});
