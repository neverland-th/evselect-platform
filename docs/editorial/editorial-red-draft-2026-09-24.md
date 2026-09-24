# Editorial red catalogue — reader review, 24 September 2026

Web implementation source: e62ebfc. Branch: codex/editorial-red-2026-09-24.
Status: LOCAL RENDERED REVIEW PASSED for the /articles catalogue. Production deployment pending. Figma file remains unfinished; do not describe it as final.

## Scope
- Catalogue-only white/navy/red presentation and header wordmark, tyre guide feature, three subject-specific HTML covers.
- Full excerpts, image provenance, publication dates and reading links retained. Card detail lists removed; article bodies unchanged.
- Tyre image is the owner's supplied concept, labelled as illustration rather than a tested or available product. KW is the existing owner-supplied image. MacPherson illustration retains its author and CC BY-SA link.
- Article-body, OG/Twitter and JSON-LD images are unchanged. This release changes the rendered catalogue covers; it is not a new social-image release.

## Complete rendered reading
URL: http://localhost:3119/articles, production-mode Next server built from e62ebfc.
- Desktop reading: actual 2297 x 1074 CSS viewport, plus top/header at DOM-confirmed 1440 x 1000. Read the complete introduction, feature, all 21 cards in order, captions/credits, dates, calls to action and footer. Inspected every card image individually, including the new KW, MacPherson and tyre concept covers.
- Mobile reading: DOM-confirmed 390 x 844. Read from the prelaunch banner through the complete footer in overlapping scroll steps. All 11 review cards, nine suspension cards and battery guide were read with their complete excerpts and credits; each image inspected at mobile size.
- Reader observations: headline states the site's value before the catalogue; guide action leads to reading rather than a sale. Full excerpts explain what each article answers. Foreign-market photos are labelled without implying a Thai test vehicle. Prelaunch status does not claim stock. Credit links are smaller than body copy but remain readable and separate from the article action.
- New covers show distinct subject matter rather than reusing vehicle photos. The tyre concept crop shows tyres/car detail without the template's embedded marketing text. Small diagram labels are illustrative; the article title and excerpt provide the readable meaning.
- No horizontal overflow seen at 390 pixels. Header, title wrapping, full excerpts, credits and reading actions remain within the viewport.
- Earlier capture failures and stale blank image layers were resolved by bringing the tab compositor forward and reopening the filtered page. Loaded image dimensions alone were not treated as visual proof; all three covers were subsequently observed with visible imagery on both desktop and mobile.

## Interactive states
- Opened and read the slide-in menu on desktop and mobile. Verified keyboard open/close and focus on the close button.
- Reviewed the review-filter spotlight image and all its visible copy/specification/date/CTA at desktop and mobile sizes.
- Category results: all 21; reviews 11 (one spotlight plus ten standard cards); suspension nine; guides one.
- Keyboard-activated body filters: sedan two, SUV/crossover/MPV seven, hatchback one, city one. Correct resulting URLs and card sets observed. Mobile pointer automation under emulation was unreliable; keyboard activation was used instead, not claimed as a physical-device touch test.
- One H1 in the inspected category/segment states; no horizontal overflow in the inspected mobile states.
- Opened / separately: legacy header logo appears once; catalogue wordmark does not leak into the home page.
- Evidence screenshot: scratch/editorial-red-review-2026-09-24/desktop-top.png. Other complete reading observations are present in the browser tool outputs for this task.

## Technical validation (unchanged implementation)
- Changed TSX ESLint passed.
- Production build passed, 43 routes.
- Referenced public image audit: 79 passed.
- Content/link tests: 11 passed.
- Strict built-content audit: 31 pages, 1,844 links, zero findings; sitemap 24 entries.
- These checks support, but do not replace, the rendered reading above.

## Figma outstanding
https://www.figma.com/design/PTZ3zyMVN0YT2Aoeog3aJZ
Mobile frame 6:227 and three cover frames exist. Desktop frame 6:129 still has clipped auto-layout rows and needs correction. API quota is exhausted; browser editing is at a Terms of Service confirmation awaiting the user. No terms were accepted. Figma is not final.

## Release next step
Commit this review record, push the existing branch, deploy the reviewed web source to Vercel, then verify the production aliases, live catalogue and image loading. Keep the Figma deliverable explicitly pending.
