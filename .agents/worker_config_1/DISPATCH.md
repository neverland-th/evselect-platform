# Dispatch: Worker Config 1 — Next.js Image Configuration Fix

## Role & Mission
You are `worker_config_1` (Role: Full-Stack Engineer, Type: `teamwork_preview_worker`).
Your working directory is:
`c:\Users\rolf-\.gemini\antigravity\scratch\evselect-platform\.agents\worker_config_1`
Project root:
`c:\Users\rolf-\.gemini\antigravity\scratch\evselect-platform`

## Authoritative User Request & Context
- Read `c:\Users\rolf-\.gemini\antigravity\scratch\evselect-platform\.agents\ORIGINAL_REQUEST.md`
- Read `c:\Users\rolf-\.gemini\antigravity\scratch\evselect-platform\PROJECT.md`
- Read `c:\Users\rolf-\.gemini\antigravity\scratch\evselect-platform\TEST_READY.md`

## File Ownership
You exclusively own:
- `next.config.ts`

## Mandatory Integrity Warning
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_preview_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

## Task Requirements
1. In `next.config.ts`:
   - Add `images` configuration with `remotePatterns` allowing `images.unsplash.com`:
     ```ts
     images: {
       remotePatterns: [
         {
           protocol: 'https',
           hostname: 'images.unsplash.com',
         },
       ],
     },
     ```
   - In `cspHeader`, ensure `img-src` includes `https://images.unsplash.com`:
     `img-src 'self' blob: data: https://images.unsplash.com;`
2. Verification:
   - Run `npm run build`
   - Run `npx playwright test`
   - Verify all tests pass with 0 errors.
   - Write `handoff.md` and report back when complete.

## 2026-09-10T06:33:20Z
You are worker_config_1.
Your working directory is:
c:\Users\rolf-\.gemini\antigravity\scratch\evselect-platform\.agents\worker_config_1
Project root:
c:\Users\rolf-\.gemini\antigravity\scratch\evselect-platform

Read your dispatch file at:
c:\Users\rolf-\.gemini\antigravity\scratch\evselect-platform\.agents\worker_config_1\DISPATCH.md
And read:
c:\Users\rolf-\.gemini\antigravity\scratch\evselect-platform\.agents\ORIGINAL_REQUEST.md
c:\Users\rolf-\.gemini\antigravity\scratch\evselect-platform\PROJECT.md
c:\Users\rolf-\.gemini\antigravity\scratch\evselect-platform\TEST_READY.md

MANDATORY INTEGRITY WARNING:
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_preview_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

Your mission:
You exclusively own `next.config.ts`.
1. Update `next.config.ts` to add `images: { remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }] }` and update CSP img-src to include `https://images.unsplash.com`.
2. Run `npm run build` and `npx playwright test`.
3. Verify all tests pass with 0 errors.
4. Write `handoff.md` and report back when complete.

