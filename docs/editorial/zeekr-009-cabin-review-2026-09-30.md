# ZEEKR 009 Thai cabin expansion — 2026-09-30

## Scope and provenance

- Route unchanged: `/articles/zeekr-009-review`. Same existing licensed Thai hero/OG image; eleven new manufacturer/editorial images interspersed through the article.
- Isolated branch `codex/zeekr-009-cabin-2026-09-30`, based on `ca694ef` (production application `637b463`). No homepage-preview edits, backend changes, new dependencies, or main-branch merge.
- Primary evidence: current ZEEKR Thailand model page, Thai 2025 brochure pp. 8–9, Thai Premium launch and Standard launch announcements. Exa cross-checked Thai launch coverage; foreign/prelaunch-assumption photographs were excluded.
- Five images from ZEEKR Thailand and six images from HeadLight Magazine's Thai-market launch coverage. Separate 2024 six-seat photographs from 2025 seven-seat photographs. Preserve source aspect ratios; WebP conversion only. All eleven assets together are 1,129,960 bytes.
- Exact source URLs, original names, dimensions and market context: `zeekr-009-image-sources-2026-09-30.json`. Public attribution lives in the image registry, ImageObject metadata and `/image-credits`, following the site's current no-under-photo-caption policy.
- No public republication licence was verified for the eleven new images. Credits explicitly distinguish source attribution from reuse permission; no Creative Commons licence, original authorship or EVSELECT ownership is asserted.

## Reader review

- Final production build served at `http://localhost:4358`; actual Chrome rendered article reviewed in order at 1440 × 1000 and 390 × 844. Full body, all twelve images, sources, decision bullets and footer read. Full-page screenshots segmented into overlapping readable strips; sticky-menu-obscured copy separately inspected in the viewport.
- Desktop evidence: `scratch/zeekr-009/desktop-final.png` and `desktop-final-1.png` through `desktop-final-9.png`. Mobile: `mobile-reviewed-full.png` and `mobile-read-1.png` through `mobile-read-10.png`. These are ignored local evidence.
- All twelve article images successfully loaded at both widths. Source photographs retain full aspect ratio; RHD cockpit, six/seven-seat layouts, table, refrigerator, roof screen, sliding door, third row, luggage and suspension comparison individually inspected.
- Mobile table panned left/middle/right; Standard, Premium, Flagship, source and evidence label read. Desktop table now fits the reading column. A screen-reader-only external-link label escaped the table and caused horizontal page overflow; anchored its absolute positioning to the source link. Final outer width 382 at 390 viewport and 1432 at 1440 viewport, with scrolling confined to the mobile table.
- All eleven new credit disclosures opened and read on desktop and at 390px mobile width (1200px review height for complete cards); source names, original names, contextual notes and rights caveats inspected. No mobile outer overflow on credits.
- An installed Speechify extension displayed an update popup during review; dismissed it without updating software. Its floating toolbar is external to the site. Transient screenshot/compositor failures were re-observed after rendering; blank/stale captures were not accepted as successful review.

## Validation

- Final `npm run build` passed: 88 referenced local images; 11 link-policy tests; four image-metadata tests; TypeScript and Next build; strict 32-route audit with 2,017 links and no findings; attribution check across 28 variants, 114 rendered ImageObjects and 58 credit records.
- Targeted ESLint and `git diff --check` passed (Git reports only Windows line-ending normalization notices).
- Vercel production before release remained `dpl_2byzXyX7dXXewGCA1Gp9ixYVbESA`, READY, project `prj_ofl9vlHAbWCLmdsTbAfuw22LUJLZ`, team `team_9eIBjV1sGR5IuVLX2i3NACGC`, aliases apex/www. This is the rollback target.
- Dry deployment manifest inspected: no secret environment files, databases, node_modules, scratch contents or agent contents uploaded. Empty ignored-directory entries have zero bytes.

## Tool limitation

- Figma file creation succeeded, but the first design-edit/inspection call hit the Starter plan MCP tool quota. No design nodes were created and no paid upgrade was attempted. Website implementation continued using the established site design. Do not describe the empty Figma file as a completed design.
- Production deployment and live verification to be recorded below after execution; local success alone does not establish publication, indexing or SEO impact.
