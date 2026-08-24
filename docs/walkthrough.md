# EVSELECT Platform MVP - Walkthrough

The EVSELECT Digital Operating Platform MVP is now complete and running locally on your machine.

## Setup & Architecture
- **Framework**: Next.js 15 (App Router) with React, TypeScript, and Tailwind CSS.
- **Database**: SQLite (via Prisma ORM) for frictionless local development. You can swap this to PostgreSQL simply by changing the provider string in `prisma/schema.prisma` before production.

## Features Implemented

1. **Category Mapping (`/categories`)**:
   - Create internal categories (e.g., "Floor Mats") and map them to their corresponding Shopee Category ID and WooCommerce Category ID. This mapping is used automatically during export.

2. **Vehicle Taxonomy (`/vehicles`)**:
   - A strict CRUD interface to manage Thai-market specific EV models and variants.
   - Includes a one-click **"Seed Thai Market EVs"** button which populates the DB with the initial vehicle ecosystem you provided (BYD Atto 3, Tesla Model 3 Highland, Zeekr X, etc.).

3. **Products & Sourcing (`/products`)**:
   - Create base products with SKUs, titles, and categories.
   - Click **"Manage Sourcing"** on any product to enter the detailed Sourcing Pipeline.
   - Add specific **Supplier Batches** (e.g., 1688 Factory Y), tracking Cost (THB), MOQ, and Supplier URLs.
   - Update the sourcing status from `SHORTLISTED` all the way to `SAMPLE_RECEIVED`.

4. **The Fitment Matrix (`/fitment`)**:
   - The core differentiator of the platform.
   - Once a batch reaches `SAMPLE_RECEIVED` or `ACTIVE`, it appears in this matrix.
   - For each active batch, you can see every Thai-market vehicle variant and assign a specific fitment status (`PASSED`, `FAILED`, `PASSED_WITH_MODIFICATION`).

5. **CSV Export Engine (`/export`)**:
   - One-click buttons to download mass-upload CSV files for Shopee and WooCommerce.
   - The engine automatically aggregates all `ACTIVE` batches.
   - It cross-references the Fitment Matrix to dynamically build a comma-separated string of only the vehicles that have `PASSED` fitment testing.
   - It applies the global Category IDs mapped in Phase 1.

## How to Test It Now
The local development server is running in the background.

1. Open your browser and go to [http://localhost:3000](http://localhost:3000).
2. Go to **Vehicle Taxonomy** and click the **"Seed"** button.
3. Go to **Category Mapping** and add a test category.
4. Go to **Products & Sourcing**, create a product, and add a Batch. Change the batch status to `SAMPLE_RECEIVED`.
5. Go to the **Fitment Matrix** and mark the batch as `PASSED` for one vehicle, and `FAILED` for another.
6. Change the batch status to `ACTIVE`.
7. Go to **Export CSVs** and download the files to verify the data structure.
