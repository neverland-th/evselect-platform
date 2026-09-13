import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Car,
  MessageCircle,
  Package,
  ShieldCheck,
  SlidersHorizontal,
} from "lucide-react";
import VehicleGuide from "@/components/VehicleGuide";

const articles = [
  {
    href: "/articles/tesla-model-3-highland-review",
    title: "Tesla Model 3 Highland",
    description: "สำรวจดีไซน์ ห้องโดยสาร และประเด็นที่ควรรู้ก่อนเลือก",
    image: "/images/reviews/tesla-model-3-hero.jpg",
    tag: "รีวิวรถ EV",
  },
  {
    href: "/articles/zeekr-009-review",
    title: "ZEEKR 009",
    description: "มองรถครอบครัวไฟฟ้าผ่านพื้นที่ใช้สอยและความสะดวกสบาย",
    image: "/images/reviews/zeekr-009-hero.jpg",
    tag: "รีวิวรถ EV",
  },
  {
    href: "/articles/byd-seal-review",
    title: "BYD Seal",
    description: "เจาะแนวคิดสปอร์ตซีดานไฟฟ้าและการใช้งานในชีวิตประจำวัน",
    image: "/images/reviews/byd-seal-hero.jpg",
    tag: "รีวิวรถ EV",
  },
];
const topics = [
  {
    title: "เข้าใจการปรับแดมเปอร์",
    description: "เริ่มจากอาการของรถ แล้วค่อยทำความเข้าใจการปรับช่วงล่าง",
    href: "/articles/ev-damper-tuning-bump-rebound-guide",
    icon: SlidersHorizontal,
  },
  {
    title: "เลือกยางและคอยล์โอเวอร์",
    description: "อ่านสิ่งที่ควรพิจารณาก่อนเปลี่ยนอุปกรณ์ของรถคุณ",
    href: "/articles/ev-tyre-and-coilover-selection-guide",
    icon: Car,
  },
  {
    title: "ดูแลแบตเตอรี่รถ EV",
    description: "ทบทวนเรื่องการชาร์จและการดูแลรถในแต่ละวัน",
    href: "/articles/ev-battery-care",
    icon: BookOpen,
  },
];

export default function StorefrontPage() {
  return (
    <div className="bg-white text-slate-900">
      <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-10 pb-12 md:py-20 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="space-y-7">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 tracking-wide">
              <span className="w-2 h-2 rounded-full bg-lime-500" />
              สำหรับคนรักรถยนต์ไฟฟ้าในไทย
            </div>
            <h1 className="text-[2.6rem] sm:text-6xl xl:text-[4.25rem] font-bold leading-[1.25] tracking-tight">
              เข้าใจรถให้ลึก
              <br />
              <span className="text-lime-700">เลือกให้ตรงใจ</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-lg">
              รีวิวรถ EV ความรู้เรื่องช่วงล่าง และแนวคิดเลือกอุปกรณ์เสริม
              สำหรับคนที่ใส่ใจรายละเอียดของรถคันโปรด
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/articles"
                className="inline-flex justify-center items-center gap-3 min-h-12 px-6 py-3 rounded-xl bg-lime-400 hover:bg-lime-300 text-slate-950 font-semibold transition-colors"
              >
                อ่านบทความ EV <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/#vehicle-finder"
                className="inline-flex justify-center items-center gap-3 min-h-12 px-6 py-3 rounded-xl border border-slate-300 hover:bg-slate-50 font-medium"
              >
                เลือกรุ่นรถของคุณ <Car className="w-4 h-4" />
              </Link>
            </div>
            <p className="text-xs text-slate-500 flex items-center gap-2">
              <Package className="w-4 h-4 shrink-0" />
              อุปกรณ์เสริมอยู่ระหว่างเตรียมเปิดตัว ยังไม่เปิดรับคำสั่งซื้อ
            </p>
          </div>
          <Link
            href="/articles/zeekr-x-review"
            className="group relative block overflow-hidden rounded-3xl bg-slate-100 border border-slate-200"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/reviews/zeekr-x-hero.jpg"
                alt="ZEEKR X สีขาว มุมด้านหน้ารถ"
                fill
                preload
                sizes="(max-width: 1023px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <div className="flex justify-between items-center p-5 sm:p-6 bg-white">
              <div>
                <span className="text-xs text-slate-500">บทความแนะนำ</span>
                <h2 className="text-xl font-semibold mt-1">
                  รู้จัก ZEEKR X ให้มากขึ้น
                </h2>
              </div>
              <span className="w-11 h-11 rounded-full border border-slate-200 flex justify-center items-center group-hover:bg-lime-400 group-hover:border-lime-400 transition-colors">
                <ArrowUpRight className="w-5 h-5" />
              </span>
            </div>
          </Link>
        </div>
      </section>

      <section
        id="featured-reviews"
        className="max-w-7xl mx-auto px-5 sm:px-8 py-14 md:py-20 scroll-mt-28"
      >
        <div className="flex flex-wrap justify-between items-end gap-4 mb-7">
          <div>
            <p className="text-xs font-semibold text-lime-700 mb-2">
              อ่านก่อนตัดสินใจ
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold">
              มองรถ EV ให้ครบมุม
            </h2>
          </div>
          <Link
            href="/articles"
            className="text-sm font-medium inline-flex gap-2 items-center min-h-11"
          >
            บทความทั้งหมด <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Link
              key={article.href}
              href={article.href}
              className="group rounded-2xl border border-slate-200 overflow-hidden hover:border-lime-500 transition-colors"
            >
              <div className="relative aspect-[16/10] bg-slate-100">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="(max-width: 767px) 100vw, 33vw"
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                />
              </div>
              <div className="p-5 space-y-3">
                <span className="text-xs font-medium text-lime-800">
                  {article.tag}
                </span>
                <h3 className="text-xl font-semibold">{article.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {article.description}
                </p>
                <span className="inline-flex gap-2 items-center text-sm font-medium pt-2">
                  อ่านต่อ <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section
        id="vehicle-finder"
        className="bg-slate-50 border-y border-slate-200 scroll-mt-28"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14 md:py-16">
          <div id="ecosystem" className="mb-8 scroll-mt-28">
            <p className="text-xs font-semibold text-lime-700 mb-2">
              เริ่มจากรถที่คุณสนใจ
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold">
              ค้นหาบทความตามรุ่นรถ
            </h2>
            <p className="text-sm text-slate-600 mt-3">
              เลือกรุ่นเพื่ออ่านรีวิว ส่วนอุปกรณ์เสริมจะประกาศเมื่อพร้อมจำหน่าย
            </p>
          </div>
          <VehicleGuide />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-14 md:py-20">
        <div className="mb-8">
          <p className="text-xs font-semibold text-lime-700 mb-2">
            สำหรับคนชอบเข้าใจมากกว่าแค่สเปก
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold">
            เรื่องรถที่อยากชวนอ่าน
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {topics.map(({ title, description, href, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="group rounded-2xl border border-slate-200 p-6 hover:border-lime-500 transition-colors"
            >
              <Icon className="w-7 h-7 text-lime-700 mb-7" />
              <h3 className="text-lg font-semibold mb-3">{title}</h3>
              <p className="text-sm leading-relaxed text-slate-600 mb-6">
                {description}
              </p>
              <span className="text-sm font-medium inline-flex items-center gap-2">
                เปิดอ่านคู่มือ <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section
        id="products"
        className="max-w-7xl mx-auto px-5 sm:px-8 pb-14 md:pb-20 scroll-mt-28"
      >
        <div className="rounded-3xl bg-slate-950 p-7 sm:p-12 lg:p-14 text-white grid lg:grid-cols-[1.3fr_1fr] gap-10">
          <div>
            <span className="inline-flex gap-2 items-center text-xs font-medium border border-lime-400/30 text-lime-300 bg-lime-400/10 px-3 py-1.5 rounded-full">
              <Package className="w-3.5 h-3.5" />
              เตรียมเปิดตัวอุปกรณ์เสริม
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold leading-snug mt-6 mb-5">
              รายละเอียดเล็ก ๆ<br />
              ที่เราอยากเลือกให้ดี
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-lg">
              EVSELECT กำลังเตรียมคัดเลือกอุปกรณ์เสริมสำหรับรถ EV ในไทย
              เราจะประกาศรุ่นที่รองรับ ราคา
              และเงื่อนไขเมื่อมีข้อมูลพร้อมให้คุณตัดสินใจ
            </p>
            <a
              href="https://www.facebook.com/evselects/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center gap-3 min-h-12 px-5 py-3 bg-lime-400 hover:bg-lime-300 text-slate-950 rounded-xl font-semibold mt-7"
            >
              ติดตามข่าวเปิดตัว <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
          <div className="lg:border-l lg:border-white/15 lg:pl-10 flex flex-col justify-center">
            <p className="text-sm text-slate-400 mb-5">
              สิ่งที่เราจะให้ความสำคัญในการคัดเลือก
            </p>
            {[
              "ความเหมาะสมกับรถสเปกไทย",
              "วัสดุและรายละเอียดการใช้งาน",
              "ข้อมูลชัดเจนก่อนตัดสินใจซื้อ",
            ].map((item, index) => (
              <div
                key={item}
                className="flex gap-4 items-center py-5 border-b border-white/15"
              >
                <span className="font-mono text-sm text-lime-300">
                  0{index + 1}
                </span>
                <p className="font-medium">{item}</p>
              </div>
            ))}
            <p className="text-xs text-slate-400 leading-relaxed mt-5">
              ยังไม่เปิดรับคำสั่งซื้อหรือชำระเงินในช่วงเตรียมเปิดตัว
            </p>
          </div>
        </div>
      </section>

      <section
        id="fitment-assurance"
        className="max-w-7xl mx-auto px-5 sm:px-8 pb-14 md:pb-20 scroll-mt-28"
      >
        <div className="grid md:grid-cols-2 gap-8 border-b border-slate-200 pb-12">
          <div>
            <ShieldCheck className="w-7 h-7 text-lime-700 mb-4" />
            <h2 className="text-2xl font-bold mb-4">ก่อนใช้คำว่า “ตรงรุ่น”</h2>
            <p className="text-slate-600 leading-relaxed text-sm">
              เป้าหมายของเราคือมีข้อมูลรุ่นรถและหลักฐานการติดตั้งที่ตรวจสอบได้ก่อนเปิดขาย
              ขณะนี้ยังไม่ประกาศว่าสินค้ารายการใดผ่านการทดสอบหรือรับประกันความเข้ากันได้แล้ว
            </p>
          </div>
          <div className="md:pl-8">
            <MessageCircle className="w-7 h-7 text-lime-700 mb-4" />
            <h2 className="text-2xl font-bold mb-4">
              อยากให้เราศึกษาเรื่องไหน?
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm mb-4">
              เล่ารุ่นรถและสิ่งที่คุณอยากปรับให้ดีขึ้น
              หรือสอบถามแนวทางร่วมงานกับ EVSELECT ได้ทาง Facebook
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 min-h-11 font-semibold text-sm text-lime-800"
            >
              ติดต่อ EVSELECT <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
