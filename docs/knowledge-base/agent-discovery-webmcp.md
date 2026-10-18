# Optional agent discovery for EVSELECTS

Implementation date: 2026-10-18. These features are not Google ranking directives and do not guarantee indexing, snippets, AI citations or a Lighthouse performance score.

## Published surface

- `/.well-known/ard.json` is the current ARD entry source.
- `/.well-known/ai-catalog.json` returns the same manifest for older Lighthouse consumers such as the user's supplied report.
- HTTP Link discovery retains llms.txt and advertises both manifest relations on Home/articles and the vehicle-style routes.
- The manifest describes the existing WebApplication using `application/ld+json`, not an invented MCP server or image-generation API. App data is generated from the same builder as the visible pages' JSON-LD.
- The editor registers `get_vehicle_style_info` only if `document.modelContext.registerTool` exists. It reads shared public app information, upload limits, guide/privacy links and the Concept preview disclaimer. Registration is removed with AbortSignal on unmount; unsupported or denied registration leaves the editor unchanged.
- The tool cannot upload an image, read a local photo, consent on the user's behalf, submit generation, change settings, or call a paid provider. It does not claim current provider readiness. Existing app behavior is untouched.
- No fake form or auto-submit annotation was added: the editor currently uses buttons rather than a native HTML form. Form coverage may correctly remain Not applicable. Native WebMCP is experimental and browser-dependent.

## Primary references inspected

- https://developer.chrome.com/docs/ai/webmcp/imperative-api (updated 2026-10-16): document.modelContext, registerTool, inputSchema, readOnlyHint and AbortSignal lifecycle.
- https://developer.chrome.com/docs/ai/webmcp/declarative-api: annotations apply to actual HTML forms; auto-submit is optional, not mandatory.
- https://github.com/ards-project/ard-spec/blob/main/spec/ard.md §5.1: current ard.json and legacy ai-catalog discovery.
- https://github.com/ards-project/ard-spec/blob/main/spec/schemas/ard-entry.schema.json and ai-catalog.schema.json: entry required fields and mutually exclusive url/data.
- https://github.com/GoogleChrome/lighthouse/blob/main/core/audits/agentic/ard-schema.js: current optional manifest audit; older runner versions may differ.

## Checks

Run `tsx --test scripts/test-agent-discovery.ts`; add BASE_URL for built/live HTTP checks. Also run the existing app/schema/link suites. Validate the discovery manifest against the published upstream schemas separately when a Draft 2020-12 validator is available. Runtime browser tool discovery/invocation is a separate check from mocked unit registration and a successful build. No real image-generation call is needed for this integration's tests.
