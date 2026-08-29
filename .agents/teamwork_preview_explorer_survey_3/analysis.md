# Content Generation Engine Architecture & Design Specification
**Project**: EV Selection Thailand (`evselect-platform`)  
**Target Channel**: Official Facebook Page Content Generation  
**Author**: Architecture & Generation Engine Design Explorer (`teamwork_preview_explorer_survey_3`)  
**Date**: 2026-08-27  

---

## 1. Executive Summary & Problem Scope

The **EV Selection Thailand** Facebook page requires an automated, high-converting content generation system to produce authentic, engaging, and technically accurate Thai-language EV reviews, market comparisons, and climate-specific guides.

### Key Requirements (from ORIGINAL_REQUEST.md):
1. **R1. Content Generation Engine**: Generate engaging Facebook posts using verified Thai EV specifications (pricing in THB, official trims, 40°C heat/AC test, real-world range, local charging networks).
2. **R2. Output Format**: Export to local human-friendly copy-pasteable `posts.md` and machine-readable `posts.json`.
3. **Dual-Mode Reliability**:
   - **Mode A (Rule-Based & Parameterized Engine)**: 100% offline runnable, zero API key required, deterministic, rich linguistic variations.
   - **Mode B (AI-Augmented via Gemini API)**: Optional LLM enhancement with strict Thai automotive system prompts and schema validation.
4. **Resilience**: Automatic fallback from Mode B to Mode A if API keys are missing, network is unavailable, or rate limits occur.

---

## 2. Dual-Mode Engine Architecture

```
                                  ┌────────────────────────┐
                                  │   CLI / Script Runner  │
                                  │  (scripts/generate-    │
                                  │       posts.ts)        │
                                  └───────────┬────────────┘
                                              │
                                              ▼
                                 ┌───────────────────────────┐
                                 │   Generation Orchestrator │
                                 │    (ContentEngine.ts)     │
                                 └─────────────┬─────────────┘
                                               │
                        ┌──────────────────────┴──────────────────────┐
                        │ Mode Selection: auto / rule / ai            │
                        ▼                                             ▼
          ┌───────────────────────────┐                 ┌───────────────────────────┐
          │     Mode A: Rule-Based    │                 │    Mode B: AI-Augmented   │
          │   Parameterized Engine    │                 │      (Gemini 2.5/1.5)     │
          │ (TemplateRegistry & Hooks)│                 │   (Structured Prompting)  │
          └─────────────┬─────────────┘                 └─────────────┬─────────────┘
                        │                                             │ (Fallback on Err)
                        │                                             ├───► [Mode A Fallback]
                        │                                             │
                        └──────────────────────┬──────────────────────┘
                                               │
                                               ▼
                                 ┌───────────────────────────┐
                                 │   Content Quality &       │
                                 │   Schema Validator        │
                                 └─────────────┬─────────────┘
                                               │
                                               ▼
                                 ┌───────────────────────────┐
                                 │   Dual Output Pipeline    │
                                 ├─────────────┬─────────────┤
                                 │  posts.md   │  posts.json │
                                 │(Copy-Paste) │(Automations)│
                                 └─────────────┴─────────────┘
```

---

## 3. Data Model & Thai Vehicle Catalog

The engine sources verified specifications from the internal Thai EV catalog (`src/data/thaiVehicles.ts` or `src/app/(storefront)/articles/page.tsx` data):

### 3.1 Supported Flagship Thai EVs
| Vehicle Slug | Brand & Model | Thai Price Range (THB) | Battery & Chemistry | 0-100 km/h | Real-World Range | DC Fast Charge | Key Thai Feature |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `tesla-model-3-highland` | Tesla Model 3 Highland | 1,149,000 – 1,799,000 ฿ | 60 kWh LFP / 78.1 kWh NMC | 3.1 – 6.1 s | 480 – 580 กม. | 250 kW (Supercharger) | กระจก Acoustic 360°, เบาะเป่าลมเย็น |
| `byd-seal` | BYD Seal | 849,900 – 1,099,900 ฿ | 61.4 / 82.5 kWh Blade LFP | 3.8 – 7.5 s | 460 – 580 กม. | 150 kW | 530 hp AWD, ช่วงล่าง FSD, CTB Body |
| `byd-atto-3` | BYD Atto 3 | 669,900 – 799,900 ฿ | 49.92 / 60.48 kWh Blade | 7.3 s | 380 – 430 กม. | 88 kW | ม่านซันรูฟไฟฟ้ากันร้อน, แอร์ระบบกรอง CN95 |
| `zeekr-x` | Zeekr X | 899,000 – 1,049,000 ฿ | 66 kWh NMC (SEA Platform)| 3.8 – 5.8 s | 420 – 480 กม. | 150 kW | 428 hp AWD, ลำโพง Yamaha 13 จุด, ประตูไฟฟ้า |
| `deepal-s07` | Changan Deepal S07 | 1,099,000 – 1,399,000 ฿| 66.8 / 79.97 kWh NMC | 7.5 s | 430 – 510 กม. | 167 kW | จอ Sunflower 15.6 นิ้ว, ม่านหลังคาไฟฟ้า 100% |
| `mg4-electric` | MG4 Electric | 569,900 – 1,119,900 ฿ | 51 / 64 kWh Rubik's Cube | 3.8 – 7.7 s | 350 – 420 กม. | 140 kW | ขับเคลื่อนล้อหลัง RWD 50:50, 5-Link อิสระ |
| `deepal-s05` | Changan Deepal S05 | 799,000 – 899,000 ฿ | 56.12 kWh LFP (3C Fast)| 7.5 s | 390 – 440 กม. | 120 kW (3C 15 นาที)| กล้อง 4K Gimbal, ไฟหน้า DLP ฉายหนัง, Frunk 159L |
| `geely-ex2` | Geely EX2 | 429,990 – 459,990 ฿ | 39.4 kWh Aegis LFP | 9.9 s | 290 – 340 กม. | 50 kW | RWD ซิตี้คาร์, ช่วงล่างหลัง Multi-Link |

---

## 4. Mode A: Rule-Based Parameterized Template Engine Design

The Rule-Based Engine generates rich, natural Thai automotive prose using modular templates and dynamic substitution dictionaries.

### 4.1 Content Archetypes
1. **`review` (Full In-Depth Facebook Review)**:
   - 360-degree review covering 0-100 acceleration, real-world vs claimed range, 40°C Thai weather AC test, suspension handling over Bangkok potholes/concrete joints, fast charging rates, pros/cons, and recommended EVSELECT fitment accessories.
2. **`verdict` (Fast 60-Second Verdict / Highlights)**:
   - Short, punchy summary designed for high mobile engagement: Who is this car for, best trim to buy, and standout value proposition.
3. **`comparison` (Head-to-Head Thai Segment Battle)**:
   - Side-by-side comparison of 2 direct rivals (e.g. BYD Seal vs Tesla Model 3 Highland, or Deepal S07 vs BYD Atto 3).
4. **`heat-guide` (Thai Climate & Battery Care Tips)**:
   - Actionable advice on managing EV cabin heat in Bangkok summers, glass roof heat protection, DC fast charging when battery is hot, and TOU off-peak home charging.
5. **`charging-intel` (Thai Public Charging Network Guide)**:
   - Real-world charging speeds, PEA VOLTA, PTT EV Station Plz, EA Anywhere, Supercharger networks, and cost per kilometer.

### 4.2 Linguistic Variation & Dynamic Phrasing Matrix
To avoid repetitive phrasing, the template engine incorporates dynamic randomizers for:
- **Hook variations**: 
  - `⚡ [ผ่าลึกสเปกไทย] {vehicleName}: {headlineHighlight}`
  - `🚗💨 รีวิวขับจริงบนถนนเมืองไทย! {vehicleName} คุ้มไหมในงบ {priceRange}?`
  - `🔥 สรุปครบจบในโพสต์เดียว! {vehicleName} วิ่งจริงไกลแค่ไหน? แอร์สู้แดด 40°C ไหวหรือเปล่า?`
- **Heat & Road Test Phrasing**:
  - Sub-tropical AC stress test commentary.
  - Suspension feedback over Rama 2 bridge joints, Vibhavadi asphalt, and concrete tollways.
- **Call-to-Action (CTA) Variations**:
  - `💬 ใครขับรุ่นนี้อยู่ เจอปัญหาเรื่องไหน หรือชอบอะไรที่สุด มาแชร์กันในคอมเมนต์เลยครับ! 👇`
  - `👉 กำลังตัดสินใจเลือกระหว่างรุ่นนี้กับคู่แข่ง? ทักแชทปรึกษาทีมงาน EV Selection Thailand ได้เลย!`

---

## 5. Mode B: AI-Augmented Engine (Gemini API) Design

When `GEMINI_API_KEY` is present in the environment (or passed via `--api-key`), the engine can leverage Google Gemini to produce dynamic editorial posts.

### 5.1 System Prompt & Grounding Architecture
- **Role**: Senior Thai EV Automotive Journalist & Technical Reviewer for "EV Selection Thailand".
- **Tone**: Enthusiastic, objective, technically rigorous, highly engaging Thai automotive style (similar to Autolifethailand, Headlightmag, and CarExpert).
- **Grounding Payload**: The engine supplies the exact JSON object of the selected vehicle (official THB price, battery capacity, motor specs, test results) to prevent LLM hallucinations.
- **Constraints**:
  - Must write in 100% natural, modern Thai automotive vocabulary.
  - Must format with clear paragraph breaks, bullet points, and appropriate emojis.
  - Must include the mandatory 8-part Facebook anatomy.
  - Output structured JSON matching `GeneratedPostSchema`.

### 5.2 Fault Tolerance & Seamless Fallback
```ts
try {
  if (config.mode === 'ai' || (config.mode === 'auto' && hasGeminiKey())) {
    return await generateWithGemini(vehicle, topic);
  }
} catch (error) {
  console.warn(`[ContentEngine] Gemini generation failed: ${error.message}. Falling back to Rule-Based Mode.`);
}
return generateWithRuleEngine(vehicle, topic);
```

---

## 6. Output Pipeline Specification

### 6.1 `posts.md` (Human Copy-Paste Format)
- Formatted with clear post separators (`========================================`).
- Includes post metadata header (`[POST #1 | Model: BYD Seal | Mode: Rule-Based]`).
- Clean markdown formatted with emojis, lists, bold text, and hashtags ready for immediate copy-pasting into Facebook Creator Studio.

### 6.2 `posts.json` (Programmatic Consumption Format)
```json
[
  {
    "id": "post-byd-seal-review-1724742000",
    "vehicleSlug": "byd-seal",
    "vehicleName": "BYD Seal (AWD Performance / Premium)",
    "postType": "review",
    "mode": "rule-based",
    "title": "รีวิว BYD Seal สเปกไทย: สปอร์ตซีดานไฟฟ้า 530 แรงม้า คุ้มค่าที่สุดในคลาส",
    "headline": "⚡ [รีวิวเจาะลึก] BYD Seal สเปกไทย 530 แรงม้า 0-100 ใน 3.8 วินาที บนถนนจริง!",
    "content": "...",
    "priceTHB": "849,900 – 1,099,900 บาท",
    "realRangeKm": 520,
    "batteryKwh": 82.5,
    "hashtags": [
      "#EVSelectionThailand",
      "#BYDSeal",
      "#รีวิวรถEV",
      "#รถยนต์ไฟฟ้า",
      "#BYDThailand",
      "#EVThailand"
    ],
    "mediaSuggestions": {
      "heroImage": "/images/reviews/byd-seal-hero.jpg",
      "exteriorImage": "/images/reviews/byd-seal-exterior.jpg",
      "interiorImage": "/images/reviews/byd-seal-interior.jpg"
    },
    "generatedAt": "2026-08-27T06:35:00.000Z"
  }
]
```

---

## 7. CLI / Script Interface Design

### 7.1 Command Entry Points
```bash
# Generate 1 default post (auto mode)
npm run generate-posts

# Generate posts for all vehicles in the catalog
npx tsx scripts/generate-posts.ts --vehicle all --output-dir ./output

# Generate specific comparison post using Rule-based engine
npx tsx scripts/generate-posts.ts --vehicle byd-seal --topic comparison --mode rule

# List all available Thai vehicle models and topics
npx tsx scripts/generate-posts.ts --list
```

### 7.2 CLI Options & Flags
| Flag | Short | Default | Description |
| :--- | :--- | :--- | :--- |
| `--vehicle <slug|all>` | `-v` | `tesla-model-3-highland` | Vehicle slug or `all` |
| `--topic <type>` | `-t` | `review` | Topic: `review`, `verdict`, `comparison`, `heat-guide`, `charging` |
| `--mode <type>` | `-m` | `auto` | Generation engine: `auto`, `rule`, `ai` |
| `--count <n>` | `-n` | `1` | Number of posts to generate |
| `--output-dir <path>`| `-o` | `./output` | Target directory for `posts.md` and `posts.json` |
| `--list` | `-l` | `false` | Display list of all supported vehicles and topics |
| `--help` | `-h` | `false` | Show help and usage examples |

---

## 8. Validation & Quality Assurance Strategy

### 8.1 Automated Test Suite
1. **Catalog Integrity Test**: Verifies all 8 flagship vehicles have complete Thai specs (pricing, battery, range, charging, pros/cons).
2. **Deterministic Generation Test**: Executes rule-based generator against all vehicles and topics, confirming 0 crashes.
3. **Dual File Export Test**: Asserts that `posts.md` and `posts.json` are written, non-empty, and valid UTF-8.
4. **JSON Schema Test**: Verifies `posts.json` conforms to TypeScript interface.
5. **Fallback Resilience Test**: Verifies engine falls back to Rule-Based when AI mode receives an invalid key or offline state.

### 8.2 Content & Linguistic Quality Assertions
- **Required Keywords**: Posts must contain `บาท`/`฿`, `กม.`, `0-100`, `ชาร์จ`, `แอร์`/`ความร้อน`, `ช่วงล่าง`, `ข้อดี`, `ข้อสังเกต`, and `#EVSelectionThailand`.
- **Negative Token Scan**: 0 occurrences of `[INSERT]`, `undefined`, `NaN`, `null`, `TODO`, `TBD`, `lorem`.
- **Post Length**: Content length strictly between 600 and 3,500 characters.

---

## 9. Implementation Roadmap & Milestones

1. **M1: Data & Template Engine Core (`src/data/thaiVehicles.ts`, `src/engine/templates.ts`)**:
   - Define TypeScript interfaces, populate 8 Thai EV datasets, create template builder.
2. **M2: Rule & AI Engines (`src/engine/ruleGenerator.ts`, `src/engine/aiGenerator.ts`, `src/engine/index.ts`)**:
   - Implement rule-based randomized sentence composer and Gemini API client with graceful fallback.
3. **M3: Output Pipeline & CLI Runner (`scripts/generate-posts.ts`, `src/engine/exporter.ts`)**:
   - Build CLI argument parser, markdown formatter, JSON serializer, file writer.
4. **M4: Validation & Quality Test Suite (`scripts/verify-generated-posts.ts`, `npm test`)**:
   - Build automated audit suite verifying schema, file outputs, and Thai linguistic quality.
