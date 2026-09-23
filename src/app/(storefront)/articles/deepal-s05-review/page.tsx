import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CalendarDays, Clock } from 'lucide-react';
import BrandHomeLink from '@/components/BrandHomeLink';
import { deepalS05Article as article, deepalS05Sources as sources } from '@/lib/deepal-s05-article';

const linkStyle = 'font-semibold text-lime-800 underline underline-offset-4 decoration-lime-500 hover:text-lime-950 focus-visible:outline-2 focus-visible:outline-offset-4';
const headingStyle = 'text-xl font-bold leading-snug text-slate-950 sm:text-2xl';
function Source({ href, children }: { href: string; children: ReactNode }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" className={linkStyle}>{children}<span className="sr-only"> (เปิดแท็บใหม่)</span></a>;
}
export const metadata: Metadata = {
  title: article.title + ' | EVSELECT', description: article.description,
  alternates: { canonical: article.path },
  openGraph: { title: article.title, description: article.description, url: 'https://evselects.com' + article.path, type: 'article', locale: 'th_TH', siteName: 'EVSELECT', publishedTime: article.publishedAt, modifiedTime: article.updatedAt, images: [{ url: article.image, width: 1280, height: 720, alt: article.imageAlt }] },
  twitter: { card: 'summary_large_image', title: article.title, description: article.description, images: [article.image] },
};
const jsonLd = {
  '@context': 'https://schema.org', '@type': 'Article', headline: article.title, description: article.description,
  image: 'https://evselects.com' + article.image, datePublished: article.publishedAt, dateModified: article.updatedAt,
  author: { '@type': 'Organization', name: 'EVSELECT', url: 'https://evselects.com/' },
  publisher: { '@type': 'Organization', name: 'EVSELECT', url: 'https://evselects.com/', logo: { '@type': 'ImageObject', url: 'https://evselects.com/logo-desktop.png' } },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://evselects.com' + article.path },
};

export default function DeepalS05ArticlePage() {
  const rows = [
    ['กำลังมอเตอร์สูงสุด', '175 kW', '200 kW', '200 kW', '160 kW'],
    ['แรงบิดมอเตอร์สูงสุด', '320 Nm', '290 Nm', '290 Nm', '320 Nm'],
    ['0–100 กม./ชม. ตามผู้ผลิต', '7.3 วินาที', '6.28 วินาที', '6.48 วินาที', '7.9 วินาที'],
    ['ความจุแบตเตอรี่ LFP', '56.12 kWh', '56.12 kWh', '68.82 kWh', '27.28 kWh'],
    ['ระยะด้วยไฟฟ้า NEDC', '470 กม.', '470 กม.', '560 กม.', '170 กม.'],
    ['ชาร์จ DC สูงสุด', '151.5 kW', '151.5 kW', '200 kW', '54.5 kW'],
    ['ชาร์จ DC 30–80% ตามผู้ผลิต', '15 นาที', '15 นาที', '15 นาที', '20 นาที'],
    ['ขนาดยาง', '225/60 R18', '225/60 R18', '245/45 R20', '225/60 R18'],
  ];
  return <article className="mx-auto max-w-4xl bg-white px-4 py-10 text-base leading-8 text-slate-700 sm:px-6 md:py-16 lg:px-8">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
    <nav aria-label="Breadcrumb" className="mb-7"><Link href="/articles" className={linkStyle + ' inline-flex items-center gap-2 text-sm'}><ArrowLeft size={16} />บทความและคู่มือรถ EV</Link></nav>
    <header className="space-y-6">
      <p className="text-sm font-bold text-lime-800">คู่มือเลือกซื้อ · Deepal S05 ประเทศไทย</p>
      <h1 className="text-3xl font-black leading-tight text-slate-950 sm:text-4xl" style={{ textWrap: 'balance' }}>{article.title}</h1>
      <p>ชอบ S05 แต่ยังไม่รู้จะเลือกรุ่นไหน? เริ่มจากชีวิตหลังรับรถก่อน: คุณเสียบชาร์จได้ที่ไหน และเดินทางแบบไหนบ่อยที่สุด เพราะ S05 มีทั้งไฟฟ้าล้วน BEV และ REEV ที่เพิ่มเครื่องยนต์สำหรับผลิตไฟฟ้า หน้าตาใกล้กัน แต่แบตเตอรี่ การชาร์จ และพื้นที่เก็บของหน้าไม่เหมือนกัน ส่วนต่างที่คุ้มสำหรับคนหนึ่งอาจเป็นอุปกรณ์ที่อีกคนแทบไม่ได้ใช้</p>
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-500">
        <span className="inline-flex items-center gap-2"><CalendarDays size={16} />อัปเดต <time dateTime={article.updatedAt}>23 กันยายน 2569</time></span>
        <span className="inline-flex items-center gap-2"><Clock size={16} />ประมาณ {article.readTime}</span>
        <span>เรียบเรียงโดย <BrandHomeLink /></span>
      </div>
      <p className="border-l-4 border-lime-400 pl-4 text-sm leading-6">อ้างอิง <Source href={sources.brochure}>โบรชัวร์ Deepal S05 ประเทศไทย</Source> ที่ลิงก์จาก <Source href={sources.model}>หน้า S05 ของ CHANGAN</Source> ณ วันที่ตรวจข้อมูล บทนี้เป็นคู่มืออ่านสเปก ไม่ใช่ผลทดลองขับของทีมงาน กำลังมอเตอร์ของ Plus/Max ในเอกสารปัจจุบันต่างจากโบรชัวร์เก่า จึงควรตรวจปีผลิต รุ่นย่อยและสเปกของรถคันที่จะรับเป็นลายลักษณ์อักษร</p>
    </header>

    <figure className="my-9 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
      <Image src={article.image} alt={article.imageAlt} width={1280} height={720} sizes="(max-width: 896px) 100vw, 832px" className="h-auto w-full" priority />
      <figcaption className="p-4 text-sm leading-6">S05 Max ในงานแสดงรถที่เมืองทองธานี ปี 2025 ใช้ประกอบรูปทรงตัวรถ ป้ายราคาและสเปกบนกระจกเป็นข้อมูลวันจัดแสดง ไม่ใช่ข้อเสนอปัจจุบัน ภาพ: <Source href={article.imageSource}>{article.imageAuthor}</Source> · <Source href={article.imageLicenseUrl}>{article.imageLicense}</Source> · ภาพย่อจาก Wikimedia Commons</figcaption>
    </figure>

    <div className="space-y-12">
      <section className="space-y-5" aria-labelledby="bev-or-reev">
        <h2 id="bev-or-reev" className={headingStyle}>เริ่มที่ BEV หรือ REEV ก่อนเลือกรุ่นย่อย</h2>
        <p><strong>BEV — ไฟฟ้าล้วน:</strong> มี Lite, Plus, Max และ Max Long Range เหมาะจะเริ่มพิจารณาเมื่อคุณมีแผนชาร์จที่ใช้ได้จริง ทั้งวันทำงานและวันที่เดินทางไกล รุ่น Max Long Range เพิ่มแบตเตอรี่และตัวเลขระยะตามมาตรฐาน แต่ไม่ได้แปลว่าต้องเลือกแบตใหญ่ที่สุดเสมอไป ลองเทียบกับระยะที่คุณใช้ต่อวันและจุดชาร์จที่สะดวกก่อน</p>
        <p><strong>REEV — ใช้มอเตอร์ขับเคลื่อนและมีเครื่องยนต์ผลิตไฟฟ้า:</strong> มี REEV Plus และ REEV Max ตาม <Source href={sources.reev}>ข้อมูล S05 REEV ของ CHANGAN</Source> ทั้งคู่มีแบตเตอรี่ 27.28 kWh และเครื่องยนต์ Range Extender 1,497 ซีซี จึงมีทั้งเรื่องชาร์จไฟ เติมน้ำมัน และดูแลเครื่องยนต์ให้คิดร่วมกัน ผู้ที่สนใจควรขอตารางบำรุงรักษาและลองการทำงานตอนเครื่องยนต์ติดด้วย</p>
        <p>ช่องเก็บของใต้ฝากระโปรงหน้า 159 ลิตรที่เห็นในข้อมูล S05 ระบุเฉพาะกลุ่ม BEV ในโบรชัวร์ไทย ไม่ใช่อุปกรณ์ของ REEV ถ้าคุณเลือกรถเพราะพื้นที่เก็บของส่วนนี้ ให้เปิดดูรถรุ่นที่จะซื้อจริง และอย่าใช้ภาพรวมของชื่อ S05 แทนรายการอุปกรณ์</p>
        <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
          <Image src={article.reevImage} alt="Deepal S05 Max REEV สีขาวในงานแสดงรถที่เมืองทองธานี ปี 2025 เห็นป้าย REEV บนกระจกหน้า" width={1280} height={960} sizes="(max-width: 896px) 100vw, 832px" className="h-auto w-full" />
          <figcaption className="p-4 text-sm leading-6">S05 Max REEV จัดแสดงในไทย ปี 2025 ภายนอกคล้าย BEV จึงควรตรวจชื่อรุ่นกับเอกสาร ไม่ใช้ภาพตัดสินระบบขับเคลื่อน ป้ายราคาและข้อความบนกระจกเป็นข้อมูลในเวลานั้น ภาพ: <Source href={article.reevImageSource}>{article.imageAuthor}</Source> · <Source href={article.imageLicenseUrl}>{article.imageLicense}</Source> · ภาพย่อจาก Wikimedia Commons</figcaption>
        </figure>
      </section>

      <section className="space-y-5" aria-labelledby="thai-specs">
        <h2 id="thai-specs" className={headingStyle}>เทียบสเปกหลัก โดยไม่ปนตัวเลขคนละรุ่น</h2>
        <p>ทั้งหกรุ่นใช้มอเตอร์ขับเคลื่อนล้อหลังและแบตเตอรี่ LFP ตารางนี้รวม Plus กับ Max เฉพาะตัวเลขที่เหมือนกัน ส่วนอุปกรณ์ในห้องโดยสารยังต่างกัน ระยะของ REEV ในแถว NEDC คือระยะด้วยไฟฟ้า ไม่ใช่ระยะรวมเมื่อใช้น้ำมันด้วย</p>
        <p className="text-sm text-slate-500 sm:hidden">เลื่อนตารางซ้าย–ขวาเพื่อดูทั้งกลุ่ม BEV และ REEV</p>
        <div role="region" aria-label="ตารางสเปก Deepal S05 BEV และ REEV เลื่อนแนวนอนได้" tabIndex={0} className="overflow-x-auto rounded-2xl border border-slate-200 focus-visible:outline-2 focus-visible:outline-lime-700">
          <table className="w-full min-w-[760px] table-fixed text-left text-sm leading-6">
            <caption className="bg-slate-50 p-4 text-left font-semibold text-slate-950">ข้อมูลผู้ผลิตในโบรชัวร์ไทย · ตรวจ 23 กันยายน 2569</caption>
            <thead className="bg-slate-950 text-white"><tr><th scope="col" className="w-[28%] p-3">รายการ</th><th scope="col" className="p-3">BEV Lite</th><th scope="col" className="p-3">BEV Plus / Max</th><th scope="col" className="p-3">BEV Max Long Range</th><th scope="col" className="p-3">REEV Plus / Max</th></tr></thead>
            <tbody>{rows.map(([label, ...values]) => <tr key={label} className="border-t border-slate-200 even:bg-slate-50"><th scope="row" className="p-3 font-semibold text-slate-950">{label}</th>{values.map((value, index) => <td key={index} className="p-3 align-top">{value}</td>)}</tr>)}</tbody>
          </table>
        </div>
        <p>กำลังใช้หน่วย kW ตามตารางผู้ผลิต เพื่อไม่ปน hp กับ PS และไม่บวกกำลังเครื่องยนต์ผลิตไฟเข้ากับกำลังมอเตอร์ของ REEV ส่วนแรงบิดมากกว่าไม่ได้แปลว่าเร่งเร็วกว่าเสมอ หากสงสัยว่าทำไม Lite มี 320 Nm แต่ Plus/Max มี 290 Nm และตัวเลข 0–100 เร็วกว่า อ่าน <Link href="/articles/ev-horsepower-vs-torque-explained" className={linkStyle}>ความสัมพันธ์ของแรงม้า แรงบิด และอัตราเร่ง</Link> ต่อได้</p>
        <p>ระยะ NEDC ใช้เป็นข้อมูลเทียบภายใต้มาตรฐาน ไม่ใช่ระยะใช้งานที่รับประกัน ความเร็ว สภาพอากาศ เส้นทางและน้ำหนักบรรทุกมีผล บทนี้ยังไม่มีผลทดสอบระยะวิ่งจริงของแต่ละรุ่นมาใช้แทนตัวเลขผู้ผลิต</p>
      </section>

      <section className="space-y-5" aria-labelledby="equipment">
        <h2 id="equipment" className={headingStyle}>อุปกรณ์ที่ควรลองด้วยตัวเองก่อนจ่ายส่วนต่าง</h2>
        <p>จอกลางขนาด 15.4 นิ้วมีทุกคัน แต่แบบ Sunflower ที่ปรับเอียงได้อยู่ใน Max, Max Long Range และ REEV Max เช่นเดียวกับลำโพง 14 ตำแหน่ง หลังคากระจกพร้อมม่านไฟฟ้า และเบาะหน้าที่มีระบบระบายความร้อนกับอุ่นเบาะ ส่วน Lite, Plus และ REEV Plus ระบุลำโพง 8 ตำแหน่ง</p>
        <p>Lite ไม่มีระบบแสดงข้อมูลบนกระจกหน้า AR-HUD ตามตาราง ขณะที่รุ่นอื่นมี ถ้าคุณให้ความสำคัญกับการมองความเร็วและนำทาง ลองปรับท่านั่งจริงแล้วตรวจว่ามองข้อมูลได้ชัดและใช้งานถนัดก่อนตัดสินใจ</p>
        <p>ระบบเตือนมุมอับสายตา BSD ระบุใน Max, Max Long Range และ REEV Max อย่าเหมาว่าระบบช่วยขับมีเท่ากันทุกรุ่น ให้ขอรายการอุปกรณ์รุ่นย่อยควบคู่กับคู่มือการใช้งาน และให้พนักงานอธิบายข้อจำกัดโดยไม่ลองสร้างสถานการณ์เสี่ยงบนถนน</p>
        <p>คลิปต่างประเทศหรือภาพโปรโมตอาจมีอุปกรณ์ที่รถไทยคันนั้นไม่มี เช่นเดียวกับรูปที่ใช้ในบทนี้ซึ่งถ่ายปี 2025 รายการส่งมอบและรถจริงจึงเป็นสิ่งที่ควรตรวจขั้นสุดท้าย</p>
      </section>

      <section className="space-y-5" aria-labelledby="charging-wheels">
        <h2 id="charging-wheels" className={headingStyle}>ชาร์จ 15 นาที และล้อ 20 นิ้ว ต้องอ่านเงื่อนไขให้ครบ</h2>
        <p><strong>15 นาทีหมายถึง DC 30–80% ในรุ่น BEV:</strong> ไม่ใช่ 0–100% และไม่ใช่เวลาที่ทุกตู้จะทำได้ รุ่น REEV ระบุ 20 นาทีในช่วงเดียวกัน ส่วน AC สูงสุด 7 kW เท่ากันทั้งหกรุ่น กำลังสูงสุดของรถและตู้ไม่ใช่กำลังที่คงที่ตลอดการชาร์จ ควรเผื่อเวลาใช้งานจริงไว้ด้วย</p>
        <p>ก่อนใช้รถทุกวัน อ่าน <Link href="/articles/ev-battery-care" className={linkStyle}>แนวทางดูแลแบตเตอรี่และตั้งขีดจำกัดการชาร์จ</Link> แล้วกลับมาตรวจคำแนะนำเฉพาะ S05 ในคู่มือของรถ ไม่ย้ายเปอร์เซ็นต์ชาร์จที่เหมาะกับรถอีกยี่ห้อมาใช้โดยอัตโนมัติ</p>
        <p><strong>ล้อ 20 นิ้วอยู่ใน Max Long Range:</strong> ใช้ยาง 245/45 R20 ส่วนรุ่นอื่นในตารางใช้ 225/60 R18 การทดลองขับรุ่นล้อ 18 นิ้วจึงไม่ยืนยันความรู้สึกของรุ่นล้อ 20 นิ้ว ควรลองขนาดล้อที่จะรับจริงบนเส้นทางใกล้เคียงที่คุณใช้ และขอราคายางทดแทนขนาดนั้นมาคิดค่าใช้จ่ายด้วย</p>
        <p>ช่วงล่างหน้าเป็น MacPherson Strut หลังอิสระ Multi-link ตามโบรชัวร์ แต่ชื่อโครงสร้างยังบอกความนุ่มหรือการยึดเกาะทั้งหมดไม่ได้ หากคิดจะเปลี่ยนล้อ ยาง หรือโช้ค อ่าน <Link href="/articles/ev-tyre-and-coilover-selection-guide" className={linkStyle}>การเลือกยางและ Coilover ให้เหมาะกับรถ EV</Link> เพื่อเริ่มจากข้อกำหนดของรถและปัญหาที่ต้องการแก้</p>
      </section>

      <section className="space-y-5" aria-labelledby="before-buying">
        <h2 id="before-buying" className={headingStyle}>ก่อนตัดสินใจ: ลองรถและขอเอกสารอะไรบ้าง?</h2>
        <p>นำผู้โดยสารประจำ คาร์ซีตหรือกระเป๋าที่ใช้จริงไปลองขึ้นลงและจัดวาง รถระบุฐานล้อ 2,880 มม. แต่ความพอดีกับครอบครัวต้องดูท่านั่งและพื้นที่ใช้งานจริง หากลังเลระหว่างขุมพลัง ลอง BEV และ REEV แยกกัน และถามเงื่อนไขที่เครื่องยนต์ REEV เริ่มทำงาน</p>
        <p>ขอใบเสนอราคาที่ระบุรุ่นย่อย ปีผลิต รายการอุปกรณ์ ของแถม วันหมดอายุข้อเสนอ และเงื่อนไขรับประกันแยกแต่ละส่วน บทนี้ยังยืนยันราคาสุทธิและเงื่อนไขรับประกันของรถที่คุณจะซื้อไม่ได้ จึงไม่ใช้ราคาเปิดตัวหรือป้ายในภาพปี 2025 แทนราคาปัจจุบัน</p>
        <p>ถ้าคุณชาร์จสะดวก ให้เริ่มเทียบ BEV รุ่นที่มีอุปกรณ์จำเป็นครบ แล้วดูว่าแบตเตอรี่เพิ่มของ Max Long Range คุ้มกับเส้นทางจริงหรือไม่ ถ้าสนใจ REEV ให้ประเมินทั้งความยืดหยุ่นเรื่องพลังงานและการดูแลเครื่องยนต์ ข้อเสนอแนะนี้เป็นแนวทางคัดตัวเลือก ไม่ใช่คำตัดสินจากการทดสอบรถของ <BrandHomeLink /></p>
        <p>หากกำลังเปลี่ยนจากรถไฮบริดมาไฟฟ้าล้วน อ่าน <Link href="/articles/hybrid-to-ev-chassis-dynamics-transition" className={linkStyle}>สิ่งที่ควรทำความคุ้นเคยเมื่อเปลี่ยนมาใช้ EV</Link> เพื่อเตรียมลองคันเร่ง การชะลอรถ และช่วงล่างอย่างเป็นขั้นตอน</p>
      </section>

      <aside className="rounded-2xl border border-lime-200 bg-lime-50 p-5 text-sm leading-7" aria-label="สถานะการเปิดตัวสินค้า">
        <p><BrandHomeLink /> เปิดความรู้ก่อน เปิดขายเมื่อข้อมูลพร้อม ตอนนี้ยังไม่มีสินค้าพร้อมจำหน่าย และยังไม่เปิดรับคำสั่งซื้อหรือชำระเงิน</p>
        <p className="mt-3"><Link href="/articles" className={linkStyle}>เลือกอ่านบทความรถ EV และช่วงล่างเรื่องอื่น</Link> หรือ <Link href="/contact" className={linkStyle}>ดูช่องทางติดต่อทีมงาน</Link></p>
      </aside>
    </div>
  </article>;
}
