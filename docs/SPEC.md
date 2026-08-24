# EVSELECT Digital Operating Platform - MVP Specification

## 1. Business Overview
EVSELECT is a Thailand-focused EV aftermarket accessories business. The core differentiation is curated products with rigorously documented Thai-market vehicle fitment, controlled supplier information, and local support.

**Primary MVP Goal**: Build an internal Product Information Management (PIM) and Fitment Tracking system that acts as the single source of truth, eventually exporting structured CSV data for manual upload to Shopee (Primary) and WooCommerce (evselect.com).

## 2. Core Architecture
- **Tech Stack**: Next.js (App Router), TypeScript, Tailwind CSS, Prisma ORM, PostgreSQL.
- **Platform Type**: Internal Admin Dashboard (Not a customer-facing storefront).
- **Primary Output**: Downloadable CSV files formatted specifically for Shopee and WooCommerce mass upload requirements.

## 3. Data Model
The system makes fitment a first-class data object by separating products from batches and relating them to specific vehicle variants.

1. **Products**: The high-level item (e.g., "Model 3 Center Console Tray").
    - Has an internal Category.
    - Base Title, Description.
2. **Supplier Batches**: Tracks specific shipments/versions from a supplier.
    - Links to a Product.
    - Tracks Sourcing Status.
    - Tracks Supplier Info (URL, Cost, MOQ, Lead Time).
3. **Vehicle Taxonomy**: Strict hierarchy of Thai-market EVs.
    - Make (e.g., BYD)
    - Model (e.g., Seal)
    - Year (e.g., 2024)
    - Variant (e.g., AWD Performance)
4. **Fitment Verifications (The Matrix)**: The join between a Supplier Batch and a Vehicle Variant.
    - Tracks the Fitment Status.
    - Notes for modification or failure reasons.
5. **Categories**: Maps internal categories to external ones.
    - Internal Name (e.g., "Floor Mats") -> Shopee ID (e.g., 12345) & Woo ID (e.g., 678).

## 4. Workflows

### 4.1 Sourcing Lifecycle (Attached to Batch)
1. `SHORTLISTED`
2. `SAMPLE_ORDERED`
3. `SAMPLE_IN_TRANSIT`
4. `SAMPLE_RECEIVED` (Unlocks fitment testing)
5. `ACTIVE` (Approved for sale)
6. `DISCONTINUED`

### 4.2 Fitment Testing Lifecycle (Attached to Verification)
1. `UNVERIFIED` (Default when a new variant is linked)
2. `TEST_SCHEDULED` (Demo car found)
3. `PASSED` (Fits perfectly)
4. `PASSED_WITH_MODIFICATION` (Requires tape, minor adjustment - noted in system)
5. `FAILED` (Incompatible)
6. `RETEST_REQUIRED` (e.g., if a customer reports an issue, or minor batch change)

## 5. CSV Export Engine
The system will feature an "Export" module where staff can generate CSVs.
- It will pull all `Products` that have at least one `ACTIVE` batch.
- It will dynamically build the "Compatible Vehicles" string based on `PASSED` Fitment Verifications.
- It will apply the global Category Mapping to ensure Shopee IDs are correct.
