-- Isolated counters for the public image trial. No images, prompts or raw IPs.
CREATE TABLE "VehicleStyleQuota" (
  "day" TEXT NOT NULL,
  "used" INTEGER NOT NULL,
  "visitors" TEXT[] NOT NULL,
  CONSTRAINT "VehicleStyleQuota_pkey" PRIMARY KEY ("day"),
  CONSTRAINT "VehicleStyleQuota_used_check" CHECK ("used" >= 0 AND "used" <= 5)
);
