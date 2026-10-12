# Home SEO, brand and performance release — 2026-10-12

## Requested result

Preserve the existing Thai UI and routes. Reach PageSpeed Mobile 95+ on the live
homepage; use EVSELECTS consistently; make the Tesla interior-accessory CTA
deliver relevant content; correct the title/description concerns in the supplied
audit screenshot; deploy to the existing production project.

The screenshot hides affected URLs behind a subscription. Its metadata issue
types were checked independently against all 29 published URLs. No subscription
was purchased, no DNS change was made, and its hidden link findings are not
claimed to be resolved.

## Changes

- Existing Tailwind CSS is inlined using the installed Next.js 16.3.6 option;
  design and font family are unchanged. Returning-page CSS caching is a tradeoff.
- Home/shared navigation does not speculatively prefetch article routes.
- The original KW AVIF remains; its WebP derivative is imported for responsive
  delivery. ImageObject IDs and original credits remain stable, including cards.
- Public UI, titles, social metadata and Organization/WebSite use EVSELECTS.
  EVSELECTS.COM is retained only as the domain alias in identity data.
- Corrected the old raster logo wordmark to EVSELECTS with the built-in image
  editor, preserving the EV mark, colours and tagline. Original retained.
- Search titles are human-edited, not truncated. Article H1s, claims, URLs and
  source verification dates are unchanged. Display budgets are not ranking rules.
- Tesla CTA/FAQ links go to #tesla-interior-guide: floor mats, console trays and
  storage checks, exact Tesla Thailand sources, RHD caveats and pre-launch status.
- Home OG/Twitter previews use the supplied white Model 3 image.

## Source checks

Checked Tesla Thailand on 2026-10-12:

- https://shop.tesla.com/th_th/product/upgraded-model-3--all-weather-liner-
- https://shop.tesla.com/th_th/product/upgraded-center-console-trays
- https://shop.tesla.com/th_th/product/model-3_y-center-console-trays
- https://shop.tesla.com/th_th/category/vehicle-accessories/model-3

These support the model-specific examples, not universal Thai/RHD fitment.
Prices and stock were not copied. EVSELECTS still accepts no orders/payments.

## Local verification

- Next production build: PASS (44 static pages; TypeScript included).
- Targeted lint for all changed TS/TSX/MJS and new helpers: PASS.
- Image metadata/link-policy unit tests: 6/6 PASS.
- Built-response Home/indexability/public-metadata tests: 17/17 PASS.
- Contextual-link audit: 32 pages, 2,164 links, 1,578 internal links, zero findings.
- Attribution: 28 page/filter variants, 126 ImageObjects, 67 credit records PASS.
- Home full rendered reader review: desktop 1365×900 and mobile 390×844, ordered
  overlapping viewport screenshots from hero to footer; every visible photo
  inspected; all six FAQ answers opened/read on both views. No unloaded images
  after the full mobile review and no horizontal overflow.
- Updated Tesla FAQ link actually scrolled to the guide at viewport top 112px.
- Local console: no app warning/error observed; one Speechify extension warning
  is external and not attributed to the app.

## Release gate still pending

Current local branch: codex/home-seo-performance-2026-10-12.
Local built server: http://127.0.0.1:4367/.
Remote push/deployment, live routes/metadata/assets and fresh PageSpeed Mobile
measurement remain pending. Do not call the goal complete from local results.

Rollback captured before release: dpl_EYJzZ7iabeSjzW5d4bTRaj82s37d,
production commit 937c082d2cea63c2a59915254b67e26db84c1e30.
Baseline live Mobile: Performance 88, Accessibility 96, Best Practices 96,
SEO 100; LCP 3.3s, CLS 0, TBT 100ms, checked 2026-10-12 10:24 Asia/Bangkok.
