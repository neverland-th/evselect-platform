import assert from 'node:assert/strict';
import { afterEach, test } from 'node:test';
import {
  analyticsUrl, CONSENT_MAX_AGE_MS, CONSENT_STORAGE_KEY, disableAnalytics,
  getAnalyticsMeasurementId, initializeAnalytics, intentDestination, isPrivateAnalyticsPath, parseConsent, pauseAnalytics,
  saveConsent, trackIntent,
} from '../src/lib/analytics';

const originalWindow = Object.getOwnPropertyDescriptor(globalThis, 'window');
const originalDocument = Object.getOwnPropertyDescriptor(globalThis, 'document');

function browserHarness(analytics: boolean | null = null, hostname = 'evselects.com') {
  const storage = new Map<string, string>();
  if (analytics !== null) storage.set(CONSENT_STORAGE_KEY, JSON.stringify({ version: 1, analytics, updatedAt: Date.now() }));
  const events: string[] = [];
  const cookies: string[] = [];
  const browser = {
    location: { hostname, href: `https://${hostname}/articles/ev-tyre-and-coilover-selection-guide?utm_source=facebook&utm_medium=social&utm_campaign=ev_tyres&email=private%40example.com#phone` },
    localStorage: {
      getItem: (key: string) => storage.get(key) ?? null,
      setItem: (key: string, value: string) => storage.set(key, value),
    },
    dispatchEvent: (event: Event) => { events.push(event.type); return true; },
  } as unknown as Window;
  Object.defineProperty(globalThis, 'window', { configurable: true, value: browser });
  Object.defineProperty(globalThis, 'document', { configurable: true, value: {
    referrer: 'https://www.facebook.com/?email=private@example.com',
    get cookie() { return 'evselect_ga=abc; evselect_ga_ABC123=test; unrelated=keep'; },
    set cookie(value: string) { cookies.push(value); },
  } });
  const commands = () => (browser.dataLayer || []).map(value => Array.from(value as ArrayLike<unknown>));
  return { browser, storage, commands, events, cookies };
}

afterEach(() => {
  if (originalWindow) Object.defineProperty(globalThis, 'window', originalWindow);
  else Reflect.deleteProperty(globalThis, 'window');
  if (originalDocument) Object.defineProperty(globalThis, 'document', originalDocument);
  else Reflect.deleteProperty(globalThis, 'document');
});

test('missing, malformed, expired and future consent all fail closed', () => {
  const now = 1_000_000_000_000;
  for (const value of [null, '', 'bad', 'null', '{}', JSON.stringify({ version: 1, analytics: 'yes', updatedAt: now })]) assert.equal(parseConsent(value, now), null);
  assert.equal(parseConsent(JSON.stringify({ version: 1, analytics: true, updatedAt: now - CONSENT_MAX_AGE_MS }), now), null);
  assert.equal(parseConsent(JSON.stringify({ version: 1, analytics: true, updatedAt: now + 1 }), now), null);
  assert.deepEqual(parseConsent(JSON.stringify({ version: 1, analytics: false, updatedAt: now }), now), { version: 1, analytics: false, updatedAt: now });
});

test('measurement ID requires Vercel production, production build and valid GA4 ID', () => {
  const env = { NODE_ENV: 'production', VERCEL_ENV: 'production', GA4_MEASUREMENT_ID: 'G-ABC1234567' };
  assert.equal(getAnalyticsMeasurementId(env), 'G-ABC1234567');
  assert.equal(getAnalyticsMeasurementId({ ...env, VERCEL_ENV: 'preview' }), null);
  assert.equal(getAnalyticsMeasurementId({ ...env, NODE_ENV: 'development' }), null);
  assert.equal(getAnalyticsMeasurementId({ ...env, VERCEL_ENV: undefined }), null);
  assert.equal(getAnalyticsMeasurementId({ ...env, GA4_MEASUREMENT_ID: 'GTM-ABC123' }), null);
  assert.equal(getAnalyticsMeasurementId({ ...env, GA4_MEASUREMENT_ID: undefined }), null);
});

test('payload URLs discard free text, personal values and fragments while retaining campaign IDs', () => {
  assert.equal(analyticsUrl('https://evselects.com/articles/ev-tyres?utm_source=facebook&utm_campaign=ev_tyres&email=private%40example.com&phone=0812345678&q=private#private'), 'https://evselects.com/articles/ev-tyres?utm_source=facebook&utm_campaign=ev_tyres');
  assert.equal(analyticsUrl('https://evselects.com/?utm_source=private%40example.com&utm_campaign=0812345678'), 'https://evselects.com/');
  assert.equal(analyticsUrl('https://evselects.com/private%40example.com'), 'https://evselects.com/');
  assert.equal(analyticsUrl('javascript:alert(1)'), '');
});

test('intent detection accepts only exact supported destinations', () => {
  assert.equal(intentDestination('https://m.me/evselects?email=private@example.com'), 'messenger');
  assert.equal(intentDestination('https://s.shopee.co.th/abc'), 'shopee');
  assert.equal(intentDestination('https://www.facebook.com/evselects'), null);
  assert.equal(intentDestination('https://m.me.evil.example/evselects'), null);
  assert.equal(intentDestination('https://shopee.co.th.evil.example/'), null);
  assert.equal(intentDestination('javascript:alert(1)'), null);
});

test('no Google initialization or event queue before consent or after rejection', () => {
  for (const consent of [null, false]) {
    const { browser } = browserHarness(consent);
    assert.equal(initializeAnalytics('G-ABC1234567'), false);
    trackIntent('https://m.me/evselects');
    assert.equal(browser.dataLayer, undefined);
    assert.equal(browser.evselectAnalyticsId, undefined);
  }
});

test('preview and local hosts cannot start tracking even with consent', () => {
  for (const hostname of ['localhost', '127.0.0.1', 'evselect-platform-preview.vercel.app']) {
    const { browser } = browserHarness(true, hostname);
    assert.equal(initializeAnalytics('G-ABC1234567'), false);
    assert.equal(browser.dataLayer, undefined);
  }
});

test('internal routes are scoped out and pausing suppresses subsequent intent events', () => {
  for (const path of ['/vehicles', '/products', '/product/private-id', '/export', '/categories/edit']) assert.equal(isPrivateAnalyticsPath(path), true);
  for (const path of ['/', '/articles/zeekr-x-review', '/privacy', '/contact']) assert.equal(isPrivateAnalyticsPath(path), false);
  const { commands, cookies } = browserHarness(true);
  initializeAnalytics('G-ABC1234567');
  assert.equal(pauseAnalytics(), true);
  trackIntent('https://m.me/evselects');
  assert.equal(commands().length, 4);
  assert.equal(cookies.length, 0);
});

test('consent initializes once, leaves ads denied and relies on automatic page views', () => {
  const { commands } = browserHarness(true);
  assert.equal(initializeAnalytics('G-ABC1234567'), true);
  assert.equal(initializeAnalytics('G-ABC1234567'), false);
  const entries = commands();
  assert.equal(entries.length, 4);
  assert.deepEqual(entries[0], ['consent', 'default', { analytics_storage: 'denied', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' }]);
  assert.equal((entries[1][2] as Record<string, string>).analytics_storage, 'granted');
  assert.equal((entries[1][2] as Record<string, string>).ad_storage, 'denied');
  assert.equal(entries.filter(value => value[0] === 'config').length, 1);
  assert.equal(entries.filter(value => value[0] === 'event' && value[1] === 'page_view').length, 0);
  const config = entries[3][2] as Record<string, unknown>;
  assert.equal(config.allow_google_signals, false);
  assert.equal(config.cookie_expires, CONSENT_MAX_AGE_MS / 1000);
  assert.equal(config.cookie_update, false);
  assert.doesNotMatch(JSON.stringify(config), /private|email|phone/);
});

test('intent payload counts a click, never a lead/purchase or raw destination text', () => {
  const { commands } = browserHarness(true);
  initializeAnalytics('G-ABC1234567');
  trackIntent('https://m.me/evselects?message=private&email=private@example.com');
  const entry = commands().at(-1)!;
  assert.equal(entry[1], 'messenger_click');
  assert.equal((entry[2] as Record<string, unknown>).article_slug, 'ev-tyre-and-coilover-selection-guide');
  assert.doesNotMatch(JSON.stringify(entry), /private|email|message=|generate_lead|purchase/);
});

test('withdrawal disables immediately, deletes only owned cookies and queues no denied ping', () => {
  const { browser, commands, cookies } = browserHarness(true);
  initializeAnalytics('G-ABC1234567');
  assert.equal(disableAnalytics(), true);
  assert.equal(browser['ga-disable-G-ABC1234567'], true);
  assert.equal(saveConsent(false), true);
  trackIntent('https://m.me/evselects');
  assert.equal(commands().length, 4);
  assert.ok(cookies.some(value => value.startsWith('evselect_ga=')));
  assert.ok(cookies.some(value => value.startsWith('evselect_ga_ABC123=')));
  assert.ok(cookies.every(value => !value.startsWith('unrelated=')));
  assert.equal(parseConsent(browser.localStorage.getItem(CONSENT_STORAGE_KEY))?.analytics, false);
});

test('blocked browser storage cannot grant analytics consent', () => {
  const { browser } = browserHarness();
  browser.localStorage.setItem = () => { throw new Error('storage blocked'); };
  assert.equal(saveConsent(true), false);
  assert.equal(initializeAnalytics('G-ABC1234567'), false);
});
