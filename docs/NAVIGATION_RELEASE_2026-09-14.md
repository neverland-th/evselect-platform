# EVSELECT navigation restoration — 14 September 2026

The preceding typography release replaced the mobile hamburger with a horizontal link strip. This release restores a top-left menu trigger at every storefront breakpoint and replaces that strip with a lightweight left drawer. Desktop retains three quick links; all seven destinations are available in the drawer. This also avoids header crowding with the user's enlarged browser fonts.

## Implementation

- Native modal `dialog`, rendered with the shared storefront header. The modal top layer prevents clipping by the sticky header's backdrop filter.
- CSS transform animation of 180 ms, disabled for reduced motion. No animation dependency or separate content request when opening. Menu links disable Next.js prefetch.
- Thai navigation, a 44 × 44 CSS-pixel trigger and close button, scrollable menu content, focus on close when opening, native modal background inertness, Escape support, backdrop dismissal, automatic closing on navigation, and restoration of previous body overflow.
- The drawer serves all storefront routes. Admin navigation is outside this change.
- Shared global CSS selectors now target only the header's direct desktop navigation, so they do not hide the drawer's navigation on small screens.

## Source and scope

- Handoff branch: `chatgpt-frontend-handoff`.
- Production source is the isolated package in `scratch/damper-audit/production-patch`, preserving production base `01c83175d9cb885b2dc8473612b920f6ba441d39` and the already released article/typography fixes.
- `docs/releases/2026-09-14-navigation-release.patch` reconstructs the cumulative release from that production base; it passed `git apply --check`.
- Verified 211 original source files: backend, database schema, dependency manifests, and API source match the production base. No CMS or inventory changes.
- `evselects.com` remains on its existing Vercel project `evselect-platform`, team `evselect-com`. Sites discovery found separate `chatgpt.site` deployments; this release does not migrate the public domain.
- User explicitly authorized deploying the completed frontend changes in this task.

## Validation before release

- Optimized production build and TypeScript passed. Targeted ESLint and `git diff --check` passed.
- Actual Chrome viewport widths 320, 390, 768, 1025, 1280, 1440, and 1920: trigger visible, header fits, no horizontal page overflow. Browser default root font was 20 px, with the user's larger minimum text settings preserved.
- Home, article index, Tesla Model 3, damper tuning, and dealer application pages checked at 390 and 1440 CSS pixels: menu trigger present, header fits, no page overflow.
- Opening from a scrolled homepage displays the drawer from viewport top; trigger remains accessible in the sticky header.
- Close button, Escape, backdrop click, and previous body scroll restoration checked in Chrome. Keyboard navigation reaches all menu links; the native modal prevents background-page controls from receiving focus. Browser chrome remains reachable via the browser's own Tab behavior.
- Article menu navigation completes; returning from the article index through the product menu navigates to `/#products`, scrolls to products, and closes the menu.
- Reduced-motion emulation produces `animation-name: none`; the temporary emulation was cleared.

## Deployment

- Source commit: `c5de0d6883584d5c2f9c4cd2e534c5ab25604863`.
- Vercel deployment: `dpl_HB7br43tuMF4cBzTpi7xwYDWFEHV`.
- Deployment URL: https://evselect-platform-95g32ffab-evselect-com.vercel.app
- Production URL: https://evselects.com/
- Terminal status `READY` confirmed before promotion. After promotion, resolving `evselects.com` through the Vercel connector returned this exact deployment ID and `READY`.
- All 24 storefront routes returned HTTP 200, one menu trigger, and the dialog markup on localhost, the unique deployment URL, and the production domain. The obsolete mobile strip is absent. The damper cover returns HTTP 200 with JPEG content type.
- Click opening and closing verified on the unique deployment and the production domain. Tesla production deployment still contains 460 hp and four trim cards.
- The user's explicitly mentioned tab was refreshed and its menu opened successfully using the keyboard. Automated mouse dispatch timed out in that pre-existing tab; click behavior passed in a fresh tab on the same production domain. The user's tab is left showing the menu.
- Viewport and reduced-motion emulation reset; temporary test tab closed.

Evidence JSON files in the ignored audit folder: `menu-http-local.json`, `menu-http-deployment.json`, and `menu-http-production.json`.

Rollback target for this navigation release: `dpl_69TH1R8ghPtpvRus72FB7akGo5c8` (`evselect-platform-5796evv50-evselect-com.vercel.app`).
