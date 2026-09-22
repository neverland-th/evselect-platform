import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { ArrowLeft, ArrowRight, BatteryCharging, CalendarDays, Clock } from 'lucide-react';
import BrandHomeLink from '@/components/BrandHomeLink';
import ShareButton from '@/components/ShareButton';
import { batteryArticle } from '@/lib/battery-article';

const manualBase = 'https://www.tesla.com/ownersmanual/model3/en_th/';
const sources = {
  care: `${manualBase}GUID-7FE78D73-0A17-47C4-B21B-54F641FFAEF4.html`,
  charging: `${manualBase}GUID-BEE08D47-0CE0-4BDD-83F2-9854FB3D578F.html`,
  heat: `${manualBase}GUID-6F5B7B3F-F020-471D-9D46-D1F990A6237A.html`,
  range: `${manualBase}GUID-4AC32116-979A-4146-A935-F41F8551AFE6.html`,
  health: `${manualBase}GUID-B9807218-7291-4F68-9AFF-7C525CF498F3.html`,
};
const linkStyle = 'font-semibold text-lime-800 underline underline-offset-4 decoration-lime-500 hover:text-lime-950 focus-visible:outline-2 focus-visible:outline-offset-4';

function Source({ href, children }: { href: string; children: ReactNode }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" className={linkStyle}>{children}<span className="sr-only"> (เปิดแท็บใหม่)</span></a>;
}

export const metadata: Metadata = {
  title: `${batteryArticle.title} | EVSELECT`,
  description: batteryArticle.description,
  alternates: { canonical: batteryArticle.path },
  openGraph: {
    title: batteryArticle.title,
    description: batteryArticle.description,
    url: `https://evselects.com${batteryArticle.path}`,
    type: 'article',
    locale: 'th_TH',
    siteName: 'EVSELECT',
    publishedTime: batteryArticle.publishedAt,
    modifiedTime: batteryArticle.updatedAt,
    images: [{ url: batteryArticle.image, width: 1920, height: 1198, alt: batteryArticle.imageAlt }],
  },
  twitter: { card: 'summary_large_image', title: batteryArticle.title, description: batteryArticle.description, images: [batteryArticle.image] },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: batteryArticle.title,
  description: batteryArticle.description,
  image: `https://evselects.com${batteryArticle.image}`,
  datePublished: batteryArticle.publishedAt,
  dateModified: batteryArticle.updatedAt,
  author: { '@type': 'Organization', name: 'EVSELECT', url: 'https://evselects.com/' },
  publisher: { '@type': 'Organization', name: 'EVSELECT', url: 'https://evselects.com/', logo: { '@type': 'ImageObject', url: 'https://evselects.com/logo-desktop.png' } },
  mainEntityOfPage: { '@type': 'WebPage', '@id': `https://evselects.com${batteryArticle.path}` },
};

export default function EVBatteryCareArticle() {
  return <article className="mx-auto max-w-4xl bg-white px-4 py-10 text-base leading-8 text-slate-700 sm:px-6 md:py-16 lg:px-8">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
    <nav aria-label="Breadcrumb" className="mb-8 text-sm"><Link href="/articles" className="inline-flex items-center gap-2 text-slate-600 hover:text-lime-800"><ArrowLeft size={16} />บทความและคู่มือ EV</Link></nav>
    <header className="space-y-5">
      <p className="inline-flex items-center gap-2 rounded-full bg-lime-50 px-4 py-1 text-sm font-semibold text-lime-800"><BatteryCharging size={18} />คู่มือการใช้งาน · แบตเตอรี่และการชาร์จ</p>
      <h1 className="text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl">{batteryArticle.title}</h1>
      <p className="text-lg leading-8 sm:text-xl sm:leading-9">รถคันหนึ่งบอกให้ชาร์จถึง 80% อีกคันให้ชาร์จเต็ม แล้วเราควรเชื่อใคร? เริ่มจากคำแนะนำของรถที่คุณใช้ แล้วค่อยจัดตารางชาร์จให้เข้ากับชีวิต คู่มือนี้ช่วยแยกเรื่องที่ทำได้ทันที ออกจากตัวเลขที่ต้องเช็กให้ตรงรุ่น</p>
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-500">
        <span className="inline-flex items-center gap-2"><CalendarDays size={16} />อัปเดต <time dateTime={batteryArticle.updatedAt}>22 กันยายน 2569</time></span>
        <span className="inline-flex items-center gap-2"><Clock size={16} />ประมาณ {batteryArticle.readTime}</span>
        <span>เรียบเรียงโดย <BrandHomeLink /></span>
      </div>
      <p className="text-sm leading-6 text-slate-600">ตัวอย่างคำแนะนำในหน้านี้อ้างอิงคู่มือ Tesla Model 3 สำหรับภูมิภาคไทยฉบับภาษาอังกฤษ รถยี่ห้ออื่นหรือรุ่นปีต่างกันต้องตรวจคู่มือของตัวเอง ไม่ใช้ตัวเลขของ Tesla แทนกันโดยอัตโนมัติ</p>
      <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
        <Image src={batteryArticle.image} alt={batteryArticle.imageAlt} width={1920} height={1198} sizes="(max-width: 896px) 100vw, 832px" preload className="h-auto w-full" />
        <figcaption className="space-y-2 p-4 text-sm leading-6 text-slate-600">
          <p>แชสซีจัดแสดง Volkswagen ID.3 ช่วยให้เห็นตำแหน่งชุดแบตเตอรี่ใต้พื้นรถ ภาพนี้ใช้ประกอบความเข้าใจเรื่องโครงสร้าง ไม่ใช่ผลทดสอบแบตเตอรี่หรือภาพรถของทีมงาน</p>
          <p>ภาพ: <Source href={batteryArticle.imageSource}>{batteryArticle.imageAuthor} / Wikimedia Commons</Source> · <Source href={batteryArticle.imageLicenseUrl}>{batteryArticle.imageLicense}</Source> · ย่อขนาดสำหรับเว็บโดยไม่รีทัช</p>
        </figcaption>
      </figure>
    </header>

    <div className="mt-10 space-y-12">
      <section aria-labelledby="start-here" className="space-y-4 rounded-2xl border border-lime-200 bg-lime-50 p-5 sm:p-7">
        <h2 id="start-here" className="text-xl font-bold leading-snug text-slate-950 sm:text-2xl">ก่อนเปลี่ยนวิธีชาร์จ เช็กสามเรื่องนี้</h2>
        <ul className="list-disc space-y-3 pl-5">
          <li><strong>รถรุ่นไหน:</strong> จดรุ่น ปี และรุ่นย่อยให้ครบ แล้วเปิดคู่มือและเมนูการชาร์จของรถคันจริง</li>
          <li><strong>ผู้ผลิตแนะนำอะไร:</strong> แยกคำแนะนำสำหรับใช้ทุกวัน เดินทางไกล และจอดนาน เพราะแต่ละสถานการณ์มีโจทย์ต่างกัน</li>
          <li><strong>พรุ่งนี้ต้องใช้รถแค่ไหน:</strong> เตรียมพลังงานให้พอกับเส้นทางและแผนชาร์จ ไม่ฝืนใช้สูตรจากรถคนอื่นจนตัวเองเดินทางลำบาก</li>
        </ul>
      </section>

      <section aria-labelledby="charge-limit" className="space-y-4">
        <h2 id="charge-limit" className="text-xl font-bold leading-snug text-slate-950 sm:text-2xl">1. ชาร์จ 80% หรือ 100% ดูขีดจำกัดที่รถแนะนำ</h2>
        <p>เริ่มจากขีดจำกัดการชาร์จที่รถแนะนำ ใน <Source href={sources.charging}>คู่มือการตั้งค่าชาร์จ Model 3</Source> Tesla ให้ดูช่วงที่แนะนำสำหรับใช้งานประจำวันและเดินทางไกลบนหน้าจอรถหรือแอป คำตอบจึงควรมาจากรถคันนั้นก่อนคำแนะนำทั่วไปในโซเชียล</p>
        <p>สำหรับรถที่แนะนำขีดจำกัดรายวัน 80% Tesla แนะนำให้ตั้งใกล้ 80% และเก็บ 100% ไว้เมื่อจำเป็นต้องเดินทางไกล พร้อมหลีกเลี่ยงการปล่อยแบตเตอรี่ใกล้ 0% หรือ 100% เป็นเวลานาน ตาม <Source href={sources.care}>คำแนะนำดูแลแบตเตอรี่ Model 3</Source></p>
        <p>ส่วนคำว่า LFP หรือ NMC เป็นข้อมูลเกี่ยวกับเคมีแบตเตอรี่ ยังไม่พอให้กำหนดตารางชาร์จแทนผู้ผลิต หากกำลังแยกรุ่นรถ อ่าน <Link href="/articles/tesla-model-3-highland-review" className={linkStyle}>คู่มือรุ่นย่อย Tesla Model 3 สเปกไทย</Link> แล้วตรวจคำแนะนำการชาร์จของรถคันจริงอีกครั้ง</p>
      </section>

      <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
        <Image src="/images/reviews/tesla-model-3-hero.jpg" alt="Tesla Model 3 Highland สีแดงจัดแสดงที่เมือง Ulm ประเทศเยอรมนี" width={1280} height={852} sizes="(max-width: 896px) 100vw, 832px" className="h-auto w-full" />
        <figcaption className="space-y-2 p-4 text-sm leading-6 text-slate-600">
          <p>Tesla Model 3 Highland ถ่ายที่ Ulm ประเทศเยอรมนีในปี 2024 ใช้ประกอบตัวอย่างรถที่มีคู่มืออ้างอิงในบทความ ภาพภายนอกไม่ยืนยันชนิดแบตเตอรี่หรือขีดจำกัดการชาร์จของรถแต่ละคัน</p>
          <p>ภาพ: <Source href="https://commons.wikimedia.org/wiki/File:Tesla_Model_3_(2023)_Autofr%C3%BChling_Ulm_IMG_9282.jpg">Alexander Migl / Wikimedia Commons</Source> · <Source href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</Source> · ย่อขนาดสำหรับเว็บโดยไม่รีทัช</p>
        </figcaption>
      </figure>

      <section aria-labelledby="ac-dc" className="space-y-4">
        <h2 id="ac-dc" className="text-xl font-bold leading-snug text-slate-950 sm:text-2xl">2. ใช้ AC และ DC ตามแผนเดินทางและคู่มือรถ</h2>
        <p>AC คือการชาร์จด้วยไฟกระแสสลับ เช่น จุดชาร์จบ้าน ส่วน DC คือการชาร์จด้วยไฟกระแสตรงที่ใช้ในสถานีชาร์จเร็ว สำหรับ Model 3 <Source href={sources.care}>คำแนะนำเลือกวิธีชาร์จของ Tesla</Source> ให้ใช้ AC เมื่อทำได้ และใช้ Supercharger สำหรับการเดินทางไกล คำแนะนำนี้ไม่ได้หมายความว่าการใช้ DC ครั้งหนึ่งจะทำให้แบตเตอรี่เสีย</p>
        <p>ก่อนถึงจุดชาร์จเร็ว รถบางรุ่นเตรียมอุณหภูมิแบตเตอรี่ได้เมื่อเลือกสถานีในระบบนำทาง Model 3 มีขั้นตอนนี้ใน <Source href={sources.charging}>คำแนะนำการชาร์จและเตรียมแบตเตอรี่ก่อนถึงสถานี</Source> หากรถคุณมีฟังก์ชันนี้ ให้ใช้ตามคู่มือของรุ่นและซอฟต์แวร์นั้น</p>
        <p>ถ้ากำลังชาร์จลดลง อย่าเพิ่งสรุปว่าแบตเตอรี่เสื่อมทันที Tesla ระบุใน <Source href={sources.care}>คู่มือแบตเตอรี่แรงดันสูง</Source> ว่าอุณหภูมิ ระดับประจุที่ใกล้เต็ม และสภาพแบตเตอรี่ตามการใช้งานล้วนมีผลต่ออัตราการชาร์จได้</p>
      </section>

      <section aria-labelledby="hot-weather" className="space-y-4">
        <h2 id="hot-weather" className="text-xl font-bold leading-snug text-slate-950 sm:text-2xl">3. ห้องโดยสารร้อน กับแบตเตอรี่ร้อน ต้องแยกให้ออก</h2>
        <p>รถจอดกลางแดดแล้วเบาะร้อน ไม่ได้เป็นการวัดอุณหภูมิแบตเตอรี่โดยตรง ตาม <Source href={sources.heat}>แนวทางใช้ Model 3 ในอากาศร้อน</Source> การจอดในร่มและใช้ม่านบังแดดช่วยจัดการความร้อนในห้องโดยสาร แต่ไม่ใช่หลักฐานว่าอุปกรณ์ชิ้นหนึ่งจะยืดอายุแบตเตอรี่ได้กี่ปี</p>
        <p>หากรถรองรับการเตรียมห้องโดยสารก่อนออกเดินทาง การทำขณะเสียบชาร์จช่วยให้ใช้พลังงานจากจุดชาร์จได้ตามการทำงานของรถ ลองตรวจเมนูตั้งเวลาและเงื่อนไขในคู่มือ แทนการเปิดระบบทิ้งไว้โดยไม่รู้ว่าใช้พลังงานจากไหน</p>
        <aside className="rounded-xl border border-slate-200 bg-slate-50 p-5 text-sm leading-7"><BrandHomeLink /> เปิดความรู้ก่อน เปิดขายเมื่อข้อมูลพร้อม ตอนนี้ยังไม่มีสินค้าพร้อมจำหน่าย และยังไม่เปิดรับคำสั่งซื้อหรือชำระเงิน ดู <Link href="/#launch" className={linkStyle}>สถานะการเตรียมเปิดตัวสินค้า</Link> ได้ที่หน้าแรก</aside>
      </section>

      <section aria-labelledby="parking" className="space-y-4">
        <h2 id="parking" className="text-xl font-bold leading-snug text-slate-950 sm:text-2xl">4. จอดหลายสัปดาห์ วางแผนก่อนล็อกรถ</h2>
        <p>ตัวอย่างจาก <Source href={sources.care}>คู่มือการจอด Model 3 ระยะยาว</Source> คือเหลือประจุประมาณ 50% และเสียบชาร์จไว้หากทำได้ รถยังใช้พลังงานกับระบบบางอย่างขณะจอด จึงควรตรวจฟังก์ชันที่เปิดอยู่ เช่น โหมดเฝ้าระวังรถ (Sentry Mode) และระบบปรับอากาศ พร้อมเตรียมพลังงานให้พอกับระยะเวลาจอด</p>
        <p>เลข 50% นี้เป็นตัวอย่างจาก Model 3 ไม่ใช่กฎสำหรับทุกยี่ห้อ ก่อนฝากรถที่สนามบินหรือจอดหลายสัปดาห์ ให้เปิดหัวข้อการจัดเก็บหรือจอดระยะยาวในคู่มือรถตัวเอง และอย่าจงใจใช้แบตเตอรี่จนหมดเพื่อหวังรีเซ็ตระบบ</p>
      </section>

      <section aria-labelledby="range-health" className="space-y-4">
        <h2 id="range-health" className="text-xl font-bold leading-snug text-slate-950 sm:text-2xl">5. วิ่งได้น้อยลง ยังไม่ใช่คำตอบว่าแบตเตอรี่เสื่อมเท่าไร</h2>
        <p>ความเร็ว อากาศ การใช้แอร์ น้ำหนักบรรทุก และสภาพยางมีผลต่อการใช้พลังงาน ตาม <Source href={sources.range}>ปัจจัยที่ส่งผลต่อระยะวิ่งของ Model 3</Source> ดังนั้นทริปที่วิ่งได้น้อยกว่าเดิมควรดูเงื่อนไขการขับร่วมด้วย ไม่เปลี่ยนตัวเลขระยะทางเป็นเปอร์เซ็นต์สุขภาพแบตเตอรี่ทันที</p>
        <p>หากเพิ่งเปลี่ยนล้อหรือยาง ให้ตรวจขนาด พิกัดรับน้ำหนัก และแรงดันตามรถ อ่านต่อใน <Link href="/articles/ev-tyre-and-coilover-selection-guide" className={linkStyle}>คู่มือเลือกยาง EV และอ่าน Load Index</Link> เพื่อแยกเรื่องยางออกจากการวินิจฉัยแบตเตอรี่</p>
        <p>ถ้ามีข้อกังวลจริง ให้ใช้วิธีตรวจที่ผู้ผลิตรองรับ Tesla มี <Source href={sources.health}>ฟังก์ชันตรวจสุขภาพแบตเตอรี่แรงดันสูง</Source> ในรถบางคัน และระบุว่าการทดสอบเหมาะเมื่อกังวลเรื่องความจุ ไม่จำเป็นต้องทำเป็นกิจวัตร ฟังก์ชันและเงื่อนไขอาจต่างกันตามรถและซอฟต์แวร์</p>
      </section>

      <section aria-labelledby="battery-faq" className="space-y-5">
        <h2 id="battery-faq" className="text-xl font-bold leading-snug text-slate-950 sm:text-2xl">คำถามที่ควรตอบให้ชัดก่อนทำตาม</h2>
        <div className="space-y-2"><h3 className="text-lg font-bold text-slate-900">ดูแลดีแล้วรับรองว่าแบตเตอรี่ใช้เกิน 10 ปีได้ไหม?</h3><p>รับรองเป็นตัวเลขเดียวให้รถทุกคันไม่ได้ คู่มือ <Source href={sources.health}>Battery Health ของ Tesla</Source> ระบุว่าอายุแบตเตอรี่ เคมี และรูปแบบการใช้งานมีผลต่อความเสื่อม ส่วนเงื่อนไขรับประกันต้องอ่านแยกตามรุ่นและตลาด ไม่ใช่คำรับรองอายุใช้งานของรถทุกคัน</p></div>
        <div className="space-y-2"><h3 className="text-lg font-bold text-slate-900">รถ LFP ทุกคันต้องชาร์จ 100% ทุกสัปดาห์หรือเปล่า?</h3><p>บทความนี้ไม่ใช้ตารางเดียวกับ LFP ทุกยี่ห้อ ให้ตรวจคำแนะนำที่ตรงรุ่น ปี และตลาด รวมถึงข้อความในเมนูชาร์จของรถ หากคู่มือกำหนดรอบชาร์จเต็มไว้ ให้ทำตามเงื่อนไขนั้น</p></div>
        <div className="space-y-2"><h3 className="text-lg font-bold text-slate-900">ถ้าจะเริ่มดูแลวันนี้ ควรทำอะไรก่อน?</h3><p>เปิดคู่มือและเมนูการชาร์จ เทียบกับแผนใช้รถพรุ่งนี้ แล้วตั้งขีดจำกัดและเวลาให้เหมาะกับรถคันนั้น หากจะจอดนาน ให้เช็กคำแนะนำการจอดแยกอีกครั้ง</p></div>
      </section>

      <section aria-labelledby="battery-sources" className="space-y-4 border-t border-slate-200 pt-8">
        <h2 id="battery-sources" className="text-xl font-bold leading-snug text-slate-950 sm:text-2xl">แหล่งข้อมูลและขอบเขตของคำแนะนำ</h2>
        <p>ตรวจแหล่งข้อมูลวันที่ 22 กันยายน 2026 ลิงก์ด้านล่างเป็นคู่มือ Model 3 สำหรับภูมิภาคไทยฉบับภาษาอังกฤษ เนื้อหาและฟังก์ชันอาจเปลี่ยนตามรุ่นปีหรือซอฟต์แวร์ จึงควรเทียบกับคู่มือในรถที่ใช้อยู่ด้วย</p>
        <ul className="list-disc space-y-2 pl-5">
          <li><Source href={sources.care}>Tesla: การดูแลแบตเตอรี่และการจอดระยะยาว</Source></li>
          <li><Source href={sources.charging}>Tesla: การชาร์จและตั้งขีดจำกัดประจุ</Source></li>
          <li><Source href={sources.heat}>Tesla: การใช้รถในสภาพอากาศร้อน</Source></li>
          <li><Source href={sources.range}>Tesla: ปัจจัยที่ส่งผลต่อระยะวิ่ง</Source></li>
          <li><Source href={sources.health}>Tesla: การตรวจสุขภาพแบตเตอรี่แรงดันสูง</Source></li>
        </ul>
        <p>อ่าน <Link href="/editorial-policy" className={linkStyle}>แนวทางบทความและการใช้แหล่งข้อมูล</Link> ของ <BrandHomeLink /> หรือ <Link href="/contact" className={linkStyle}>แจ้งข้อมูลที่ต้องแก้ไขกับทีมงาน</Link> โดยแนบรุ่นรถและแหล่งอ้างอิง เพื่อช่วยให้ตรวจสอบได้ตรงประเด็น</p>
      </section>

      <section aria-labelledby="read-next" className="space-y-4">
        <h2 id="read-next" className="text-xl font-bold leading-snug text-slate-950 sm:text-2xl">อ่านต่อให้ตรงคำถามของคุณ</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Link href="/articles/tesla-model-3-highland-review" className="rounded-2xl border border-slate-200 p-5 hover:border-lime-500 focus-visible:outline-2 focus-visible:outline-lime-700"><h3 className="mb-2 text-lg font-bold text-slate-900">เลือก Model 3 รุ่นไหนดี?</h3><p className="text-sm leading-6">เทียบรุ่นย่อยและข้อมูลสเปกไทย ก่อนกลับไปตรวจคำแนะนำของรถคันจริง</p><span className="mt-3 inline-flex items-center gap-2 font-semibold text-lime-800">อ่านคู่มือ Model 3<ArrowRight size={16} /></span></Link>
          <Link href="/articles/ev-tyre-and-coilover-selection-guide" className="rounded-2xl border border-slate-200 p-5 hover:border-lime-500 focus-visible:outline-2 focus-visible:outline-lime-700"><h3 className="mb-2 text-lg font-bold text-slate-900">เปลี่ยนยางแล้วต้องดูอะไร?</h3><p className="text-sm leading-6">อ่านขนาด พิกัดรับน้ำหนัก และคำแนะนำลมยางให้ตรงรถและการใช้งาน</p><span className="mt-3 inline-flex items-center gap-2 font-semibold text-lime-800">อ่านคู่มือยาง EV<ArrowRight size={16} /></span></Link>
        </div>
      </section>
      <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-6"><Link href="/articles" className={linkStyle}>กลับหน้ารวมบทความ</Link><ShareButton title={batteryArticle.title} /></footer>
    </div>
  </article>;
}
