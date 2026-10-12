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

## First production release and follow-up

Current local branch: codex/home-seo-performance-2026-10-12.
Local built server: http://127.0.0.1:4367/.
Published equivalent source tree 1d41baca612d64a087860408d91372f23076a556:
local commit 222608769fc1c842db08e7ed0073d3541b454e4a;
remote commit 4be01636598723e171e4d24727f0f6821ae2193b.
Production deployment dpl_QEeSvb7LQ2WHnyEdyPjhmY9xv1my is READY and the
evselects.com alias was verified against that commit. Live tests: 17/17 PASS;
contextual links and attribution audits PASS with the counts above.

Fresh Supermetrics Mobile result at 12:22:44 Asia/Bangkok: 94 / 96 / 96 / 100,
LCP 2.6s, CLS 0.098, TBT 0ms. Direct Google PageSpeed at 12:24:24 returned
77 / 96 / 96 / 100, LCP 3.3s, CLS 0, TBT 450ms. The different results are
explicitly retained; neither is treated as a 95+ pass. Direct report:
https://pagespeed.web.dev/analysis/https-evselects-com/xct9bn2n7z?form_factor=mobile

The direct report identified delayed hero paint and 42 KiB potential savings
on the tyre photograph. Follow-up: responsive hero preload; quality 60 only
for Home tyre images; native content-visibility:auto for off-screen Home
sections (all text/links remain in HTML); enforce HTTPS upgrade separately
because it is ignored in a report-only CSP. Existing restrictive report-only
directives, consent and analytics behavior are retained.

Follow-up local build/lint PASS and built-response tests 18/18 PASS. Rendered
desktop 1365×900/mobile 390×844 checks passed for the hero, Tesla guide,
tyre photo, all six opened FAQs, native fragment scroll, menu Escape/focus
and cookie settings. No horizontal overflow. Production follow-up and fresh
measurement are pending; do not mark the goal complete yet.

Second release: local f62701a99c169a171c9704faaf87136f4d6b3e13,
remote 4522b78c51925eeb03d4eff9187e3e34020829fc,
matching tree d743e117ae98d75934ee4b249ec2539b9fe013c3;
production dpl_FJZeUpsY7TA3bvXWnxiyMyPqZ52M verified on the apex alias.
Live tests 18/18, 32-page link audit and attribution PASS. No error/fatal
runtime groups returned for this deployment in the last 15-minute query.
Supermetrics at 12:42:21: 97 / 96 / 100 / 100, LCP 1.4s, CLS 0.098, TBT 20ms.
Google UI at 12:42:11: 91 / 96 / 100 / 100, LCP 3.2s, CLS 0, TBT 50ms.
https://pagespeed.web.dev/analysis/https-evselects-com/a9e0v9hwnl?form_factor=mobile
The goal remains open because the direct Google UI run is below 95.

Google's dependency detail lists five delayed Latin Prompt faces; live CSS
confirms their glyph ranges, while only Thai faces were preloaded. Follow-up
preloads both Thai and Latin without changing the family, weights or glyphs.
Local build/lint and 18 built-response tests PASS; hero font/typography and
layout rechecked at 1365x900 and 390x844. Final production score pending.

Logo correction asset: public/logo-evselects.webp. Original retained.
Image edit prompt: Change only EVSELECT to EVSELECTS, adding a final S with
identical typography, weight, spacing and black color. Preserve the upper
black striped E/lime V symbol, white/light-grey background, trademark and
DRIVE BETTER. SELECT SMARTER. tagline. Retain the wide 2:1 composition and
white margins; no redesign or decoration.

Rollback captured before release: dpl_EYJzZ7iabeSjzW5d4bTRaj82s37d,
production commit 937c082d2cea63c2a59915254b67e26db84c1e30.
Baseline live Mobile: Performance 88, Accessibility 96, Best Practices 96,
SEO 100; LCP 3.3s, CLS 0, TBT 100ms, checked 2026-10-12 10:24 Asia/Bangkok.
