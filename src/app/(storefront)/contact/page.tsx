import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";

export const metadata = {
  title: "ติดต่อ EVSELECT | สอบถามและติดตามข่าวเปิดตัว",
  description:
    "ติดต่อ EVSELECT ทาง Facebook และ Messenger เพื่อเสนอหัวข้อบทความหรือสอบถามแนวทางร่วมงาน",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="max-w-3xl mx-auto px-5 sm:px-8 py-16 sm:py-24">
      <p className="text-lime-700 text-sm font-medium mb-4">
        คุยเรื่องรถคันโปรดของคุณ
      </p>
      <h1 className="text-4xl font-bold mb-6">ติดต่อ EVSELECT</h1>
      <p className="text-slate-600 leading-relaxed">
        เสนอหัวข้อที่อยากอ่าน เล่าเรื่องอุปกรณ์เสริมที่สนใจ
        หรือสอบถามแนวทางร่วมงานกับเราได้ทาง Facebook
      </p>
      <div className="grid sm:grid-cols-2 gap-4 my-8">
        <a
          href="https://m.me/evselects"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between p-6 rounded-2xl bg-lime-400 font-semibold hover:bg-lime-300"
        >
          พูดคุยทาง Messenger <MessageCircle className="w-5 h-5" />
        </a>
        <a
          href="https://www.facebook.com/evselects/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between p-6 rounded-2xl border border-slate-300 font-semibold hover:bg-slate-50"
        >
          ติดตามเพจ Facebook <ArrowUpRight className="w-5 h-5" />
        </a>
      </div>
      <p className="text-sm text-slate-500 leading-relaxed">
        ขณะนี้อุปกรณ์เสริมอยู่ระหว่างเตรียมเปิดตัว
        ยังไม่เปิดรับคำสั่งซื้อหรือชำระเงิน
      </p>
      <Link
        href="/articles"
        className="inline-block mt-8 text-sm font-medium underline underline-offset-4"
      >
        อ่านบทความระหว่างรอเปิดตัว
      </Link>
    </section>
  );
}
