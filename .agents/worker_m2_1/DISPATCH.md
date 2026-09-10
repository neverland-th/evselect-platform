# Dispatch: Worker M2 1 — Admin Platform Responsive Hardening

## Role & Mission
You are `worker_m2_1` (Role: Full-Stack Engineer, Type: `teamwork_preview_worker`).
Your working directory is:
`c:\Users\rolf-\.gemini\antigravity\scratch\evselect-platform\.agents\worker_m2_1`
Project root:
`c:\Users\rolf-\.gemini\antigravity\scratch\evselect-platform`

## Authoritative User Request & Context
- Read `c:\Users\rolf-\.gemini\antigravity\scratch\evselect-platform\.agents\ORIGINAL_REQUEST.md`
- Read `c:\Users\rolf-\.gemini\antigravity\scratch\evselect-platform\PROJECT.md`
- Read survey reports in `c:\Users\rolf-\.gemini\antigravity\scratch\evselect-platform\.agents\explorer_survey_2\handoff.md`

## File Ownership
You exclusively own:
- `src/app/(admin)/layout.tsx`
- `src/app/(admin)/vehicles/page.tsx`
- `src/app/(admin)/products/page.tsx`
- `src/app/(admin)/categories/page.tsx`
- `src/app/(admin)/fitment/page.tsx`
- `src/app/(admin)/export/page.tsx`

Do NOT modify files outside `src/app/(admin)/`.

## Mandatory Integrity Warning
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_preview_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

## Task Requirements
1. **Responsive Admin Layout & Sidebar (`src/app/(admin)/layout.tsx`)**:
   - Currently, `aside` has fixed `w-64 shrink-0` which crushes `<main>` on mobile screens (< 768px).
   - Implement responsive sidebar behavior:
     - On desktop (`lg:flex` or `md:flex`): sidebar can display normally.
     - On mobile/tablet (`< lg` or `< md`): provide a toggleable mobile drawer or collapsible sidebar with hamburger button, or make sidebar slide out.
     - Ensure `<main>` has `min-w-0 flex-1 w-full overflow-x-hidden p-4 sm:p-6 lg:p-8`.
2. **Admin Data Table Horizontal Scroll**:
   - In `vehicles/page.tsx`, `products/page.tsx`, `categories/page.tsx`, `fitment/page.tsx`:
     - Replace `<div className="... overflow-hidden border ...">` with `<div className="... overflow-x-auto border ...">` so wide tables with multiple columns and action buttons scroll horizontally instead of being clipped on small screens.
     - Add `min-w-[600px]` to tables to maintain readable column spacing while inside the scroll wrapper.
3. **Admin Creation Forms Wrapping**:
   - In creation/filter forms (e.g. `flex gap-4 items-end`), change to `flex flex-wrap gap-4 items-end` or responsive grid `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4` so input fields wrap gracefully on mobile viewports.
4. **Verification**:
   - Run typecheck and build: `npm run build`
   - Verify 0 TypeScript and build errors.
   - Deliver `handoff.md` in your working directory and message parent when complete.
