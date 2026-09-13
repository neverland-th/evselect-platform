import Link from "next/link";
import { ArrowRight, Package } from "lucide-react";

export default function PrelaunchNotice() {
  return (
    <aside className="not-prose my-12 rounded-2xl border border-lime-200 bg-lime-50/60 p-6 sm:p-8">
      <div className="flex items-center gap-2 text-xs font-semibold text-lime-800 mb-3">
        <Package className="w-4 h-4" />
        อุปกรณ์เสริม EVSELECT
      </div>
      <h2 className="text-xl font-semibold text-slate-900 mb-3">
        อยู่ระหว่างเตรียมเปิดตัว
      </h2>
      <p className="text-sm leading-relaxed text-slate-600">
        ติดตามรุ่นรถที่รองรับ ราคา และเงื่อนไขเมื่อพร้อมประกาศ
        ขณะนี้ยังไม่เปิดรับคำสั่งซื้อหรือชำระเงิน
      </p>
      <Link
        href="/contact"
        className="inline-flex min-h-11 items-center gap-2 mt-4 font-semibold text-sm text-lime-800"
      >
        สอบถามและเสนอสิ่งที่คุณสนใจ <ArrowRight className="w-4 h-4" />
      </Link>
    </aside>
  );
}
