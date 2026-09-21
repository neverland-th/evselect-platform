import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import BrandHomeLink from '@/components/BrandHomeLink';
import { ImageCredit } from '@/components/ImageCredit';
import { powertrainArticle as article } from '@/lib/powertrain-article';

const linkStyle = 'font-semibold text-lime-800 underline decoration-lime-400 underline-offset-4 hover:text-lime-950 focus-visible:outline-2 focus-visible:outline-offset-4';
const sources = {
  rotation: { title: 'OpenStax: ความสัมพันธ์ระหว่างแรงบิด ความเร็วรอบ และกำลัง', url: 'https://openstax.org/books/university-physics-volume-1/pages/10-8-work-and-power-for-rotational-motion' },
  field: { title: 'MathWorks: Field-Weakening Control และข้อจำกัดแรงบิด', url: 'https://www.mathworks.com/help/mcb/gs/field-weakening-control.html' },
  drag: { title: 'NASA Glenn: สมการแรงต้านอากาศ', url: 'https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/drag-equation/' },
  taycan: { title: 'Porsche Newsroom: ระบบส่งกำลัง Taycan รุ่นเปิดตัวปี 2019', url: 'https://newsroom.porsche.com/en/products/taycan/powertrain-18555.html' },
  status: { title: 'Tesla Model 3 2024+ คู่มือไทย: สถานะรถและการจำกัดกำลัง', url: 'https://www.tesla.com/ownersmanual/model3/th_th/GUID-80B80D48-E3A9-4857-864B-F4CC9B56FD7E.html' },
  modes: { title: 'Tesla Model 3 2024+ คู่มือไทย: โหมดการเร่งความเร็ว', url: 'https://www.tesla.com/ownersmanual/model3/th_th/GUID-8EAFF5D8-7209-45ED-A7E0-508FFA60C530.html' },
};
const contents = [
  ['power-and-torque', 'แรงม้ากับแรงบิดบอกคนละอย่าง'], ['wheel-force', 'อัตราทดเปลี่ยนแรงขับที่ล้ออย่างไร'],
  ['motor-regions', 'ทำไมแรงบิดลดลงเมื่อรอบสูง'], ['speed-and-drag', 'ยิ่งเร็ว ทำไมยิ่งเร่งต่อยาก'],
  ['two-speed', 'ทำไม Taycan ใช้เกียร์สองสปีด'], ['compare-cars', 'อ่านสเปกและผลทดสอบให้เทียบกันได้'], ['questions', 'คำถามที่เจอบ่อย'],
] as const;

export const metadata: Metadata = {
  title: `${article.title} | EVSELECT`, description: article.description, alternates: { canonical: article.path },
  openGraph: { title: article.title, description: article.description, url: `https://evselects.com${article.path}`, type: 'article', locale: 'th_TH', siteName: 'EVSELECT', images: [{ url: article.image, width: 1920, height: 1280, alt: article.imageAlt }] },
  twitter: { card: 'summary_large_image', title: article.title, description: article.description, images: [article.image] },
};
function Source({ to, children }: { to: keyof typeof sources; children: ReactNode }) {
  return <a href={sources[to].url} target="_blank" rel="noopener noreferrer" className={linkStyle}>{children}<span className="sr-only"> (เปิดแท็บใหม่)</span></a>;
}
function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-28 space-y-5"><h2 id={`${id}-title`} className="border-b border-slate-200 pb-3 text-2xl font-bold leading-snug text-slate-950">{title}</h2>{children}</section>;
}

export default function EVHorsepowerVsTorquePage() {
  return <article className="mx-auto max-w-5xl bg-white px-4 py-10 text-base leading-[1.9] text-slate-700 sm:px-6 sm:py-14 sm:text-lg lg:px-8">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      '@context': 'https://schema.org', '@type': 'Article', headline: article.title, description: article.description,
      mainEntityOfPage: `https://evselects.com${article.path}`, image: `https://evselects.com${article.image}`,
      datePublished: article.publishedAt, dateModified: article.updatedAt, inLanguage: 'th-TH',
      author: { '@type': 'Organization', name: 'EVSELECT', url: 'https://evselects.com/' }, publisher: { '@type': 'Organization', name: 'EVSELECT', url: 'https://evselects.com/' },
    }) }} />
    <nav aria-label="Breadcrumb" className="mb-7 text-sm"><Link href="/articles" className="inline-flex min-h-11 items-center gap-2 text-slate-600 hover:text-lime-800"><ArrowLeft size={16} aria-hidden="true" />บทความและคู่มือ EV</Link></nav>
    <header className="space-y-5">
      <p className="text-sm font-semibold text-lime-800">สมรรถนะ · อ่านสเปกรถให้เข้าใจ</p>
      <h1 className="text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl">{article.title}</h1>
      <p className="max-w-3xl text-lg leading-[1.9] sm:text-xl">คันหนึ่งแรงม้าเยอะกว่า อีกคันแรงบิดสูงกว่า แล้วคันไหนกดคันเร่งแล้วไปได้ดีกว่ากัน? ถ้าเลือกจากตัวเลขสูงสุดเพียงช่องเดียว คุณอาจได้คำตอบผิด — เพราะยังมีน้ำหนักรถ อัตราทด ยาง และความเร็วตอนเริ่มเร่งเข้ามาเกี่ยวด้วย</p>
      <p className="max-w-3xl">บทความนี้พาไล่จากมอเตอร์ถึงล้อด้วยตัวอย่างที่คำนวณตามได้ แล้วใช้หลักเดียวกันอธิบายว่าทำไมรถที่ออกตัวจัดอาจไม่ได้เร่งแซงดีที่สุดทุกช่วงความเร็ว คุณจะได้อ่านโบรชัวร์และผลทดสอบเป็น ก่อนตัดสินใจจากความรู้สึกหลังติดเบาะอย่างเดียว</p>
      <p className="text-sm text-slate-500">อัปเดต <time dateTime={article.updatedAt}>21 กันยายน 2569</time> · เรียบเรียงโดย <BrandHomeLink /> จากแหล่งข้อมูลที่ระบุท้ายบทความ</p>
      <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
        <Image src={article.image} alt={article.imageAlt} width={1920} height={1280} preload sizes="(max-width: 768px) 100vw, 960px" className="h-auto w-full object-contain" />
        <figcaption className="space-y-2 p-4 text-sm leading-relaxed"><p>อินเวอร์เตอร์เหนือมอเตอร์ของ Toyota bZ4X ที่งาน Expo Móvil ประเทศคอสตาริกา ปี 2022 ใช้ประกอบเรื่องระบบขับเคลื่อนไฟฟ้า ไม่ใช่ภาพการทดสอบไดโน่หรือรถสเปกไทยที่เรานำมาทดสอบ</p><ImageCredit author="Mariordo (Mario Roberto Durán Ortiz)" source="https://commons.wikimedia.org/wiki/File:Electric_motor_Toyota_bZ4X_Expo_2022_CRI_4894.jpg" license="CC BY-SA 4.0" licenseUrl="https://creativecommons.org/licenses/by-sa/4.0/" className="" /></figcaption>
      </figure>
    </header>
    <aside className="my-9 rounded-2xl border border-lime-200 bg-lime-50 p-5 sm:p-6" aria-labelledby="quick-answer-title">
      <h2 id="quick-answer-title" className="mb-3 text-xl font-bold text-slate-950">จำสามเรื่องนี้ก่อนดูตัวเลข</h2>
      <ul className="list-disc space-y-2 pl-5"><li><strong>แรงบิดต้องดูว่าอยู่ตรงไหน:</strong> ที่เพลามอเตอร์กับที่ล้อเป็นคนละค่า เพราะมีอัตราทดคั่นอยู่</li><li><strong>แรงม้าไม่ได้มีไว้ดูความเร็วปลายอย่างเดียว:</strong> กำลังที่ใช้ได้ในช่วงนั้นมีผลต่อการเร่งด้วย</li><li><strong>ความเร็วเปลี่ยน คำตอบก็เปลี่ยน:</strong> เวลา 0–100 กม./ชม. ไม่ได้บอกผลเร่งแซงทุกช่วง และสภาพแบตเตอรี่กับยางต้องเทียบกันได้</li></ul>
    </aside>
    <nav aria-label="สารบัญบทความ" className="mb-10 rounded-2xl border border-slate-200 p-5 sm:p-6"><p className="mb-3 font-bold text-slate-950">เลือกอ่านเรื่องที่สงสัย</p><ol className="list-decimal space-y-2 pl-5 text-base">{contents.map(([id, label]) => <li key={id}><a href={`#${id}`} className={linkStyle}>{label}</a></li>)}</ol></nav>
    <div className="space-y-12">
      <Section id="power-and-torque" title="1. แรงม้ากับแรงบิดสัมพันธ์กัน แต่บอกคนละอย่าง">
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 p-5"><h3 className="mb-2 text-xl font-bold text-slate-950">แรงบิด: แรงหมุนที่เพลา</h3><p>Torque วัดเป็นนิวตัน-เมตร (Nm) ลองนึกถึงการใช้ประแจหมุนนอต: ทั้งแรงที่ออกและระยะแขนประแจมีส่วนต่อแรงบิด ในมอเตอร์ ตัวเลขนี้บอกแรงหมุนที่เพลาส่งออกมา ณ เงื่อนไขหนึ่ง</p></div>
          <div className="rounded-2xl border border-slate-200 p-5"><h3 className="mb-2 text-xl font-bold text-slate-950">กำลัง: ทำงานได้เร็วแค่ไหน</h3><p>Power วัดเป็นกิโลวัตต์ (kW) หรือแรงม้า กำลังจากการหมุนขึ้นกับทั้งแรงบิดและความเร็วรอบ จึงไม่ควรแยกว่า “แรงบิดใช้ออกตัว ส่วนแรงม้าใช้แค่ความเร็วปลาย”</p></div>
        </div>
        <p>ความสัมพันธ์ตาม <Source to="rotation">หลักกำลังของการหมุนใน OpenStax</Source> คือ P = T × ω โดย P คือกำลัง T คือแรงบิด และ ω คือความเร็วเชิงมุม เมื่อแปลงหน่วยเป็นรอบต่อนาที (rpm) จะเขียนในหน่วยที่คุ้นเคยได้ดังนี้</p>
        <div className="rounded-2xl bg-slate-100 p-5 text-slate-950"><p className="text-lg font-bold">กำลัง (kW) ≈ แรงบิด (Nm) × รอบต่อนาที ÷ 9,550</p><p className="mt-2 text-base">ตัวอย่างสมมติ: 300 Nm ที่ 3,000 rpm ให้ประมาณ 94 kW ถ้ายังรักษา 300 Nm ได้ที่ 6,000 rpm กำลังจะเป็นประมาณ 188 kW</p></div>
        <p>ที่เพลาหยุดนิ่ง มอเตอร์อาจสร้างแรงบิดได้ แต่กำลังกลที่เพลาเป็นศูนย์เพราะความเร็วรอบเป็นศูนย์ นั่นไม่ได้แปลว่าไม่ใช้ไฟ และไม่ได้หมายความว่ารถจะส่งแรงบิดสูงสุดทั้งหมดลงถนนได้ทันที</p>
        <p>เวลาเทียบโบรชัวร์ ให้ใช้หน่วยเดียวกันก่อน คำว่า “แรงม้า” อาจแสดงเป็น hp หรือ PS ซึ่งไม่ใช่ค่าหน่วยเดียวกัน หากมี kW จากผู้ผลิตให้ใช้เป็นฐานเทียบ และอย่าบวกกำลังสูงสุดมอเตอร์หน้า–หลังเองเมื่อผู้ผลิตไม่ได้ยืนยันกำลังรวมระบบ</p>
      </Section>
      <Section id="wheel-force" title="2. แรงบิดน้อยกว่า ก็อาจสร้างแรงขับที่ล้อได้มากกว่า">
        <p>เฟืองทดช่วยเพิ่มแรงบิดที่ล้อ แลกกับล้อหมุนช้าลงเมื่อเทียบกับมอเตอร์ จึงต้องรู้ทั้งอัตราทดรวม รัศมีการกลิ้งของยาง และการสูญเสียในระบบ ก่อนนำตัวเลข Nm ของรถสองคันมาเทียบกัน</p>
        <div className="rounded-2xl border border-lime-200 bg-lime-50 p-5"><p className="font-bold text-slate-950">แรงขับที่ล้อ ≈ แรงบิดมอเตอร์ × อัตราทดรวม × ประสิทธิภาพ ÷ รัศมีการกลิ้ง</p><p className="mt-2 text-base">แรงขับมีหน่วยนิวตัน (N) ส่วนแรงบิดมีหน่วยนิวตัน-เมตร (Nm) อย่านำสองหน่วยนี้มาใช้แทนกัน</p></div>
        <h3 className="text-xl font-bold text-slate-950">ตัวอย่างสมมติ A กับ B: เปลี่ยนอัตราทด คำตอบก็เปลี่ยน</h3>
        <p>กำหนดให้ทั้งคู่มีประสิทธิภาพส่งกำลัง 95% และรัศมีการกลิ้ง 0.34 เมตรเท่ากัน เพื่อดูเฉพาะผลของแรงบิดกับอัตราทด ตัวเลขต่อไปนี้ไม่ใช่สเปกรถจริงหรือผลไดโน่</p>
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 p-5"><p className="text-sm font-semibold text-slate-500">ตัวอย่าง A</p><h4 className="mt-1 text-xl font-bold text-slate-950">300 Nm × อัตราทด 10:1</h4><p className="mt-3 text-2xl font-bold text-lime-800">≈ 8,382 N</p><p className="mt-2 text-base">300 × 10 × 0.95 ÷ 0.34</p></div>
          <div className="rounded-2xl border border-slate-200 p-5"><p className="text-sm font-semibold text-slate-500">ตัวอย่าง B</p><h4 className="mt-1 text-xl font-bold text-slate-950">400 Nm × อัตราทด 7:1</h4><p className="mt-3 text-2xl font-bold text-lime-800">≈ 7,824 N</p><p className="mt-2 text-base">400 × 7 × 0.95 ÷ 0.34</p></div>
        </div>
        <p>A มีแรงบิดมอเตอร์ต่ำกว่า แต่ตัวอย่างนี้ให้แรงขับที่ล้อมากกว่า อย่างไรก็ดี ยังสรุปว่า A เร่งเร็วกว่าตลอดไม่ได้ เพราะที่ความเร็วรถเดียวกัน อัตราทดที่ต่างกันทำให้รอบมอเตอร์ต่างกัน และแต่ละมอเตอร์อาจรักษาแรงบิดข้างต้นไว้ไม่ได้</p>
        <p>เมื่อแรงสุทธิเท่ากัน รถที่มีมวลมากกว่าจะมีอัตราเร่งต่ำกว่า และแรงขับที่คำนวณได้ยังต้องผ่านข้อจำกัดการยึดเกาะกับการควบคุมของรถด้วย ถ้าจะเลือกยางให้รถแรง อ่าน <Link href="/articles/ev-tyre-and-coilover-selection-guide" className={linkStyle}>วิธีเลือกยางให้ตรงน้ำหนักรถและการใช้งาน</Link> ต่อได้ จำนวนแรงม้าเพียงอย่างเดียวใช้กำหนดขนาดยางหรือพิกัดรับน้ำหนักไม่ได้</p>
      </Section>
      <Section id="motor-regions" title="3. ทำไมแรงบิดลดลงเมื่อมอเตอร์หมุนเร็วขึ้น">
        <p>มอเตอร์และอินเวอร์เตอร์มีขีดจำกัดกระแส แรงดัน และอุณหภูมิ ช่วงรอบต่ำอาจรักษาแรงบิดได้ค่อนข้างคงที่ แต่ไม่ได้มีแรงบิดสูงสุดเท่ากันตลอดทุกความเร็วหรือทุกสถานะแบตเตอรี่</p>
        <h3 className="text-xl font-bold text-slate-950">Constant Torque และ Constant Power อ่านอย่างไร</h3>
        <p>ช่วง <strong>Constant Torque</strong> หมายถึงช่วงที่รักษาแรงบิดได้ใกล้คงที่ เมื่อรอบสูงขึ้นกำลังจึงเพิ่มขึ้นตาม ส่วนช่วง <strong>Constant Power</strong> หมายถึงกำลังใกล้คงที่ ดังนั้นแรงบิดต้องลดลงเมื่อรอบเพิ่ม ตามสมการในหัวข้อแรก</p>
        <p><strong>Back-EMF</strong> คือแรงดันไฟฟ้าเหนี่ยวนำย้อนกลับซึ่งเพิ่มตามความเร็วรอบและสนามแม่เหล็ก การควบคุม <strong>Field Weakening</strong> ปรับกระแสให้สนามแม่เหล็กที่มีผลต่อแรงดันย้อนกลับลดลง เพื่อให้มอเตอร์หมุนพ้นรอบฐานได้ภายใต้ขีดจำกัดแรงดัน โดยแลกกับข้อจำกัดแรงบิด อ่านหลักการใน <Source to="field">เอกสาร Field-Weakening Control ของ MathWorks</Source></p>
        <p>รอบฐานและรูปกราฟขึ้นกับมอเตอร์ ระบบควบคุม และเงื่อนไขไฟฟ้าของชุดนั้น จึงไม่มีเลข 5,000 หรือ 6,000 rpm ที่ใช้แบ่งทุกคัน และการเข้าช่วงกำลังคงที่ก็ไม่ใช่หลักฐานว่าแบตเตอรี่เสื่อมหรือมอเตอร์ร้อนเกินไป</p>
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5"><h3 className="mb-2 text-xl font-bold text-slate-950">จะเชื่อกราฟไดโน่ ต้องรู้ที่มาของกราฟ</h3><p>ดูว่าทดสอบรถรุ่นย่อยใด วัดที่มอเตอร์หรือที่ล้อ ใช้หน่วยอะไร แบตเตอรี่และอุณหภูมิอยู่ในเงื่อนไขไหน หากไม่มีข้อมูลเหล่านี้ เส้นกราฟสวย ๆ ยังใช้จัดอันดับรถไม่ได้ บทความนี้ไม่มีผลไดโน่จากการทดสอบของ <BrandHomeLink /></p></div>
      </Section>
      <Section id="speed-and-drag" title="4. กำลังเท่าเดิม แต่รถเร็วขึ้น แรงที่เหลือเร่งต่ออาจน้อยลง">
        <p>ที่ความเร็วมากกว่าศูนย์ ใช้ความสัมพันธ์ P = F × v ได้ หากกำลังกลที่ส่งถึงล้อคงที่ เมื่อความเร็วเพิ่มขึ้น แรงขับจากกำลังส่วนนี้จะลดลง พร้อมกับแรงต้านอากาศที่เพิ่มขึ้น</p>
        <h3 className="text-xl font-bold text-slate-950">ตัวอย่างคำนวณ: สมมติกำลังถึงล้อคงที่ 100 kW</h3>
        <p>ยังไม่หักแรงต้านอากาศ การกลิ้ง หรือทางชัน และไม่ใช้ตารางนี้ทำนายรถรุ่นใด ตัวเลขความเร็วมีไว้เปรียบเทียบสมการ ไม่ใช่คำแนะนำให้ทดลองบนถนน</p>
        <div className="overflow-x-auto rounded-2xl border border-slate-200" role="region" aria-label="ตารางตัวอย่างกำลังและแรงขับ เลื่อนแนวนอนได้" tabIndex={0}>
          <table className="w-full min-w-[440px] border-collapse text-left text-base"><caption className="sr-only">แรงขับเชิงทฤษฎีเมื่อกำลังที่ล้อคงที่ 100 กิโลวัตต์</caption><thead className="bg-slate-100 text-slate-950"><tr><th scope="col" className="p-4">ความเร็วรถ</th><th scope="col" className="p-4">เมตร/วินาที</th><th scope="col" className="p-4">แรงขับ P ÷ v</th></tr></thead><tbody>{[[60, '16.67', '6,000 N'], [90, '25.00', '4,000 N'], [120, '33.33', '3,000 N']].map(([speed, ms, force]) => <tr key={speed} className="border-t border-slate-200"><th scope="row" className="p-4 font-medium">{speed} กม./ชม.</th><td className="p-4">{ms}</td><td className="p-4 font-semibold text-lime-800">{force}</td></tr>)}</tbody></table>
        </div>
        <p>อีกด้านหนึ่ง <Source to="drag">สมการแรงต้านอากาศของ NASA</Source> ให้แรงต้านแปรตามความเร็วสัมพัทธ์กับอากาศยกกำลังสอง เมื่อปัจจัยอื่นคงเดิมและไม่มีลม ความเร็วเพิ่มเป็นสองเท่าจะทำให้แรงต้านส่วนนี้เพิ่มเป็นสี่เท่า และกำลังที่ใช้ต้านอากาศเพิ่มเป็นแปดเท่า</p>
        <p>ตัวคูณข้างต้นใช้กับแรงต้านอากาศและกำลังส่วนที่ต้านอากาศเท่านั้น ไม่ได้หมายความว่าการใช้ไฟรวมของรถเพิ่มแปดเท่าเสมอ เพราะยังมีการสูญเสียและการใช้พลังงานส่วนอื่น น้ำหนักบรรทุก ลม และทางชันก็เปลี่ยนผลได้</p>
        <p>ดังนั้น “เร่งต่อได้น้อยลง” อาจเกิดได้แม้กำลังยังไม่ลด ไม่ควรสรุปจากความรู้สึกเพียงอย่างเดียวว่ามอเตอร์กำลังถูกตัดเพราะร้อน</p>
      </Section>
      <Section id="two-speed" title="5. เกียร์เดี่ยวกับเกียร์สองสปีด เลือกคนละจุดสมดุล">
        <p>อัตราทดเดียวทำให้มอเตอร์กับล้อมีความสัมพันธ์ตายตัว จึงต้องเลือกให้ครอบคลุมการออกตัวและช่วงความเร็วที่ต้องการ ส่วนการมีอีกอัตราทดเพิ่มทางเลือกให้ใช้ช่วงรอบมอเตอร์ต่างกันได้ แต่ผลลัพธ์ต้องดูทั้งชุดขับเคลื่อน</p>
        <p>ตัวอย่างใน <Source to="taycan">เอกสาร Taycan รุ่นเปิดตัวปี 2019 ของ Porsche</Source> ใช้เกียร์สองสปีดที่เพลาหลัง: เกียร์แรกมีอัตราทดจัดเพื่อการออกตัว ส่วนเกียร์สองยาวกว่าเพื่อประสิทธิภาพและกำลังสำรองที่ความเร็วสูง ตัวอย่างนี้อธิบายแนวคิด ไม่ได้ใช้ยืนยันสเปก Taycan ทุกรุ่นปีปัจจุบัน</p>
        <p>จึงไม่ควรตัดสินว่ารถเกียร์เดี่ยว “แรงไม่สุด” หรือเกียร์สองสปีด “กินไฟกว่าเสมอ” จากจำนวนเกียร์ ถ้าต้องเลือกซื้อ ให้เทียบผลทดสอบของรถรุ่นจริงในช่วงความเร็วที่คุณใช้งาน พร้อมเงื่อนไขแบตเตอรี่และยาง</p>
      </Section>
      <Section id="compare-cars" title="6. ก่อนเทียบรถสองคัน เช็กให้ครบมากกว่า hp และ Nm">
        <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50"><Image src="/images/editorial/tesla-model-3-performance-2024.png" alt="Tesla Model 3 Performance ปี 2024 สีเทา มองจากด้านหน้าซ้าย เห็นตัวรถและล้อครบ" width={1280} height={640} sizes="(max-width: 768px) 100vw, 960px" className="h-auto w-full object-contain" /><figcaption className="space-y-2 p-4 text-sm leading-relaxed"><p>ภาพ Model 3 Performance ปี 2024 ใช้ประกอบตัวอย่างรถสมรรถนะสูง ตัวเลขคำนวณ A/B และตาราง 100 kW ในบทความไม่ใช่ผลทดสอบของรถในภาพ</p><ImageCredit author="iMoD Official" source="https://commons.wikimedia.org/wiki/File:2024_Tesla_Model_3_Performance_front_view_03.png" license="CC BY 3.0" licenseUrl="https://creativecommons.org/licenses/by/3.0/" className="" /></figcaption></figure>
        <ol className="list-decimal space-y-3 pl-6"><li><strong>รุ่น ปี และตลาดเดียวกันหรือไม่:</strong> ชื่อรุ่นคล้ายกันอาจมีระบบขับเคลื่อนและสเปกต่างกัน เริ่มเทียบจาก <Link href="/articles/tesla-model-3-highland-review" className={linkStyle}>ข้อมูล Model 3 สำหรับตลาดไทย</Link> และเอกสารของรถที่สนใจ</li><li><strong>ตัวเลขวัดตรงไหน:</strong> กำลังที่มอเตอร์ กำลังรวมระบบ และกำลังที่ล้อไม่ใช่ช่องเดียวกัน อย่าเทียบค่าจากคนละวิธีวัดแล้วสรุปผู้ชนะ</li><li><strong>เร่งช่วงไหน:</strong> 0–100 กม./ชม. วัดการออกตัวรวมกับการเร่ง แต่ผลเร่งแซงต้องดูช่วงความเร็วของการทดสอบนั้นโดยตรง</li><li><strong>รถอยู่ในเงื่อนไขไหน:</strong> ระดับแบตเตอรี่ อุณหภูมิ โหมดขับขี่ ยาง พื้นผิว และน้ำหนักบรรทุกต้องระบุให้พอเทียบกันได้</li></ol>
        <p><Source to="status">คู่มือ Model 3 2024+ ภาษาไทย</Source> ระบุว่ารถอาจจำกัดกำลังเมื่อแบตเตอรี่เหลือน้อย ระบบร้อนหรือเย็น หรือพบความผิดปกติของอินเวอร์เตอร์ ส่วน <Source to="modes">โหมดการเร่งความเร็ว</Source> ก็เปลี่ยนการตอบสนองและการจัดการอุณหภูมิได้ จึงต้องแยก “อัตราเร่งตามเงื่อนไขรถ” ออกจาก “ตัวเลขสูงสุดในโบรชัวร์”</p>
        <p>หลังจากเข้าใจสเปกแล้ว ถ้าปัญหาที่คุณเจอคือรถโยนหรือกระแทกหลังอัปเกรดล้อ ให้ต่อด้วย <Link href="/articles/ev-suspension-tuning-guide" className={linkStyle}>วิธีไล่อาการช่วงล่างก่อนเปลี่ยนโช้ค</Link> แรงม้าเพิ่มไม่ได้แปลว่าต้องใช้สปริงแข็งขึ้นตามสัดส่วน และจำนวนคลิกของโช้คก็ไม่ได้บอกความสามารถรองรับแรงม้า</p>
      </Section>
      <Section id="questions" title="คำถามที่เจอบ่อย">
        <div className="space-y-4">{[
          ['แรงบิดสูงกว่า แปลว่าออกตัวเร็วกว่าเสมอไหม?', 'ไม่เสมอ ต้องดูอัตราทด แรงขับที่ล้อ น้ำหนักรถ ยาง และระบบควบคุมร่วมกัน ตัวเลขแรงบิดสูงสุดที่มอเตอร์เพียงค่าเดียวไม่พอจัดอันดับอัตราเร่ง'],
          ['มอเตอร์มีแรงบิดตอน 0 rpm แล้วทำไมกำลังเป็นศูนย์?', 'กำลังกลจากการหมุนเท่ากับแรงบิดคูณความเร็วเชิงมุม ที่เพลายังไม่หมุน กำลังกลจึงเป็นศูนย์แม้มีแรงบิดอยู่ แต่ระบบยังอาจใช้ไฟและเกิดความร้อนได้'],
          ['Field Weakening แปลว่ารถเสียหรือแบตเตอรี่เสื่อมหรือไม่?', 'ไม่ใช่ เป็นวิธีควบคุมมอเตอร์เพื่อขยายช่วงรอบภายใต้ข้อจำกัดแรงดัน ต้องดูข้อความเตือนและข้อมูลของรถประกอบ ไม่วินิจฉัยความเสียหายจากคำนี้หรือจากความรู้สึกว่าเร่งแผ่วเพียงอย่างเดียว'],
          ['จะรู้ได้อย่างไรว่าคันไหนเร่งแซงดีกว่า?', 'ดูผลทดสอบช่วงความเร็วที่สนใจของรุ่นย่อยจริง พร้อมระดับแบตเตอรี่ อุณหภูมิ โหมดขับขี่และเงื่อนไขทดสอบ หากข้อมูลไม่ตรงกัน ให้ถือว่ายังเปรียบเทียบไม่ได้ แทนการใช้แรงม้าสูงสุดฟันธง'],
        ].map(([question, answer]) => <details key={question} className="rounded-2xl border border-slate-200 p-5"><summary className="cursor-pointer text-lg font-semibold text-slate-950"><h3 className="inline text-lg font-semibold">{question}</h3></summary><p className="mt-3">{answer}</p></details>)}</div>
      </Section>
      <Section id="sources" title="แหล่งข้อมูลและขอบเขตของบทความ">
        <p className="text-base">ตรวจแหล่งข้อมูลวันที่ 21 กันยายน 2569 บทความแยกหลักฟิสิกส์ ตัวอย่างคำนวณสมมติ และข้อมูลผู้ผลิตออกจากกัน ไม่มีการอ้างว่าเราไดโน่หรือจับเวลารถเหล่านี้เอง รายละเอียดและซอฟต์แวร์ของรถจริงอาจต่างกัน ให้ยึดเอกสารตรงรุ่นและตลาด</p>
        <ul className="list-disc space-y-3 pl-5 text-base">{Object.entries(sources).map(([key, source]) => <li key={key}><Source to={key as keyof typeof sources}>{source.title}</Source></li>)}</ul>
        <p className="text-base">อ่านวิธีแยกข้อมูลผู้ผลิตออกจากข้อสังเกตใน <Link href="/editorial-policy" className={linkStyle}>แนวทางการเขียนบทความ</Link> ของ <BrandHomeLink /></p>
      </Section>
    </div>
    <footer className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-6 text-base"><p><BrandHomeLink /> · เข้าใจรถให้ลึก เลือกให้ตรงใจ</p><Link href="/articles" className={`inline-flex min-h-11 items-center gap-2 ${linkStyle}`}>เลือกอ่านบทความต่อ <ArrowRight size={18} aria-hidden="true" /></Link></footer>
  </article>;
}
