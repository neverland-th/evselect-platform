import Link from "next/link";
import type { Metadata } from "next";
import { Package } from "lucide-react";

export const metadata: Metadata = {
  title: "อุปกรณ์เสริมกำลังเตรียมเปิดตัว | EVSELECT",
  description:
    "EVSELECT ยังไม่เปิดรับคำสั่งซื้อในช่วงเตรียมเปิดตัว ติดตามข้อมูลสินค้าเมื่อพร้อมประกาศ",
  robots: { index: false, follow: true },
};

// Keep existing product URLs accessible without querying or changing inventory.
export default function ProductPage() {
  return (
    <section className="max-w-2xl mx-auto px-5 py-20 text-center">
      <Package className="w-12 h-12 text-lime-700 mx-auto mb-6" />
      <p className="text-sm text-lime-800 mb-3">EVSELECT อุปกรณ์เสริม</p>
      <h1 className="text-3xl sm:text-4xl font-bold leading-snug mb-5">
        กำลังเตรียมเปิดตัว
      </h1>
      <p className="text-slate-600 leading-relaxed">
        เราจะประกาศรายละเอียดสินค้า รุ่นรถที่รองรับ ราคา และเงื่อนไขเมื่อพร้อม
        ขณะนี้ยังไม่เปิดรับคำสั่งซื้อหรือชำระเงิน
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
        <Link
          href="/contact"
          className="rounded-xl px-6 py-3 min-h-12 bg-lime-400 hover:bg-lime-300 font-semibold"
        >
          สอบถาม EVSELECT
        </Link>
        <Link
          href="/articles"
          className="rounded-xl px-6 py-3 min-h-12 border border-slate-300 hover:bg-slate-50 font-medium"
        >
          อ่านบทความ EV
        </Link>
      </div>
    </section>
  );
}
