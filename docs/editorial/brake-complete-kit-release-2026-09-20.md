# Brake comparison and search discovery — production verification

Verified 20 September 2026, Asia/Bangkok (the corresponding UTC verification timestamps below are 19 September).

## Released application

- Branch: `codex/brake-complete-kits-2026-09-19`, pushed to `neverland-th/evselect-platform`; no merge into main.
- Application commit: `8bac72eaaf2a5435be76c53187bddd1315cca470` (includes complete-content/SEO commit `8897643`).
- Vercel deployment: `dpl_7Wv6FoYxdWqYS32fpNCoSKa7E4eL`.
- Immutable URL: https://evselect-platform-k3ep2kc5i-evselect-com.vercel.app
- Deployment status: READY, production. CLI inspect confirmed aliases `https://evselects.com`, `https://www.evselects.com`, and the project production alias.
- Public article: https://evselects.com/articles/ev-carbon-ceramic-brakes-guide
- Comparison: https://evselects.com/articles/ev-carbon-ceramic-brakes-guide#brand-compare

## Visible behavior

The article title is “Carbon Ceramic คุ้มไหม? ก่อนจ่ายหลักแสนอัปเกรดเบรก EV” in the H1, listing and social metadata. The approved real Porsche PCCB cover is retained. Four new images illustrate the owner's actual ENDLESS installation/front kit and the explicitly identified Japanese ENDLESS ALVELL6 / Project μ FS6 examples. All ten article photographs are self-hosted and loaded in the live browser checks.

The comparison initially displays Brembo, ENDLESS and Carbon Ceramic together with all nine approximate editorial scores. Selecting a profile adds/removes only that profile, preserves the other selected comparisons, and retains at least one selection. The reset button restores all three. Every score circle opens its rationale and sources. These are disclosed editorial estimates from the cited manufacturer information and firsthand owner reviews, not measured comparative test results or averaged customer ratings.

The complete-new-front-kit table preserves exact part numbers, 380mm/six-piston specifications, included equipment, native USD/JPY prices, source provenance and application limitations. The owner case reflects Model 3 Performance Highland with 375mm front rotors and the explicitly supplied wheel/tyre/suspension configuration. Owner-reported thermal readings and approximate costs are labeled separately from catalog facts. Rotor-only Carbon Ceramic quotes are not represented as complete-kit prices.

## Sitemap and robots

- https://evselects.com/sitemap.xml — HTTP 200, XML with 24 unique canonical URLs: homepage, article index and 22 published articles.
- https://evselects.com/robots.txt — HTTP 200, plain text; public crawling allowed, non-editorial product/internal/API crawl exclusions and canonical sitemap declaration present.
- Eight articles no longer inherit the homepage canonical.
- Six preparation pages remain available at their own URLs, with self canonicals and `noindex, follow`; they are excluded from the sitemap until finished: about, contact, editorial-policy, privacy, terms, warranty.
- Only the maintained brake content date is included as lastmod; no synthetic per-build modification dates.
- Existing `src/proxy.ts` protection is unchanged. robots.txt is not access control.
- No Search Console submission or Google indexing result was performed/verified in this task.

## Checks completed

- Local and Vercel production builds passed (Next.js 16.3.2, TypeScript, 43 generated/static-route output entries; image preflight verified 73 referenced assets).
- Targeted ESLint and physics/kit-boundary checks passed. The full repository lint baseline was not represented as clean.
- Live brake suite passed at 360, 390, 768 and 1440px at `2026-09-19T17:04:22.989Z`: all ten images, title/metadata, 15 sections, 13 FAQs, sources, owner details, four kit references, energy controls, all nine score panels and keyboard interactions.
- Explicit multi-selection checks passed for every profile (3-to-2-to-3), plus 1-to-2 by keyboard and restoring all three. Scores were already visible without having to click each circle first.
- No horizontal overflow at normal or 200% text size; small-screen score groups reflow. No-JavaScript article, scores and FAQ remained readable. No browser page errors were recorded.
- Checklist download and updated listing passed. Seven existing protected routes returned external 404: `/products`, `/categories`, `/vehicles`, `/fitment`, `/export`, `/api/export/shopee`, `/api/export/woo`.
- Final live image sweep: 30 public routes at 1440px and 390px, 208 image instances at each width, no failed images.
- Final live SEO suite parsed XML and HTML, checked all 24 sitemap URLs and all six preparation-page metadata states, canonical URLs, robots directives and HTTP status.
- Public, WWW and immutable deployment article URLs returned HTTP 200 with identical correct title, nine score controls, canonical and Porsche OG image. Sitemap/robots returned 200 on all three origins. Cover URL returned 200/image/jpeg.
- The social metadata HTTP check used a Facebook crawler user-agent; it is not evidence of Facebook's actual composer preview or cached social card.
- Bounded deployment error-log query (`--level error --since 10m --limit 50 --json`) completed successfully and returned no error entries after QA.

Local evidence (ignored QA artifacts): `scratch/brake-complete-kit-live-qa/results.json`, `social-and-aliases.json`, `comparison-default-desktop.png`, four-width screenshots, and `scratch/seo-live-final.txt`. The research and editorial audit documents retain source URLs, provenance and unresolved quotation/measurement details.

This release note is a documentation-only follow-up commit; the deployed application commit remains the hash recorded above.
