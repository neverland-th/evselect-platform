# Approved production release — 19 September 2026

## Authorization and scope

Owner response: `อนุมัติหมดเลย`. Published the full reviewed article/carousel/image release. No database migration, backend change, payment/stock change, or main-branch merge was performed. Manufacturer-photo permissions remain unverified; publication approval is not represented as a copyright license.

## Delivery

- Production article: https://evselects.com/articles/ev-damper-tuning-bump-rebound-guide
- Character/roads section: https://evselects.com/articles/ev-damper-tuning-bump-rebound-guide#character-and-roads
- Homepage: https://evselects.com/
- Deployment: `dpl_9Tgs1LK6UQiZ6Ppq84nr45TMhm7Z`, target production, READY.
- Immutable URL: https://evselect-platform-6w0jja0o1-evselect-com.vercel.app
- Verified aliases: evselects.com, www.evselects.com, evselect-platform.vercel.app, evselect-platform-evselect-com.vercel.app.
- Source revision: `08de74469d6ca58992a1e8dc4c1af5ebc0a4f719`; local HEAD and pushed GitHub branch `codex/vehicle-showcase-2026-09-19` matched before deployment.
- Runtime/framework: Next.js 16.3.2. API build-to-ready interval 45.652 seconds.
- Rebuilt for production rather than promoting the Preview artifact, so social-image URLs resolve to evselects.com rather than the Preview hostname.
- Prior verified production/rollback reference: `dpl_7uPfCEoPgYUsawKSH6pW9LkAWn4m`.

## Verification

- Fresh local build and changed-frontend ESLint passed before deployment. Build generated 41 routes; Prisma Client generation only, no migration.
- Live article title: `ซื้อโช้คหลักแสน ทำไมยังไม่จบ!?`.
- Article hero, homepage card and listing image use the supplied KW AVIF. OG/Twitter/BlogPosting use the same-picture JPEG on the production hostname. Both files return HTTP 200 with correct media types and exact local SHA256 matches. Same-framing RGB comparison difference is 0.164/255 at 256x144.
- Production has no article X-Robots-Tag noindex; canonical remains the existing article URL.
- Live browser checks at 360, 390, 768, 1440 px: eight new photographs decode; original KW cover preserved; 18 TOC links, 9 comparison rows, 4 diagram modes, 3 example scenarios, 7 FAQs, download form and checklist pass. No observed page errors or horizontal overflow, including 200% text.
- Native diagrams and examples work with JavaScript disabled. Editable setup log has no form submission or scripts; print PDF generated.
- Live homepage carousel passes 3 slides, 11 model links, arrows, keyboard, wrap, touch, autoplay, pause/resume and reduced-motion checks.
- 30 static public storefront routes return HTTP 200; WWW article returns HTTP 200. Pre-launch messaging remains present.
- Nine restricted routes return HTTP 404: /categories, /products, /vehicles, /fitment, /dealers, /competitors, /export, /api/export/shopee, /api/export/woo.
- Vercel error-log query scoped to this deployment (`--level error --since 1h`) completed successfully and returned no entries. This is a bounded post-release check, not proof of zero future errors. Drain configuration/ongoing monitoring was not verified or changed.
- Visually reviewed the live homepage card and mobile article-cover screenshots.

## Evidence locations

- `scratch/coilover-production-2026-09-19/results.json` and screenshots.
- `scratch/vehicle-showcase-qa/results.json`: latest run is production.
- `scratch/damper-image-alignment/results.json`: latest run is production; pre-release differences remain recorded in the change request.
- CLI/API deployment state and aliases, route check output, scoped runtime-log command in the task history.

## Outstanding external outcomes

- Actual Google SERP thumbnail: Data unavailable / not directly verified. Website now exposes consistent preferred-image metadata and accessible production assets. This does not guarantee Google's image selection or update time.
- No Search Console URL inspection or reindex request was submitted; no suitable authorized Search Console capability was established.
- Manufacturer image reuse rights remain unverified; source attribution and product links are present. The two Wikimedia context photos retain their CC BY-SA 4.0 credits and license links.
- Existing robots.txt/sitemap.xml gaps are not part of this release; no unrelated indexing/backend change was introduced.

Primary Google guidance checked: https://developers.google.com/search/docs/appearance/google-images — preferred images can be specified via main-entity image metadata and og:image; final preview selection is automated.
