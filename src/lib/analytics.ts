export const CONSENT_STORAGE_KEY = 'evselect-consent-v1';
export const CONSENT_CHANGED_EVENT = 'evselect:consent-changed';
export const CONSENT_SETTINGS_EVENT = 'evselect:consent-settings';
export const CONSENT_MAX_AGE_MS = 180 * 24 * 60 * 60 * 1000;

export type AnalyticsConsent = { version: 1; analytics: boolean; updatedAt: number };
export type GoogleTag = (...args: unknown[]) => void;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: GoogleTag;
    evselectAnalyticsId?: string;
    [key: `ga-disable-${string}`]: boolean;
  }
}

export function parseConsent(value: string | null, now = Date.now()): AnalyticsConsent | null {
  if (!value) return null;
  try {
    const record = JSON.parse(value);
    if (record.version !== 1 || typeof record.analytics !== 'boolean' ||
      typeof record.updatedAt !== 'number' || !Number.isFinite(record.updatedAt) ||
      record.updatedAt > now || now - record.updatedAt >= CONSENT_MAX_AGE_MS) return null;
    return { version: 1, analytics: record.analytics, updatedAt: record.updatedAt };
  } catch {
    return null;
  }
}

export function getAnalyticsMeasurementId(env: { NODE_ENV?: string; VERCEL_ENV?: string; GA4_MEASUREMENT_ID?: string }): string | null {
  const id = env.GA4_MEASUREMENT_ID?.trim();
  return env.NODE_ENV === 'production' && env.VERCEL_ENV === 'production' && id && /^G-[A-Z0-9]{6,}$/.test(id) ? id : null;
}

export function isProductionHostname(hostname: string): boolean {
  return hostname === 'evselects.com' || hostname === 'www.evselects.com';
}

export function readConsentValue(): string | null {
  if (typeof window === 'undefined') return null;
  try { return window.localStorage.getItem(CONSENT_STORAGE_KEY); } catch { return null; }
}

export function saveConsent(analytics: boolean): boolean {
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify({ version: 1, analytics, updatedAt: Date.now() }));
    window.dispatchEvent(new Event(CONSENT_CHANGED_EVENT));
    return true;
  } catch { return false; }
}

export function subscribeConsent(callback: () => void): () => void {
  const onStorage = (event: StorageEvent) => {
    if (event.key === CONSENT_STORAGE_KEY || event.key === null) callback();
  };
  window.addEventListener(CONSENT_CHANGED_EVENT, callback);
  window.addEventListener('storage', onStorage);
  return () => {
    window.removeEventListener(CONSENT_CHANGED_EVENT, callback);
    window.removeEventListener('storage', onStorage);
  };
}

function safeIdentifier(value: string): boolean {
  return /^[a-z0-9_-]{1,100}$/i.test(value) && !/\d{7,}/.test(value);
}

// Only fixed public paths and controlled campaign identifiers enter custom payloads.
// GA4 stream-level redaction also protects Google's automatic history events.
export function analyticsUrl(raw: string): string {
  try {
    const url = new URL(raw);
    if (!['https:', 'http:'].includes(url.protocol)) return '';
    if (!url.pathname.split('/').filter(Boolean).every(safeIdentifier)) return `${url.origin}/`;
    const clean = new URL(url.origin + url.pathname);
    for (const key of ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term']) {
      const value = url.searchParams.get(key);
      if (value && safeIdentifier(value)) clean.searchParams.set(key, value);
    }
    return clean.href;
  } catch { return ''; }
}

export function intentDestination(raw: string): 'messenger' | 'shopee' | null {
  try {
    const url = new URL(raw);
    if (url.protocol !== 'https:') return null;
    if (url.hostname === 'm.me' || url.hostname === 'messenger.com' || url.hostname === 'www.messenger.com') return 'messenger';
    if (url.hostname === 'shopee.co.th' || url.hostname === 'www.shopee.co.th' || url.hostname === 's.shopee.co.th' || url.hostname === 'shope.ee') return 'shopee';
    return null;
  } catch { return null; }
}

export function initializeAnalytics(id: string): boolean {
  if (!/^G-[A-Z0-9]{6,}$/.test(id) || !isProductionHostname(window.location.hostname) ||
    !parseConsent(readConsentValue())?.analytics || window.evselectAnalyticsId) return false;
  window[`ga-disable-${id}`] = false;
  window.dataLayer = window.dataLayer || [];
  // Keep Google's documented gtag command format (an arguments tuple).
  // eslint-disable-next-line prefer-rest-params
  window.gtag = function () { window.dataLayer!.push(arguments); };
  window.gtag('consent', 'default', {
    analytics_storage: 'denied', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied',
  });
  window.gtag('consent', 'update', {
    analytics_storage: 'granted', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied',
  });
  window.gtag('js', new Date());
  window.gtag('config', id, {
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
    cookie_prefix: 'evselect',
    cookie_expires: CONSENT_MAX_AGE_MS / 1000,
    cookie_update: false,
    page_location: analyticsUrl(window.location.href),
    page_referrer: analyticsUrl(document.referrer),
  });
  window.evselectAnalyticsId = id;
  return true;
}

export function trackIntent(raw: string): void {
  const id = window.evselectAnalyticsId;
  const destination = intentDestination(raw);
  if (!id || !destination || window[`ga-disable-${id}`] || !parseConsent(readConsentValue())?.analytics) return;
  const page = new URL(analyticsUrl(window.location.href));
  const articleSlug = page.pathname.startsWith('/articles/') ? page.pathname.split('/')[2] : undefined;
  window.gtag?.('event', `${destination}_click`, {
    send_to: id, destination, page_path: page.pathname,
    page_location: page.href,
    ...(articleSlug ? { article_slug: articleSlug } : {}),
  });
}

export function disableAnalytics(): boolean {
  const id = window.evselectAnalyticsId;
  if (id) window[`ga-disable-${id}`] = true;
  // Do not send a denied-consent ping. Reload removes Google's existing timers and listeners.
  const domains = ['', window.location.hostname, `.${window.location.hostname}`, '.evselects.com'];
  for (const cookie of document.cookie.split(';')) {
    const name = cookie.split('=')[0].trim();
    if (!/^evselect_ga(?:_|$)/.test(name)) continue;
    for (const domain of domains) document.cookie = `${name}=; Max-Age=0; Path=/;${domain ? ` Domain=${domain};` : ''} SameSite=Lax`;
  }
  return Boolean(id);
}
