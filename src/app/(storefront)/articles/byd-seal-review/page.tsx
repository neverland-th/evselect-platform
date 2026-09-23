import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CalendarDays, Clock } from 'lucide-react';
import BrandHomeLink from '@/components/BrandHomeLink';
import { sealArticle as article, sealSources as sources } from '@/lib/seal-article';

const linkStyle = 'font-semibold text-lime-800 underline underline-offset-4 decoration-lime-500 hover:text-lime-950 focus-visible:outline-2 focus-visible:outline-offset-4';
const headingStyle = 'text-xl font-bold leading-snug text-slate-950 sm:text-2xl';
function Source({ href, children }: { href: string; children: ReactNode }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" className={linkStyle}>{children}<span className="sr-only"> (เปิดแท็บใหม่)</span></a>;
}
export const metadata: Metadata = {
  title: article.title + ' | EVSELECT', description: article.description,
  alternates: { canonical: article.path },
  openGraph: { title: article.title, description: article.description, url: 'https://evselects.com' + article.path, type: 'article', locale: 'th_TH', siteName: 'EVSELECT', publishedTime: article.publishedAt, modifiedTime: article.updatedAt, images: [{ url: article.image, width: 1280, height: 960, alt: article.imageAlt }] },
  twitter: { card: 'summary_large_image', title: article.title, description: article.description, images: [article.image] },
};
const jsonLd = {
  '@context': 'https://schema.org', '@type': 'Article', headline: article.title, description: article.description,
  image: 'https://evselects.com' + article.image, datePublished: article.publishedAt, dateModified: article.updatedAt,
  author: { '@type': 'Organization', name: 'EVSELECT', url: 'https://evselects.com/' },
  publisher: { '@type': 'Organization', name: 'EVSELECT', url: 'https://evselects.com/', logo: { '@type': 'ImageObject', url: 'https://evselects.com/logo-desktop.png' } },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://evselects.com' + article.path },
};

export default function SealArticlePage() {
  const rows = [
    ['ระบบขับเคลื่อน', 'ล้อหลัง', 'ล้อหลัง', '4 ล้อ'],
    ['กำลังสูงสุด', '150 kW', '230 kW', '390 kW'],
    ['แรงบิดสูงสุด', '310 Nm', '360 Nm', '670 Nm'],
    ['0–100 กม./ชม. ตามผู้ผลิต', '7.5 วินาที', '5.9 วินาที', '3.8 วินาที'],
    ['แบตเตอรี่ Blade Battery', '61.44 kWh', '82.56 kWh', '82.56 kWh'],
    ['ระยะตามมาตรฐาน NEDC', '510 กม.', '650 กม.', '580 กม.'],
    ['ชาร์จ DC CCS2 สูงสุด', '110 kW', '150 kW', '150 kW'],
    ['น้ำหนักรถเปล่า', '1,922 กก.', '2,055 กก.', '2,185 กก.'],
    ['ขนาดยาง', '225/50 R18', '235/45 R19', '235/45 R19'],
    ['โช้คอัพ FSD ตามตารางไทย', 'ไม่มีระบุ', 'ไม่มีระบุ', 'หน้าและหลัง'],
  ];
  return <article className="mx-auto max-w-4xl bg-white px-4 py-10 text-base leading-8 text-slate-700 sm:px-6 md:py-16 lg:px-8">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
    <nav aria-label="Breadcrumb" className="mb-7"><Link href="/articles" className={linkStyle + ' inline-flex items-center gap-2 text-sm'}><ArrowLeft size={16} />บทความและคู่มือรถ EV</Link></nav>
    <header className="space-y-6">
      <p className="text-sm font-bold text-lime-800">คู่มือเลือกซื้อ · BYD Seal ประเทศไทย</p>
      <h1 className="text-3xl font-black leading-tight text-slate-950 sm:text-4xl" style={{ textWrap: 'balance' }}>{article.title}</h1>
      <p>Seal รุ่นที่เร่งเร็วที่สุด ไม่ใช่รุ่นที่มีตัวเลขระยะทางมากที่สุด Premium กับ AWD Performance ใช้แบตเตอรี่ความจุเท่ากัน แต่ให้คนละจุดเด่น: รุ่นหนึ่งเน้นระยะตามมาตรฐาน อีกรุ่นเพิ่มกำลังและขับเคลื่อนสี่ล้อ ก่อนจ่ายส่วนต่าง ลองเริ่มจากว่าคุณอยากได้อะไรเพิ่มจากรถคันใหม่ แล้วค่อยดูว่า Dynamic ที่เป็นรุ่นเริ่มต้นตอบโจทย์นั้นพอหรือยัง</p>
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-500">
        <span className="inline-flex items-center gap-2"><CalendarDays size={16} />อัปเดต <time dateTime={article.updatedAt}>23 กันยายน 2569</time></span>
        <span className="inline-flex items-center gap-2"><Clock size={16} />ประมาณ {article.readTime}</span>
        <span>เรียบเรียงโดย <BrandHomeLink /></span>
      </div>
      <p className="border-l-4 border-lime-400 pl-4 text-sm leading-6">บทนี้อ้างอิง <Source href={sources.model}>สเปก BYD Seal ของ RÊVER ประเทศไทย</Source> ในชุดรุ่น Dynamic, Premium และ AWD Performance ไม่รวม Seal 6 หรือ Seal 5 DM-i และไม่ยกสเปกรถปรับโฉมต่างประเทศมาใช้ ตัวเลขเป็นข้อมูลผู้ผลิต ทีมงานยังไม่มีผลทดสอบระยะวิ่ง ระยะเบรก หรือเสียงในห้องโดยสารของทั้งสามรุ่นมาเทียบกัน</p>
    </header>

    <figure className="my-9 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
      <Image src={article.image} alt={article.imageAlt} width={1280} height={960} sizes="(max-width: 896px) 100vw, 832px" className="h-auto w-full" priority />
      <figcaption className="p-4 text-sm leading-6">Seal Premium ที่โชว์รูมในขอนแก่น ปี 2023 ภาพประกอบตัวรถและล้อ ป้ายในภาพเป็นข้อมูลวันจัดแสดง ไม่ใช่ข้อเสนอขายปัจจุบัน ภาพ: <Source href={article.imageSource}>{article.imageAuthor}</Source> · <Source href={article.imageLicenseUrl}>{article.imageLicense}</Source> · ภาพย่อจาก Wikimedia Commons</figcaption>
    </figure>

    <div className="space-y-12">
      <section className="space-y-5" aria-labelledby="trim-specs">
        <h2 id="trim-specs" className={headingStyle}>สามรุ่นต่างกันตรงไหน?</h2>
        <p>อ่านตารางนี้โดยเทียบรุ่นเดียวกันตลอดทั้งคอลัมน์ โดยเฉพาะระยะทางและอัตราเร่ง เพราะตัวเลขเด่นที่สุดแต่ละรายการไม่ได้อยู่ในรถรุ่นเดียวกันทั้งหมด</p>
        <p className="text-sm text-slate-500 sm:hidden">เลื่อนตารางซ้าย–ขวาเพื่อดูครบทั้งสามรุ่น</p>
        <div role="region" aria-label="ตารางเปรียบเทียบ BYD Seal สามรุ่น เลื่อนแนวนอนได้" tabIndex={0} className="overflow-x-auto rounded-2xl border border-slate-200 focus-visible:outline-2 focus-visible:outline-lime-700">
          <table className="w-full min-w-[660px] table-fixed text-left text-sm leading-6">
            <caption className="bg-slate-50 p-4 text-left font-semibold text-slate-950">สเปกไทยจาก RÊVER · ตรวจข้อมูล 23 กันยายน 2569</caption>
            <thead className="bg-slate-950 text-white"><tr><th scope="col" className="w-[30%] p-3">รายการ</th><th scope="col" className="p-3">Dynamic</th><th scope="col" className="p-3">Premium</th><th scope="col" className="p-3">AWD Performance</th></tr></thead>
            <tbody>{rows.map(([label, ...values]) => <tr key={label} className="border-t border-slate-200 even:bg-slate-50"><th scope="row" className="p-3 font-semibold text-slate-950">{label}</th>{values.map((value, index) => <td key={index} className="p-3 align-top">{value}</td>)}</tr>)}</tbody>
          </table>
        </div>
        <p>ตัวเลขกำลังใช้ kW ตามผู้ผลิต เพื่อไม่ปนหน่วย hp กับ PS ส่วนระยะ NEDC เป็นผลตามมาตรฐาน ไม่ใช่ระยะทางที่รับประกันว่าจะขับได้ทุกครั้ง อ่าน <Link href="/articles/ev-horsepower-vs-torque-explained" className={linkStyle}>แรงม้ากับแรงบิดของรถ EV</Link> เพื่อเข้าใจว่าตัวเลขเหล่านี้เกี่ยวกับความรู้สึกขับอย่างไร</p>
      </section>

      <section className="space-y-5" aria-labelledby="which-trim">
        <h2 id="which-trim" className={headingStyle}>Premium หรือ AWD: คุณใช้ส่วนต่างตรงไหน?</h2>
        <h3 className="text-lg font-bold text-slate-950">เริ่มจากเส้นทางและการชาร์จของคุณ</h3>
        <p>ถ้ากำลังมอง Seal เพื่อเดินทางไกล Premium มีระยะ NEDC สูงที่สุดในชุดนี้ที่ 650 กม. ส่วน AWD อยู่ที่ 580 กม. แม้ความจุแบตเตอรี่เท่ากันที่ 82.56 kWh ข้อสังเกตนี้ช่วยเลือกคันที่จะทดลองขับ แต่ยังใช้คำนวณว่าคุณจะประหยัดเวลาชาร์จจริงเท่าไรไม่ได้</p>
        <p>Dynamic ใช้แบตเตอรี่ 61.44 kWh และมีระยะ NEDC 510 กม. ให้ลองวางแผนจากระยะประจำวัน จุดชาร์จที่บ้านหรือที่ทำงาน และทริปที่ไกลที่สุดของคุณ หากเงื่อนไขเหล่านั้นลงตัวแล้ว ค่อยเทียบราคาสุทธิและอุปกรณ์กับ Premium ไม่จำเป็นต้องเลือกรุ่นแบตใหญ่ที่สุดโดยอัตโนมัติ</p>
        <h3 className="text-lg font-bold text-slate-950">เลือก AWD เมื่อให้ความสำคัญกับสมรรถนะเพิ่ม</h3>
        <p>AWD Performance เพิ่มกำลังสูงสุดเป็น 390 kW และอัตราเร่งตามผู้ผลิต 3.8 วินาที พร้อมขับเคลื่อนสี่ล้อและโช้ค FSD หน้า–หลัง ขณะเดียวกันน้ำหนักรถเปล่าสูงกว่า Premium 130 กก. จึงควรทดลองความถนัดในการใช้คันเร่งและความสบายของผู้โดยสาร ก่อนตัดสินจากอัตราเร่งเพียงอย่างเดียว</p>
        <p>สำหรับการชาร์จระหว่างทาง ตารางระบุ DC สูงสุด 110 kW ใน Dynamic และ 150 kW ในอีกสองรุ่น กำลังสูงสุดไม่ได้คงอยู่ตลอดการชาร์จ บทนี้จึงไม่แปลงตัวเลขเหล่านี้เป็นเวลาชาร์จ 10–80% โดยไม่มีกราฟหรือเงื่อนไขทดสอบรองรับ ส่วนการชาร์จประจำวันให้อ่านคู่มือรถควบคู่กับ <Link href="/articles/ev-battery-care" className={linkStyle}>แนวทางดูแลแบตเตอรี่ EV</Link></p>
      </section>

      <section className="space-y-5" aria-labelledby="ride-tyres">
        <h2 id="ride-tyres" className={headingStyle}>FSD และล้อ 19 นิ้ว บอกอะไรได้บ้าง?</h2>
        <p>ทั้งสามรุ่นใช้ช่วงล่างหน้าปีกนกคู่และหลังมัลติลิงค์ แต่ตารางไทยระบุ FSD เฉพาะ AWD Performance จึงไม่ควรเรียกทุก Seal ว่าได้โช้คชุดเดียวกัน และชื่อระบบช่วงล่างอย่างเดียวก็ยังสรุปไม่ได้ว่ารุ่นไหนจะนุ่มกว่าสำหรับคุณ</p>
        <p>FSD คือแนวทางให้แรงหน่วงของโช้คตอบสนองตามความถี่การเคลื่อนไหว ไม่ใช่ชื่อระบบขับอัตโนมัติ อ่านเรื่อง <Link href="/articles/shock-absorber-types-monotube-twintube-air-ev" className={linkStyle}>ประเภทโช้คอัพและระบบควบคุมแรงหน่วง</Link> เพื่อแยกโครงสร้างโช้คออกจากวิธีควบคุม ก่อนนำศัพท์แต่ละระบบมาเทียบกัน</p>
        <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
          <Image src={article.awdImage} alt="BYD Seal AWD Performance สีดำในโชว์รูมขอนแก่น ปี 2023 เห็นด้านหน้าและล้อ" width={1280} height={960} sizes="(max-width: 896px) 100vw, 832px" className="h-auto w-full" />
          <figcaption className="p-4 text-sm leading-6">Seal AWD Performance ในประเทศไทย ปี 2023 ใช้ดูรูปทรงตัวรถและล้อ ไม่ใช่ภาพทดสอบช่วงล่างหรือหลักฐานพิกัดรับน้ำหนักยาง ภาพ: <Source href={article.awdImageSource}>{article.imageAuthor}</Source> · <Source href={article.imageLicenseUrl}>{article.imageLicense}</Source> · ภาพย่อจาก Wikimedia Commons</figcaption>
        </figure>
        <p>Dynamic ระบุยาง 225/50 R18 ส่วน Premium และ AWD ใช้ 235/45 R19 หากจะเปลี่ยนยาง ให้ตรวจขนาด ดัชนีรับน้ำหนัก ดัชนีความเร็ว และแรงดันตามข้อกำหนดของรถคันนั้น อ่าน <Link href="/articles/ev-tyre-and-coilover-selection-guide" className={linkStyle}>การเลือกยางให้เหมาะกับน้ำหนักและกำลังรถ EV</Link> แทนการเลือกจากความกว้างหรือลายดอกยางอย่างเดียว</p>
        <p>ตอนทดลองขับให้ใช้เส้นทางใกล้เคียงชีวิตประจำวัน และพาคนที่นั่งด้วยไปลอง ให้แยกว่าปัญหาคือกระแทกตอนผ่านรอยต่อ หรือรถยังโคลงหลังผ่านไปแล้ว ข้อมูลนี้มีประโยชน์กว่าคำว่า “แข็ง” คำเดียว โดยไม่ต้องตั้งค่าโช้คหรือโหลดรถตามสูตรทั่วไป</p>
      </section>

      <section className="space-y-5" aria-labelledby="daily-use">
        <h2 id="daily-use" className={headingStyle}>สิ่งที่ควรลองให้ครบก่อนรับใบเสนอราคา</h2>
        <p><strong>ท่านั่งและการขึ้นลง:</strong> ปรับเบาะหน้าเป็นท่าขับจริง แล้วให้ผู้โดยสารประจำนั่งหลัง ตรวจพื้นที่ศีรษะ ตำแหน่งเท้า และการเข้าออก หากใช้คาร์ซีตหรือมีผู้สูงอายุเดินทางด้วย ควรลองกับการใช้งานนั้นโดยตรง แทนการตัดสินจากขนาดตัวถัง</p>
        <p><strong>ทางลาดและสัมภาระ:</strong> ผู้ผลิตระบุความสูงใต้ท้องรถ 120 มม. และที่เก็บของท้ายรถ 400 ลิตร ตัวเลขแรกไม่รับรองว่าจะผ่านทางลาดบ้านคุณได้ทุกสภาพบรรทุก และตัวเลขลิตรไม่บอกว่ากระเป๋าหรือรถเข็นจะผ่านช่องเปิดท้ายรถหรือไม่ ให้ตรวจของจริงอย่างปลอดภัย</p>
        <p><strong>ความสบายและการใช้งานจอ:</strong> ลองรถช่วงเวลาที่คุณใช้ประจำ ปรับแอร์ ตำแหน่งเบาะ และหน้าจอด้วยตัวเองก่อนออกเดินทาง ถ้ามีประเด็นเรื่องความร้อนจากหลังคาหรือเสียงยาง ให้จดเงื่อนไขที่พบ ไม่เหมารวมว่าต้องซื้ออุปกรณ์เสริมก่อนรับรถทุกคัน</p>
        <p><strong>ราคาและรับประกัน:</strong> ยังไม่มีข้อมูลราคาสุทธิและแพ็กเกจรับประกันปัจจุบันที่ยืนยันครบเงื่อนไขสำหรับรถแต่ละคัน — <strong>Data unavailable</strong> ขอใบเสนอราคาที่ระบุปีผลิต รุ่นย่อย เงื่อนไขซื้อ และวันหมดอายุ พร้อมเอกสารรับประกันตัวรถ แบตเตอรี่ และระบบขับเคลื่อนแยกกัน อย่าใช้ราคาแคมเปญเก่าหรือรวมทุกชิ้นเป็นระยะรับประกันเดียว</p>
      </section>

      <section className="space-y-5" aria-labelledby="next-step">
        <h2 id="next-step" className={headingStyle}>เลือกคันที่จะลอง แล้วค่อยตัดสินความคุ้มค่า</h2>
        <p>เริ่มที่ Dynamic หากอยากดูว่า Seal รุ่นพื้นฐานเพียงพอกับเส้นทางหรือไม่ เพิ่ม Premium ในการเปรียบเทียบเมื่อให้ความสำคัญกับระยะตามมาตรฐาน และลอง AWD Performance เมื่อสมรรถนะที่เพิ่มขึ้นเป็นสิ่งที่คุณต้องการใช้จริง นี่เป็นแนวทางเลือกทดลองขับ ยังไม่ใช่คำตัดสินความคุ้มค่าแทนราคาและประสบการณ์ของคุณ</p>
        <p>แหล่งสเปกหลัก: <Source href={sources.model}>ตารางเทคนิค BYD Seal ประเทศไทยจาก RÊVER</Source> ตรวจชื่อรุ่นและอุปกรณ์อีกครั้งกับเอกสารรถที่จะซื้อ หากเปรียบเทียบซีดานอีกค่าย อ่านต่อที่ <Link href="/articles/tesla-model-3-highland-review" className={linkStyle}>Tesla Model 3 สเปกไทยและความต่างของแต่ละรุ่น</Link> โดยเทียบมาตรฐานระยะทางและเงื่อนไขราคาให้ตรงกัน</p>
      </section>
    </div>
    <aside className="mt-12 rounded-2xl border border-lime-200 bg-lime-50 p-5 text-sm leading-7"><BrandHomeLink /> เปิดความรู้ก่อน เปิดขายเมื่อข้อมูลพร้อม ขณะนี้ยังไม่มีสินค้าพร้อมจำหน่าย และยังไม่เปิดรับคำสั่งซื้อหรือชำระเงิน</aside>
    <div className="mt-8"><Link href="/articles" className={linkStyle}>กลับไปเลือกอ่านบทความและคู่มือรถ EV</Link></div>
  </article>;
}
