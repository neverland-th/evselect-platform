## 2026-08-26T23:42:40Z

You are teamwork_preview_worker_m3, implementing Milestone 3: CLI Runner, Output Exporters & Package Scripts for EV Selection Thailand Facebook Content System.

## Working Directory & Identity
- Working Directory: C:\Users\rolf-\.gemini\antigravity\worktrees\evselect-platform\create_evselect_facebook_page\.agents\teamwork_preview_worker_m3
- Project Root: C:\Users\rolf-\.gemini\antigravity\worktrees\evselect-platform\create_evselect_facebook_page
- Authoritative User Request: C:\Users\rolf-\.gemini\antigravity\worktrees\evselect-platform\create_evselect_facebook_page\.agents\ORIGINAL_REQUEST.md
- Project Architecture Spec: C:\Users\rolf-\.gemini\antigravity\worktrees\evselect-platform\create_evselect_facebook_page\PROJECT.md

## Exclusive Write Ownership
You own and must implement the following files:
1. `src/content-generator/exporters/markdown.ts`:
   - Formats `GeneratedPost[]` into an aesthetic, easy-to-read `posts.md` formatted specifically for Facebook page managers to copy and paste.
   - Includes header summary, table of contents, post separators `---`, suggested image attachments, word/character counts, and hashtag blocks.
2. `src/content-generator/exporters/json.ts`:
   - Formats `GeneratedPost[]` into structured `posts.json` with full metadata, vehicle specs, timestamps, and export schema.
3. `src/content-generator/exporters/index.ts`:
   - Barrel export and helper `exportPosts(posts: GeneratedPost[], options: ExportOptions)` that writes `posts.md` and `posts.json` to destination paths.
4. `scripts/generate-posts.ts`:
   - CLI script runnable with `npx tsx scripts/generate-posts.ts` and `npm run generate-posts`.
   - CLI options:
     - `--vehicle <id>`: Generate for specific vehicle (e.g. `byd-seal`, `tesla-model-3`, `deepal-s07`, etc.)
     - `--topic <topic>`: `review` | `comparison` | `news` | `heat-guide` | `charging-guide` (default: `review`)
     - `--mode <rule_based|ai_augmented>`: Generation engine mode (default: `rule_based`)
     - `--count <n>`: Number of posts to generate (default: `1`)
     - `--output-dir <path>`: Output directory for posts.md and posts.json (default: `./`)
     - `--list`: List all available vehicles and topic templates
     - `--all`: Generate a complete batch across top vehicles and topics
     - `--help`: Print CLI usage guide with examples
   - Displays clean, colorful console summary with generated post titles, vehicles, and output file locations.
5. Update `package.json` scripts to include:
   - `"generate-posts": "tsx scripts/generate-posts.ts"`
6. Execute the CLI script to generate sample `posts.md` and `posts.json` in project root:
   - `npx tsx scripts/generate-posts.ts --vehicle byd-seal --topic review`
   - `npx tsx scripts/generate-posts.ts --all`
