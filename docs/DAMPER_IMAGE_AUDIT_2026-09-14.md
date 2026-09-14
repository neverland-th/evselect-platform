# Damper article image repair and repository audit

Checked: 14 September 2026 (Asia/Bangkok). Scope: the linked damper article, article listing, image delivery, metadata, deployment provenance, and directly related release risks. This is not a penetration test or a full factual review of every article.

## Result

The cover replacement is implemented and committed on `chatgpt-frontend-handoff` as `335515d`. Both the handoff application and an isolated package based on the live deployment's recorded source commit pass production builds and desktop/mobile browser checks. The isolated package changes only the damper article and listing source, adds one shared asset module and one JPEG, and retains the production backend and dependencies. Deployment verification is recorded below.

## What already works

- The live article and index return HTTP 200, render their content on the server, and have one H1 per page. Browser checks did not find a page exception or horizontal overflow on those two desktop routes.
- The live article supplies Thai content and TechArticle structured data, and is included in the live sitemap.
- The layout reserves space for listing images; replacing the failed asset restores the card without redesigning the listing.
- The newer handoff source builds successfully and blocks the sampled operational routes with HTTP 404. These protections are not present in the current live release.

## Findings and priorities

| Priority | Finding | Evidence and implication | Action/status |
| --- | --- | --- | --- |
| P1 | The visible listing image fails at its original source. | The live card requests Unsplash `photo-1486006920555-c77dce18193b`; both the original request and Next image endpoint return 404. Chromium reports `naturalWidth: 0`. | Fixed in prepared patch using a committed, statically imported local JPEG. |
| P1 | The live article has no hero image and no article-specific canonical or social image. | Rendered-browser metadata inspection on both live routes; the article has no header figure. The handoff source instead points its hero to Wikimedia, while only Unsplash is permitted by `next.config.ts`. | Added a visible hero, descriptive Thai alt text, canonical URL, OG/Twitter image, image dimensions, and TechArticle image/mainEntityOfPage. Listing canonical fixed too. |
| P1 | Deploying the whole handoff would include unrelated changes. | `git diff --shortstat 01c83175d9cb885b2dc8473612b920f6ba441d39 8da4bee`: 677 files changed, including Prisma schema, backend/dealer deletion, and homepage/content changes. | Prepared a production-source package. Verified 211 tracked package files against the recorded production commit, normalizing Windows line endings; only the two intended TSX files differ, plus the two new files. |
| P1 | Git author metadata blocked Vercel deployments. | Vercel dashboard explicitly rejected `admin@evselect.com`. A new commit using the signed-in GitHub account's displayed no-reply address also failed matching. | Used the primary email visibly marked Verified in the signed-in GitHub account and also associated with the signed-in Vercel account for this task's commit. No global Git settings or account permissions changed. The next preview was accepted for initialization. |
| P1 | Operational routes are publicly reachable in production. | Unauthenticated HEAD requests to `/products`, `/vehicles`, `/categories`, `/fitment`, `/dealers`, `/export`, `/competitors`, `/api/export/shopee`, `/api/export/woo` return 200; export responses declare `text/csv`. No CSV contents were downloaded for this audit. | Separate release required to protect/remove operational endpoints and verify unauthenticated denial. This image package preserves the existing backend. Public 200/header evidence does not establish which private records, if any, are exposed. |
| P1 | The handoff currently loses crawler files. | Local production server returns 404 for `/robots.txt` and `/sitemap.xml`; source diff shows both route files deleted. Live production returns 200 for both. | Restore/review crawler routes before releasing the whole handoff. The isolated cover package retains both and verifies 200. |
| P2 | Unauthenticated whole-site cache invalidation exists in the handoff source. | `src/app/api/revalidate/route.ts` exports GET and calls `revalidatePath('/', 'layout')` without checking authentication. | Protect the route or remove it in a separate backend change. It was not invoked during this audit and is absent from the isolated production-source patch. |
| P2 | Technical advice is too universal and inconsistent in places. | The live article presents a fixed ideal EV rebound/bump ratio, says digressive is necessary, and gives different high-speed thresholds (>100 and >150 mm/s). The listing's 65:35 ratio also differs from the article's 3:1–2.5:1 discussion. | Commission a focused technical revision. Explain model/setup dependence and cite relevant damper manuals; do not treat universal click counts or damping ratios as validated settings for every EV. Content rewrite is outside this cover change. |
| P2 | Local Git origin embeds a credential that no longer authenticates. | Read-only credential validation against GitHub `/user` returned 401. The token itself is deliberately excluded here. | Replace the remote with a clean URL and use the normal credential manager during a separate credential cleanup. Do not reuse or publish the embedded value. No credential or security settings were changed in this task. |

## Cover asset and implementation

- Asset: `public/images/articles/ev-damper-tuning-cover.jpg`, 1600 × 900, 202,537 bytes.
- Source: built-in image generation; then JPEG optimization with Sharp. It is an editorial illustration of generic adjustable coilovers, not a product photograph or test record.
- Shared source: `src/lib/damper-article.ts`. Static import makes missing source media fail at build time, generates a content-hashed asset, and supplies one source for hero/card/social metadata.
- Thai caption explicitly identifies the image as an AI illustration.
- The article URL and title are preserved. The release does not include the newer handoff article rewrite, navigation/homepage redesign, schema changes, database migrations, or backend deletion.

Final image-generation prompt:

> Use case: product-mockup. Create a polished editorial cover image for a Thai automotive article explaining adjustable suspension dampers, bump/compression and rebound tuning. Landscape 16:9, 1536x864 if possible. A pair of unbranded premium coilover shock absorbers lying diagonally on a clean dark slate workshop bench, black steel coil springs, brushed aluminum threaded damper bodies, small muted lime-green adjustment rings matching a modern white/charcoal/lime automotive website. The damping adjustment knob and spring collars are clear, realistic mechanical proportions, understated premium automotive magazine photography style, soft directional studio lighting, subtle shadows, finely resolved metal surfaces. Keep the key hardware inside the central 70 percent so both 16:9 article hero and 3:2 card crops work. No people, no car logos, no brand names, no letters, no labels, no text, no arrows or technical diagrams, no watermark. This is a conceptual editorial illustration, not a specific commercial product or evidence of testing.

## Validation

- `npm run build` passed in both the handoff worktree (40 generated pages) and the isolated production-source package (30 generated pages).
- Targeted ESLint: 0 errors, 2 pre-existing unused-import warnings in the handoff source. The isolated package removes those unused imports.
- `git diff --check` passed before commit.
- Chromium checks at 1440 px desktop and 390 px mobile: article and index 200; both target images decode; no page exceptions; no horizontal overflow; correct self-canonicals, OG/Twitter image, and JSON-LD image.
- Visually inspected desktop hero and mobile card screenshots.
- Both crawler routes return 200 in the isolated package.
- Vercel dry run includes the new media and excludes environment files and internal `.agents`/Git data.
- No database seed, migration, export download, or revalidation mutation was executed.

## Deployment ledger

- Existing production: `dpl_5n8H7YPBM5YV4uBKSWMx5H5NL24A`, recorded source `01c83175d9cb885b2dc8473612b920f6ba441d39`, aliases include `evselects.com` and `www.evselects.com`.
- Previous unrelated blocked production: `dpl_D6mWdiRhrNUh3LfSPHn6KmQU3jmt`.
- Task previews rejected by Git identity matching: `dpl_yVjHTDSjVbFjEWCytE9FnWXCvi6W`, `dpl_83ryU1crZNJRR9Hk1Gac6RY2zwHU`.
- Accepted preview: `dpl_4JGWuD5AEVZe3GbRf3LBPuJRfhTv`, https://evselect-platform-7y3yyscdm-evselect-com.vercel.app . Vercel reports READY. Hosted browser checks confirm both pages return 200, the new images decode, both canonicals are correct, and no page exceptions occur. The five original article section headings remain intact.
- Production publication: awaiting the explicit human approval required by the handoff `AGENTS.md`. Production remains on the original deployment. Social image metadata is verified in preview; the production-host image URL will only become available after publication.

## Evidence and sources

Local reproducible evidence is in ignored `scratch/damper-audit/`: `live-audit.json`, `handoff-audit.json`, `production-patch-audit.json`, `production-package-verification.json`, `vercel-dry.json`, and desktop/mobile screenshots. `audit.cjs` performs bounded page checks and read-only endpoint header checks. `verify-production-package.cjs` compares the isolated package with the recorded production source. The isolated deployable package is `scratch/damper-audit/production-patch/`.

- Live article: https://evselects.com/articles/ev-damper-tuning-bump-rebound-guide
- Listing: https://evselects.com/articles
- Vercel preview detail: https://vercel.com/evselect-com/evselect-platform/4JGWuD5AEVZe3GbRf3LBPuJRfhTv
- Penske manufacturer guidance explains that the best damping-curve style depends on vehicle/use conditions, supporting the recommendation to qualify universal digressive claims: https://www.penskeshocks.com/blog/linear-progressive-regressive-digressive-shock-valving-differences-and-use-cases
- Penske adjustment guidance: https://www.penskeshocks.com/blog/how-to-adjust-low-and-high-speed-damping-to-optimize-shock-performance
- Local installed Next.js Image and Metadata documentation was read before changes.

Private traffic, conversions, customer records, ranking, and field performance measurements: Data unavailable. No performance score or product-fitment claim is inferred from the checks above.
