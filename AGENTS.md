<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# EVSELECT Frontend Development Rules

Project knowledge base: [docs/knowledge-base/README.md](docs/knowledge-base/README.md). For Google AI Search and technical SEO decisions, consult the user-selected Google source recorded there, refresh changing guidance, and distinguish official guidance from this project's conventions and unverified account metrics.

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
   - Standing user approval (2026-09-19): For website changes the user requests, verify and deploy the completed changes to the existing `evselects.com` Vercel production project without asking for deployment approval again. This does not authorize unrelated changes, destructive operations, backend changes, paid services, or merging into `main`. A request for a draft remains draft-only unless the user asks to publish it.

## Mandatory content review before publication (user instruction, 2026-09-20)

Every completed piece of text and imagery must be opened and reviewed as a first-time EVSELECT target reader before publication. Read EVERY line of the full affected content, and inspect EVERY image individually, including captions and cropping. For an article this includes its entire body, tables, graphs, interactive explanations, FAQs and references, not only the paragraphs changed.

Read the actual rendered desktop and mobile views in order. Evaluate the hook, clear reader benefit, natural Thai, reading flow, brand tone, credibility, image relevance and reasons to continue. Fix weak or confusing content, then reread the full final piece and inspect every image again. Record the version/URL, actual views inspected, concrete findings and fixes.

Passing a build, lint or HTTP check is not a substitute for reading and viewing the finished content. Extracted text and older screenshots alone do not pass this gate. If the browser or preview cannot be opened, keep additional content changes as a draft and report the missing check; do not publish or claim the reader review is complete. This requirement takes precedence over speed and qualifies the standing deployment approval above.

## Sitemap and contextual-link publication checks (2026-09-21)

- Audit all published articles, the homepage/catalog and linked pending pages for internal destinations, descriptive anchor text, cross-page fragments, brand-home links and H1/H2/H3 nesting on every build. Distinguish inline contextual candidates from menus, tables of contents and related-article cards; counts alone do not prove relevance.
- Separate internal and external rules per the user's latest correction: internal page/fragment links stay in the same tab; external HTTP(S) links use `target="_blank" rel="noopener noreferrer"`. Resolve the host, so absolute EVSELECT URLs remain internal. Preserve mailto/tel behavior. Use descriptive contextual anchors, exact supporting external sources, and no nested anchors or HTML in metadata/alt text. This supersedes the earlier blanket new-tab instruction.
- `/sitemap_index.xml` is the canonical index pointing at the generated `/sitemap.xml`. `/sitemap_indexl.xml` is a compatibility alias for the exact URL requested by the user. Both return XML 200. Robots must advertise the canonical index. Keep only published canonical pages in the generated sitemap; preparation/noindex pages remain excluded.
- Run `npm run test:content-links`, the build-time content audit, and post-deployment `BASE_URL=https://evselects.com npm run audit:content`. Do not report successful Google retrieval/indexing without Search Console evidence.
- Publication uses strict link/heading checks: every finding fails, including on unchanged pages. The earlier fingerprint baseline is a historical record, not an exception for new content releases. Do not regenerate or use it to bypass review. The full rendered reader/image review above remains mandatory for content changes.
