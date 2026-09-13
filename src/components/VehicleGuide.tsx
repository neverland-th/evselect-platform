"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Search } from "lucide-react";

// Editorial navigation only. This list does not assert accessory fitment or stock.
const guides = [
  { brand: "BYD", model: "Atto 3", slug: "byd-atto-3-review" },
  { brand: "BYD", model: "Seal", slug: "byd-seal-review" },
  {
    brand: "Tesla",
    model: "Model 3 Highland",
    slug: "tesla-model-3-highland-review",
  },
  {
    brand: "Tesla",
    model: "Model Y L",
    slug: "tesla-model-y-l-premium-6-seater-review",
  },
  { brand: "ZEEKR", model: "X", slug: "zeekr-x-review" },
  { brand: "ZEEKR", model: "009", slug: "zeekr-009-review" },
  { brand: "ZEEKR", model: "7X", slug: "zeekr-7x-2026-review" },
  { brand: "DEEPAL", model: "S05", slug: "deepal-s05-review" },
  { brand: "DEEPAL", model: "S07", slug: "deepal-s07-review" },
  { brand: "Geely", model: "EX2", slug: "geely-ex2-review" },
  { brand: "MG", model: "MG4", slug: "mg4-electric-review" },
];

export default function VehicleGuide() {
  const [brand, setBrand] = useState("ทั้งหมด");
  const [query, setQuery] = useState("");
  const filtered = guides.filter(
    (guide) =>
      (brand === "ทั้งหมด" || guide.brand === brand) &&
      `${guide.brand} ${guide.model}`
        .toLowerCase()
        .includes(query.trim().toLowerCase()),
  );
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 sm:items-end">
        <div className="flex-1">
          <label
            htmlFor="vehicle-query"
            className="block text-sm font-medium mb-2"
          >
            ค้นหายี่ห้อหรือรุ่นรถ
          </label>
          <div className="relative">
            <Search
              className="absolute left-4 top-3.5 w-5 h-5 text-slate-400"
              aria-hidden="true"
            />
            <input
              id="vehicle-query"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="เช่น ZEEKR X หรือ Model 3"
              className="w-full min-h-12 pl-12 pr-4 rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-lime-500"
            />
          </div>
        </div>
        <div className="sm:w-48">
          <label
            htmlFor="vehicle-brand"
            className="block text-sm font-medium mb-2"
          >
            ยี่ห้อรถ
          </label>
          <select
            id="vehicle-brand"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className="w-full min-h-12 px-3 rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-lime-500"
          >
            {["ทั้งหมด", ...new Set(guides.map((guide) => guide.brand))].map(
              (item) => (
                <option key={item}>{item}</option>
              ),
            )}
          </select>
        </div>
      </div>
      <p className="text-sm text-slate-500" aria-live="polite">
        พบบทความตามรุ่นรถ {filtered.length} รายการ
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {filtered.map((guide) => (
          <Link
            key={guide.slug}
            href={`/articles/${guide.slug}`}
            className="group flex items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white p-5 hover:border-lime-500 hover:bg-lime-50/40 transition-colors"
          >
            <span>
              <span className="block text-xs text-slate-500 mb-1">
                {guide.brand}
              </span>
              <span className="font-semibold text-slate-900">
                {guide.model}
              </span>
            </span>
            <ArrowUpRight
              className="w-5 h-5 text-slate-400 group-hover:text-lime-700"
              aria-hidden="true"
            />
          </Link>
        ))}
      </div>
      {filtered.length === 0 && (
        <div className="rounded-xl bg-slate-50 p-6 text-center">
          <p className="text-slate-600">ยังไม่พบบทความสำหรับคำค้นนี้</p>
          <button
            type="button"
            onClick={() => {
              setBrand("ทั้งหมด");
              setQuery("");
            }}
            className="mt-3 min-h-11 px-4 font-semibold text-lime-800 underline underline-offset-4"
          >
            แสดงทุกรุ่นรถ
          </button>
        </div>
      )}
    </div>
  );
}
