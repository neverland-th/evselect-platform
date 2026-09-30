import ImageMetadata from '@/components/ImageMetadata';
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Car,
  ChevronDown,
  MessageCircle,
  Package,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Wrench,
} from "lucide-react";
import ComingSoonBanner from "@/components/ComingSoonBanner";
import PrelaunchPanel from "@/components/PrelaunchPanel";
import EvUpgradeInfographic from "@/components/EvUpgradeInfographic";
import { damperArticle } from "@/lib/damper-article";
import { batteryArticle } from "@/lib/battery-article";

const title = "แต่งรถ EV และของแต่งรถไฟฟ้า | EVSELECTS";
const description = "ไอเดียแต่งรถ EV และคู่มือเลือกของแต่งรถไฟฟ้า ดูตัวอย่างของแต่ง Tesla พรม ถาดคอนโซล ยาง และโช้คสตรัทปรับเกลียว พร้อมรีวิวรถ EV สเปกไทย";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "https://evselects.com/",
    siteName: "EVSELECTS",
    locale: "th_TH",
    type: "website",
  },
  twitter: { card: "summary", title, description },
};

const journeys = [
  {
    eyebrow: "01",
    title: "กำลังเลือกรถ EV",
    description: "อ่านรีวิวรถไฟฟ้า เทียบรุ่นย่อยและอุปกรณ์ให้ตรงกับรถที่ขายในไทย",
    href: "/articles",
    linkLabel: "ดูรีวิวและข้อมูลรถ",
    icon: Car,
  },
  {
    eyebrow: "02",
    title: "รถเด้ง กระด้าง หรือโยน?",
    description: "ใส่โช้คแต่งแล้วไม่ถูกใจ หรือกำลังจะเปลี่ยน ลองทำความเข้าใจอาการก่อนซื้อชุดใหม่",
    href: "/articles/ev-damper-tuning-bump-rebound-guide",
    linkLabel: "อ่านเรื่องโช้คและการปรับตั้ง",
    icon: Wrench,
  },
  {
    eyebrow: "03",
    title: "อยากแต่งรถ เริ่มตรงไหนดี?",
    description: "เริ่มจากสิ่งที่อยากเปลี่ยน แล้วเช็กรุ่นรถ การติดตั้ง และงบให้ครบก่อนตัดสินใจ",
    href: "#before-you-buy",
    linkLabel: "ดูเช็กลิสต์ก่อนซื้อของแต่ง",
    icon: Package,
  },
];

const upgradeIdeas = [
  {
    title: "โช้คสตรัทปรับเกลียว",
    description: "อยากลดความสูงรถ หรือเปลี่ยนความรู้สึกตอนขับ? ดูทั้งสปริง ระยะยุบ และการปรับโช้ค ไม่ใช่แค่จำนวนคลิกหรือชื่อแบรนด์",
    image: damperArticle.cover,
    imageAlt: damperArticle.coverAlt,
    imageFit: "contain",
    href: "/articles/ev-damper-tuning-bump-rebound-guide",
    linkLabel: "ทำความเข้าใจโช้คก่อนเลือกชุดใหม่",
  },
  {
    title: "ล้อและยางรถไฟฟ้า",
    description: "อยากเงียบขึ้นหรือขับกระชับขึ้น เริ่มจากเลือกยางให้ตรงกับการใช้งาน แล้วตรวจขนาดและพิกัดตามคู่มือรถก่อนซื้อ",
    image: "/images/articles/ev-tyre-michelin-audi.jpg",
    imageAlt: "ล้อ Audi พร้อมยาง Michelin Pilot Sport All Season 4 ใช้เป็นตัวอย่างการอ่านแก้มยาง",
    imageFit: "cover",
    href: "/articles/ev-tyre-and-coilover-selection-guide",
    linkLabel: "อ่านวิธีเลือกยางรถไฟฟ้า",
  },
];

// Real vehicle photographs illustrate model-specific shopping, not accessory fitment.
const vehicleAccessoryExamples = [
  {
    title: "Tesla Model Y L",
    description: "จะเลือกพรม ถาดคอนโซล หรือที่เก็บของ ให้เช็กว่าระบุ Model Y L ตรงรุ่น อย่าเลือกจากคำว่า Model Y อย่างเดียว",
    image: "/images/editorial/tesla-model-y-l-photo.jpg",
    imageAlt: "Tesla Model Y L สีเงินมุมด้านข้าง ภาพต่างประเทศเดือนธันวาคม 2025",
    href: "/articles/tesla-model-y-l-premium-6-seater-review",
    linkLabel: "อ่านข้อมูล Model Y L ก่อนเลือกของแต่ง",
  },
  {
    title: "ZEEKR X Flagship",
    description: "คันสีขาวในภาพคือ Flagship AWD ปี 2024 ก่อนเลือกของแต่งให้เทียบปี รุ่นย่อย และโฉมกับรถเราอีกครั้ง โดยเฉพาะล้อกับช่วงล่าง",
    image: "/images/reviews/zeekr-x-flagship-thailand-2024.jpg",
    imageAlt: "ZEEKR X Flagship AWD สีขาว จัดแสดงที่เซ็นทรัล อีสต์วิลล์ กรุงเทพฯ เดือนกรกฎาคม 2024",
    href: "/articles/zeekr-x-review",
    linkLabel: "อ่านข้อมูล ZEEKR X ก่อนเลือกของแต่ง",
  },
];

const featuredArticles = [
  {
    href: "/articles/tesla-model-3-highland-review",
    title: "Tesla Model 3 Highland",
    description: "ดูรุ่น ราคา และอุปกรณ์ที่ต้องเทียบให้ตรงกับรถตลาดไทย",
    image: "/images/reviews/tesla-model-3-hero.jpg",
    imageAlt: "Tesla Model 3 Highland สีแดงที่งานแสดงรถในเยอรมนี ปี 2024",
    tag: "ข้อมูลรถสเปกไทย",
  },
  {
    href: "/articles/ev-damper-tuning-bump-rebound-guide",
    title: damperArticle.cardTitle,
    description: damperArticle.cardDescription,
    image: damperArticle.cover,
    imageAlt: damperArticle.coverAlt,
    imageFit: "contain",
    tag: "โช้คสตรัทปรับเกลียว",
  },
  {
    href: "/articles/ev-battery-care",
    title: "ชาร์จ 80% หรือ 100% แบบไหนตรงกับรถคุณ?",
    description: "ดูแลแบตเตอรี่รถ EV โดยเริ่มจากคู่มือที่ตรงรุ่น ไม่ใช้สูตรเดียวกับรถทุกคัน",
    image: batteryArticle.image,
    imageAlt: batteryArticle.imageAlt,
    tag: "คู่มือการใช้งาน",
  },
];

const topicLinks = [
  {
    title: "ยาง EV ต่างจากยางทั่วไปยังไง?",
    description: "ดูจุดเด่นและข้อจำกัดของยางแต่ละรุ่น ก่อนเลือกระหว่างยาง EV กับยาง Performance",
    href: "/articles/ev-tyre-and-coilover-selection-guide",
    icon: ShieldCheck,
  },
  {
    title: "โช้คแต่งและช่วงล่างรถไฟฟ้า",
    description: "สปริงกับโช้คทำหน้าที่ต่างกันยังไง และทำไมปรับแข็งขึ้นไม่ได้แปลว่าขับดีขึ้นเสมอ",
    href: "/articles/ev-suspension-tuning-guide",
    icon: SlidersHorizontal,
  },
  {
    title: "ยางกินใน ต้องตั้งศูนย์ไหม?",
    description: "ทำความเข้าใจแคมเบอร์กับมุมโท และรู้ว่าควรถามร้านเรื่องอะไรหลังโหลดรถหรือเปลี่ยนช่วงล่าง",
    href: "/articles/ev-camber-adjustment-wheel-alignment-guide",
    icon: BookOpen,
  },
];

const textLink = "font-medium text-lime-800 underline decoration-lime-500/50 underline-offset-4 hover:decoration-current focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime-700";

const homeFaqs = [
  {
    question: "ของแต่ง Tesla Model 3 กับ Model Y ใช้ด้วยกันได้ไหม?",
    answer: <p>ต้องเช็กเป็นชิ้น ๆ ครับ อย่าใช้แค่ชื่อ Tesla เป็นคำยืนยัน ให้เทียบรุ่น ปี โฉม รหัสสินค้า และรถพวงมาลัยขวา พรมหรือถาดคอนโซลที่ระบุสำหรับ Model 3 ไม่ได้ยืนยันว่าใช้กับ Model Y หรือ Model Y L ได้ด้วย ดู <Link className={textLink} href="#tesla-accessories">แนวทางเลือกของแต่ง Tesla ให้ตรงรุ่น</Link> ก่อนเลือกซื้อ</p>,
  },
  {
    question: "ใส่โช้คแต่งแล้ว รถจะนุ่มขึ้นไหม?",
    answer: <p>ไม่เสมอไปครับ ขึ้นอยู่กับสปริง ระยะยุบ การปรับโช้ค ยาง และถนนที่ขับ โช้คที่เหมาะกับลงสนามอาจไม่ถูกใจเวลาขับไปทำงาน เริ่มจากแยกว่ารถเด้ง กระแทก หรือโยน แล้วอ่าน <Link className={textLink} href="/articles/ev-damper-tuning-bump-rebound-guide#symptoms">วิธีสังเกตอาการก่อนปรับโช้ค</Link> แทนการหมุนตามจำนวนคลิกของรถคนอื่น</p>,
  },
  {
    question: "รถไฟฟ้าต้องใช้ยางที่มีคำว่า EV เท่านั้นไหม?",
    answer: <>
      <p>ไม่จำเป็นต้องดูแค่ชื่อรุ่นยาง ให้ตรวจว่าผู้ผลิตรองรับการใช้งานกับรถของคุณ และเลือกขนาด พิกัดรับน้ำหนัก กับพิกัดความเร็วให้ตรงข้อกำหนดของรถ จากนั้นค่อยเทียบความเงียบ การยึดเกาะ และแรงต้านการหมุนใน <Link className={textLink} href="/articles/ev-tyre-and-coilover-selection-guide">คู่มือเลือกยางรถไฟฟ้า</Link></p>
      <p className="mt-3 text-sm">อ่านคำอธิบายจากผู้ผลิตเพิ่มเติม: <a className={textLink} href="https://www.michelin.co.th/auto/advice/ev-guide/tyres-for-electric-cars" target="_blank" rel="noopener noreferrer">Michelin: รถ EV จำเป็นต้องใช้ยางเฉพาะหรือไม่<span className="sr-only"> (เปิดแท็บใหม่)</span></a></p>
    </>,
  },
  {
    question: "ถามราคายางรถ EV ต้องบอกร้านว่าอะไรบ้าง?",
    answer: <p>บอกรุ่นรถ ปี รุ่นย่อย ขนาดล้อ และขนาดยางหน้า–หลังที่ใช้อยู่ ถ้าเปลี่ยนล้อหรือช่วงล่างมาแล้วก็บอกด้วยครับ ขอให้ร้านยืนยันสเปกที่รองรับรถ แล้วแยกราคาต่อเส้น จำนวนเส้น ค่าใส่ ถ่วงล้อ และเงื่อนไขรับประกันให้ครบ ใช้ <Link className={textLink} href="#compare-ev-tyre-prices">เช็กลิสต์เทียบราคายาง</Link> ช่วยถามได้ โดยยังไม่ต้องตัดสินจากราคาเริ่มต้นในโฆษณา</p>,
  },
  {
    question: "ของแต่งจากต่างประเทศ ใส่รถสเปกไทยได้เลยไหม?",
    answer: <p>ยังสรุปไม่ได้จากชื่อรุ่นหรือหน้าตารถเพียงอย่างเดียว ต้องเทียบปี รุ่นย่อย รุ่นก่อนหรือหลังปรับโฉม ระบบขับเคลื่อน และตำแหน่งติดตั้งของรถพวงมาลัยขวา ขอรหัสสินค้าและเอกสารยืนยันจากผู้ผลิตหรือผู้ติดตั้งก่อนซื้อ โดยเฉพาะชิ้นส่วนช่วงล่าง เบรก และอุปกรณ์ไฟฟ้า ดูรายการที่ควรเตรียมใน <Link className={textLink} href="#before-you-buy">เช็กลิสต์ก่อนซื้อของแต่ง EV</Link></p>,
  },
  {
    question: "ตอนนี้สั่งซื้ออุปกรณ์เสริมได้หรือยัง?",
    answer: <p>ตอนนี้ยังไม่เปิดรับคำสั่งซื้อหรือชำระเงินครับ อ่านบทความได้ตามปกติ ส่วนสินค้ายังอยู่ระหว่างคัดเลือกและตรวจข้อมูลรุ่นรถ หากมีของแต่งที่กำลังหา <Link className={textLink} href="/contact">บอกรุ่นรถและสิ่งที่อยากได้กับทีมงาน</Link> หรือดู <Link className={textLink} href="#launch">สถานะการเปิดตัวสินค้า</Link> ได้ที่นี่</p>,
  },
];

export default function StorefrontPage() {
  return (
    <div className="bg-white text-slate-950">
      <ImageMetadata pagePath="/" />
      <section className="border-b border-slate-200 bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:px-8 md:py-14 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch">
          <div className="flex flex-col justify-between gap-8 lg:py-4">
            <div>
              <p className="mb-5 inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-lime-300">
                <Sparkles className="h-4 w-4" />
                สำหรับคนใช้ EV และคนชอบแต่งรถ
              </p>
              <h1 className="max-w-2xl font-extrabold tracking-tight">
                แต่งรถ EV
                <span className="block text-lime-300">แต่งให้ถูกจุด ขับให้ถูกใจ</span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
                เลือกของแต่งรถไฟฟ้าจากสิ่งที่อยากเปลี่ยน ทั้งของใช้ในรถ ยาง และช่วงล่าง
                ดูตัวอย่างของแต่ง Tesla หรือเริ่มจากคู่มือที่ช่วยตอบคำถามก่อนซื้อ
                พร้อมรีวิวรถ EV ที่ขายในไทย
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="#ev-accessories"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-lime-300 px-5 py-3 font-semibold text-slate-950 transition-colors hover:bg-lime-200"
              >
                ดูไอเดียของแต่ง <ArrowRight className="h-4 w-4" />
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
              alt="Tesla Model 3 Highland สีแดงที่งานแสดงรถในเยอรมนี ปี 2024"
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
            <p className="mb-2 text-xs font-semibold text-lime-800">มีรถแล้ว หรือกำลังเลือกคันแรก</p>
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

      <section id="ev-accessories" aria-labelledby="ev-accessories-heading" className="mx-auto max-w-7xl scroll-mt-28 px-5 py-14 sm:px-8 md:py-20">
        <div className="mb-8 max-w-3xl">
          <p className="mb-2 text-xs font-semibold text-lime-800">อยากเปลี่ยนอะไรให้รถคันนี้?</p>
          <h2 id="ev-accessories-heading" className="font-bold">ของแต่งรถไฟฟ้า เริ่มแต่งอะไรดี?</h2>
          <p className="mt-4 leading-relaxed text-slate-600">
            ถ้าอยากเปลี่ยนความรู้สึกตอนขับ ลองทำความเข้าใจยางกับช่วงล่างก่อน
            ถ้าอยากใช้รถสะดวกขึ้น ดู <Link className={textLink} href="#tesla-accessories">แนวทางเลือกของแต่ง Tesla และ ZEEKR ให้ตรงรุ่น</Link> ด้านล่างได้
            เลือกจากสิ่งที่ใช้จริง ไม่จำเป็นต้องแต่งทั้งคัน
          </p>
        </div>
        <EvUpgradeInfographic />
        <div className="grid gap-6 md:grid-cols-2">
          {upgradeIdeas.map((idea) => (
            <Link key={idea.href} href={idea.href} className="group overflow-hidden rounded-3xl border border-slate-200 bg-white transition-colors hover:border-lime-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime-700">
              <div className="relative aspect-[16/10] bg-slate-50">
                <Image src={idea.image} alt={idea.imageAlt} fill sizes="(max-width: 767px) 100vw, 50vw" className={idea.imageFit === "contain" ? "object-contain p-5" : "object-cover"} />
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="font-bold">{idea.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{idea.description}</p>
                <span className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-lime-800">{idea.linkLabel} <ArrowRight className="h-4 w-4 shrink-0" /></span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="tesla-accessories" aria-labelledby="tesla-accessories-heading" className="scroll-mt-28 border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 md:py-16">
          <div className="mb-8 max-w-3xl">
            <p className="mb-2 text-xs font-semibold text-lime-800">ของใช้ในรถ เลือกให้ตรงรุ่น</p>
            <h2 id="tesla-accessories-heading" className="font-bold">ของแต่ง Tesla และ ZEEKR เลือกให้ตรงรุ่น</h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              ขับ Model 3, Model Y L หรือ ZEEKR X อยู่? เริ่มจากรุ่น ปี และโฉมของรถ
              พรม ถาดคอนโซล ล้อ และช่วงล่างที่หน้าตาคล้ายกันอาจใช้แทนกันไม่ได้
              ภาพรถด้านล่างใช้ประกอบการเลือกรุ่น ไม่ใช่รายการสินค้าของเรา
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {vehicleAccessoryExamples.map((accessory) => (
              <article key={accessory.image} className="flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white">
                <div className="relative aspect-[4/3] bg-[#f7f7f7]">
                  <Image src={accessory.image} alt={accessory.imageAlt} fill sizes="(max-width: 767px) 100vw, 50vw" className="object-contain" />
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="font-bold">{accessory.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{accessory.description}</p>
                  <Link href={accessory.href} className="mt-auto inline-flex min-h-11 items-center gap-2 pt-5 text-sm font-semibold text-lime-800 underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime-700">
                    {accessory.linkLabel} <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 text-sm leading-relaxed text-slate-600">
            <p>ยังไม่แน่ใจว่ารถเป็นโฉมไหน? เริ่มจาก <Link className={textLink} href="/articles/tesla-model-3-highland-review">ข้อมูล Tesla Model 3 Highland ตลาดไทย</Link> แล้วเช็กรหัสอุปกรณ์กับผู้ผลิตอีกครั้ง ถ้าใช้ Model Y ให้ดู <a className={textLink} href="https://shop.tesla.com/th_th/category/vehicle-accessories" target="_blank" rel="noopener noreferrer">อุปกรณ์แยกตามรุ่นจาก Tesla Shop<span className="sr-only"> (เปิดแท็บใหม่)</span></a> อย่าเลือกจากรูปอย่างเดียว</p>
            <p className="mt-3">ภาพ Model Y L เป็นรถต่างประเทศ ส่วน ZEEKR X เป็น Flagship AWD ปี 2024 ที่จัดแสดงในไทย ภาพไม่ใช่หลักฐานว่าอุปกรณ์ใส่กับรถเราได้ ดู <Link className={textLink} href="/image-credits#image-42">เครดิตภาพ Model Y L</Link> และ <Link className={textLink} href="/image-credits#image-45">เครดิตภาพ ZEEKR X</Link> <Link className={textLink} href="/">EVSELECTS</Link> ยังไม่เปิดรับคำสั่งซื้อหรือชำระเงิน และไม่ได้ยืนยันว่าเป็นตัวแทนจำหน่ายของทั้งสองแบรนด์</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 md:py-20">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-xs font-semibold text-lime-800">เรื่องที่อยากชวนอ่าน</p>
            <h2 className="font-bold">รีวิวรถ EV และเรื่องแต่งรถที่ควรรู้</h2>
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
                  alt={article.imageAlt ?? article.title}
                  fill
                  sizes="(max-width: 767px) 100vw, 33vw"
                  className={`${article.imageFit === "contain" ? "object-contain" : "object-cover"} transition-transform duration-500 group-hover:scale-[1.025]`}
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

      <ComingSoonBanner />

      <section id="ev-upgrade-guides" className="mx-auto max-w-7xl scroll-mt-28 px-5 py-14 sm:px-8 md:py-20">
        <div className="mb-8 max-w-2xl">
          <p className="mb-2 text-xs font-semibold text-lime-800">เลือกอ่านก่อนเลือกของ</p>
          <h2 className="font-bold">เลือกยาง เปลี่ยนโช้ค หรือตั้งศูนย์ เริ่มตรงไหนดี?</h2>
          <p className="mt-4 leading-relaxed text-slate-600">
            รถเด้งไม่ได้แปลว่าต้องเปลี่ยนโช้คเสมอไป และยางกินในก็ไม่ควรรีบโทษแคมเบอร์
            ลองทำความเข้าใจแต่ละส่วน แล้วคุยกับร้านให้ตรงกับอาการที่เจอ
          </p>
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

      <section id="compare-ev-tyre-prices" aria-labelledby="compare-ev-tyre-prices-heading" className="scroll-mt-28 border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 md:py-16">
          <div className="mb-8 max-w-3xl">
            <p className="mb-2 text-xs font-semibold text-lime-800">กำลังจะเปลี่ยนยางชุดใหม่?</p>
            <h2 id="compare-ev-tyre-prices-heading" className="font-bold">เทียบราคายางรถ EV อย่าดูแค่ราคาเริ่มต้น</h2>
            <p className="mt-4 leading-relaxed text-slate-600">เห็นยางชื่อเดียวกัน แต่สองร้านให้ราคาต่างกัน อย่าเพิ่งสรุปว่าร้านไหนแพงกว่า ลองเช็กว่าขนาด รหัสยาง และบริการที่ได้ตรงกันหรือยัง สามข้อนี้ช่วยให้ถามร้านได้ครบขึ้น</p>
          </div>
          <div className="grid items-start gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <figure className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
              <Image src="/images/articles/ev-tyre-michelin-audi.jpg" alt="แก้มยาง Michelin Pilot Sport All Season 4 บนล้อ Audi เห็นชื่อรุ่นและรหัสขนาดยาง" width={1920} height={1920} sizes="(max-width: 1023px) 100vw, 40vw" className="h-auto w-full" />

            </figure>
            <div>
              <ol className="space-y-4">
                <li className="rounded-3xl border border-slate-200 bg-white p-6">
                  <h3 className="font-bold">1. เทียบให้ตรงรุ่น ตรงขนาด</h3>
                  <p className="mt-3 leading-relaxed text-slate-600">ขอชื่อรุ่นยาง ขนาด พิกัดรับน้ำหนัก และพิกัดความเร็วให้ครบ แล้วตรวจตามคู่มือรถ อย่าดูแค่ยี่ห้อหรือขอบล้อ ถ้ายังไม่แน่ใจว่าจะเลือกยางแนวไหน อ่าน <Link className={textLink} href="/articles/ev-tyre-and-coilover-selection-guide">ความต่างของยาง EV กับยาง Performance</Link> ก่อนขอราคา</p>
                  <p className="mt-3 text-sm leading-relaxed"><a className={textLink} href="https://www.michelin.co.th/auto/advice/tyre-basics/tyre-markings-explained" target="_blank" rel="noopener noreferrer">วิธีอ่านขนาดและรหัสบนแก้มยางจาก Michelin<span className="sr-only"> (เปิดแท็บใหม่)</span></a></p>
                </li>
                <li className="rounded-3xl border border-slate-200 bg-white p-6">
                  <h3 className="font-bold">2. ราคานี้ต่อเส้น หรือรวมทั้งชุด?</h3>
                  <p className="mt-3 leading-relaxed text-slate-600">ให้ร้านระบุจำนวนเส้น ภาษี ค่าใส่ ถ่วงล้อ และค่าอุปกรณ์เพิ่มเติม ถามว่ารวมตั้งศูนย์หรือคิดแยก หากยางสึกไม่เท่ากัน ลองอ่านเรื่อง <Link className={textLink} href="/articles/ev-camber-adjustment-wheel-alignment-guide">ยางกินในกับการตั้งศูนย์ล้อ</Link> และให้ร้านตรวจหาสาเหตุก่อนใส่ชุดใหม่</p>
                </li>
                <li className="rounded-3xl border border-slate-200 bg-white p-6">
                  <h3 className="font-bold">3. เช็กเงื่อนไขหลังจ่ายด้วย</h3>
                  <p className="mt-3 leading-relaxed text-slate-600">ขอข้อมูลสัปดาห์และปีผลิต เงื่อนไขรับประกัน ใครเป็นผู้รับเคลม และบริการหลังติดตั้ง เก็บใบเสนอราคาพร้อมวันที่และวันหมดโปรไว้ จะได้ไม่เอาราคาคนละช่วงหรือคนละเงื่อนไขมาเทียบกัน</p>
                </li>
              </ol>
              <p className="mt-5 text-sm leading-relaxed text-slate-600">หน้านี้เป็นแนวทางเช็กราคา ไม่ใช่ใบเสนอขาย เรายังไม่มีราคายางรายรุ่นที่ยืนยันกับร้าน จึงไม่ใส่ตัวเลขประมาณให้เข้าใจว่าเป็นราคาซื้อได้จริง</p>
            </div>
          </div>
        </div>
      </section>

      <section id="before-you-buy" className="scroll-mt-28 border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 md:py-16">
          <div className="mb-8 max-w-2xl">
            <p className="mb-2 text-xs font-semibold text-lime-800">เซฟไว้ถามร้านก่อนจ่ายเงิน</p>
            <h2 className="font-bold">ก่อนซื้อของแต่ง EV เช็ก 4 เรื่องนี้</h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              ของที่คนอื่นใส่แล้วชอบ อาจไม่ตอบโจทย์รถเรา เตรียมข้อมูลสี่ข้อนี้ไว้
              จะได้เทียบข้อเสนอของแต่ละร้านได้มากกว่าแค่ราคาและชื่อแบรนด์
            </p>
          </div>
          <ol className="grid gap-5 md:grid-cols-2">
            <li className="rounded-3xl border border-slate-200 bg-white p-6">
              <span className="font-mono text-xs font-semibold text-lime-800">01 / รถคันไหน</span>
              <h3 className="mt-3 font-bold">ชื่อรุ่นเหมือนกัน ยังต้องเช็กให้ครบ</h3>
              <p className="mt-3 leading-relaxed text-slate-600">จดรุ่น ปี รุ่นย่อย และระบบขับเคลื่อน แล้วถามให้ชัดว่ารหัสสินค้านี้รองรับรถสเปกไทยของเราหรือไม่ อย่าใช้แค่ภาพติดตั้งจากต่างประเทศเป็นคำยืนยันว่าใส่ได้</p>
            </li>
            <li className="rounded-3xl border border-slate-200 bg-white p-6">
              <span className="font-mono text-xs font-semibold text-lime-800">02 / อยากเปลี่ยนอะไร</span>
              <h3 className="mt-3 font-bold">อยากนุ่มขึ้น เงียบขึ้น หรือขับกระชับขึ้น?</h3>
              <p className="mt-3 leading-relaxed text-slate-600">เล่าอาการให้ร้านฟังพร้อมบอกว่าเกิดตอนไหน ถ้ายังแยกไม่ออกว่าเด้งหรือกระแทก ลองอ่าน <Link className={textLink} href="/articles/ev-damper-tuning-bump-rebound-guide#symptoms">วิธีเช็กอาการก่อนเปลี่ยนโช้ค</Link> จะช่วยให้คุยกันรู้เรื่องขึ้น</p>
            </li>
            <li className="rounded-3xl border border-slate-200 bg-white p-6">
              <span className="font-mono text-xs font-semibold text-lime-800">03 / ขับที่ไหน</span>
              <h3 className="mt-3 font-bold">ถนนที่ขับทุกวันสำคัญกว่ารถในรีวิว</h3>
              <p className="mt-3 leading-relaxed text-slate-600">ในเมืองมีรอยต่อสะพาน ขึ้นลงลานจอดบ่อย หรือพาครอบครัวเดินทางไกล? บอกทั้งเส้นทางและน้ำหนักบรรทุกที่ใช้จริง อ่านเรื่อง <Link className={textLink} href="/articles/optimizing-ev-suspension-thai-roads">เลือกช่วงล่างให้เหมาะกับถนนไทย</Link> ก่อนตัดสินใจตามเซ็ตอัปของรถลงสนาม</p>
            </li>
            <li className="rounded-3xl border border-slate-200 bg-white p-6">
              <span className="font-mono text-xs font-semibold text-lime-800">04 / จ่ายแล้วได้อะไร</span>
              <h3 className="mt-3 font-bold">ถามราคารวม ไม่ใช่แค่ค่าของ</h3>
              <p className="mt-3 leading-relaxed text-slate-600">ขอรายละเอียดค่าแรง อุปกรณ์ที่ต้องใช้เพิ่ม การรับประกัน และงานตรวจหลังติดตั้ง ถ้าเปลี่ยนความสูงรถหรือชิ้นส่วนช่วงล่าง คุยเรื่อง <Link className={textLink} href="/articles/ev-camber-adjustment-wheel-alignment-guide">ค่าตั้งศูนย์ก่อน–หลังติดตั้ง</Link> ให้ชัดด้วย</p>
            </li>
          </ol>
        </div>
      </section>

      <section id="home-faq" className="mx-auto max-w-7xl scroll-mt-28 px-5 py-14 sm:px-8 md:py-20" aria-labelledby="home-faq-heading">
        <div className="mb-8 max-w-2xl">
          <p className="mb-2 text-xs font-semibold text-lime-800">สงสัยเรื่องนี้อยู่หรือเปล่า?</p>
          <h2 id="home-faq-heading" className="font-bold">อยากแต่งรถ EV ต้องรู้อะไรบ้าง?</h2>
        </div>
        <div className="divide-y divide-slate-200 border-y border-slate-200">
          {homeFaqs.map(({ question, answer }) => (
            <details key={question} className="group py-1">
              <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-5 py-5 text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime-700 [&::-webkit-details-marker]:hidden">
                <h3 className="font-semibold">{question}</h3>
                <ChevronDown className="h-5 w-5 shrink-0 text-lime-800 transition-transform group-open:rotate-180" aria-hidden="true" />
              </summary>
              <div className="max-w-4xl space-y-3 pb-6 leading-relaxed text-slate-600">{answer}</div>
            </details>
          ))}
        </div>
      </section>

      <PrelaunchPanel />

      <section id="fitment-assurance" className="scroll-mt-28 border-t border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:px-8 md:grid-cols-2 md:py-16">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
            <ShieldCheck className="mb-5 h-7 w-7 text-lime-800" />
            <h2 className="font-bold">อ่านแล้วรู้ว่าข้อมูลมาจากไหน</h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              บทความของ <Link href="/" className={textLink}>EVSELECTS</Link> มีทั้งข้อมูลจากผู้ผลิตและคำอธิบายหลักการทำงาน
              อ่านแหล่งอ้างอิงและข้อจำกัดประกอบด้วย โดยเฉพาะสเปกรถและการใส่อุปกรณ์ให้ตรงรุ่น
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
              ติดต่อทีมงาน <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
