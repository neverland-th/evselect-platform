// Published public information, editorial pages and reader tools only.
// Product/CMS/API routes are deliberately excluded.
// Keep this allowlist in step with newly published pages; verify:seo checks coverage.
export const siteOrigin = 'https://evselects.com';

export const publicSiteRoutes = [
  '/',
  '/articles',
  '/image-credits',
  '/contact',
  '/editorial-policy',
  '/privacy',
  '/downloads/evselect-damper-setup-log.html',
  '/articles/byd-atto-3-review',
  '/articles/byd-seal-review',
  '/articles/deepal-s05-review',
  '/articles/deepal-s07-review',
  '/articles/ev-battery-care',
  '/articles/ev-camber-adjustment-wheel-alignment-guide',
  '/articles/ev-carbon-ceramic-brakes-guide',
  '/articles/ev-damper-tuning-bump-rebound-guide',
  '/articles/ev-horsepower-vs-torque-explained',
  '/articles/ev-performance-driving-techniques',
  '/articles/ev-suspension-tuning-guide',
  '/articles/ev-tyre-and-coilover-selection-guide',
  '/articles/geely-ex2-review',
  '/articles/hybrid-to-ev-chassis-dynamics-transition',
  '/articles/mg4-electric-review',
  '/articles/optimizing-ev-suspension-thai-roads',
  '/articles/shock-absorber-types-monotube-twintube-air-ev',
  '/articles/tesla-model-3-highland-review',
  '/articles/tesla-model-y-l-premium-6-seater-review',
  '/articles/zeekr-009-review',
  '/articles/zeekr-7x-2026-review',
  '/articles/zeekr-x-review',
] as const;

// Only unfinished background/commerce-policy pages remain noindex.
export const pendingPublicRoutes = [
  '/about', '/terms', '/warranty',
] as const;

// Reserve explicit noindex reader tools here; the published setup log is indexable.
export const supportingPublicRoutes = [] as const;
