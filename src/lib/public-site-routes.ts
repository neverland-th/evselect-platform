// Published editorial pages only. Product/CMS/API routes are deliberately excluded.
// Keep this allowlist in step with newly published pages; verify:seo checks coverage.
export const siteOrigin = 'https://evselects.com';

export const publicSiteRoutes = [
  '/',
  '/articles',
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

// Supporting information routes remain noindex; formal legal policies are still in preparation.
export const pendingPublicRoutes = [
  '/about', '/contact', '/editorial-policy', '/privacy', '/terms', '/warranty',
] as const;
