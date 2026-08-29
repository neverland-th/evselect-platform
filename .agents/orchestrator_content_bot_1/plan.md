# Orchestration Plan — EV Selection Thailand Facebook Content Generation System

## Objectives
Build a production-quality, automated content generation engine that generates high-converting, highly engaging Thai-language Facebook posts for EV Selection Thailand covering EV reviews, comparisons, and news with realistic Thai specs (THB pricing, local trims, tropical heat performance, real-world range, charging networks). Outputs saved to posts.md / posts.json.

## Strategy & Workflow
1. **Phase 0: Survey & Discovery**
   - Dispatch 3 Explorers/Spec Miners in parallel to survey:
     - Explorer 1: Project structure, existing vehicle database/fitment matrix/code in the repo.
     - Explorer 2: Thai EV market context, required post templates/structures, tone/style guidelines.
     - Explorer 3: Runtime environment, available libraries (Node/TS vs Python vs Next.js vs Gemini API), and integration hooks.
2. **Phase 1: Project Architecture & Decomposition**
   - Merge findings and create `PROJECT.md`.
   - Define milestones and module boundaries.
3. **Phase 2: Milestone Execution & Dual Track Testing**
   - Implement data models, templates, generation logic, and CLI/script runner via Worker -> Reviewer -> Challenger -> Auditor cycles.
   - Run opaque-box E2E test suite.
4. **Phase 3: Acceptance Verification & Handoff**
   - Verify sample script execution, generated Thai post quality, and write handoff.md.
