import assert from 'node:assert/strict';
import test from 'node:test';
import { webLinkProps } from '../src/lib/link-policy';

test('Internal absolute URLs, relative routes, fragments and native schemes keep the current browsing context', () => {
  for (const href of ['/', '/articles/test#section', '#japan', 'https://evselects.com/articles', 'https://www.evselects.com/', 'mailto:hello@example.com', 'tel:+6620000000']) {
    assert.deepEqual(webLinkProps(href), { target: undefined, rel: undefined }, href);
  }
});
test('External HTTP and protocol-relative destinations get protected new tabs', () => {
  for (const href of ['https://manufacturer.com/specs', 'http://example.org', '//manufacturer.com/specs', 'https://evselects.com.example.org']) {
    assert.deepEqual(webLinkProps(href), { target: '_blank', rel: 'noopener noreferrer' }, href);
  }
});
