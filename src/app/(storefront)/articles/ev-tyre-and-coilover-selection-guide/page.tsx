import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { ImageCredit } from '@/components/ImageCredit';
import EvTyreCover from '@/components/EvTyreCover';
import { evTyreArticle as article, tyreModels, tyreSources as sources } from '@/lib/ev-tyre-article';

const linkStyle = 'font-semibold text-lime-800 underline decoration-lime-500 underline-offset-4 hover:text-lime-950 focus-visible:outline-2 focus-visible:outline-offset-4';
export const metadata: Metadata = {
  title: `${article.title} | EVSELECTS.COM`, description: article.description,
  alternates: { canonical: article.path },
  openGraph: {
    title: article.title, description: article.description, url: `https://evselects.com${article.path}`,
    type: 'article', locale: 'th_TH', siteName: 'EVSELECTS.COM',
    publishedTime: article.publishedAt, modifiedTime: article.updatedAt,
    images: [{ url: article.image, width: article.imageWidth, height: article.imageHeight, alt: article.imageAlt }],
  },
  twitter: { card: 'summary_large_image', title: article.title, description: article.description, images: [article.image] },
};
function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-28 space-y-5">
    <h2 id={`${id}-title`} className="border-b border-slate-200 pb-3 text-2xl font-bold leading-snug text-slate-900">{title}</h2>{children}
  </section>;
}
function Source({ href, children }: { href: string; children: ReactNode }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" className={linkStyle}>{children}<span className="sr-only"> (เปิดแท็บใหม่)</span></a>;
}
const contents = [
  ['what-is-ev-tyre', 'คำว่า EV บอกอะไร'], ['engineering', 'ข้างในยางต่างกันตรงไหน'],
  ['models', 'ดูยางแต่ละรุ่นและข้อดี–ข้อจำกัด'], ['comparison', 'เทียบกับ Pilot Sport 4 S'],
  ['read-the-evidence', 'อ่านตัวเลขให้ไม่หลงทาง'], ['before-you-buy', 'เลือกให้ตรงรถและถนนไทย'], ['faq', 'คำถามที่เจอบ่อย'],
] as const;
const comparison = [
  ['e.Primacy', 'ให้น้ำหนักกับพลังงานและการเดินทางประจำวัน', 'ประหยัดกี่เปอร์เซ็นต์ หรือเบรกต่างกี่เมตรบนรถเรา', sources.eprimacy, 'Michelin ไทย'],
  ['Pilot Sport EV', 'รวมโจทย์สปอร์ต EV เสียง และแรงต้านการหมุน', 'ไม่ได้แปลว่าเป็น 4 S ที่เงียบและเกาะกว่าทุกด้าน', sources.pilotEv, 'Michelin ไทย'],
  ['iON evo', 'ออกแบบหลายส่วนร่วมกันเพื่อเสียง การสึก และพลังงาน', 'ผลของรุ่น AS หรือ SUV ใช้แทนรุ่น Summer ไม่ได้', sources.hankook, 'Hankook สหรัฐฯ'],
  ['EcoContact 7', 'แรงต้านการหมุนต่ำและลดเสียงภายนอกในเมือง', 'ไม่ใช่ 7 S; ยังไม่ยืนยันเสียงในห้องโดยสารของรถเรา', sources.continentalPress, 'Continental สากล'],
  ['P Zero E', 'UHP ที่ตั้งโจทย์พลังงานและเทคโนโลยี Elect ร่วมด้วย', 'Triple A ไม่ใช่คะแนนการเข้าโค้งหรือผลชนะ 4 S', sources.pirelli, 'Pirelli · เปิดตัวปี 2023'],
  ['Pilot Sport 4 S', 'การควบคุมและการยึดเกาะแนวสปอร์ต ใช้ถนนและสนามเป็นครั้งคราว', 'ไม่ได้ยืนยันว่าจะกินไฟมากกว่าหรือดังกว่าทุกตัวเลือก', sources.ps4s, 'Michelin ไทย'],
] as const;

export default function EVTyreAndCoiloverSelectionGuidePage() {
  const structuredData = {
    '@context': 'https://schema.org', '@type': 'Article', headline: article.title,
    description: article.description, image: [`https://evselects.com${article.image}`],
    datePublished: article.publishedAt, dateModified: article.updatedAt,
    mainEntityOfPage: `https://evselects.com${article.path}`,
    author: { '@type': 'Organization', name: 'EVSELECTS.COM', url: 'https://evselects.com/' },
    publisher: { '@type': 'Organization', name: 'EVSELECTS.COM', url: 'https://evselects.com/' },
  };
  return <article className="mx-auto max-w-5xl px-4 py-10 text-base leading-[1.9] text-slate-700 sm:px-6 sm:py-14 sm:text-lg lg:px-8">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} />
    <nav aria-label="Breadcrumb" className="mb-7 text-sm"><Link href="/articles" className="inline-flex items-center gap-2 text-slate-600 hover:text-lime-800"><ArrowLeft size={16} aria-hidden="true" />บทความและคู่มือ EV</Link></nav>
    <header className="space-y-5">
      <p className="text-sm font-semibold text-lime-800">รู้ก่อนเปลี่ยนยาง · EV และ Performance</p>
      <h1 className="text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl">{article.title}</h1>
      <p className="max-w-3xl text-lg leading-[1.9] sm:text-xl">พอถึงเวลาเปลี่ยนยางรถไฟฟ้า คำถามมักไม่จบแค่เลือกยี่ห้อไหนดี แต่กลายเป็นว่า “ต้องซื้อยาง EV ไหม แล้วถ้าใส่ Pilot Sport 4 S จะได้อะไรและเสียอะไรไป?”</p>
      <p><strong>ความต่างอยู่ที่โจทย์ออกแบบของยางแต่ละรุ่น</strong> บางรุ่นเน้นใช้พลังงานน้อย บางรุ่นพยายามเก็บทั้งความเงียบและการควบคุม ส่วนยาง Performance ก็ใช้กับ EV ได้เมื่อสเปกตรงรถ อย่าง <Source href={sources.ps4s}>Michelin Pilot Sport 4 S</Source> ซึ่งหน้าไทยระบุว่ารองรับรถไฟฟ้า</p>
      <p>เราจะดูตัวอย่างจาก Michelin, Hankook, Continental และ Pirelli ว่าแต่ละรุ่นปรับอะไรเพื่อแก้โจทย์เหล่านี้ แล้วค่อยกลับมาตอบว่าแบบไหนตรงกับการขับของเรามากกว่า</p>
      <p className="text-sm text-slate-500">อัปเดต <time dateTime={article.updatedAt}>29 กันยายน 2569</time> · อ่านประมาณ {article.readTime} · เรียบเรียงโดย <Link href="/" className={linkStyle}>EVSELECTS.COM</Link></p>
      <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
        <EvTyreCover eager />
        <figcaption className="p-4 text-sm leading-relaxed text-slate-600">ภาพปกเป็นภาพประกอบแนวคิดของ EVSELECT โดยเวอร์ชันแนวนอนจัดทำด้วย AI จากภาพต้นฉบับ คุณสมบัติด้านเสียง น้ำหนักบรรทุก และการยึดเกาะต้องตรวจตามรุ่นและขนาดยาง ไม่ใช่คุณสมบัติที่ยาง EV ทุกเส้นให้ได้เท่ากัน</figcaption>
      </figure>
    </header>
    <div className="mt-10 space-y-12">
      <aside className="space-y-3 rounded-2xl border border-lime-200 bg-lime-50 p-5 sm:p-7" aria-label="ขอบเขตของบทความ">
        <p className="font-bold text-slate-950">อ่านบทความนี้แล้วจะเลือกยางได้ชัดขึ้นยังไง</p>
        <p>แยกได้ว่ากำลังจ่ายให้กับระยะวิ่ง ความเงียบ หรือการควบคุม และรู้ว่าต้องขอข้อมูลอะไรจากร้านก่อนซื้อ เราอ้างข้อมูลผู้ผลิตเพื่ออธิบายการออกแบบ แล้วเสริมด้วยผลทดสอบของ ADAC และ Tire Rack ในรุ่นที่มีข้อมูล โดยระบุขนาดและเงื่อนไขแยกไว้ ไม่ใช่ผลทดลองขับยางทั้งหกรุ่นของเรา</p>
        <p className="text-sm">ภาพยางในเนื้อหาเป็นภาพผลิตภัณฑ์ตรงรุ่นจากผู้ผลิต ซึ่งอาจเป็นภาพเรนเดอร์ของแบรนด์ ไม่ใช่ภาพที่เราถ่ายหรือภาพยางสมมติจาก AI ขนาดและรหัสบนภาพเป็นเพียงตัวอย่างของรุ่นนั้น</p>
      </aside>
      <nav aria-label="สารบัญบทความ" className="rounded-2xl border border-slate-200 p-5 sm:p-7"><p className="mb-3 font-bold text-slate-950">เลือกอ่านหัวข้อ</p><ol className="list-decimal space-y-2 pl-6">{contents.map(([id, label]) => <li key={id}><a href={`#${id}`} className={linkStyle}>{label}</a></li>)}</ol></nav>

      <Section id="what-is-ev-tyre" title="1. ยาง EV ไม่ได้มีบุคลิกแบบเดียวกันทั้งหมด">
        <p>คำว่า “ยางทั่วไป” กว้างมาก ตั้งแต่ยางเน้นนุ่มเงียบ ยางประหยัดพลังงาน ไปจนถึงยางสปอร์ต จึงเทียบว่า EV ดีกว่าหรือแย่กว่าทั้งกลุ่มไม่ได้ ต้องระบุรุ่นให้ตรงก่อน เช่น e.Primacy กับ Pilot Sport 4 S เป็นยางคนละโจทย์ แม้ทั้งคู่จะมีตัวเลือกสำหรับรถไฟฟ้า</p>
        <p>มีทั้งรุ่นที่ตั้งโจทย์ EV โดยเฉพาะอย่าง <Source href={sources.hankook}>Hankook iON evo</Source> และยางที่พัฒนารองรับรถหลายระบบขับเคลื่อนอย่าง <Source href={sources.continental}>Continental EcoContact 7</Source> ซึ่งใช้เครื่องหมาย EV-compatible ส่วน <Source href={sources.pirelliElect}>Elect ของ Pirelli</Source> เป็นชื่อเทคโนโลยีที่ต้องตรวจในรุ่นและขนาดนั้น ไม่ใช่ชื่อยางที่ใช้แทน P Zero E ได้ทุกกรณี</p>
        <p>สิ่งที่ควรทำก่อนถามว่า “มีคำว่า EV ไหม” คือ <strong>ตรวจว่ายางเส้นนั้นตรงขนาด พิกัดรับน้ำหนัก และพิกัดความเร็วที่รถกำหนดหรือไม่</strong> แล้วค่อยเลือกว่าอยากได้บุคลิกแบบไหน โดยใช้ <Source href={sources.parameters}>ขนาดและ Service Description ของยาง</Source> เป็นข้อมูลตั้งต้น</p>
      </Section>

      <Section id="engineering" title="2. ข้างในยางต่างกันตรงไหน ทำไมแค่เพิ่มโฟมจึงยังไม่พอ">
        <h3 className="text-xl font-bold text-slate-900">เนื้อยาง: ลดพลังงานสูญเสีย แต่ยังต้องยึดเกาะถนน</h3>
        <p>ยางเปลี่ยนรูปตลอดเวลาขณะหมุน พลังงานส่วนหนึ่งสูญเสียไปในวัสดุ ผู้ผลิตจึงปรับสูตรยาง สารเสริมแรง และโครงสร้างเพื่อลด Rolling Resistance หรือแรงต้านการหมุน แต่การยึดเกาะบนถนนเปียกเป็นอีกโจทย์ที่ต้องรักษาไว้ การพัฒนายางจึงเป็นการหาสมดุลหลายด้าน อ่านคำอธิบายเรื่อง <Source href="https://energy-efficient-products.ec.europa.eu/product-list/tyres/tyres-properties-introduction_en">คุณสมบัติยางจาก European Commission</Source> จะเห็นว่าต้องดูพลังงานและ Wet Grip แยกกัน</p>
        <h3 className="text-xl font-bold text-slate-900">โครงยาง: รับน้ำหนักให้ได้ โดยไม่เหมารวมว่า EV ทุกคันต้องใช้ HL</h3>
        <p>รถไฟฟ้าหลายรุ่นมีน้ำหนักมาก แต่ขนาดตัวรถและพิกัดแต่ละเพลาก็ต่างกัน XL หมายถึง Extra Load ส่วน HL คือ High Load Capacity ทั้งสองอย่างต้องอ่านร่วมกับ Load Index และแรงดันที่กำหนด ไม่ใช่คะแนนความแข็งของแก้มยางหรือใบรับรองว่าใส่กับ EV ได้ทุกคัน <Source href={sources.load}>Michelin อธิบายความต่างของ HL และ XL</Source> โดยแยกความสามารถรับน้ำหนักออกจากชื่อการตลาดของยาง</p>
        <h3 className="text-xl font-bold text-slate-900">ดอกยางกับโฟม: แก้เสียงกันคนละส่วน</h3>
        <p>รูปทรงและการเรียงบล็อกดอกยางสัมพันธ์กับเสียงขณะกลิ้ง ส่วนโฟมด้านในมุ่งลดเสียงก้องของโพรงอากาศในยาง จึงไม่ใช่อุปกรณ์ที่ทำให้เสียงทุกชนิดหายไป และไม่ใช่ตัวเพิ่มแรงยึดเกาะโดยตรง ดูหลักการของ <Source href={sources.acoustic}>Michelin Acoustic Technology</Source> คู่กับการปรับลายดอกยางของ <Source href={sources.hankook}>Hankook iON evo</Source> จะเห็นว่าผู้ผลิตแก้ปัญหามากกว่าจุดเดียว</p>
        <h3 className="text-xl font-bold text-slate-900">แรงบิดและการสึก: ยางช่วยได้ แต่ไม่แทนการดูแลรถ</h3>
        <p>ผู้ผลิตยาง EV ให้ความสำคัญกับความแข็งของบล็อกดอกยางและการกระจายแรงกด เช่น <Source href={sources.pilotEvPress}>ElectricGrip ใน Pilot Sport EV</Source> แต่การมีชื่อ EV ไม่ได้ลบผลจากลมยางไม่เหมาะหรือมุมล้อผิด หากยางสึกข้างเดียวให้ตรวจสาเหตุร่วมกับ <Link href="/articles/ev-camber-adjustment-wheel-alignment-guide" className={linkStyle}>เรื่อง Camber และการตั้งศูนย์ล้อ</Link> ก่อนเปลี่ยนยี่ห้อเพื่อหวังแก้ทุกอาการ</p>
      </Section>

      <Section id="models" title="3. ยางแต่ละรุ่นทำมาเพื่ออะไร มีข้อดีและข้อจำกัดยังไง">
        <p>คำว่า <strong>ข้อดี</strong> ด้านล่างอธิบายประโยชน์ตามแนวทางออกแบบที่ผู้ผลิตระบุ ส่วน <strong>ข้อจำกัด</strong> คือสิ่งที่ยังต้องชั่งน้ำหนักหรือขอหลักฐานเพิ่ม ไม่ได้หมายความว่าเราทดสอบแล้วพบว่ารุ่นนั้นแพ้ในด้านดังกล่าว</p>
        <div className="space-y-12">{tyreModels.map((tyre, index) => <section key={tyre.id} id={tyre.id} aria-labelledby={`${tyre.id}-title`} className="scroll-mt-28 space-y-5 border-b border-slate-200 pb-10 last:border-0 last:pb-0">
          <div className="space-y-2"><h3 id={`${tyre.id}-title`} className="text-xl font-bold text-slate-950 sm:text-2xl">{index + 1}. {tyre.name}</h3><p className="font-semibold text-lime-800">{tyre.direction}</p></div>
          <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <Image src={tyre.image} alt={tyre.alt} width={tyre.width} height={tyre.height} sizes="(max-width: 640px) 100vw, 640px" className="mx-auto h-auto max-h-[460px] w-full object-contain" />
            <figcaption className="space-y-2 bg-slate-50 p-4 text-sm leading-relaxed text-slate-600"><p>{tyre.caption}</p>{'imageAuthor' in tyre ? <ImageCredit author={tyre.imageAuthor} source={tyre.imageSource} license="CC BY-SA 4.0" licenseUrl="https://creativecommons.org/licenses/by-sa/4.0/" className="" /> : <p>ภาพผลิตภัณฑ์: <Source href={tyre.imageSource}>{tyre.credit} · แหล่งภาพต้นฉบับ</Source></p>}</figcaption>
          </figure>
          <p><strong>ออกแบบมาเพื่ออะไร:</strong> {tyre.engineering} <Source href={tyre.source}>รายละเอียดจาก {tyre.credit}</Source></p>
          <p><strong className="text-slate-900">ข้อดี:</strong> {tyre.pro}</p>
          <p><strong className="text-slate-900">ข้อจำกัด:</strong> {tyre.con}</p>
          {tyre.id === 'michelin-eprimacy' && <p className="rounded-xl bg-slate-50 p-4 text-base"><strong>สิ่งที่ผลทดสอบพบ:</strong> <Source href={sources.adac}>ADAC ปี 2023 ขนาด 205/55 R16 91V</Source> ให้ e.Primacy เด่นด้านประสิทธิภาพและการสึกต่ำ แต่พบจุดอ่อนบนถนนเปียก ระยะเบรกบนแอสฟัลต์เปียกจาก 80–0 กม./ชม. อยู่ที่ 43.7 เมตร ขณะที่ค่าดีที่สุดของชุดทดสอบคือ 34.4 เมตร ข้อมูลนี้ใช้กับยางสเปกที่ทดสอบ ไม่ใช่คำตัดสินแทนทุกขนาด หรือรุ่น e.Primacy ST ที่ร้านอาจเสนอในไทย</p>}
          {tyre.id === 'michelin-pilot-sport-4-s' && <p className="rounded-xl bg-slate-50 p-4 text-base"><strong>สิ่งที่ผลทดสอบพบ:</strong> <Source href={sources.tireRack}>Tire Rack บน Tesla Model 3 ปี 2023</Source> ชมการตอบสนองและการควบคุมของ 4 S แต่พบความกระด้างและเสียงที่ยังรับรู้ได้ พร้อมการใช้พลังงานค่อนข้างสูงในชุดทดสอบ ดูตัวเลขและคู่เทียบในหัวข้อถัดไป</p>}
          <p className="border-l-4 border-lime-500 pl-4"><strong>เหมาะกับโจทย์ไหน:</strong> {tyre.fit}</p>
        </section>)}</div>
        <p className="text-sm text-slate-500">รุ่นที่ยกมาเป็นตัวอย่างแนวคิด ไม่ใช่รายชื่อรุ่นใหม่ทั้งหมดของปี 2026 เช่น Michelin เปิดตัว <Source href={sources.newMichelin}>Primacy 5 energy และ Pilot Sport 5 energy</Source> เพิ่มแล้ว บทความนี้จึงไม่ใช้คำว่า “รุ่นล่าสุด” แทนยางทุกตัวในตาราง</p>
      </Section>

      <Section id="comparison" title="4. ถ้าเทียบกับ Pilot Sport 4 S ความต่างอยู่ตรงไหน">
        <p>ลองแยกคำถามออกเป็น “ผู้ผลิตพัฒนายางมาเพื่ออะไร” กับ “ทดสอบจริงแล้วใครทำได้ดีกว่า” ตารางนี้ตอบข้อแรก จึงไม่มีคะแนนหนึบ เงียบ หรือเปอร์เซ็นต์ประหยัดไฟที่นำมาจากคนละรถ คนละขนาด และคนละวิธีวัด</p>
        <p className="text-sm text-slate-500 sm:hidden">เลื่อนตารางไปทางซ้าย–ขวาเพื่ออ่านครบทุกช่อง</p>
        <div className="relative overflow-x-auto rounded-2xl border border-slate-200" role="region" aria-label="ตารางเปรียบเทียบยาง เลื่อนแนวนอนได้" tabIndex={0}>
          <table className="w-full min-w-[780px] text-left text-base leading-relaxed">
            <caption className="p-4 text-left font-semibold text-slate-900">เปรียบเทียบเป้าหมายการออกแบบ ไม่ใช่อันดับผลทดสอบ</caption>
            <thead className="bg-slate-100 text-slate-900"><tr>{['รุ่น', 'จุดเน้นเมื่อเทียบกับ 4 S', 'สิ่งที่ยังสรุปไม่ได้', 'แหล่งข้อมูล / Source', 'สถานะ / Label'].map(label => <th key={label} scope="col" className="p-4">{label}</th>)}</tr></thead>
            <tbody className="divide-y divide-slate-200">{comparison.map(([name, focus, limit, href, source]) => <tr key={name}><th scope="row" className="p-4">{name}</th><td className="p-4">{focus}</td><td className="p-4">{limit}</td><td className="p-4"><Source href={href}>{source}</Source></td><td className="p-4">ข้อมูลผู้ผลิต (CLAIM)</td></tr>)}</tbody>
          </table>
        </div>
        <p><strong>ข้อสรุปในการเลือกของเรา (INFERENCE):</strong> ถ้าสนใจพลังงานกับความสบายเป็นหลัก ให้เริ่มเทียบยางกลุ่มที่วางโจทย์ด้านนี้ก่อน ถ้าอยากได้การควบคุมแนวสปอร์ต ให้เอา Pilot Sport 4 S มาร่วมเทียบได้ แต่ต้องไม่ลดพิกัดยางเพื่อให้ได้รุ่นที่อยากใส่</p>
        <p>สำหรับตัวเลขเปรียบเทียบทั้งหกรุ่นบนรถ EV คันเดียว ขนาดและเงื่อนไขเดียวกัน <strong>ยังไม่มีข้อมูลที่ตรวจยืนยันได้ในบทความนี้</strong> จึงไม่จัดอันดับผู้ชนะด้านเบรก ฝน เสียง หรือระยะวิ่ง</p>
        <h3 className="text-xl font-bold text-slate-900">ตัวอย่างผลทดสอบจริง: ได้การควบคุม แล้วแลกพลังงานเท่าไร?</h3>
        <p><Source href={sources.tireRack}>Tire Rack · 2024 Test 1</Source> ใช้ Tesla Model 3 ปี 2023 เปรียบเทียบยางหลายประเภท ตัวอย่างสองรุ่นขนาด 235/40 R19 ให้ผลการใช้พลังงานดังนี้ ตัวเลข kWh/100 กม. แปลงจาก Wh/mi ด้วย 1 ไมล์ = 1.609344 กม. และปัดทศนิยมสองตำแหน่ง</p>
        <div className="relative overflow-x-auto rounded-2xl border border-slate-200" role="region" aria-label="ผลทดสอบพลังงานของ Tire Rack" tabIndex={0}>
          <table className="w-full min-w-[660px] text-left text-base leading-relaxed">
            <caption className="p-4 text-left font-semibold">ผลของยางสเปกที่ทดสอบ ไม่ใช่ค่ารับประกันของรถทุกคัน</caption>
            <thead className="bg-slate-100"><tr>{['ยางที่ทดสอบ', 'Wh/mi ต้นฉบับ', 'kWh/100 กม.', 'แหล่งข้อมูล / Source', 'สถานะ / Label'].map(label => <th key={label} scope="col" className="p-4">{label}</th>)}</tr></thead>
            <tbody className="divide-y divide-slate-200">
              <tr><th scope="row" className="p-4">Pilot Sport 4 S · 96Y</th><td className="p-4">290</td><td className="p-4">18.02</td><td className="p-4"><Source href={sources.tireRack}>Tire Rack</Source></td><td className="p-4">ตรวจต้นฉบับแล้ว (VERIFIED)</td></tr>
              <tr><th scope="row" className="p-4">iON evo AS · 96W</th><td className="p-4">263</td><td className="p-4">16.34</td><td className="p-4"><Source href={sources.tireRack}>Tire Rack</Source></td><td className="p-4">ตรวจต้นฉบับแล้ว (VERIFIED)</td></tr>
            </tbody>
          </table>
        </div>
        <p>ในคู่นี้ 4 S ใช้พลังงานมากกว่าราว 10.3% ขณะที่ผู้ทดสอบพบข้อจำกัดเรื่องการยึดเกาะเปียกของ iON evo AS จึงเลือกผู้ชนะจากช่องพลังงานอย่างเดียวไม่ได้ <strong>AS คือ All Season ไม่ใช่ iON evo Summer ในหัวข้อก่อนหน้า</strong> และผลนี้ไม่ได้เปรียบเทียบ 4 S กับ Pilot Sport EV หรือ P Zero E</p>
      </Section>

      <Section id="read-the-evidence" title="5. ตัวเลขที่ดูน่าเชื่อ ต้องอ่านอะไรต่อ">
        <h3 className="text-xl font-bold text-slate-900">ระยะวิ่งเพิ่มของ Pilot Sport EV ไม่ได้เทียบกับ Pilot Sport 4 S</h3>
        <p>เชิงอรรถบน <Source href={sources.pilotEv}>หน้า Pilot Sport EV ของ Michelin ไทย</Source> อธิบายคำกล่าวเรื่องระยะวิ่งเพิ่มมากกว่า 60 กม. โดยอ้างแรงต้านการหมุนจากการทดสอบภายในเดือนตุลาคม 2020 เทียบกับ <strong>Pilot Sport 4 SUV</strong> ขนาด 255/45 R19 และคำนวณด้วยเงื่อนไขรถน้ำหนัก 2,151 กก. ระยะวิ่งตั้งต้น 540 กม. นี่จึงไม่ใช่ผลว่าเปลี่ยนจาก 4 S แล้วรถทุกคันจะวิ่งได้เพิ่ม 60 กม.</p>
        <h3 className="text-xl font-bold text-slate-900">เสียงบนฉลาก EU ไม่ใช่เสียงที่หูเราได้ยินในรถ</h3>
        <p><Source href={sources.labels}>ฉลากยางของ European Commission</Source> แสดงแรงต้านการหมุน การยึดเกาะเปียก และเสียงกลิ้งภายนอก ค่าดีซิเบลนั้นวัดเสียงที่คนภายนอกรถได้ยินเมื่อรถผ่าน จึงใช้สรุปตรง ๆ ว่ายางหนึ่งจะเงียบกว่าอีกเส้นในห้องโดยสารไม่ได้</p>
        <p>ถ้าอยากเทียบความเงียบในรถ ต้องดูผลวัดภายในรถเดียวกัน ความเร็ว ผิวถนน ลมยาง และสภาพยางใกล้เคียงกัน ส่วนโฟมต้องตรวจที่รหัสสินค้าจริง ไม่ใช่เห็นชื่อรุ่นแล้วถือว่ามีทุกเส้น</p>
        <h3 className="text-xl font-bold text-slate-900">A/A/A ไม่ได้แปลว่าชนะทุกการทดสอบ</h3>
        <p>ฉลากเป็นข้อมูลที่ช่วยคัดตัวเลือก แต่ไม่ครอบคลุมการตอบสนองพวงมาลัย การเหินน้ำ ความสบาย และการสึกในทุกสถานการณ์ ทั้งยังต้องดู <Source href={sources.parameters}>รหัสและขนาดของยางที่ได้รับฉลาก</Source> ให้ตรงของที่จะซื้อ ค่าของขนาดหนึ่งไม่ใช่คะแนนกลางของทั้งรุ่น</p>
      </Section>

      <Section id="before-you-buy" title="6. เลือกให้ตรงรถและการขับในไทย ก่อนเลือกว่าเอา EV หรือ Performance">
        <ol className="list-decimal space-y-4 pl-6">
          <li><strong>เริ่มจากรถคันจริง:</strong> จดรุ่น ปี รุ่นย่อย ขนาดล้อ และยางหน้า–หลัง ตรวจป้ายรถกับคู่มือ เพราะบางรุ่นใช้ขนาดหน้าและหลังต่างกัน ตัวอย่างดูได้จาก <Source href={sources.manual}>คู่มือ Model 3 ภาษาไทย</Source></li>
          <li><strong>ขอรหัสยางเต็ม:</strong> ขนาด, Load Index, Speed Rating, XL/HL, เครื่องหมาย OE และเทคโนโลยีของสเปกนั้น เช่น Acoustic, Elect หรือระบบที่ช่วยเมื่อยางสูญเสียแรงดัน</li>
          <li><strong>เลือกโจทย์สำคัญสองอย่าง:</strong> เช่น เบรกเปียกกับความเงียบ หรือการควบคุมกับระยะวิ่ง แล้วหาข้อมูลที่วัดเรื่องนั้นจริง ชื่อแบรนด์อย่างเดียวตอบแทนไม่ได้</li>
          <li><strong>ดูถนนและฝนที่เจอจริง:</strong> อ่านผลเบรกเปียกและการเหินน้ำแยกกัน อย่าใช้คำว่า Summer เป็นเหตุผลว่าห้ามเจอฝน และอย่าใช้คำว่า EV เป็นการรับรองว่าลุยน้ำได้</li>
          <li><strong>ถามเรื่องของที่จะได้รับ:</strong> ราคาเป็นชุดหรือเส้น ปีผลิต สเปกไทยหรือสินค้านำเข้า ผู้รับประกัน และการซ่อม หากมีโฟม ให้ตรวจตาม <Source href={sources.repair}>แนวทางซ่อมยางของผู้ผลิต</Source></li>
          <li><strong>หลังติดตั้ง:</strong> ตั้งลมขณะยางเย็นตามข้อกำหนดรถ ตรวจการตั้งศูนย์เมื่อมีอาการหรือการสึกผิดปกติ แล้วติดตามพลังงานกับเสียงบนเส้นทางที่เทียบกันได้ ไม่ตัดสินจากเที่ยวแรกเพียงเที่ยวเดียว</li>
        </ol>
        <p>ถ้าเปลี่ยนยางเพราะรถกระแทกหรือเด้ง อย่าเพิ่งสรุปว่ายาง EV เป็นต้นเหตุทั้งหมด ลองแยกอาการตาม <Link href="/articles/optimizing-ev-suspension-thai-roads" className={linkStyle}>แนวทางตรวจยางและช่วงล่างบนถนนไทย</Link> ส่วนการเลือกชุดโช้คอ่านต่อใน <Link href="/articles/ev-suspension-tuning-guide" className={linkStyle}>คู่มือเลือกช่วงล่าง EV ตามลักษณะการใช้งาน</Link></p>
      </Section>

      <Section id="faq" title="7. คำถามที่เจอบ่อยก่อนเปลี่ยนยาง EV">
        <h3 className="text-xl font-bold text-slate-900">รถ EV จำเป็นต้องใช้ยางที่มีคำว่า EV เท่านั้นไหม?</h3>
        <p>ไม่จำเป็นต้องมีคำนี้ในชื่อรุ่นเสมอไป ตัวอย่างคือ <Source href={sources.ps4s}>Pilot Sport 4 S ที่ Michelin ระบุว่ารองรับรถไฟฟ้า</Source> แต่การใช้ได้กับรถคันไหนยังขึ้นกับขนาดและข้อกำหนดของรถ ไม่ใช่เลือกได้ทุกขนาดที่ร้านมี</p>
        <h3 className="text-xl font-bold text-slate-900">ถ้าอยากขับสนุกขึ้น เลือก 4 S จบเลยไหม?</h3>
        <p>เป็นตัวเลือกที่มีโจทย์ด้านสปอร์ตชัด แต่ยังต้องผ่านสเปกรถและเทียบสิ่งที่ยอมแลกได้ ทั้งความสบาย เสียง และพลังงาน เราไม่มีผลทดสอบชุดเดียวกันพอจะรับรองว่า 4 S เหมาะที่สุดกับ EV ทุกคัน</p>
        <h3 className="text-xl font-bold text-slate-900">ยางมีโฟมแปลว่าเงียบกว่ายางไม่มีโฟมเสมอไหม?</h3>
        <p>สรุปแบบนั้นไม่ได้ โฟมช่วยลดเสียงก้องเฉพาะส่วน แต่เสียงที่คนขับได้ยินยังมีองค์ประกอบอื่น การเทียบควรใช้ผลวัดภายในรถและเงื่อนไขเดียวกัน อ่านขอบเขตเทคโนโลยีจาก <Source href={sources.acoustic}>Michelin Acoustic</Source> ประกอบได้</p>
        <h3 className="text-xl font-bold text-slate-900">ยาง EV ต้องเติมลมแข็งกว่ายางธรรมดาไหม?</h3>
        <p>ให้ใช้ข้อกำหนดรถและการบรรทุกเป็นหลัก ไม่ตั้งค่าเดียวให้ EV ทุกคัน และไม่ใช้แรงดันสูงสุดบนแก้มยางแทนแรงดันใช้งานตาม <Source href={sources.manual}>ป้ายข้อมูลยางและคู่มือรถ</Source></p>
      </Section>

      <Section id="sources" title="แหล่งข้อมูลและขอบเขตที่ยังต้องตรวจต่อ">
        <p>ตรวจแหล่งอ้างอิงวันที่ 29 กันยายน 2569 ข้อมูลการออกแบบมาจากผู้ผลิต ส่วนผลทดสอบที่ยกมาเป็นของ ADAC และ Tire Rack ซึ่งเป็นผู้จำหน่ายยางที่มีโครงการทดสอบเอง ไม่ใช่การทดลองของ <Link href="/" className={linkStyle}>EVSELECTS.COM</Link> แหล่งภาพและข้อมูลสเปกแสดงอยู่ข้างรุ่นที่เกี่ยวข้อง</p>
        <ul className="list-disc space-y-3 pl-6">
          <li>Michelin ประเทศไทย: <Source href={sources.eprimacy}>e.Primacy</Source>, <Source href={sources.pilotEv}>Pilot Sport EV พร้อมเชิงอรรถการทดสอบ</Source> และ <Source href={sources.ps4s}>Pilot Sport 4 S</Source></li>
          <li><Source href={sources.hankook}>Hankook iON evo · สเปกและเทคโนโลยีตลาดสหรัฐฯ</Source>; <Source href={sources.continentalPress}>Continental EcoContact 7 / 7 S · ข่าวเปิดตัว 5 ก.พ. 2025</Source></li>
          <li><Source href={sources.pirelli}>Pirelli P Zero E · ข่าวเปิดตัว 13 ก.ค. 2023</Source> และ <Source href={sources.pirelliElect}>หน้ารุ่นและการตรวจ Elect ตามขนาด</Source></li>
          <li><Source href={sources.labels}>European Commission · ฉลากยาง</Source> และ <Source href={sources.parameters}>วิธีอ่านขนาดและ Service Description</Source></li>
          <li><Source href={sources.adac}>ADAC · e.Primacy 205/55 R16 · 2023</Source> และ <Source href={sources.tireRack}>Tire Rack · EV และยางทั่วไปบน Model 3 · ชุดทดสอบ 2024</Source></li>
        </ul>
        <p><strong>ก่อนใช้บทความนี้เป็นคำตอบซื้อยาง:</strong> ยังต้องได้รหัสยางที่ร้านเสนอจริง สเปกรถคันที่จะใส่ และผลเปรียบเทียบที่ตรงขนาดหากต้องการตัดสินเรื่องเบรกหรือระยะวิ่ง รุ่นที่อ้างจากต่างประเทศยังต้องตรวจการจำหน่ายและการรับประกันในไทยด้วย</p>
        <p className="border-l-4 border-lime-500 pl-4">ยางที่เหมาะไม่ได้ชนะเพราะชื่อมีคำว่า EV หรือ Performance แต่เพราะตรงสเปกรถ และให้น้ำหนักกับสิ่งที่เราใช้จริงได้พอดี</p>
      </Section>
    </div>
    <div className="mt-12 flex flex-wrap gap-4 border-t border-slate-200 pt-6 text-base"><Link href="/articles" className={linkStyle}>อ่านบทความและคู่มือทั้งหมด</Link><Link href="/articles/ev-camber-adjustment-wheel-alignment-guide" className={`inline-flex items-center gap-2 ${linkStyle}`}>อ่านต่อ: ยางสึกกับการตั้งศูนย์ล้อ <ArrowRight size={16} aria-hidden="true" /></Link></div>
  </article>;
}
