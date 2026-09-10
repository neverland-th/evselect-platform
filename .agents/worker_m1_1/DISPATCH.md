# Dispatch: Worker M1 1 — Navigation, Mobile Drawer & Global Layout Fixes

## Role & Mission
You are `worker_m1_1` (Role: Frontend Engineer, Type: `teamwork_preview_worker`).
Your working directory is:
`c:\Users\rolf-\.gemini\antigravity\scratch\evselect-platform\.agents\worker_m1_1`
Project root:
`c:\Users\rolf-\.gemini\antigravity\scratch\evselect-platform`

## Authoritative User Request & Context
- Read `c:\Users\rolf-\.gemini\antigravity\scratch\evselect-platform\.agents\ORIGINAL_REQUEST.md`
- Read `c:\Users\rolf-\.gemini\antigravity\scratch\evselect-platform\PROJECT.md`
- Read `c:\Users\rolf-\.gemini\antigravity\scratch\evselect-platform\.agents\explorer_survey_1\handoff.md`

## File Ownership
You exclusively own:
- `src/components/MobileMenu.tsx`
- `src/app/globals.css`
- `src/app/layout.tsx`
- `src/app/(storefront)/layout.tsx`

Do NOT modify files outside this list.

## Mandatory Integrity Warning
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_preview_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

## Task Requirements
1. **Mobile Drawer Accessibility & Focus (`src/components/MobileMenu.tsx`)**:
   - Prevent off-screen focus leaks: When `isOpen` is `false`, ensure `<nav>` has `invisible` and `inert={!isOpen ? true : undefined}` and `aria-hidden={!isOpen}`.
   - When drawer is opened, focus moves into the drawer (e.g. to the close button or first interactive item).
   - Implement focus trap so `Tab` navigation stays within the open drawer.
   - Ensure pressing `Escape` closes the drawer and restores focus to the hamburger button.
   - Improve touch targets: Hamburger button, close button, and navigation links must meet >= 44x44px touch target guidelines (`min-h-[44px] min-w-[44px]` or adequate padding).
   - Fix non-standard Tailwind utility classes: replace `w-4.5 h-4.5` with `w-5 h-5`.
2. **Global CSS & Viewport (`src/app/globals.css`, `src/app/layout.tsx`)**:
   - In `src/app/globals.css`:
     - Change `body { overflow-x: hidden; }` to `html, body { overflow-x: clip; }` to preserve `position: sticky` on iOS WebKit while preventing page overflow.
     - Add `.scrollbar-none` utility:
       ```css
       .scrollbar-none {
         -ms-overflow-style: none;
         scrollbar-width: none;
       }
       .scrollbar-none::-webkit-scrollbar {
         display: none;
       }
       ```
   - In `src/app/layout.tsx`:
     - Add explicit `export const viewport: Viewport = { width: 'device-width', initialScale: 1, maximumScale: 5 };`
3. **Footer Touch Targets (`src/app/(storefront)/layout.tsx`)**:
   - Add adequate touch target padding (`py-2` / `min-h-[40px]`) to footer links and contact items so they are easily tappable on mobile.
4. **Verification**:
   - Run typecheck and build: `npm run build`
   - Verify 0 TypeScript and build errors.
   - Deliver `handoff.md` in your working directory and message parent when complete.

## 2026-09-10T06:24:24Z
You are worker_m1_1.
Your working directory is:
c:\Users\rolf-\.gemini\antigravity\scratch\evselect-platform\.agents\worker_m1_1
Project root:
c:\Users\rolf-\.gemini\antigravity\scratch\evselect-platform

Read your dispatch file at:
c:\Users\rolf-\.gemini\antigravity\scratch\evselect-platform\.agents\worker_m1_1\DISPATCH.md
And read:
c:\Users\rolf-\.gemini\antigravity\scratch\evselect-platform\.agents\ORIGINAL_REQUEST.md
c:\Users\rolf-\.gemini\antigravity\scratch\evselect-platform\PROJECT.md
c:\Users\rolf-\.gemini\antigravity\scratch\evselect-platform\.agents\explorer_survey_1\handoff.md

MANDATORY INTEGRITY WARNING:
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_preview_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

Your mission:
You exclusively own:
- `src/components/MobileMenu.tsx`
- `src/app/globals.css`
- `src/app/layout.tsx`
- `src/app/(storefront)/layout.tsx`

Implement the following fixes:
1. In `src/components/MobileMenu.tsx`:
   - Fix off-screen focus leak: When `isOpen === false`, apply `invisible` and `inert={!isOpen ? true : undefined}` and `aria-hidden={!isOpen}` to the `<nav>` element.
   - Implement focus management: When opened, focus moves into the drawer. Trap focus inside the drawer while open.
   - On Escape key or close button, restore focus to the hamburger button.
   - Ensure touch targets for hamburger button, close button, and links are >= 44x44px (`min-h-[44px] min-w-[44px]` or adequate padding).
   - Fix non-standard Tailwind tokens: replace `w-4.5 h-4.5` with `w-5 h-5`.
2. In `src/app/globals.css`:
   - Replace `body { overflow-x: hidden; }` with `html, body { overflow-x: clip; }` to preserve `position: sticky` on iOS WebKit while preventing overflow.
   - Add `.scrollbar-none` utility for custom scrollbars.
3. In `src/app/layout.tsx`:
   - Add explicit `export const viewport: Viewport = { width: 'device-width', initialScale: 1, maximumScale: 5 };`
4. In `src/app/(storefront)/layout.tsx`:
   - Expand touch target padding (`py-2`) for footer contact and navigation links.
5. Verify:
   - Run `npm run build` and ensure exit code 0 with 0 errors.
   - Write `handoff.md` and report back when complete.
