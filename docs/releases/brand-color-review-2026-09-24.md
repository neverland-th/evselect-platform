# EVSELECT brand color correction — 2026-09-24

## Scope
Restore the owner-approved lime / black / white identity on the editorial article catalogue. Keep the new layout, existing article text, image subjects, routes and metadata. Restore the original image logo instead of the red text wordmark.

## Changes
- Lime #84cc16 primary controls with dark text; #a3e635 emphasis on charcoal.
- Dark green #4d7c0f and #3f6212 for readable text on white.
- Charcoal #18181b hero; no red editorial overrides remain.
- Three subject-specific covers use the same palette. Existing amber/cyan category labels and Facebook blue retain their semantic purpose.

## Rendered reader review
Version: working tree based on d7ffcd9, final production build at http://localhost:3119/articles.
Desktop: 1440 x 1000 CSS viewport (1296 x 900 screenshot at browser zoom). Mobile: 390 x 844.
Read catalogue introduction, hero, all 21 card titles/descriptions/credits/dates/actions, all three cover compositions, bottom prompt and footer. Inspected each visible photo and crop. Reviewed the review spotlight and active review/suspension/guide/sedan filters, and opened/closed the mobile menu using keyboard activation.
The first-time reader can distinguish vehicle reviews from technical guides, follow clear reading actions and see concept/foreign-market image limitations. Green text on white remains readable; black CTA text on lime is clearer than white. Original logo is visible in header/footer. Mobile card content wraps, all images loaded, scrollWidth equals viewport width 390, one H1.
Evidence: scratch/brand-color-review-2026-09-24. Desktop screenshots 5-8 captured a separately navigated tyre article and are not evidence for the catalogue; catalogue remaining cards were reviewed after returning and through dedicated suspension/guide states. Mobile 1-20 captures catalogue in reading order.

## Technical verification
Production build passed (43 routes), 79 public images verified, 11 link tests passed, strict audit 31 pages / 1,844 links / zero findings. Sitemap 24 entries. git diff --check passed.

## Figma status
Existing file PTZ3zyMVN0YT2Aoeog3aJZ was not updated: current connector attempt returned Starter plan MCP call limit. The web implementation is the corrected deliverable; Figma must not be represented as synchronized.

## Production verification
Published source commit: 61c445b1793d547c2a46469d49c51a4e3aad2daa.
Vercel deployment dpl_Bduncq3K4rMJyxqYCdzL1CyTDaqo is READY, with evselects.com and www.evselects.com aliases confirmed by API. Opened https://evselects.com/articles after deployment in desktop 1440 x 1000 and mobile 390 x 844. Original logo and green title/CTA/hero are visible. Live title accent rgb(77,124,15), one H1, no mobile horizontal overflow. Evidence production-desktop.png and production-mobile.png.
Figma UI remains in account onboarding (What’s your name?, step 1 of 4) and reports a connection issue affecting saving; connector quota remains exhausted. No Figma edits claimed.

## Owner-supplied logo follow-up
Source C:/Users/rolf-/Pictures/logo.png is now copied byte-for-byte to public/logo-brand.png (SHA256 812CE8752A7B02D2FEB43288185DD6FB46E58069D5632F9525B4E88C4E0A285F). Shared storefront header (mobile/desktop) and footer use it with its 380 x 190 intrinsic ratio. Older square mobile asset had large white padding and made the logo appear about half-sized; the owner image is clearer inside the existing header dimensions. Favicon/admin assets are unchanged.
Read the complete shared header/footer and inspected each logo at localhost:3119/articles, desktop and mobile 390 x 844. Logo symbol, letters, lime color and tagline remain complete with object-contain. Build, 79-image verification, 11 link tests and strict 31-page content audit passed again. Figma is still blocked at account onboarding; no Figma update claimed.
