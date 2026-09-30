import assert from 'node:assert/strict';
import test from 'node:test';
import { imageCredits, imageObjectsForPage, serializeImageMetadata } from '../src/lib/image-credits';

test('Image registry has unique local assets and separates sources from licences', () => {
  assert.equal(new Set(imageCredits.map(image => image.id)).size, imageCredits.length);
  assert.equal(new Set(imageCredits.map(image => image.asset)).size, imageCredits.length);
  for (const image of imageCredits) {
    assert.match(image.asset, /^\/images\//);
    assert.ok(image.creditText && image.alt && image.notes.length && image.pages.length);
    if (image.license) {
      assert.equal(new URL(image.license).hostname, 'creativecommons.org');
      assert.ok(image.source && image.originalTitle, 'Preserve original title and source for CC attribution');
    }
  }
});

test('Image metadata does not invent ownership or turn a product page into a licence', () => {
  const images = imageObjectsForPage('/articles/ev-damper-tuning-bump-rebound-guide');
  const kw = images.find(image => image.contentUrl.endsWith('kw-coilover-adjustable.avif'))!;
  assert.ok(kw);
  assert.equal(kw.creator, undefined);
  assert.equal(kw.license, undefined);
  assert.equal(kw.isBasedOn, undefined, 'Owner-supplied photo is not asserted to come from a KW product page');
  assert.ok(kw.about?.url.includes('kwsuspensions.com'));
  const tein = images.find(image => image.creditText === 'TEIN')!;
  assert.equal(tein.creator, undefined);
  assert.equal(tein.license, undefined);
  assert.equal(tein.isBasedOn, 'https://www.tein.com/products/flex_z.html');
});

test('Page-specific metadata retains known creator and supports actual imported-image URLs', () => {
  const asset = '/images/articles/ev-tyre-michelin-audi.jpg';
  const home = imageObjectsForPage('/', [asset]);
  assert.equal(home.length, 1);
  assert.equal(home[0].creator?.name, 'TaurusEmerald');
  assert.equal(home[0].license, 'https://creativecommons.org/licenses/by-sa/4.0/');
  assert.deepEqual(imageObjectsForPage('/not-a-page'), []);
  assert.deepEqual(imageObjectsForPage('/', []), []);
  const imported = '/images/articles/damper-guide/bangkok-ratchadamri.webp';
  const translated = imageObjectsForPage('/articles/ev-damper-tuning-bump-rebound-guide', [imported], { [imported]: '/_next/static/media/bangkok-ratchadamri.test.webp' });
  assert.equal(translated[0].contentUrl, 'https://evselects.com/_next/static/media/bangkok-ratchadamri.test.webp');
  assert.equal(translated[0].creator?.name, 'kallerna');
});

test('Untrusted metadata text cannot close the JSON-LD script', () => {
  const text = '</script><script>alert(1)</script>';
  const serialized = serializeImageMetadata({description:text});
  assert.ok(!serialized.includes('<'));
  assert.equal(JSON.parse(serialized).description, text);
});
