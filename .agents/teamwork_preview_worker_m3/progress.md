# Progress — Milestone 3: CLI Runner, Output Exporters & Package Scripts

Last visited: 2026-08-27T06:46:50+07:00

## Completed Tasks
- [x] Implemented `src/content-generator/exporters/markdown.ts` with batch header, table of contents, copy-paste blocks, metadata tables, image attachments, and hashtags.
- [x] Implemented `src/content-generator/exporters/json.ts` with typed schema (`ExportJsonSchema`), summary aggregation statistics (total posts, byTopic, byMode, vehiclesCovered, total/average characters), and individual post payloads.
- [x] Implemented `src/content-generator/exporters/index.ts` barrel export and `exportPosts` / `exportPostsSync` async/sync file writing pipeline with automatic directory resolution.
- [x] Exported `exporters` in `src/content-generator/index.ts`.
- [x] Implemented `scripts/generate-posts.ts` CLI script supporting `--vehicle <id>`, `--topic <topic>`, `--mode <mode>`, `--count <n>`, `--output-dir <path>`, `--list`, `--all`, `--help`, with colorful console reporting and fuzzy vehicle ID resolution.
- [x] Updated `package.json` with `"generate-posts": "tsx scripts/generate-posts.ts"` and installed `tsx` as devDependency.
- [x] Built and ran `tests/test-m3-verification.ts` (27/27 tests passed).
- [x] Verified CLI commands:
  - `npm run generate-posts -- --help` (Passed)
  - `npm run generate-posts -- --list` (Passed)
  - `npx tsx scripts/generate-posts.ts --vehicle byd-seal --topic review` (Passed)
  - `npx tsx scripts/generate-posts.ts --all` (Generated 16 posts in `posts.md` and `posts.json`)
  - `npx tsc --noEmit` (Passed with zero errors)
