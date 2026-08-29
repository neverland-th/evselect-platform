# E2E Test Infra: EV Selection Thailand Facebook Content Generation System

## Test Philosophy
- Opaque-box, requirement-driven. Derives from ORIGINAL_REQUEST.md.
- Methodology: Category-Partition + BVA + Pairwise + Workload Testing.

## Feature Inventory
| # | Feature | Source (requirement) | Tier 1 | Tier 2 | Tier 3 | Tier 4 |
|---|---------|---------------------|:------:|:------:|:------:|:------:|
| 1 | Thai EV Specs Catalog | Survey & M1 | 5 | 5 | ✓ | ✓ |
| 2 | Tropical Range Derating | Survey & M1 | 5 | 5 | ✓ | ✓ |
| 3 | Charging & TOU Economics | Survey & M1 | 5 | 5 | ✓ | ✓ |
| 4 | Fitment Accessories | Survey & M1 | 5 | 5 | ✓ | ✓ |
| 5 | Modular Post Templates | M2 | 5 | 5 | ✓ | ✓ |
| 6 | Rule-Based Generation (Mode A) | M2 | 5 | 5 | ✓ | ✓ |
| 7 | AI-Augmented Generation (Mode B) | M2 | 5 | 5 | ✓ | ✓ |
| 8 | CLI & Script Runner | R1, R2, M3 | 5 | 5 | ✓ | ✓ |
| 9 | Dual Output Formatter (posts.md/json)| R2, M3 | 5 | 5 | ✓ | ✓ |

## Test Architecture
- Test runner: `npx tsx tests/content-generator.test.ts`
- Pass/Fail Semantics: Exit code 0 on all passed assertions.
- Output File Verification: Ensures `posts.md` and `posts.json` are written, non-empty, and contain authentic Thai content.
- Negative & Edge Case Tests: Invalid CLI arguments, unknown vehicle IDs, zero/negative count handling, offline fallback.

## Real-World Application Scenarios (Tier 4)
| # | Scenario | Features Exercised | Complexity |
|---|----------|--------------------|------------|
| 1 | Batch Weekly Schedule Generation (5 different post types for weekly page queue) | F1-F9 | High |
| 2 | High Heat Wave Special Post (Bangkok 40°C Battery Protection Guide) | F2, F5, F6, F9 | Medium |
| 3 | BYD Seal vs Tesla Model 3 Head-to-Head Comparison | F1, F2, F3, F5, F6, F9 | High |
| 4 | Deepal S07 Review with Genuine EVSELECT Accessory Recommendation & CTA | F1, F4, F5, F6, F9 | Medium |
| 5 | Complete Offline Mode Run (CLI with --mode rule_based --count 3 --output-dir ./out) | F6, F8, F9 | Medium |

## Coverage Thresholds
- Tier 1: ≥5 per feature (Basic generation, correct schema, price formatting)
- Tier 2: ≥5 boundary cases (Missing optional fields, edge models, offline mode, fallback)
- Tier 3: Pairwise combinations (Vehicle × Template Type × Generation Mode)
- Tier 4: ≥5 realistic application scenarios
