# Home dark guide release — 2026-10-01

## Scope

User requested a dark background band to make the photographic EV upgrade guide stand out. Changed only the `EvUpgradeInfographic` wrapper and its text/link palette, plus the existing Home regression assertions. Preserved all three images, copy, image credits, order, responsive layout, IDs and destinations. The light checklist explicitly keeps dark text.

The handoff branch was fast-forwarded from `312aa18` to the verified current-release follow-up `6a2571f` before editing. This preserves the production review-photo and consent/privacy changes from application commit `721a4f8`; no backend, environment, analytics activation or DNS changes were made.

## Rendered reader review before promotion

- Application commit: `55c73c0abeb89e6815a83eeeafd1ca3784d6bc1e`, branch `codex/homepage-thai-search-2026-09-29`.
- Candidate: https://evselect-platform-oxf5o9d19-evselect-com.vercel.app/#ev-upgrade-map . Created with production settings and `--skip-domain`; apex/www still served the previous release during review.
- Read the complete affected guide at desktop 1440 × 1000 and mobile 390 × 1000, including the title, subtitle, brand link, every category, heading, description, reading link, all checklist items and the disclaimer. Inspected each Model 3, Michelin/Audi tyre and BC Racing photo and its crop. Checked the boundaries with the unchanged adjacent sections.
- Additional 320px check: no horizontal overflow in the guide; all three reading links had approximately 61px rendered height. White headings, light body copy and lime reading links were visibly legible on the dark surface. The pale checklist retained dark text. No copy or photo changes were needed.
- Keyboard activation of the native same-page link reached `#tesla-accessories` in the same tab, with the section approximately 112px below the viewport top. The damper link reached the existing article's `#symptoms` section in the same tab. Browser warning/error scan returned no entries.

## Validation

- Targeted ESLint and `git diff --check` passed.
- 11 existing analytics regression tests passed, preserving the current consent boundary.
- Production build passed, including 96 referenced public images, 11 link-policy tests, four image-metadata tests and TypeScript.
- Built and live strict content audits passed: 32 pages, 2,156 links, no findings or blockers.
- Six Home regression tests passed against both the candidate and `https://evselects.com`, including the new dark-background and checklist-contrast assertions.
- Built and live attribution checks passed: 28 page/filter variants, 125 rendered ImageObjects, 66 accessible credit records.
- Live sitemap checks: `/sitemap_index.xml` and the legacy `/sitemap_indexl.xml` returned HTTP 200 with one entry each; `/sitemap.xml` returned HTTP 200 with 25 entries. This is not evidence of Google indexing or rankings.

## Production verification

Promoted deployment `dpl_FX9W5gicfr8T9Mn3RYViN4NwukzQ` after the rendered review and another check that production still used the expected previous deployment. Vercel reports READY, production, project `prj_ofl9vlHAbWCLmdsTbAfuw22LUJLZ`, with application commit `55c73c0abeb89e6815a83eeeafd1ca3784d6bc1e`.

Both `evselects.com` and `www.evselects.com` resolved to the intended deployment during inspection. Reopened the live guide at desktop and mobile, confirmed all three photos loaded, white headings, dark background, no mobile overflow and working same-page navigation. Vercel's runtime-error query returned zero records for this deployment in its queried 15-minute window; this is a bounded check, not an ongoing-monitoring guarantee.

Local screenshots are stored under `scratch/home-dark-guide/live-desktop.png` and `scratch/home-dark-guide/live-mobile.png`; the live audit is `scratch/home-dark-guide-live-links-2026-10-01.json`. Those generated proof files are intentionally ignored by Git. This release note is a documentation-only follow-up and does not require another deployment.
