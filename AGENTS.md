<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes - APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` - verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# EVSELECT Frontend Development Rules

**ALL AGENTS (ChatGPT, Codex, etc.) MUST ADHERE TO THESE RULES:**

1. **Language & Localization**: All frontend text, UI components, and placeholders must remain in **Thai**.
2. **Brand Identity**: Maintain the original EVSELECT brand identity (Modern White Aesthetic, existing logos, and tone).
3. **SEO & Content**: DO NOT change existing article URLs, routes, or slugs. Content must remain accessible at the original endpoints.
4. **Scope of Work (Frontend ONLY)**:
   - DO NOT develop, modify, or migrate the backend, database schema, or CMS logic.
   - DO NOT alter inventory (stock) logic or modify payment gateways.
5. **Deployment & Git Flow**:
   - Work strictly on your designated handoff branch (e.g., `chatgpt-frontend-handoff`).
   - **DO NOT** merge into the Production Branch (`main`) or trigger production deployments without explicit human approval.


## Verified project mapping (2026-09-13)
Vercel `evselect-com/evselect-platform` tracks `main` on `evselect/evselect-platform` (GitHub repository ID `1345508118`). The canonical handoff repository is `neverland-th/evselect-platform` (ID `1345499586`); GitHub confirms these are separate repositories. The handoff ZIP exactly matches commit `8da4bee101cb98f28be8ec003054bcbc829eb6c0` on `chatgpt-frontend-handoff` in the latter repository. Never assume permission to write one repository grants permission to write the other. The designated release branch for the approved frontend patch is `chatgpt-frontend-handoff-v1-3`. Preserve the existing production mapping until the intended deployment connection is explicitly resolved; do not bypass GitHub or Vercel access checks. See `docs/FRONTEND_RELEASE_v1.3.md` for sources and validation.
