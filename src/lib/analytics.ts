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

export function isPrivateAnalyticsPath(pathname: string): boolean {
  return ['/categories', '/vehicles', '/export', '/products', '/product', '/fitment'].some(path => pathname === path || pathname.startsWith(`${path}/`));
}

export function readConsentValue(): string | null {
  if (typeof window === 'undefined') return null;
  try {
    const value = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    return parseConsent(value) ? value : null;
  } catch { return null; }
}

export function saveConsent(analytics: boolean): boolean {
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify({ version: 1, analytics, updatedAt: Date.now() }));
    window.dispatchEvent(new Event(CONSENT_CHANGED_EVENT));
    return true;
  } catch { return false; }
}

export function subscribeConsent(callback: () => void): () => void {
  let timer: ReturnType<typeof setTimeout> | undefined;
  const recheck = () => {
    clearTimeout(timer);
    const consent = parseConsent(readConsentValue());
    // Stop collection before notifying React, including when the tab wakes after expiry.
    if (!consent?.analytics) disableAnalytics();
    callback();
    if (consent) {
      // Browsers clamp delays above ~24.8 days; re-arm until the 180-day boundary.
      timer = setTimeout(recheck, Math.min(consent.updatedAt + CONSENT_MAX_AGE_MS - Date.now(), 2_147_483_647));
    }
  };
  const onStorage = (event: StorageEvent) => {
    if (event.key === CONSENT_STORAGE_KEY || event.key === null) recheck();
  };
  window.addEventListener(CONSENT_CHANGED_EVENT, recheck);
  window.addEventListener('storage', onStorage);
  window.addEventListener('focus', recheck);
  document.addEventListener('visibilitychange', recheck);
  recheck();
  return () => {
    clearTimeout(timer);
    window.removeEventListener(CONSENT_CHANGED_EVENT, recheck);
    window.removeEventListener('storage', onStorage);
    window.removeEventListener('focus', recheck);
    document.removeEventListener('visibilitychange', recheck);
  };
}

function safeIdentifier(value: string): boolean {
  return /^[a-z0-9_-]{1,100}$/i.test(value) && !/\d{7,}/.test(value);
}

// Custom payloads retain identifier-shaped campaign values, not a campaign allowlist.
// Automatic Google events need separate stream-level review; this is not a PII guarantee.
export function analyticsUrl(raw: string): string {
  try {
    const url = new URL(raw);
    if (!['https:', 'http:'].includes(url.protocol)) return '';
    if (isProductionHostname(url.hostname) && isPrivateAnalyticsPath(url.pathname)) return `${url.origin}/`;
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
    isPrivateAnalyticsPath(window.location.pathname) ||
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
  if (!id || !destination || window[`ga-disable-${id}`] || !parseConsent(readConsentValue())?.analytics ||
    !isProductionHostname(window.location.hostname) || isPrivateAnalyticsPath(window.location.pathname)) return;
  const location = analyticsUrl(window.location.href);
  if (!location) return;
  const page = new URL(location);
  const articleSlug = page.pathname.startsWith('/articles/') ? page.pathname.split('/')[2] : undefined;
  window.gtag?.('event', `${destination}_click`, {
    send_to: id, destination, page_path: page.pathname,
    page_location: page.href,
    ...(articleSlug ? { article_slug: articleSlug } : {}),
  });
}

export function pauseAnalytics(): boolean {
  const id = window.evselectAnalyticsId;
  if (id) window[`ga-disable-${id}`] = true;
  return Boolean(id);
}

export function guardAnalyticsNavigation(): () => void {
  const guardPath = (raw: string | URL | null | undefined) => {
    if (raw == null) return;
    const url = new URL(raw, window.location.href);
    if (url.origin === window.location.origin && isPrivateAnalyticsPath(url.pathname)) pauseAnalytics();
  };
  const onClick = (event: MouseEvent) => {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || !(event.target instanceof Element)) return;
    const anchor = event.target.closest('a[href]');
    if (anchor instanceof HTMLAnchorElement && (!anchor.target || anchor.target === '_self') && !anchor.hasAttribute('download')) guardPath(anchor.href);
  };
  const onPopstate = () => guardPath(window.location.href);
  const history = window.history;
  const pushState = history.pushState;
  const replaceState = history.replaceState;
  const guardedPush: History['pushState'] = function (this: History, data, unused, url) {
    guardPath(url);
    return pushState.call(this, data, unused, url);
  };
  const guardedReplace: History['replaceState'] = function (this: History, data, unused, url) {
    guardPath(url);
    return replaceState.call(this, data, unused, url);
  };
  history.pushState = guardedPush;
  history.replaceState = guardedReplace;
  document.addEventListener('click', onClick, true);
  window.addEventListener('popstate', onPopstate, true);
  return () => {
    document.removeEventListener('click', onClick, true);
    window.removeEventListener('popstate', onPopstate, true);
    // Avoid overwriting another listener's wrapper installed after ours.
    if (history.pushState === guardedPush) history.pushState = pushState;
    if (history.replaceState === guardedReplace) history.replaceState = replaceState;
  };
}

export function disableAnalytics(): boolean {
  const initialized = pauseAnalytics();
  // Do not send a denied-consent ping. Reload removes Google's existing timers and listeners.
  const domains = ['', window.location.hostname, `.${window.location.hostname}`, '.evselects.com'];
  for (const cookie of document.cookie.split(';')) {
    const name = cookie.split('=')[0].trim();
    if (!/^evselect_ga(?:_|$)/.test(name)) continue;
    for (const domain of domains) document.cookie = `${name}=; Max-Age=0; Path=/;${domain ? ` Domain=${domain};` : ''} SameSite=Lax`;
  }
  return initialized;
}
