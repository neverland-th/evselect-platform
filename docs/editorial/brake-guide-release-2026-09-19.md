# Brake guide production release — verified

Verified 2026-09-19, approximately 21:40 Asia/Bangkok.

- Deployed application commit: `fb4c1c0` on `codex/brake-guide-value-2026-09-19`, pushed to `neverland-th/evselect-platform`.
- Deployment: `dpl_6EZJfBdLjiSrYEKJKkYTLbDb6Vix`.
- Immutable URL: https://evselect-platform-eh5wfd3en-evselect-com.vercel.app
- Vercel state: `READY`, production target. Inspection confirmed aliases `evselects.com`, `www.evselects.com`, and `evselect-platform-evselect-com.vercel.app`.
- Publish command: `vercel deploy --prod --yes --archive=tgz` from this worktree. No merge to main and no backend/schema changes.
- Public article: https://evselects.com/articles/ev-carbon-ceramic-brakes-guide
- Comparison: https://evselects.com/articles/ev-carbon-ceramic-brakes-guide#brand-compare

## Completion evidence

| Requested outcome | Confirmed implementation / evidence |
| --- | --- |
| Rotor size, thickness, slots and holes | Sections 3–4, original geometry explanation and three inspected manufacturer disc photographs |
| Horsepower and value alternatives | Conditional usage table, explicit rejection of a universal hp fitment rule; maintenance, pads, iron discs, BBK and CCB trade-offs |
| Thai roads and 1,000°C | PRD/DASTA sources for road context; actual temperatures explicitly Data unavailable; example energy and thermal assumptions separated from measurements |
| Engaging visuals and photos | Eight production images decoded successfully; keyboard-operable energy lab and circular brand comparison |
| Japanese ENDLESS options | SSS, SSM PLUS, MX72, MX72 PLUS; SSM PLUS and 6POT product images; exact primary links and compatibility conditions |
| Performance / price / dust comparison | Five product profiles across ENDLESS, Project μ and Brembo; thermal envelope only, user quote scope checks, no fabricated dust ratings |
| Buyer takeaway | Public Thai checklist download returns HTTP 200 |
| Deploy and verify | READY deployment, working aliases, live browser suite and whole-site image scan passed |

## Checks passed

- Targeted ESLint on changed frontend and verification scripts.
- Physics and quote-input tests: independent SI anchor, speed squared, mass, downhill energy, conservation, boundaries and malformed-price rejection. A floating-point negative remainder at 100% regeneration was found and fixed before release.
- Production build, TypeScript and 41 generated routes. Build preflight verified 71 referenced public image paths/signatures. The preflight caught the misleading ENDLESS PNG filename; the actual JPEG signature is now reflected in the deployed filename.
- Article browser tests on production at 360, 390, 768 and 1440 px: eight images, metadata/canonical, section links, controls, quote isolation, missing evidence, native FAQ, no overflow, no browser runtime errors.
- 200% text: no overflow; mobile comparison rings reflow vertically rather than squeeze labels.
- JavaScript disabled: article, reference calculations, comparison data and FAQ remain available; interactive controls are hidden with explanatory text.
- Whole-site production image scan: 30 routes at 1440 px and 390 px, **206 image instances per viewport**, no broken images detected.
- Existing protected public paths returned 404: `/products`, `/categories`, `/vehicles`, `/fitment`, `/export`, `/api/export/shopee`, `/api/export/woo`.
- WWW and immutable deployment article URLs returned 200 with the new article. The approved coilover article and homepage coming-soon headline/message were independently rechecked.
- `vercel logs dpl_6EZJfBdLjiSrYEKJKkYTLbDb6Vix --level error --since 10m --limit 50 --json` returned no error entries in the checked window. This is a bounded release check, not a promise of no future errors.

## Saved browser evidence

- `scratch/brake-guide-live-qa/results.json`, checked at `2026-09-19T14:39:41.235Z`.
- `scratch/brake-guide-live-qa/comparison-default-desktop.png`: actual published comparison with empty quote fields, so the image does not imply that test inputs are market prices.
- Per-width comparison, energy, article-top, Japanese-options and surface-pattern captures in the same directory.

These scratch artifacts are local test outputs. The later documentation-only commit containing this release note does not change the deployed application commit above.
