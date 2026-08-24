# Implementation Plan: EVSELECT MVP Platform

Build an internal PIM and fitment tracking dashboard to manage EV accessory sourcing and generate Shopee/WooCommerce compatible CSV exports.

## User Review Required
- Please review the Database Schema in Phase 2 to ensure it captures all necessary data points for your sourcing and fitment operations.

## Proposed Changes

### Phase 1: Foundation & Setup
- Initialize Next.js project with App Router, TypeScript, and Tailwind.
- Set up Prisma ORM and configure PostgreSQL connection.
- Define UI layout shell (Sidebar navigation, Header, Main content area).

### Phase 2: Database Schema (Prisma)
- Create `Category` model (id, name, shopeeId, wooId).
- Create `Vehicle` model (id, make, model, year, variant).
- Create `Product` model (id, sku, title, description, categoryId).
- Create `Batch` model (id, productId, supplierName, supplierUrl, cost, moq, status).
- Create `Fitment` model (id, batchId, vehicleId, status, notes).

### Phase 3: Taxonomy & Categories UI
- Build CRUD interface for `Category` mapping.
- Build CRUD interface for `Vehicle` taxonomy (specifically seeding the required Thai market models: BYD Atto 3, Seal, Sealion 7; Tesla Model 3, Y; Geely EX2; Deepal S05; Zeekr X, 009).

### Phase 4: Sourcing & Product UI
- Build Product creation/edit interface.
- Build Batch management within the Product page to track sourcing lifecycle status.

### Phase 5: The Fitment Matrix UI
- Build the core interface: A table/matrix view where staff can select a `Batch` and quickly create or update `Fitment` records for various `Vehicles`.
- Implement status dropdowns (Unverified, Passed, Failed, etc.).

### Phase 6: CSV Export Engine
- Build API routes to compile product, fitment, and category data.
- Format output to match Shopee mass-upload CSV template.
- Format output to match WooCommerce mass-upload CSV template.
- Add Download buttons to the UI.

## Verification Plan
### Automated Tests
- TypeScript type checking and Prisma schema validation.

### Manual Verification
- Seed the database with a test product (e.g., Screen Protector) and test vehicle variants (Tesla Model 3 Legacy vs Highland).
- Step the product through the Sourcing workflow.
- Step the fitment through the Fitment workflow (Pass on one, Fail on the other).
- Generate the Shopee CSV and verify that the Category ID, Title, and Compatibility strings are formatted correctly based on the Matrix data.
