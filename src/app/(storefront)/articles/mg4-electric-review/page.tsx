import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { ArrowLeft, ArrowRight, CalendarDays, Clock } from 'lucide-react';
import BrandHomeLink from '@/components/BrandHomeLink';
import ShareButton from '@/components/ShareButton';
import { mg4Article, mg4Sources } from '@/lib/mg4-article';

const linkStyle = 'font-semibold text-lime-800 underline underline-offset-4 decoration-lime-500 hover:text-lime-950 focus-visible:outline-2 focus-visible:outline-offset-4';
const headingStyle = 'text-xl font-bold leading-snug text-slate-950 sm:text-2xl';
function Source({ href, children }: { href: string; children: ReactNode }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" className={linkStyle}>{children}<span className="sr-only"> (เปิดแท็บใหม่)</span></a>;
}

export const metadata: Metadata = {
  title: `${mg4Article.title} | EVSELECT`, description: mg4Article.description,
  alternates: { canonical: mg4Article.path },
  openGraph: {
    title: mg4Article.title, description: mg4Article.description,
    url: `https://evselects.com${mg4Article.path}`, type: 'article', locale: 'th_TH', siteName: 'EVSELECT',
    publishedTime: mg4Article.publishedAt, modifiedTime: mg4Article.updatedAt,
    images: [{ url: mg4Article.image, width: 1280, height: 720, alt: mg4Article.imageAlt }],
  },
  twitter: { card: 'summary_large_image', title: mg4Article.title, description: mg4Article.description, images: [mg4Article.image] },
};

const jsonLd = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: mg4Article.title, description: mg4Article.description,
  image: `https://evselects.com${mg4Article.image}`,
  datePublished: mg4Article.publishedAt, dateModified: mg4Article.updatedAt,
  author: { '@type': 'Organization', name: 'EVSELECT', url: 'https://evselects.com/' },
  publisher: { '@type': 'Organization', name: 'EVSELECT', url: 'https://evselects.com/', logo: { '@type': 'ImageObject', url: 'https://evselects.com/logo-desktop.png' } },
  mainEntityOfPage: { '@type': 'WebPage', '@id': `https://evselects.com${mg4Article.path}` },
};

const trims = [
  { name: 'D Standard Range', note: 'เริ่มจากรุ่นนี้ หากระยะทางและอุปกรณ์ตอบโจทย์แล้ว', facts: [
    ['มอเตอร์ / ระบบขับเคลื่อน', '125 kW (170 PS) / ล้อหลัง'],
    ['แรงบิดสูงสุด', '250 Nm'], ['แบตเตอรี่', 'LFP 50 kWh'], ['ระยะตามมาตรฐาน NEDC', '450 กม.'],
    ['ล้อและยาง', '17 นิ้ว · 215/50 R17'], ['กล้อง', 'กล้องมองหลัง'], ['ลำโพง', '4 ตัว'],
  ] },
  { name: 'X Long Range', note: 'พิจารณาเมื่ออยากได้แบตเตอรี่ใหญ่ขึ้นและอุปกรณ์เพิ่ม', facts: [
    ['มอเตอร์ / ระบบขับเคลื่อน', '180 kW (245 PS) / ล้อหลัง'],
    ['แรงบิดสูงสุด', '350 Nm'], ['แบตเตอรี่', 'LFP 62.2 kWh'], ['ระยะตามมาตรฐาน NEDC', '540 กม.'],
    ['ล้อและยาง', '18 นิ้ว · 235/45 R18'], ['กล้อง', 'กล้องรอบคัน 3 มิติ'], ['ลำโพง', '6 ตัว'],
  ] },
];

export default function MG4ElectricReviewPage() {
  return <article className="mx-auto max-w-4xl bg-white px-4 py-10 text-base leading-8 text-slate-700 sm:px-6 md:py-16 lg:px-8">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
    <nav aria-label="Breadcrumb" className="mb-7"><Link href="/articles" className={`${linkStyle} inline-flex items-center gap-2 text-sm`}><ArrowLeft size={16} />บทความรถ EV</Link></nav>
    <header className="space-y-6">
      <p className="text-sm font-bold text-lime-800">คู่มือเลือกซื้อ · อ้างอิงสเปก MG ประเทศไทย</p>
      <h1 className="text-3xl font-black leading-tight text-slate-950 sm:text-4xl">{mg4Article.title}</h1>
      <p>ถ้าชอบ MG4 เพราะอยากได้รถไฟฟ้าขับหลังที่คล่องตัว คำถามต่อไปคือรุ่น D เพียงพอแล้ว หรือแบตเตอรี่และอุปกรณ์ที่เพิ่มใน X Long Range คุ้มกับเงินส่วนต่างสำหรับคุณ? เริ่มเทียบจากระยะที่ขับจริง จุดชาร์จที่ใช้ และอุปกรณ์ที่ต้องใช้ทุกวัน จะเลือกได้ง่ายกว่าดูแรงม้าหรือราคาป้ายเพียงอย่างเดียว</p>
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-500">
        <span className="inline-flex items-center gap-2"><CalendarDays size={16} />อัปเดต <time dateTime={mg4Article.updatedAt}>22 กันยายน 2569</time></span>
        <span className="inline-flex items-center gap-2"><Clock size={16} />ประมาณ {mg4Article.readTime}</span>
        <span>เรียบเรียงโดย <BrandHomeLink /></span>
      </div>
      <p className="text-sm leading-6">หน้านี้สังเคราะห์เอกสารผู้ผลิตและเสนอแนวทางทดลองรถ ไม่มีผลทดสอบขับหรือคะแนนจากทีมงาน ข้อมูลหลักครอบคลุม D Standard Range และ X Long Range รุ่นปี 2026 ในไทย</p>
      <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
        <Image src={mg4Article.image} alt={mg4Article.imageAlt} width={1280} height={720} preload sizes="(max-width: 896px) 100vw, 832px" className="h-auto w-full" />
        <figcaption className="space-y-2 p-4 text-sm leading-6">
          <p>MG4 Electric X รุ่นปี 2026 ที่เมืองทองธานี ถ่ายวันที่ 28 มีนาคม 2569 ป้ายราคาในภาพเป็นข้อมูลของวันจัดแสดง ไม่ใช่ข้อเสนอปัจจุบันหรือรถทดสอบของเรา</p>
          <p>ภาพ: <Source href={mg4Article.imageSource}>{mg4Article.imageAuthor} / Wikimedia Commons</Source> · <Source href={mg4Article.imageLicenseUrl}>{mg4Article.imageLicense}</Source> · ใช้ภาพย่อจากต้นฉบับโดยไม่รีทัช</p>
        </figcaption>
      </figure>
    </header>

    <div className="mt-10 space-y-12">
      <section className="space-y-4 rounded-2xl border border-lime-200 bg-lime-50 p-5 sm:p-7" aria-labelledby="choose-first">
        <h2 id="choose-first" className={headingStyle}>เริ่มจาก D แล้วให้เหตุผลการใช้งานพาไปถึง X</h2>
        <p>ถ้าเส้นทางประจำและโอกาสชาร์จของคุณอยู่ในขอบเขตที่ D รองรับได้สบาย รุ่นเริ่มต้นควรอยู่ในรายชื่อทดลองขับด้วย ส่วน X น่าสนใจเมื่อคุณต้องการระยะสำรองเพิ่ม กล้องรอบคัน หรืออุปกรณ์ที่ต่างกันจริง อย่าจ่ายเพิ่มจากคำว่า Long Range โดยยังไม่เทียบการเดินทางของตัวเอง</p>
        <p>นี่เป็นแนวทางตัดสินใจของ <BrandHomeLink /> ยังไม่ใช่ข้อสรุปว่ารุ่นใดคุ้มที่สุดสำหรับทุกคน ใช้ใบเสนอราคารุ่นปีเดียวกัน พร้อมรายการอุปกรณ์และเงื่อนไขรับประกันก่อนตัดสินใจ</p>
      </section>

      <section className="space-y-5" aria-labelledby="thai-specs">
        <h2 id="thai-specs" className={headingStyle}>สเปกที่ต่างกัน และเกี่ยวกับการใช้ทุกวัน</h2>
        <p>ข้อมูลต่อไปนี้อ่านจาก <Source href={mg4Sources.brochure}>ตารางสเปก MG4 MY2026 ประเทศไทย หน้า 2</Source> ใช้หน่วยกำลัง kW คู่กับ PS เพื่อไม่ปะปนกับ hp และแสดงระยะ NEDC ตามผู้ผลิต ระยะใช้งานจริงอาจต่างจากตัวเลขนี้</p>
        <div className="grid gap-5 md:grid-cols-2">
          {trims.map(trim => <div key={trim.name} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="text-xl font-bold text-slate-950">{trim.name}</h3>
            <p className="mt-2 text-sm leading-6">{trim.note}</p>
            <dl className="mt-5 divide-y divide-slate-200">{trim.facts.map(([label, value]) => <div key={label} className="py-3"><dt className="text-sm text-slate-500">{label}</dt><dd className="font-semibold text-slate-900">{value}</dd></div>)}</dl>
          </div>)}
        </div>
        <p>ทั้งสองรุ่นใช้ช่วงล่างหน้าแมคเฟอร์สันสตรัตและหลังอิสระ 5 ลิงก์ มีหน้าจอกลาง 12.8 นิ้วและช่องแอร์หลังตามโบรชัวร์ ส่วนรายการช่วยขับ เบาะ และการเชื่อมต่อมีรายละเอียดแยกรุ่น ควรเปิดตารางอุปกรณ์เทียบกับรถที่ส่งมอบ</p>
        <p>ตัวเลข 450 กับ 540 กม. ใช้มาตรฐานเดียวกัน จึงช่วยเทียบรุ่นบนกระดาษได้ แต่ไม่ได้รับรองว่าคุณจะวิ่งได้เท่านั้นทุกครั้ง ให้เผื่อสภาพทาง ความเร็ว น้ำหนักบรรทุก และจุดชาร์จที่พร้อมใช้งาน อ่านต่อเรื่อง <Link href="/articles/ev-battery-care" className={linkStyle}>การชาร์จและดูแลแบตเตอรี่ตามคู่มือรถ</Link> ก่อนนำคำแนะนำของรถรุ่นอื่นมาใช้</p>
      </section>

      <section className="space-y-4" aria-labelledby="price-and-charging">
        <h2 id="price-and-charging" className={headingStyle}>ราคาและการชาร์จ: อ่านเงื่อนไขคู่กับตัวเลข</h2>
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <h3 className="text-lg font-bold text-slate-950">ตัวอย่างข้อเสนอที่มีวันสิ้นสุด</h3>
          <p className="mt-3"><Source href={mg4Sources.promotion}>โปรโมชัน MG เดือนกันยายน 2569</Source> ระบุ D Standard Range ราคาพิเศษ 599,900 บาท จากราคาปกติ 669,900 บาท สำหรับการจองและรับรถวันที่ 1–30 กันยายน 2569 ตามเงื่อนไข ไม่ควรใช้ราคานี้อ้างอิงหลังหมดรายการโดยไม่ตรวจใหม่</p>
          <p className="mt-3">สำหรับ X Long Range ให้ขอใบเสนอราคาล่าสุดแยกจาก D แล้วเทียบยอดจ่ายจริง ดอกเบี้ย ประกัน เครื่องชาร์จและงานติดตั้ง หน้าโปรโมชันที่อ้างอิงนี้ไม่ได้ให้ราคาพิเศษ X ที่นำมาเทียบได้ตรงกัน</p>
        </div>
        <p><Source href={mg4Sources.model}>หน้ารุ่น MG4 MY2026 ของผู้ผลิต</Source> ระบุชุดแบตเตอรี่ 62.2 kWh รองรับชาร์จ DC สูงสุด 140 kW และ 10–80% ใน 26 นาทีตามเงื่อนไข ตัวเลขนี้เป็นข้อมูลผู้ผลิตของชุดดังกล่าว ไม่ใช่ผลจับเวลาของเรา และไม่ควรนำไปใส่ให้รุ่น D 50 kWh อัตโนมัติ</p>
        <p>ก่อนเลือกรุ่น ลองวางเส้นทางที่ไกลที่สุดที่คุณเดินทางบ่อย พร้อมจุดชาร์จสำรอง แล้วถามผู้จำหน่ายถึงกำลังชาร์จ AC/DC ของรุ่นย่อยและเงื่อนไขการทดสอบ ตัวเลขกำลังสูงสุดเพียงตัวเดียวไม่บอกเวลาชาร์จตลอดช่วง</p>
      </section>

      <section className="space-y-4" aria-labelledby="test-drive">
        <h2 id="test-drive" className={headingStyle}>ขับหลังกับ 5 ลิงก์น่าสนใจ แต่ต้องลองกับชีวิตจริง</h2>
        <p>MG ระบุระบบขับล้อหลังและการกระจายน้ำหนัก 50:50 เป็นจุดเด่นของรถ แต่อุปกรณ์เหล่านี้ไม่ได้พิสูจน์ว่ารถนุ่มที่สุด เกาะถนนที่สุด หรือไม่โคลง ความพอดีกับคนขับต้องดูร่วมกับยาง การตั้งรถและเส้นทางที่ใช้</p>
        <ul className="list-disc space-y-3 pl-6 marker:text-lime-700">
          <li><strong className="text-slate-950">ลองทั้งนั่งหน้าและนั่งหลัง:</strong> ผ่านรอยต่อถนนและลูกระนาดในความเร็วที่เหมาะสม ดูว่าความกระด้างหรือการขยับตัวรบกวนคุณและผู้โดยสารหรือไม่</li>
          <li><strong className="text-slate-950">ลองจอดในพื้นที่ใกล้เคียงที่ใช้จริง:</strong> เช็กทัศนวิสัย กล้อง เสา และทางขึ้นลาด โดยดูขนาดตัวรถมากกว่าคำว่าแฮทช์แบ็กเพียงอย่างเดียว</li>
          <li><strong className="text-slate-950">ลองจอกับโทรศัพท์ของตัวเอง:</strong> ทดสอบการเชื่อมต่อ แผนที่ การปรับแอร์ และกล้องถอย เพื่อประเมินความสะดวกของซอฟต์แวร์ในรถคันนั้น</li>
          <li><strong className="text-slate-950">ถามค่ายางตามขนาดจริง:</strong> D กับ X ใช้ล้อและยางต่างขนาด ให้นำค่าเปลี่ยนยางและการใช้งานมารวมในงบระยะยาว</li>
        </ul>
        <p>หากคิดจะเปลี่ยนล้อหรือช่วงล่างหลังรับรถ เริ่มจาก <Link href="/articles/ev-tyre-and-coilover-selection-guide" className={linkStyle}>หลักเลือกยางและคอยล์โอเวอร์ให้ตรงน้ำหนักและงานของรถ</Link> แล้วเก็บอาการของรถเดิมไว้เป็นจุดเปรียบเทียบก่อนซื้อชิ้นส่วนเพิ่ม</p>
      </section>

      <section className="space-y-4" aria-labelledby="model-year">
        <h2 id="model-year" className={headingStyle}>เจอ Standard, Long Range V หรือ XPOWER ในประกาศ ต้องเช็กปีด้วย</h2>
        <p>ชื่อ MG4 เดียวกันไม่ได้หมายความว่าแบตเตอรี่ มอเตอร์และอุปกรณ์จะเหมือนกันทุกปี บทความเก่าหรือประกาศรถมือสองอาจพูดถึง Standard 49 kWh, Long Range V หรือ XPOWER ซึ่งไม่ใช่สองคอลัมน์ของโบรชัวร์ MY2026 ที่ใช้ในหน้านี้</p>
        <p>โดยเฉพาะ X Long Range อย่าอ่านย่อเป็น XPOWER แล้วนำกำลังมอเตอร์หรืออัตราเร่งของรถคนละรุ่นมาปะปน ให้ยืนยันชื่อรุ่นเต็ม ปีผลิต รหัสตัวรถ และเอกสารของรถคันที่จะซื้อก่อนเทียบราคา</p>
        <p>เรื่องรับประกันก็ต้องตรงกับรถและการใช้งาน <Source href={mg4Sources.promotion}>เงื่อนไขรายการที่อ้างอิง</Source> กล่าวถึงการรับประกันตลอดอายุการใช้งานเฉพาะแบตเตอรี่แรงเคลื่อนสูง ชุดมอเตอร์ และชุดควบคุมมอเตอร์ โดยมีข้อยกเว้นรถนิติบุคคลและการใช้เชิงพาณิชย์ตามเงื่อนไขหลังการขาย ไม่ได้แปลว่าทุกชิ้นส่วนรับประกันตลอดชีพ</p>
      </section>

      <section className="space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-7" aria-labelledby="evidence">
        <h2 id="evidence" className={headingStyle}>ข้อมูลที่ใช้ และสิ่งที่เรายังไม่ได้ทดสอบ</h2>
        <p><BrandHomeLink /> ตรวจเอกสารข้างต้นวันที่ 22 กันยายน 2569 สเปก ราคาและเงื่อนไขต้องตรวจซ้ำก่อนซื้อ ข้อมูลผลขับจริง การใช้พลังงาน เสียงในห้องโดยสาร ระยะเบรก และคะแนนเปรียบเทียบจากทีมงานยังเป็น Data unavailable จึงไม่ให้คะแนนหรือเขียนประสบการณ์ทดสอบแทนข้อมูลที่ไม่มี</p>
        <ul className="list-disc space-y-3 pl-6">
          <li><Source href={mg4Sources.model}>MG ประเทศไทย — MG4 MY2026 และคำอธิบายระบบของรถ</Source></li>
          <li><Source href={mg4Sources.brochure}>โบรชัวร์ผู้ผลิต — ตาราง D Standard Range / X Long Range หน้า 2 (PDF)</Source></li>
          <li><Source href={mg4Sources.promotion}>MG — โปรโมชันวันที่ 1–30 กันยายน 2569 และข้อยกเว้นรับประกัน</Source></li>
        </ul>
      </section>

      <section className="space-y-4" aria-labelledby="next-step">
        <h2 id="next-step" className={headingStyle}>ก่อนจอง ให้ได้คำตอบว่ารุ่นไหนเหมาะกับคุณ</h2>
        <p>ขอทดลองรถรุ่นย่อยที่สนใจ เทียบรายการส่งมอบ และใช้ใบเสนอราคาชุดเดียวกันคุยเรื่องค่าใช้จ่าย หาก D ตอบงานครบอยู่แล้ว ความประหยัดส่วนต่างมีความหมาย แต่ถ้าระยะสำรองและอุปกรณ์ของ X ช่วยการเดินทางของคุณจริง นั่นคือเหตุผลที่ชัดเจนกว่าเลือกจากรุ่นท็อปเพียงอย่างเดียว</p>
        <div className="rounded-2xl border border-lime-200 bg-lime-50 p-5">
          <h3 className="text-lg font-bold text-slate-950">อุปกรณ์เสริมของเราอยู่ระหว่างเตรียมเปิดตัว</h3>
          <p className="mt-2"><BrandHomeLink /> ยังไม่มีสินค้าพร้อมจำหน่าย และยังไม่เปิดรับคำสั่งซื้อหรือชำระเงิน หากกำลังหาข้อมูลอุปกรณ์ ให้ระบุรุ่นย่อยและปีรถเพื่อช่วยแยกความต้องการได้ตรงขึ้น</p>
          <Link href="/contact" className={`${linkStyle} mt-3 inline-flex min-h-11 items-center gap-2`}>บอกรุ่นรถและสิ่งที่กำลังหา<ArrowRight size={16} /></Link>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-6">
          <Link href="/articles" className={linkStyle}>อ่านบทความ EV เรื่องอื่น</Link>
          <ShareButton title={mg4Article.title} />
        </div>
      </section>
    </div>
  </article>;
}
