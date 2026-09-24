# Editorial red catalogue draft — 24 September 2026

Status: DRAFT. Not approved for production by the rendered reader-review gate.

## Scope and artifacts
- Figma file: https://www.figma.com/design/PTZ3zyMVN0YT2Aoeog3aJZ
- Desktop frame 6:129 has clipped auto-layout rows; mobile frame 6:227 exists. Figma is not final.
- Figma API quota exhausted; browser editing is blocked by Terms of Service confirmation awaiting the user. No terms accepted.
- Implementation: white/navy/red article catalogue, catalogue-only header wordmark, tyre feature, three HTML editorial covers, category filters preserved.
- Image provenance: tyre concept supplied by site owner on 24 September; illustrative, no product/fitment/test claim. KW photo already supplied by owner. MacPherson diagram retains its existing Commons author/license link on the card.
- Complete article bodies and social OG/Twitter images are unchanged. Current covers are rendered HTML, not exported social images.
- Simplified cards retain full excerpt, credit, date and reading action. Detailed specification/fitment material remains in the articles.

## Actual rendered observations
- URL: http://localhost:3119/articles and ?category=suspension on the current branch, before commit.
- Desktop: header, introduction, feature and category controls visually inspected. Initial concept crop exposed embedded template text; changed crop to tyre/car detail. Active category count changed from dark to white text.
- Mobile: DOM-confirmed 390 x 844 viewport. Introduction and image checked; no horizontal overflow observed in the inspected top section. KW cover and complete adjacent card text/credit read at mobile size.
- Read rendered accessibility content for all 21 default cards and nine suspension cards. This is NOT a substitute for inspecting every card/image visually.
- Browser Page.captureScreenshot timed out twice in succession while continuing mobile review; complete final desktop/mobile review is pending. Do not deploy from this record.
- Experimental cover screenshot exports had inconsistent viewport scaling, were rejected and removed. Temporary export route removed.

## Validation
- Changed TSX ESLint passed.
- Production build passed: 43 routes generated.
- Referenced public image audit: 79 passed.
- Content/link tests: 11 passed.
- Strict built-content audit: 31 pages, 1,844 links, zero findings; sitemap 24 entries.
- These are local results, not live production verification.

## Remaining release work
1. Complete Figma desktop auto-layout after user accepts/authorizes the displayed terms.
2. Reopen production-mode local preview; read every card and inspect every image, full footer, menu and filter states at desktop/mobile sizes.
3. Decide final social exports from approved frames; currently not changed.
4. Re-run relevant checks only if revised, then commit/push final approved version, deploy Vercel and verify exact public aliases and rendered output.
