# Technical Analysis & Architecture: Milestone 3

**Agent**: teamwork_preview_worker_m3  
**Date**: 2026-08-27  
**Scope**: Exporters, CLI Script Runner, and Package Scripts

---

## 1. Exporters Design

### A. Markdown Exporter (`src/content-generator/exporters/markdown.ts`)
Designed specifically for Facebook page managers, social media admins, and Meta Business Suite copywriters:
1. **Header Banner**: Summarizes total posts, export timestamp in Thai formatting (`toLocaleDateString('th-TH')`), system version, and category distribution.
2. **Posting Best Practices Guide**: Provides clear advice on recommended posting times (07:30-08:30, 11:45-13:00, 18:30-20:30) and media attachment tips.
3. **Table of Contents (TOC)**: An indexed Markdown table mapping post index, title, topic badge, vehicle model, character count, and anchor links (`#post-1`, etc.).
4. **Per-Post Layout**:
   - Distinct divider `---` and anchor tag.
   - Comprehensive metadata table (Topic, Model, Post ID, Engine Mode, Length, Reading Time, Target Audience, Rating).
   - Suggested Image Assets list referencing verified `/images/reviews/...` paths.
   - Dedicated `📋 ข้อความพร้อมโพสต์ (Copy-Paste Text สำหรับ Facebook)` fenced code block containing clean, emoji-formatted copy ready for instant clipboard pasting.
   - Visual Markdown preview block.
   - Recommended Thai hashtags list (`#EVSelectionTH`, `#รถยนต์ไฟฟ้า`, `#BYDSeal`, etc.).
   - CTA URL link.

### B. JSON Exporter (`src/content-generator/exporters/json.ts`)
Provides structured, type-safe JSON for programmatic CMS ingestion, scheduled bot posting, or webhook pipelines:
- **Schema Version**: `1.0.0`
- **Generator Metadata**: System name, version, brand, homepage.
- **Summary Analytics**:
  - `totalPosts`: Count of exported posts
  - `byTopic`: Record mapping topic names to counts
  - `byMode`: Record mapping generation modes to counts
  - `vehiclesCovered`: Array of all unique vehicles featured
  - `totalCharacters` & `averageCharacters`: Cumulative and average character metrics
- **Post Objects**: Full post schema including `id`, `title`, `topic`, `vehicleModel`, `compareVehicleModel`, `generatedAt`, `mode`, `contentMarkdown`, `plainText`, `metadata` with calculated `wordCount` and `estimatedReadingTimeMinutes`.

### C. Unified Exporters Pipeline (`src/content-generator/exporters/index.ts`)
- Barrel export of markdown and JSON modules.
- `exportPosts` (async) and `exportPostsSync` (sync) helpers.
- Handles directory resolution (`path.resolve(process.cwd(), outputDir)`), automatic recursive directory creation (`fs.mkdirSync(dir, { recursive: true })`), and atomic file writing for `posts.md` and `posts.json`.

---

## 2. CLI Script Runner (`scripts/generate-posts.ts`)

Built with ergonomic CLI argument parsing and ANSI color-coded reporting:
- **Options Supported**:
  - `--vehicle, -v <id>`: Specifies vehicle model with intelligent fuzzy alias matching (e.g. `tesla-model-3` -> `tesla-model-3-highland`, `atto-3` -> `byd-atto-3`, `mg4` -> `mg4-electric`, `aion-y` -> `gac-aion-y-plus`).
  - `--compare <id>`: Competitor vehicle ID for comparisons.
  - `--topic, -t <topic>`: `review` | `comparison` | `news` | `heat-guide` | `charging-guide`.
  - `--mode, -m <mode>`: `rule_based` | `ai_augmented`.
  - `--count, -c <n>`: Batch size for single-command generation.
  - `--output-dir, -o <path>`: Target destination folder.
  - `--list, -l`: Displays formatted table of all 13 Thai EV models, 5 editorial topics, and engine modes.
  - `--all, -a`: Triggers an end-to-end editorial publication batch (16 high-value posts).
  - `--help, -h`: Prints command usage, flags, descriptions, and examples.
- **Terminal UI**: Clean ASCII banners, step progress indicators, elapsed execution time, post summary table, and next-step guides.

---

## 3. Package Scripts (`package.json`)
- Added `"generate-posts": "tsx scripts/generate-posts.ts"` under `"scripts"`.
- Added `"tsx": "^4.19.2"` to devDependencies for seamless execution via `npm run generate-posts` or `npx tsx scripts/generate-posts.ts`.
