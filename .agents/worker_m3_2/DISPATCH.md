# Dispatch: Worker M3 2 — Storefront Header 280px Responsive & Touch Target Hardening

## Role & Mission
You are `worker_m3_2` (Role: Frontend Engineer, Type: `teamwork_preview_worker`).
Your working directory is:
`c:\Users\rolf-\.gemini\antigravity\scratch\evselect-platform\.agents\worker_m3_2`
Project root:
`c:\Users\rolf-\.gemini\antigravity\scratch\evselect-platform`

## Context & Inputs
- Read `c:\Users\rolf-\.gemini\antigravity\scratch\evselect-platform\.agents\ORIGINAL_REQUEST.md`
- Read `c:\Users\rolf-\.gemini\antigravity\scratch\evselect-platform\PROJECT.md`
- Read feedback in `c:\Users\rolf-\.gemini\antigravity\scratch\evselect-platform\.agents\challenger_1\handoff.md`
- Read feedback in `c:\Users\rolf-\.gemini\antigravity\scratch\evselect-platform\.agents\challenger_2\handoff.md`

## File Ownership
You exclusively own:
- `src/app/(storefront)/layout.tsx`

Do NOT modify other files.

## Mandatory Integrity Warning
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_preview_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

## Task Requirements
In `src/app/(storefront)/layout.tsx`:
1. **Fix 280px Ultra-Narrow Header Overflow (Challenger 1)**:
   - Line 44: Change `<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ...">` to:
     `<div className="max-w-7xl mx-auto px-2.5 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-1.5 sm:gap-4">`
   - Line 50: In mobile logo container, adjust `w-24 sm:w-36` so it fits comfortably on 280px screens.
   - Line 123: The admin switch button (`<Link href="/products" ...>`) is already in the mobile drawer; on the header, change `inline-flex` to `hidden sm:inline-flex` so on narrow mobile screens (< 640px) it does not crowd the header.
   - Ensure the entire header comfortably fits within 280px with zero overflow (`scrollWidth <= innerWidth`).
2. **Fix Touch Target Sizing (Challenger 2)**:
   - In header action buttons (lines 115, 125): Ensure buttons have `min-h-[44px] min-w-[44px] h-11 inline-flex items-center justify-center` so computed height/width is at least 44px.
   - In footer contact list (lines 180, 186, 192, 197): Add `min-h-[44px] py-2.5 flex items-center gap-2` so every contact link and item has a computed height >= 44px.
3. **Execution & Verification**:
   - Run `npm run build` (confirm exit code 0).
   - Run `npx playwright test` (confirm 190 passed, 0 failed).
   - Run `npx playwright test tests/e2e/challenger-viewport-stress.spec.ts` (confirm passes at 280px).
   - Run `npx playwright test tests/e2e/adversarial-mobile-ergonomics.spec.ts` (confirm touch targets pass).
    - Deliver `handoff.md` and report back when complete.

## 2026-09-10T06:51:44Z
You are worker_m3_2.
Your working directory is:
c:\Users\rolf-\.gemini\antigravity\scratch\evselect-platform\.agents\worker_m3_2
Project root:
c:\Users\rolf-\.gemini\antigravity\scratch\evselect-platform

Read your dispatch file at:
c:\Users\rolf-\.gemini\antigravity\scratch\evselect-platform\.agents\worker_m3_2\DISPATCH.md
And read:
c:\Users\rolf-\.gemini\antigravity\scratch\evselect-platform\.agents\ORIGINAL_REQUEST.md
c:\Users\rolf-\.gemini\antigravity\scratch\evselect-platform\PROJECT.md
c:\Users\rolf-\.gemini\antigravity\scratch\evselect-platform\.agents\challenger_1\handoff.md
c:\Users\rolf-\.gemini\antigravity\scratch\evselect-platform\.agents\challenger_2\handoff.md

MANDATORY INTEGRITY WARNING:
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_preview_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

Your mission:
You exclusively own `src/app/(storefront)/layout.tsx`.
1. Fix 280px ultra-narrow header overflow:
   - Adjust header padding: `px-2.5 sm:px-6 lg:px-8`.
   - Adjust mobile logo container: `w-24 sm:w-36`.
   - On small screens (< 640px), make the redundant admin button on the header `hidden sm:inline-flex` (it is already present in the mobile drawer).
   - Ensure header fits within 280px without causing horizontal document scroll.
2. Fix touch targets:
   - Header buttons: `min-h-[44px] min-w-[44px] h-11 inline-flex items-center justify-center`.
   - Footer contact links/items: `min-h-[44px] py-2.5 flex items-center gap-2`.
3. Verify:
   - Run `npm run build`.
   - Run `npx playwright test`.
   - Run `npx playwright test tests/e2e/challenger-viewport-stress.spec.ts`.
   - Run `npx playwright test tests/e2e/adversarial-mobile-ergonomics.spec.ts`.
4. Deliver `handoff.md` and report back when complete.

## 2026-09-10T07:00:13Z
**Context**: Status check on Iteration 2 Header 280px & Touch Target Hardening
**Content**: Please report your current progress on updating `src/app/(storefront)/layout.tsx` and running the Playwright tests.
**Action**: If you are in the middle of editing or testing, continue and deliver your handoff.md when complete.

