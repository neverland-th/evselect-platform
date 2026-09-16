import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Car,
  CheckCircle2,
  MessageCircle,
  Package,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Wrench,
} from "lucide-react";
import VehicleGuide from "@/components/VehicleGuide";

const journeys = [
  {
    eyebrow: "01",
    title: "กำลังเลือกรถ EV",
    description: "เทียบรุ่น ปี อุปกรณ์ และสิ่งที่ควรลองก่อนตัดสินใจ",
    href: "/articles",
    linkLabel: "ดูรีวิวและข้อมูลรถ",
    icon: Car,
  },
  {
    eyebrow: "02",
    title: "มีรถแล้ว อยากแก้ปัญหา",
    description: "เริ่มจากอาการเด้ง กระด้าง โยน หรือการใช้งานที่ยังไม่ลงตัว",
    href: "/articles/ev-damper-tuning-bump-rebound-guide",
    linkLabel: "เริ่มจากอาการของรถ",
    icon: Wrench,
  },
  {
    eyebrow: "03",
    title: "กำลังเลือกอุปกรณ์",
    description: "รู้ว่าต้องตรวจรุ่น ปี และจุดติดตั้งอะไร ก่อนเสียเงินซื้อ",
    href: "/#products",
    linkLabel: "ดูแนวทางคัดเลือก",
    icon: Package,
  },
];

const featuredArticles = [
  {
    href: "/articles/tesla-model-3-highland-review",
    title: "Tesla Model 3 Highland",
    description: "ดูรุ่น ราคา และอุปกรณ์ที่ต้องเทียบให้ตรงกับรถตลาดไทย",
    image: "/images/reviews/tesla-model-3-hero.jpg",
    tag: "ข้อมูลรถสเปกไทย",
  },
  {
    href: "/articles/ev-damper-tuning-bump-rebound-guide",
    title: "รถเด้ง กระด้าง หรือโยน เกี่ยวกับอะไร",
    description: "เข้าใจ Bump และ Rebound ก่อนเริ่มปรับหรือเปลี่ยนช่วงล่าง",
    image: "/images/articles/damper_tuning_hero.jpg",
    tag: "คู่มือช่วงล่าง",
  },
  {
    href: "/articles/ev-battery-care",
    title: "ดูแลแบตเตอรี่รถ EV ในชีวิตประจำวัน",
    description: "แยกสิ่งที่ควรทำประจำวันออกจากความเชื่อที่ทำให้ใช้งานยากเกินไป",
    image: "/images/reviews/byd-seal-hero.jpg",
    tag: "คู่มือการใช้งาน",
  },
];

const topicLinks = [
  {
    title: "ช่วงล่างและแดมเปอร์",
    description: "อ่านอาการของรถให้เป็น ก่อนเปลี่ยนชิ้นส่วนหรือเริ่มปรับคลิก",
    href: "/articles/ev-suspension-tuning-guide",
    icon: SlidersHorizontal,
  },
  {
    title: "ยาง คอยล์โอเวอร์ และศูนย์ล้อ",
    description: "มองทั้งความสบาย การเกาะถนน และผลต่อการใช้งานจริงร่วมกัน",
    href: "/articles/ev-tyre-and-coilover-selection-guide",
    icon: ShieldCheck,
  },
  {
    title: "เทคนิคใช้รถ EV",
    description: "อ่านคู่มือที่ช่วยตัดสินใจและใช้งานรถได้มั่นใจขึ้น",
    href: "/articles/ev-battery-care",
    icon: BookOpen,
  },
];

export default function StorefrontPage() {
  return (
    <div className="bg-white text-slate-950">
      <section className="border-b border-slate-200 bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:px-8 md:py-14 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch">
          <div className="flex flex-col justify-between gap-8 lg:py-4">
            <div>
              <p className="mb-5 inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-lime-300">
                <Sparkles className="h-4 w-4" />
                คู่มือรถ EV สำหรับการใช้งานในไทย
              </p>
              <h1 className="max-w-2xl font-extrabold tracking-tight">
                เริ่มจากรถของคุณ
                <span className="block text-lime-300">แล้วค่อยตัดสินใจ</span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
                อ่านข้อมูลรถ แยกอาการที่พบ และรู้สิ่งที่ควรตรวจก่อนเลือกอุปกรณ์
                โดยไม่ต้องเริ่มค้นหาใหม่ทุกครั้ง
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="#choose-your-path"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-lime-300 px-5 py-3 font-semibold text-slate-950 transition-colors hover:bg-lime-200"
              >
                เลือกเรื่องที่อยากรู้ <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/articles"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/25 px-5 py-3 font-semibold text-white transition-colors hover:bg-white/10"
              >
                ดูบทความทั้งหมด
              </Link>
            </div>
          </div>

          <Link
            href="/articles/tesla-model-3-highland-review"
            className="group relative min-h-[21rem] overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-900 sm:min-h-[27rem]"
          >
            <Image
              src="/images/reviews/tesla-model-3-hero.jpg"
              alt="Tesla Model 3 Highland บนถนน"
              fill
              preload
              sizes="(max-width: 1023px) 100vw, 55vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.025]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/15 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-7">
              <div>
                <span className="text-xs font-semibold text-lime-300">บทความแนะนำ</span>
                <h2 className="mt-2 max-w-md font-bold text-white">
                  Model 3 รุ่นไหนตรงกับการใช้งานของคุณ
                </h2>
              </div>
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white text-slate-950 transition-colors group-hover:bg-lime-300">
                <ArrowUpRight className="h-5 w-5" />
              </span>
            </div>
          </Link>
        </div>
      </section>

      <section id="choose-your-path" className="scroll-mt-28 border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 md:py-16">
          <div className="mb-7 max-w-2xl">
            <p className="mb-2 text-xs font-semibold text-lime-800">เลือกตามสิ่งที่กำลังตัดสินใจ</p>
            <h2 className="font-bold">วันนี้คุณกำลังหาคำตอบเรื่องไหน?</h2>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {journeys.map(({ eyebrow, title, description, href, linkLabel, icon: Icon }) => (
              <Link
                key={title}
                href={href}
                className="group flex min-h-64 flex-col rounded-3xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-lime-500 hover:shadow-xl hover:shadow-slate-200/70"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-slate-400">{eyebrow}</span>
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-lime-100 text-lime-800">
                    <Icon className="h-5 w-5" />
                  </span>
                </div>
                <h3 className="mt-8 font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{description}</p>
                <span className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-semibold text-lime-800">
                  {linkLabel} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 md:py-20">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-xs font-semibold text-lime-800">อ่านแล้วไปต่อได้ทันที</p>
            <h2 className="font-bold">คำตอบที่คนใช้รถกำลังหา</h2>
          </div>
          <Link href="/articles" className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold">
            บทความทั้งหมด <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {featuredArticles.map((article) => (
            <Link
              key={article.href}
              href={article.href}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white transition hover:border-lime-500"
            >
              <div className="relative aspect-[16/10] bg-slate-100">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="(max-width: 767px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.025]"
                />
              </div>
              <div className="p-5">
                <span className="text-xs font-semibold text-lime-800">{article.tag}</span>
                <h3 className="mt-3 font-bold">{article.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{article.description}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold">
                  อ่านต่อ <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="vehicle-finder" className="scroll-mt-28 border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 md:py-18">
          <div className="mb-8 max-w-2xl">
            <p className="mb-2 text-xs font-semibold text-lime-800">เริ่มจากรถที่คุณสนใจ</p>
            <h2 className="font-bold">ค้นหาบทความตามรุ่นรถ</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              เลือกยี่ห้อและรุ่นเพื่อไปยังเนื้อหาที่เกี่ยวข้องกับรถคันนั้น
            </p>
          </div>
          <VehicleGuide />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 md:py-20">
        <div className="mb-8 max-w-2xl">
          <p className="mb-2 text-xs font-semibold text-lime-800">อยากเข้าใจรถให้มากกว่าสเปก</p>
          <h2 className="font-bold">สำรวจคู่มือตามระบบของรถ</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {topicLinks.map(({ title, description, href, icon: Icon }) => (
            <Link
              key={title}
              href={href}
              className="group rounded-3xl border border-slate-200 p-6 transition-colors hover:border-lime-500"
            >
              <Icon className="mb-7 h-7 w-7 text-lime-800" />
              <h3 className="font-bold">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{description}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold">
                เปิดคู่มือ <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section id="products" className="scroll-mt-28 px-5 pb-14 sm:px-8 md:pb-20">
        <div className="mx-auto grid max-w-7xl gap-10 rounded-[2rem] bg-slate-950 p-7 text-white sm:p-10 lg:grid-cols-[1.15fr_0.85fr] lg:p-14">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-lime-300/30 bg-lime-300/10 px-3 py-1.5 text-xs font-semibold text-lime-300">
              <Package className="h-4 w-4" /> กำลังเตรียมอุปกรณ์เสริม
            </span>
            <h2 className="mt-6 max-w-xl font-bold text-white">
              ซื้อเมื่อข้อมูลตรงกับรถของคุณจริง
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300">
              EVSELECT กำลังจัดเตรียมข้อมูลรุ่นรถ จุดติดตั้ง และข้อจำกัดของสินค้า
              ก่อนเปิดให้ตัดสินใจซื้อ
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://shopee.co.th/shop/9535932"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-lime-300 px-5 py-3 font-semibold text-slate-950 hover:bg-lime-200"
              >
                ดูสินค้าที่เปิดขายบน Shopee <ArrowUpRight className="h-4 w-4" />
              </a>
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/20 px-5 py-3 font-semibold text-white hover:bg-white/10"
              >
                ถามก่อนเลือก <MessageCircle className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="flex flex-col justify-center lg:border-l lg:border-white/15 lg:pl-10">
            <p className="mb-4 text-sm text-slate-400">สิ่งที่ควรรู้ก่อนมีคำว่า “ตรงรุ่น”</p>
            {[
              "รุ่น ปี และตำแหน่งติดตั้งที่ตรวจสอบได้",
              "วัสดุ วิธีใช้งาน และข้อจำกัดที่บอกชัด",
              "ภาพหรือบันทึกจากการตรวจสินค้าจริง",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 border-b border-white/15 py-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-lime-300" />
                <p className="text-sm leading-relaxed text-slate-200">{item}</p>
              </div>
            ))}
            <p className="mt-5 text-xs leading-relaxed text-slate-400">
              ช่วงนี้ยังไม่เปิดรับคำสั่งซื้อหรือชำระเงินผ่านเว็บไซต์
            </p>
          </div>
        </div>
      </section>

      <section id="fitment-assurance" className="scroll-mt-28 border-t border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:px-8 md:grid-cols-2 md:py-16">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
            <ShieldCheck className="mb-5 h-7 w-7 text-lime-800" />
            <h2 className="font-bold">ข้อมูลไหนมาจากไหน</h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              เนื้อหาควรแยกข้อมูลจากผู้ผลิต หลักการทั่วไป และผลที่ EVSELECT ตรวจเอง
              เพื่อให้คุณรู้ว่าสิ่งใดใช้ตัดสินใจได้ทันทีและสิ่งใดยังต้องยืนยัน
            </p>
            <Link href="/editorial-policy" className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-lime-800">
              อ่านนโยบายบทความ <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
            <MessageCircle className="mb-5 h-7 w-7 text-lime-800" />
            <h2 className="font-bold">อยากให้เราศึกษาเรื่องไหน?</h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              บอกรุ่นรถและสิ่งที่อยากปรับให้ดีขึ้น เราจะใช้คำถามจากผู้ใช้รถจริง
              เป็นแนวทางเลือกหัวข้อที่มีประโยชน์ต่อไป
            </p>
            <Link href="/contact" className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-lime-800">
              ติดต่อ EVSELECT <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
