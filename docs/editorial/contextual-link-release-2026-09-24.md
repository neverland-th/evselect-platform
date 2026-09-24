# Contextual-link release — verified production, 24 September 2026

## Released version

- Reviewed source: `6dc38b87463429b34ade735fc07c535f4c5c7600`, pushed to `codex/brake-complete-kits-2026-09-19`.
- READY production: `dpl_5TewVWMWwfvRURMqcr7b4PCq3RWG`.
- Deployment: `https://evselect-platform-4lf0z9mev-evselect-com.vercel.app`.
- Vercel alias API confirms `evselects.com`, `www.evselects.com` and `evselect-platform-evselect-com.vercel.app` all point to this deployment.
- Clean release checkout: `C:/Users/rolf-/.gemini/antigravity/releases/evselect-contextual-final-2026-09-24`. No unrelated deletions or credentials were uploaded. Production metadata records `6dc38b8` and `desktop-mobile-complete-2026-09-24`; the full SHA is recorded above.
- Retained the newly published Neon migration/runtime from `a2075e8` and Next.js 16.3.6. No database migration/import, schema alteration or data write was performed by this content release.

## What is now live

The tyre guide ends with a short explanation of the relationship between tyres, springs and dampers, followed by a meaningful link to the detailed Bump/Rebound guide. It does not repeat the damper graphs. Real Tesla Model 3 Performance and ZEEKR 7X photos carry credits and exact image/model scope. The Thai Performance example says 2,535 kg and 475 kW / 637 hp, with the exact manufacturer page and Thai brochure next to the respective claims.

The Carbon Ceramic article includes the revised enthusiast-facing introduction, documented photos, the owner's ENDLESS 375 mm case, scoped complete-kit examples and all nine clickable performance/price/dust scores. Ratings are labelled approximate editorial opinions, with reasons and limitations rather than fabricated measurements. The Essex off-road manual limitation and dated Brembo partner evidence are explicit.

Contextual links connect the public article topics. Internal navigation remains in the same tab; external HTTP(S) anchors request protected new tabs. Linkable EVSELECT/EVSELECTS text points home. Metadata/alt/image pixels remain valid non-anchor contexts. All public/support pages have one H1 and ordered content headings under the site's own convention.

## Complete reader gate and technical checks

The complete desktop/mobile reading, individual image inspection and affected interaction evidence is in `contextual-link-review-2026-09-24.md` and the earlier page-specific records it references. The previous mobile capture blocker was resolved; it is not an outstanding release limitation. The combined-runtime regression checks preserved all reviewed article source fingerprints and catalogue visible text.

Both the clean local build and Vercel build passed: image-reference validation, 11 link-policy tests, TypeScript, 43 static pages and strict content audit. The live audit at `2026-09-24T07:52:23.761Z` independently passed:

| Live check | Result |
|---|---|
| Public/supporting pages | 31: 24 published, 6 pending/noindex, 1 support/noindex |
| Anchors | 1,845 total; 1,303 internal; 86 contextual candidates |
| Findings/blocker routes | 0 / 0 |
| `/sitemap_index.xml` | 200; one child sitemap |
| Compatibility `/sitemap_indexl.xml` | 200; one child sitemap |
| `/sitemap.xml` | 200; 24 URLs |
| `/robots.txt` | 200; canonical index and sitemap references |
| Referenced public image files | 78/78 HTTP 200, image content type, byte-for-byte equal to released files |
| `www` article index | HTTP 200 and actual browser rendering |
| Unauthenticated database-health endpoint | 404, remains protected |
| Prelaunch `/products` | 404, not exposed by the database integration |

The live image check establishes availability and byte identity, not a substitute for visual review. Its report is `scratch/live-release-assets-2026-09-24.json`; the full link report is `scratch/live-content-link-audit-2026-09-24.json`, both in the release checkout.

## Production browser verification

Used the actual Codex browser on the public domains after deployment:

- Brake desktop and 390 px mobile opening match the reviewed introduction. Clicked all nine live score circles, verified all nine correct score/reason panels, and inspected the expanded comparison on desktop/mobile. No browser error logs were reported.
- The comparison jump link navigated to the existing `#brand-compare` within the same tab.
- Clicked the inline tyre link from the brake article, reaching the actual tyre-guide URL in the same tab. Inspected both Tesla and ZEEKR photographs, complete credits, the Thai 2,535 kg / 475 kW / 637 hp statement and the short final damper section on mobile. Clicking its Bump/Rebound link reached the damper guide in the same tab.
- A real click on `สเปก ZEEKR 7X` emitted `Page.windowOpen` for `https://www.zeekrlife.com/en-th/models/7x`, `_blank`, user gesture and `noopener`; rendered attributes include `noopener noreferrer`. Codex does not expose that requested new window in its tab inventory, so visible destination-window display is not claimed.
- Clicked the tyre byline's EVSELECT link and reached the homepage in the same tab. The initially still-loading hero was revisited: the real red Model 3 photograph was visibly loaded, with nonzero natural size.
- Opened the article index on `www.evselects.com`, observed the current introduction and loaded featured 7X image. Apex/www aliases were independently confirmed via Vercel.
- Cleared mobile emulation and reset viewport settings. Kept the published Carbon Ceramic comparison tab as the deliverable.

This completes the scoped content/link release and its production verification. It does not claim Google has crawled/indexed the new release, nor certify current external prices or universal vehicle fitment. No Facebook posting/sharing or group membership action was performed during this release. The migration's existing four high dependency-audit findings in the Prisma toolchain were not changed by this content work.
