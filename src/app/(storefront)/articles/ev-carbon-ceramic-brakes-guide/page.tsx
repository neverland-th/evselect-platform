import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, CalendarDays, Clock, Disc3, Download } from 'lucide-react';
import { brakeArticle, brakeSources } from '@/lib/brake-article';
import BrakeEnergyLab from '@/components/articles/BrakeEnergyLab';
import BrakeBrandCompare from '@/components/articles/BrakeBrandCompare';
import styles from '@/components/articles/BrakeGuide.module.css';

export const metadata: Metadata = {
  title: `${brakeArticle.title} | EVSELECT`,
  description: brakeArticle.description,
  alternates: { canonical: brakeArticle.path },
  openGraph: { title: brakeArticle.title, description: brakeArticle.description, url: brakeArticle.url, siteName: 'EVSELECT Thailand', locale: 'th_TH', type: 'article', publishedTime: brakeArticle.publishedAt, modifiedTime: brakeArticle.updatedAt, images: [{ url: brakeArticle.cover, width: 1308, height: 818, alt: brakeArticle.coverAlt }] },
  twitter: { card: 'summary_large_image', title: brakeArticle.title, description: brakeArticle.description, images: [brakeArticle.cover] },
};

function Ref({ to, children }: { to: keyof typeof brakeSources; children: ReactNode }) {
  return <a href={brakeSources[to].url} className="font-medium text-lime-800 underline decoration-lime-300 underline-offset-4 hover:text-lime-950">{children}</a>;
}
function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-28 space-y-5"><h2 id={`${id}-title`} className="border-l-4 border-lime-500 pl-4 text-2xl font-bold leading-snug text-slate-950 sm:text-3xl">{title}</h2>{children}</section>;
}
function Note({ children }: { children: ReactNode }) { return <aside className={styles.note}>{children}</aside>; }
function Photo({ src, alt, width, height, children }: { src: string; alt: string; width: number; height: number; children: ReactNode }) {
  return <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-white"><Image src={src} alt={alt} width={width} height={height} sizes="(max-width: 639px) 92vw, 460px" className="mx-auto h-auto max-h-[30rem] w-full object-contain" /><figcaption className="border-t border-slate-100 px-4 py-3 text-sm leading-relaxed text-slate-500">{children}</figcaption></figure>;
}

const contents = [
  ['quick-choice', 'เริ่มจากอาการและเป้าหมาย'], ['energy', 'ลองคำนวณภาระเบรก'], ['disc-size', 'จานใหญ่และหนาช่วยอะไร'], ['surface', 'จานเรียบ / เซาะร่อง / เจาะรู'], ['horsepower', 'กี่แรงม้าควรใช้เบรกอะไร'], ['value', 'ลำดับอัปเกรดที่คุ้ม'], ['japan', 'ตัวเลือกญี่ปุ่น ENDLESS'], ['brand-compare', 'กดเทียบ Performance / ราคา / ฝุ่น'], ['carbon-ceramic', 'Carbon Ceramic สำหรับสายสุด'], ['thai-roads', 'ถนนไทยกับคำกล่าว 1,000°C'], ['temperature', 'พลังงานไม่ใช่อุณหภูมิ'], ['before-buying', 'เช็กลิสต์ก่อนซื้อ'], ['faq', 'คำถามที่คนซื้อเบรกเจอบ่อย'],
] as const;

const faqs = [
  { q: 'รถ EV 300 แรงม้าจำเป็นต้องใช้เบรก 6 พอตไหม?', a: 'ไม่มีเกณฑ์ 300 แรงม้าที่ใช้รับรองความจำเป็นของ 6 พอตได้ทุกคัน ต้องดูน้ำหนักรวม ความเร็ว ยาง การเบรกซ้ำ และอาการของระบบเดิม จำนวนลูกสูบไม่ได้บอกแรงหนีบหรือความสามารถระบายความร้อนด้วยตัวมันเอง' },
  { q: 'จาน 380 mm หยุดสั้นกว่าจาน 355 mm เสมอหรือไม่?', a: 'ไม่เสมอ จานใหญ่ขึ้นอาจเพิ่มแขนแรงและความสามารถรับความร้อนเมื่อออกแบบทั้งชุดเหมาะสม แต่หากยางกับพื้นถนนเป็นข้อจำกัดอยู่แล้ว ระยะหยุดครั้งเดียวอาจไม่ได้ลดตามขนาดจาน ต้องแยกการหยุดครั้งเดียวจากความสม่ำเสมอเมื่อเบรกซ้ำ' },
  { q: 'จานเรียบแปลว่าไม่มีช่องระบายอากาศหรือเปล่า?', a: 'ไม่ใช่ จานผิวเรียบสามารถมีช่องระบายอากาศภายในได้ รูที่มองเห็นบนผิวจานกับช่องครีบระหว่างหน้าจานเป็นคนละส่วนของโครงสร้าง ต้องดูหน้าตัดและข้อมูลรุ่นจริง' },
  { q: 'ซื้อจานมาเจาะรูเพิ่มเองได้ไหม?', a: 'ไม่ควรทำ รูปแบบ ขนาด และตำแหน่งรูเป็นส่วนหนึ่งของการออกแบบและทดสอบความทนทาน การเจาะจานที่ไม่ได้ออกแบบมาเช่นนั้นไม่เทียบเท่าจานเจาะรูจากผู้ผลิต ให้เลือกชิ้นส่วนที่ได้รับการรับรองสำหรับชุดรถนั้น' },
  { q: 'ผ้าเบรกเซรามิกใช้กับจาน Carbon Ceramic ได้เลยไหม?', a: 'ไม่ได้ ชื่อวัสดุในผ้าเบรกไม่ใช่การรับรองความเข้ากันได้ ต้องตรวจ compound กับจานเป็นคู่ ตัวอย่าง Brembo Xtra Ceramic P65017NX ระบุห้ามใช้กับจาน Carbon Ceramic และ ENDLESS ก็มีผ้าสำหรับจาน CCM แยกต่างหาก' },
  { q: 'Carbon Ceramic ต้องเบรกให้ร้อนก่อนทุกครั้งหรือไม่?', a: 'อย่าเหมารวมจากเบรก Carbon–Carbon ของรถแข่งไปยัง CCB สำหรับถนน เบรกถนนต้องทำงานจากสภาพเริ่มใช้งานตามที่ผู้ผลิตออกแบบ ฟีลและข้อกำหนดขึ้นกับชุดจานและผ้า หากเบรกเย็นแล้วผิดปกติควรตรวจระบบ ไม่ใช่ลากเบรกบนถนนเพื่อวอร์มตามคำบอกต่อ' },
  { q: 'DOT 5.1 ดีกว่า DOT 4 จึงเปลี่ยนได้ทุกคันไหม?', a: 'ไม่ใช่ลำดับเกรดที่ใช้แทนข้อกำหนดรถได้ เลือกชนิด มาตรฐาน ความหนืด และการอนุมัติที่คู่มือรถกำหนด ไม่ใช้จุดเดือดสูงเพียงตัวเดียวตัดสิน ความเข้ากันได้กับระบบ ABS/ESC และรอบบำรุงรักษายังต้องตรวจ' },
  { q: 'ENDLESS MX72 PLUS เหมาะกว่ารุ่น SSM PLUS สำหรับทุกคนหรือไม่?', a: 'ไม่ใช่ SSM PLUS เน้นลดฝุ่นและการใช้งานถนน ส่วน MX72 PLUS เพิ่มขอบเขตการใช้งานที่ร้อนกว่า ผ้าแต่ละ compound มีข้อแลกเปลี่ยนเรื่องเสียง ฝุ่น การสึก และฟีล ไม่ควรซื้อรุ่นร้อนสุดเพียงเพราะตัวเลขสูงกว่า ต้องมีรหัสที่รองรับคาลิเปอร์และจานของรถด้วย' },
  { q: 'ดอยอินทนนท์หรือภูทับเบิกทำเบรกถึง 1,000°C จริงไหม?', a: 'Data unavailable: ยังไม่พบผลวัดที่ระบุรถ จุดวัด โหลด ความเร็ว สถานะแบตเตอรี่ และรูปแบบเบรกครบพอจะยืนยันเช่นนั้น แหล่งทางการยืนยันสภาพทางลาดชันได้ แต่ไม่ใช่หลักฐานอุณหภูมิของรถแต่ละคัน' },
  { q: 'ซื้อ CCB เพราะชอบความสวยและอยากได้ชุดสุด เป็นเหตุผลที่ผิดไหม?', a: 'ไม่ผิด หากงบพร้อมและยอมรับต้นทุนเปลี่ยนชิ้นส่วน การตรวจสภาพ และข้อจำกัดของชุดนั้นได้ ความชอบวัสดุ งานผลิต น้ำหนัก และรูปลักษณ์เป็นคุณค่าที่เจ้าของเลือกได้ เพียงไม่ต้องอ้างว่ารถ EV ทุกคันจำเป็นต้องใช้แบบเดียวกัน' },
];

export default function CarbonCeramicBrakesGuidePage() {
  const articleSchema = { '@context': 'https://schema.org', '@type': 'BlogPosting', headline: brakeArticle.title, description: brakeArticle.description, datePublished: brakeArticle.publishedAt, dateModified: brakeArticle.updatedAt, mainEntityOfPage: brakeArticle.url, image: new URL(brakeArticle.cover, brakeArticle.url).href, inLanguage: 'th-TH', author: { '@type': 'Organization', name: 'EVSELECT', url: 'https://evselects.com' }, citation: Object.values(brakeSources).map(source => source.url) };
  return <article className={`${styles.article} mx-auto max-w-5xl bg-white px-4 py-10 font-sans text-slate-900 sm:px-6 md:py-16 lg:px-8`}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema).replace(/</g, '\\u003c') }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'บทความ', item: 'https://evselects.com/articles' }, { '@type': 'ListItem', position: 2, name: brakeArticle.title, item: brakeArticle.url }] }) }} />
    <Link href="/articles" className="mb-7 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-slate-500 hover:text-lime-800"><ArrowLeft className="h-4 w-4" aria-hidden="true" />กลับไปบทความและคู่มือ EV</Link>
    <header className="space-y-6">
      <span className="inline-flex items-center gap-2 rounded-full bg-lime-100 px-4 py-2 text-sm font-bold text-lime-900"><Disc3 className="h-4 w-4" aria-hidden="true" />เลือกของให้ตรงงาน · ระบบเบรก EV</span>
      <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">{brakeArticle.title}</h1>
      <p className="text-lg font-semibold leading-relaxed text-lime-800 sm:text-xl">{brakeArticle.subtitle}</p>
      <p className="max-w-3xl text-base leading-[1.95] text-slate-600 sm:text-lg">อยากเบรกมั่นใจขึ้น ไม่จำเป็นต้องเริ่มที่ชุดแพงที่สุด แต่ต้องรู้ว่ากำลังแก้อะไร: ระยะหยุดครั้งแรก ความสม่ำเสมอเมื่อลงเขา ฝุ่นบนล้อ หรืออยากได้ชุดสุดที่มองแล้วมีความสุข บทความนี้แยกแต่ละโจทย์ให้เลือกได้ด้วยเหตุผล</p>
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-500"><span className="inline-flex items-center gap-2"><CalendarDays className="h-4 w-4" aria-hidden="true" />อัปเดต 19 ก.ย. 2569</span><span className="inline-flex items-center gap-2"><Clock className="h-4 w-4" aria-hidden="true" />ประมาณ {brakeArticle.readTime}</span><span>EVSELECT · เรียบเรียงจากข้อมูลผู้ผลิต</span></div>
      <figure className="overflow-hidden rounded-3xl border border-slate-200"><Image src={brakeArticle.cover} alt={brakeArticle.coverAlt} width={1308} height={818} sizes="(max-width: 1024px) 100vw, 960px" priority className="h-auto w-full" /><figcaption className="bg-slate-50 px-5 py-4 text-sm leading-relaxed text-slate-500">ภาพถ่าย Porsche PCCB แสดงจาน Carbon Ceramic กับคาลิเปอร์เหลืองทอง · ภาพ: <Ref to="porsche">Porsche</Ref> · ภาพประกอบเทคโนโลยี ไม่ใช่ชุดที่รับรองให้ติดตั้งกับ EV ทุกรุ่น</figcaption></figure>
    </header>

    <div className="mt-10 space-y-12 text-base leading-[1.95] sm:text-lg">
      <aside className="rounded-2xl border border-lime-200 bg-lime-50 p-5 sm:p-7">
        <h2 className="mb-3 text-xl font-bold text-slate-950 sm:text-2xl">คำแนะนำของเรา: จ่ายให้ข้อจำกัดที่เจอจริง</h2>
        <p><strong>รถใช้ถนนทั่วไป เริ่มจากยางและระบบเดิมที่สมบูรณ์ แล้วเลือกผ้าเบรกกับน้ำมันตามข้อกำหนดรถ</strong> ขยับไปจานหรือชุดใหญ่เมื่อมีเหตุผลเรื่องความร้อน ความทน หรือความต้องการเฉพาะ ส่วน Carbon Ceramic เหมาะให้พิจารณาเมื่อคุณให้ค่ากับน้ำหนัก วัสดุ รูปลักษณ์ และยอมรับค่าดูแลของชุดนั้นได้</p>
        <p className="mt-3 text-sm text-slate-600">นี่คือข้อเสนอเชิงบรรณาธิการตามลักษณะใช้งาน ไม่ใช่ผลทดสอบรถทุกคัน หรือคำรับรองสินค้าเฉพาะรุ่น EVSELECT ยังไม่มีสินค้าพร้อมจำหน่าย และยังไม่เปิดรับคำสั่งซื้อหรือชำระเงิน</p>
      </aside>

      <nav aria-label="สารบัญบทความเบรก EV" className="rounded-2xl border border-slate-200 p-5 sm:p-7"><h2 className="mb-4 text-xl font-bold">เลือกอ่านจากสิ่งที่กำลังสงสัย</h2><ol className="grid gap-x-6 gap-y-1 sm:grid-cols-2">{contents.map(([id, title], index) => <li key={id}><a href={`#${id}`} className="flex min-h-11 items-start gap-3 py-2 text-base text-slate-700 hover:text-lime-800"><span className="font-bold text-lime-700">{String(index + 1).padStart(2, '0')}</span>{title}</a></li>)}</ol></nav>

      <Section id="quick-choice" title="1. อยากให้เบรกดีขึ้น — ดีขึ้นด้านไหน?">
        <p>คำว่า “เบรกไม่อยู่” อาจหมายถึงคนละปัญหา การเริ่มจากอาการช่วยลดโอกาสซื้อคาลิเปอร์ใหม่ทั้งที่ข้อจำกัดอยู่ที่ยาง ผ้าเบรก หรือการบำรุงรักษา กดแต่ละสถานการณ์เพื่อดูสิ่งที่ควรตรวจเป็นลำดับแรก</p>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            ['หยุดครั้งเดียวแล้ว ABS ทำงานไว', 'ตรวจยาง แรงดัน สภาพถนน โหลดรถ และการทำงานของระบบก่อน หากยางถึงขีดจำกัดการยึดเกาะอยู่แล้ว จานที่ใหญ่ขึ้นไม่ได้เพิ่มแรงยึดเกาะให้พื้นถนนโดยอัตโนมัติ การทดสอบระยะหยุดต้องมีพื้นที่และผู้ควบคุมที่เหมาะสม'],
            ['ช่วงแรกดี พอเบรกซ้ำแล้วแรงลด', 'ต้องแยกผ้าเบรกเฟด อุณหภูมิเกินขอบเขต และปัญหาอื่นของระบบ ขอการตรวจสภาพและข้อมูลอุณหภูมิจากผู้เชี่ยวชาญก่อนเลือก compound จาน หรือช่องระบายอากาศใหม่'],
            ['แป้นนิ่ม จม หรือระยะเหยียบเปลี่ยน', 'เป็นอาการที่ต้องตรวจระบบไฮดรอลิก น้ำมัน การรั่ว และอากาศในระบบ ไม่ใช้การซื้อผ้าเบรกที่กัดขึ้นแทนการซ่อม และไม่ขับทดลองต่อเพื่อพิสูจน์ว่าอาการจะหาย'],
            ['ใช้งานปกติ แต่ฝุ่นเยอะหรืออยากได้งานสวย', 'แยกเป้าหมายนี้ได้เลย: ผ้าแนวฝุ่นน้อยที่เข้ากันกับจานอาจตรงกว่า BBK ส่วนชุดคาลิเปอร์หรือ CCB อาจตอบความชอบด้านงานผลิตและรูปลักษณ์ ควรบอกงบและข้อแลกเปลี่ยนที่ยอมรับได้ให้ชัด'],
          ].map(([title, text]) => <details className={styles.detail} key={title}><summary>{title}</summary><p className="text-base text-slate-600">{text}</p></details>)}
        </div>
        <Note>เบรกที่แรงพอจะทำให้ระบบ ABS จำกัดแรงอยู่แล้ว กับเบรกที่รับความร้อนซ้ำได้สม่ำเสมอ เป็นคนละโจทย์ ส่วนอาการผิดปกติไม่ควรวินิจฉัยจากข้อความอย่างเดียว ให้ผู้เชี่ยวชาญตรวจรถก่อนใช้งานต่อ</Note>
      </Section>

      <Section id="energy" title="2. แรงม้าพารถไปเร็ว แต่มวลกับความเร็วกำหนดพลังงานที่ต้องลด">
        <p>สมมติ EV รวมคนและสัมภาระหนัก 2,200 kg เบรกจาก 100 → 0 km/h จะต้องลดพลังงานการเคลื่อนที่ประมาณ <strong>0.85 MJ</strong> หากเริ่มที่ 120 km/h จะเป็น <strong>1.22 MJ หรือเพิ่ม 44%</strong> รถ 300 กับ 600 แรงม้าที่หนักเท่ากันและเริ่มเบรกจากความเร็วเดียวกันมีพลังงานส่วนนี้เท่ากัน แต่รถกำลังสูงอาจเร่งกลับไปเร็วและสร้างรอบเบรกหนักได้ถี่กว่า</p>
        <BrakeEnergyLab />
        <p>ใน EV มอเตอร์สามารถรับพลังงานบางส่วนผ่าน Regenerative Braking แต่ไม่ควรสมมติว่าแรงหน่วงเท่ากันทุกครั้ง ตัวอย่าง <Ref to="teslaBrakes">คู่มือ Tesla Model 3 ภาษาไทย</Ref> ระบุข้อจำกัดเมื่อแบตเตอรี่เย็นหรือเต็ม จึงต้องดูสถานะรถจริง โดยเฉพาะก่อนลงเขาและเมื่อบรรทุกมาก รถต่างรุ่นอาจมีวิธีผสมเบรกมอเตอร์กับเบรกเสียดทานต่างกัน</p>
      </Section>

      <Section id="disc-size" title="3. จานใหญ่ขึ้น หนาขึ้น มีประโยชน์ต่างกันอย่างไร?">
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="rounded-2xl bg-slate-950 p-6 text-white">
            <h3 className="text-xl font-bold text-lime-300">เส้นผ่านศูนย์กลาง → แขนแรง</h3>
            <svg viewBox="0 0 320 225" role="img" aria-label="แผนภาพแขนแรงจากศูนย์กลางจานถึงบริเวณผ้าเบรก ตำแหน่งผ้าไกลขึ้นเพิ่มแรงบิดเมื่อแรงเสียดทานเท่ากัน" className="mx-auto my-4 w-full max-w-xs">
              <circle cx="140" cy="112" r="96" fill="none" stroke="#475569" strokeWidth="24" /><circle cx="140" cy="112" r="32" fill="#334155" /><circle cx="140" cy="112" r="7" fill="#e2e8f0" /><path d="M140 112 H238" stroke="#bef264" strokeWidth="4" /><path d="M229 103 L239 112 L229 121" fill="none" stroke="#bef264" strokeWidth="4" /><rect x="224" y="64" width="34" height="92" rx="10" fill="#84cc16" /><path d="M140 112 H212" stroke="#f8fafc" strokeWidth="2" strokeDasharray="5 4" />
            </svg>
            <p className="text-base leading-relaxed text-slate-200">แรงบิดเบรก ≈ แรงเสียดทานที่ผิว × รัศมีทำงาน การย้ายแนวทำงานของผ้าออกห่างศูนย์กลางเพิ่มแขนแรง</p>
          </div>
          <div className="rounded-2xl border border-slate-200 p-6"><h3 className="text-xl font-bold">ความหนา มวล และช่องลม → การรับและคายความร้อน</h3><p className="mt-4">เนื้อจานมากขึ้นช่วยรับพลังงานโดยอุณหภูมิเพิ่มช้าลงภายใต้เงื่อนไขเดียวกัน ส่วนช่องระบายอากาศภายในและอากาศที่ไหลเข้าช่วยพาความร้อนออก จานที่หนาหรือใหญ่ขึ้นอาจหนักขึ้น จึงต้องชั่งน้ำหนักชุดจริง</p><p className="mt-3 text-sm text-slate-500">ภาพซ้ายเป็นแผนภาพอธิบายของ EVSELECT ไม่ใช่แบบผลิตหรือภาพทดสอบชิ้นส่วน</p></div>
        </div>
        <p><Ref to="apUpgrade">AP Racing อธิบายประโยชน์ของขนาดจานและการระบายอากาศ</Ref> ขณะที่ <Ref to="apRace">แนวทางเลือกจานสำหรับรถแข่ง</Ref> ผูกความหนากับภาระงานและการระบายความร้อนด้วย จึงไม่ควรตัดสินจากเส้นผ่านศูนย์กลางเพียงค่าเดียว</p>
        <Note><strong>ตัวอย่างทางคณิตศาสตร์:</strong> ถ้ารัศมีทำงานจริงเพิ่มจาก 120 เป็น 135 mm และแรงเสียดทานคงเดิม แรงบิดจะเพิ่ม 12.5% แต่ไม่ได้แปลว่าระยะหยุดสั้นลง 12.5% และห้ามนำอัตราส่วนนี้ไปใช้กับเส้นผ่านศูนย์กลางนอกโดยไม่รู้ตำแหน่งผ้าและรูปทรงจริง</Note>
        <h3 className="text-xl font-bold">ดูตัวเลขจากรถจริง แต่ต้องตรงคู่มือคันนั้น</h3>
        <p><Ref to="teslaSize">คู่มือ Model 3 ภาษาไทยที่ตรวจวันที่ 19 ก.ย. 2569</Ref> แยกจานหน้า non-Performance 320 mm กับ Performance 355 mm โดยจานหลังที่หน้านั้นระบุ 335 mm ทั้งคู่ นี่เป็นตัวอย่างว่ารุ่นย่อยมีความต่าง ไม่ใช่รายการสเปกครอบคลุม Model 3 ทุกปีหรือคำสั่งให้เปลี่ยนตามกัน ให้ตรวจ VIN ปี รุ่นย่อย ตลาด และคู่มือที่ตรงรถก่อน</p>
        <p><strong>จำนวนพอตก็ไม่ใช่คะแนน:</strong> พื้นที่ลูกสูบรวม ความแข็งตัวคาลิเปอร์ ขนาดผ้า แม่ปั๊ม และสมดุลหน้า–หลังต้องทำงานร่วมกัน การซื้อ 6 พอตเพราะมากกว่า 4 พอต โดยไม่ตรวจทั้งระบบยังตอบไม่ได้ว่าจะแก้ปัญหาเดิมอย่างไร</p>
      </Section>

      <Section id="surface" title="4. จานเรียบ เซาะร่อง เจาะรู — ลายจานบอกอะไรและไม่บอกอะไร">
        <p>แยกสามเรื่องก่อน: <strong>วัสดุจาน</strong> เช่นเหล็กหล่อหรือ CCB, <strong>หน้าจาน</strong> เช่นเรียบหรือมีรู และ <strong>ช่องระบายอากาศภายใน</strong> จานผิวเรียบก็เป็นจานมีช่องลมได้ ส่วนจานมีรูไม่ได้ทำให้วัสดุกลายเป็น Carbon Ceramic</p>
        <div className="grid items-start gap-4 sm:grid-cols-3">
          <Photo src="/images/articles/brembo-prime-brake-disc.webp" alt="รายละเอียดจาน Brembo Prime ผิวเรียบกับช่องระบายอากาศที่ขอบจาน" width={399} height={381}><strong className="text-slate-800">ผิวเรียบ + ช่องลมภายใน</strong><br />ภาพผลิตภัณฑ์: <Ref to="prime">Brembo Prime</Ref></Photo>
          <Photo src="/images/articles/brembo-max-slotted-disc.webp" alt="จาน Brembo Max แสดงร่องโค้งบนผิวเสียดทาน" width={550} height={388}><strong className="text-slate-800">เซาะร่อง / Slotted</strong><br />ภาพผลิตภัณฑ์: <Ref to="max">Brembo Max</Ref></Photo>
          <Photo src="/images/articles/brembo-xtra-drilled-disc.webp" alt="จาน Brembo Xtra แสดงรูเจาะบนผิวเสียดทาน" width={575} height={650}><strong className="text-slate-800">เจาะรู / Drilled</strong><br />ภาพผลิตภัณฑ์: <Ref to="xtra">Brembo Xtra</Ref></Photo>
        </div>
        <div className="overflow-hidden rounded-2xl border border-slate-200"><table className={styles.table}><caption>เลือกจากการใช้งานและข้อมูลของรุ่น ไม่เรียงลายจานเป็นระดับความเก่ง</caption><thead><tr><th scope="col">หน้าจาน</th><th scope="col">เหตุผลที่อาจเลือก</th><th scope="col">สิ่งที่ต้องแลกและตรวจ</th></tr></thead><tbody>
          <tr><th scope="row">เรียบ</th><td data-label="เหตุผลที่อาจเลือก">จุดเริ่มต้นที่สมเหตุผลสำหรับถนน หากขนาด วัสดุ ช่องลม และผ้าเหมาะกับงาน ให้ความสำคัญกับราคาอะไหล่และความเรียบง่ายในการดูแล</td><td data-label="สิ่งที่ต้องตรวจ">ยังมีข้อจำกัดอุณหภูมิและการสึกเหมือนทุกระบบ ไม่ใช่เลือกของราคาต่ำสุดโดยไม่รู้สเปก</td></tr>
          <tr><th scope="row">เซาะร่อง</th><td data-label="เหตุผลที่อาจเลือก">ร่องช่วยจัดการผิวผ้า สิ่งตกค้าง และน้ำ/ก๊าซที่ผิวสัมผัสตามรูปแบบที่ผู้ผลิตออกแบบ มีรุ่นรองรับการเบรกซ้ำ</td><td data-label="สิ่งที่ต้องตรวจ">เสียงและการสึกของผ้าอาจเพิ่ม ขึ้นกับร่องกับ compound ไม่ได้เพิ่มการยึดเกาะของยาง</td></tr>
          <tr><th scope="row">เจาะรู</th><td data-label="เหตุผลที่อาจเลือก">รูช่วยจัดการน้ำและก๊าซที่ผิวสัมผัสในผลิตภัณฑ์ที่ออกแบบมา รวมถึงรูปลักษณ์ที่หลายคนชอบ</td><td data-label="สิ่งที่ต้องตรวจ">ความทนต่อรอบร้อน–เย็นและรอยร้าวต้องพิจารณาเป็นรุ่น จำนวนรูมากไม่ได้แปลว่าดีกว่า ห้ามเจาะจานเดิมเพิ่มเอง</td></tr>
          <tr><th scope="row">ร่อง + รู / ร่อง + หลุม</th><td data-label="เหตุผลที่อาจเลือก">เป็นแนวทางออกแบบอีกแบบ รูทะลุกับหลุมตื้นไม่ใช่โครงสร้างเดียวกัน</td><td data-label="สิ่งที่ต้องตรวจ">ต้องอ่านรายละเอียดจริง ไม่สรุปว่าเอาสองลายมารวมแล้วได้ประโยชน์บวกกันโดยไม่มีข้อแลกเปลี่ยน</td></tr>
        </tbody></table></div>
        <p><Ref to="bremboSurface">Brembo อธิบายร่องกับรูและความสำคัญของการทดสอบรูปแบบ</Ref> ส่วน <Ref to="apUpgrade">AP Racing แนะนำจานเซาะร่องสำหรับ Track Day ในผลิตภัณฑ์ที่กล่าวถึง</Ref> จึงเห็นได้ว่า “ลงสนามต้องจานเจาะรู” ไม่ใช่กฎทั่วไป</p>
        <Note>คำแนะนำด้านความคุ้มค่าในตารางเป็นการสังเคราะห์ของ EVSELECT ภาพเป็นตัวอย่างรูปแบบจากผู้ผลิต ไม่ยืนยันว่าจานตามภาพติดตั้งกับรถของผู้อ่านได้ ต้องตรวจรหัสชิ้นส่วนก่อนเสมอ</Note>
      </Section>

      <Section id="horsepower" title="5. ถ้าถามว่า EV ไม่เกินกี่แรงม้า ควรลงทุนกับเบรกแบบไหน?">
        <p><strong>ไม่มีเส้นแบ่งแรงม้าสากลที่ใช้รับรองขนาดจาน จำนวนพอต หรือวัสดุได้</strong> รถ 250 แรงม้าที่บรรทุกลงเขาต่อเนื่องอาจสร้างโจทย์ความร้อนหนักกว่ารถ 600 แรงม้าที่ขับประจำวันตามปกติ ตารางนี้ใช้ช่วงกำลังเพื่อจัดบทสนทนา ไม่ใช่พิกัดความปลอดภัยของเบรก</p>
        <div className="overflow-hidden rounded-2xl border border-slate-200"><table className={styles.table}><caption>แนวทางตั้งคำถามตามรถและงานที่ใช้ — ทุกช่องยังต้องตรวจตรงรุ่น</caption><thead><tr><th scope="col">กลุ่มรถโดยคร่าว</th><th scope="col">ถนนประจำวัน</th><th scope="col">เบรกหนักซ้ำ / ลงเขาบรรทุก / สนาม</th></tr></thead><tbody>
          <tr><th scope="row">ไม่เกิน 300 hp</th><td data-label="ถนนประจำวัน">เริ่มจากสภาพระบบเดิม ยาง ผ้าถนนที่ตรงโจทย์ และน้ำมันตามคู่มือ ไม่ข้ามไป BBK ด้วยเหตุผลว่าเป็น EV อย่างเดียว</td><td data-label="งานหนักต่อเนื่อง">ตรวจน้ำหนักและข้อจำกัดความร้อนเช่นเดียวกับรถแรงสูง ชุดเดิมไม่ได้เหมาะกับงานทุกแบบเพียงเพราะแรงม้าน้อย</td></tr>
          <tr><th scope="row">301–600 hp</th><td data-label="ถนนประจำวัน">เบรกโรงงานที่สมบูรณ์อาจตอบโจทย์อยู่แล้ว แยกความต้องการด้านฝุ่น เสียง และฟีล ก่อนเปลี่ยนชุด</td><td data-label="งานหนักต่อเนื่อง">ประเมินผ้าที่รองรับงานจริง จาน/ช่องลม และชุดเหล็กหล่อที่จับคู่มาสำหรับรถ ถ้ามีผลตรวจว่าระบบเดิมถึงข้อจำกัด</td></tr>
          <tr><th scope="row">มากกว่า 600 hp</th><td data-label="ถนนประจำวัน">กำลังสูงไม่ทำให้ CCB จำเป็นโดยอัตโนมัติ ให้ความสำคัญกับยาง โหลด และแพ็กเกจที่ผู้ผลิตรองรับ</td><td data-label="งานหนักต่อเนื่อง">ต้องประเมินเป็นระบบและตามสนามจริง เปรียบเทียบชุดเหล็กหล่อระดับสูงกับ CCB รวมถึงอะไหล่และงบใช้งานซ้ำ</td></tr>
        </tbody></table></div>
        <Note>ค่า hp ในตารางเป็นกลุ่มตัวอย่างเชิงบรรณาธิการ ไม่ใช่สเปกสินค้า ไม่ใช่ผลทดสอบ และไม่ใช่การแปลงเลข “แรงม้า” ที่อาจรายงานคนละหน่วยระหว่างตลาด</Note>
      </Section>

      <Section id="value" title="6. สาย Value: อัปเกรดตามลำดับที่แก้ปัญหาได้จริง">
        <ol className="space-y-4">
          {[
            ['01', 'คืนสภาพมาตรฐานให้ครบ', 'ตรวจยาง จาน/ผ้า คาลิเปอร์ และน้ำมันก่อน งบซ่อมชิ้นส่วนที่ไม่สมบูรณ์ไม่ควรถูกข้ามไปซื้อของแต่ง หากยังไม่มีอาการหรือผลตรวจที่ชี้ข้อจำกัด ไม่ต้องเปลี่ยนชุดเพียงเพราะมีรุ่นแพงกว่า'],
            ['02', 'เลือกผ้าให้ตรงชีวิตประจำวัน', 'ถ้าเป้าหมายคือฝุ่นน้อย เสียงน้อย และฟีลคุมง่าย ให้เริ่มที่ compound ถนนที่เข้ากับจานและคาลิเปอร์จริง ผ้าสนามที่รับความร้อนสูงกว่าไม่ได้เหนือกว่าสำหรับทุกการใช้งาน'],
            ['03', 'จานขนาดเดิมหรือชุดเหล็กหล่อที่ออกแบบมาดี', 'เมื่อจานถึงรอบเปลี่ยน เปรียบเทียบจานเรียบหรือเซาะร่องที่ตรงรุ่น และราคาอะไหล่ในระยะยาว ถ้างานหนักเกินขอบเขตเดิม ค่อยให้ผู้เชี่ยวชาญประเมินจานหนา/ใหญ่หรือชุดสองชิ้นที่จับคู่ครบ'],
            ['04', 'BBK เมื่อมีโจทย์ที่ต้องใช้ความสามารถเพิ่ม', 'Big Brake Kit ควรมีเหตุผลเรื่องแรงบิด ความร้อน ผ้า หรือความแข็งตัวของชุด พร้อมตรวจล้อ สมดุลหน้า–หลัง ระบบช่วยเบรก และเบรกมือไฟฟ้า ไม่ใช่ประกอบจากของที่ดูเข้ากัน'],
          ].map(([number, title, detail]) => <li key={number} className="flex gap-4 rounded-2xl border border-slate-200 p-5"><span className="text-xl font-extrabold text-lime-700">{number}</span><div><h3 className="font-bold">{title}</h3><p className="mt-2 text-base text-slate-600">{detail}</p></div></li>)}
        </ol>
        <p>สำหรับรถที่ใช้ regen บ่อยจนเบรกเสียดทานถูกใช้น้อย <Ref to="evKit">Brembo EV Kit</Ref> เป็นตัวอย่างผลิตภัณฑ์ที่ออกแบบให้รับมือการกัดกร่อนและความสบายในการใช้งาน โดยผู้ผลิตกำหนดให้ใช้จานและผ้าของชุดที่ตรงกัน อย่าสลับผ้าแต่งข้ามสูตรเคลือบจานเพียงเพราะใส่ลงช่องคาลิเปอร์ได้</p>
        <h3 className="text-xl font-bold">น้ำมันเบรก: “ตรงสเปกและสดพอ” มาก่อนตัวเลขบนขวด</h3>
        <p><Ref to="fluid">Brembo แนะนำให้เลือกตามข้อกำหนดรถ</Ref> ทั้งชนิด มาตรฐาน และความหนืด อย่าถือว่าเลข DOT สูงกว่าใช้แทนได้เสมอ ตัวเลขจุดเดือดน้ำมันก็ห้ามนำไปเทียบตรงกับอุณหภูมิผิวจาน เพราะเป็นคนละตำแหน่งในระบบ</p>
        <p><Ref to="teslaService">Tesla Thailand ระบุการทดสอบสภาพน้ำมันเบรกทุก 4 ปีและเปลี่ยนตามจำเป็น</Ref> พร้อมเงื่อนไขว่าลงเขา ลากจูง หรือขับเน้นสมรรถนะในอากาศร้อนชื้นอาจต้องถี่ขึ้น นี่เป็นข้อกำหนดของ Tesla ที่อ้างอิง ไม่ใช่รอบบำรุงรักษาสำหรับ EV ทุกยี่ห้อ</p>
      </Section>

      <Section id="japan" title="7. ตัวเลือกจากญี่ปุ่น: ENDLESS เลือกเป็นรุ่น อย่าเลือกจากสีคาลิเปอร์อย่างเดียว">
        <p>ENDLESS มีทั้งผ้าถนนที่เน้นความสบาย ผ้าที่รับการเบรกหนักมากขึ้น และชุดคาลิเปอร์ ชื่อแบรนด์เดียวกันจึงไม่ได้แปลว่าได้ฝุ่น เสียง หรือขอบเขตใช้งานแบบเดียวกัน หากชอบงานญี่ปุ่น เริ่มจากโจทย์การใช้รถแล้วค่อยเลือกรุ่นที่ตรงกัน</p>
        <div className="grid items-start gap-4 sm:grid-cols-2">
          <Photo src="/images/articles/endless-ssm-plus-official.jpg" alt="ผ้าเบรก ENDLESS SSM PLUS สีน้ำเงินพร้อมกล่องผลิตภัณฑ์จากผู้ผลิตญี่ปุ่น" width={1000} height={666}><strong className="text-slate-800">ENDLESS SSM PLUS</strong> · ภาพผลิตภัณฑ์: <Ref to="ssm">ENDLESS</Ref> · รูปทรงผ้าเป็นตัวอย่าง ไม่ใช่การรับรองรหัสตรงรถ</Photo>
          <Photo src="/images/articles/endless-6pot-official.jpg" alt="คาลิเปอร์ ENDLESS 6POT สีน้ำเงินจากภาพผลิตภัณฑ์ทางการ" width={600} height={400}><strong className="text-slate-800">ENDLESS 6POT</strong> · ภาพผลิตภัณฑ์: <Ref to="endlessCaliper">ENDLESS</Ref> · ต้องตรวจชุดและล้อที่รองรับ</Photo>
        </div>
        <div className="overflow-hidden rounded-2xl border border-slate-200"><table className={styles.table}><caption>แนวทางของแต่ละ compound ตามข้อมูล ENDLESS ญี่ปุ่น</caption><thead><tr><th scope="col">รุ่น</th><th scope="col">โจทย์ที่ผู้ผลิตวางไว้</th><th scope="col">ช่วงอุณหภูมิจานที่ผู้ผลิตระบุ</th></tr></thead><tbody>
          <tr><th scope="row"><Ref to="sss">SSS</Ref></th><td data-label="แนวทาง">ถนน เน้นการตอบสนองเมื่อเริ่มเบรก เหมาะหยิบมาเทียบเมื่ออยากเปลี่ยนฟีลผ้าเดิม</td><td data-label="ช่วงอุณหภูมิจาน">0–480°C</td></tr>
          <tr><th scope="row"><Ref to="ssm">SSM PLUS</Ref></th><td data-label="แนวทาง">ถนน เน้นลดฝุ่นและความสบาย เป็นตัวเลือกตั้งต้นสำหรับคนที่ห่วงความสะอาดล้อ</td><td data-label="ช่วงอุณหภูมิจาน">0–550°C</td></tr>
          <tr><th scope="row"><Ref to="mx72">MX72</Ref></th><td data-label="แนวทาง">การใช้งานถนนร่วมกับการขับในสนามตามขอบเขตที่ผู้ผลิตระบุ ควรคุยเรื่องฝุ่น เสียง และการสึกเพิ่มเติม</td><td data-label="ช่วงอุณหภูมิจาน">50–700°C</td></tr>
          <tr><th scope="row"><Ref to="mx72Plus">MX72 PLUS</Ref></th><td data-label="แนวทาง">เพิ่มความสามารถรับงานร้อนต่อเนื่อง ไม่ใช่ตัวเลือกที่ต้องขยับขึ้นสำหรับรถประจำวันทุกคัน</td><td data-label="ช่วงอุณหภูมิจาน">50–750°C</td></tr>
        </tbody></table></div>
        <Note>ช่วงอุณหภูมิเป็นข้อมูลของ compound จากผู้ผลิต ไม่ใช่อุณหภูมิเป้าหมาย ไม่ใช่คะแนนระยะหยุด และไม่ใช่ข้อรับรองให้ใช้กับจานทุกชนิด คำว่า Ceramic Carbon Metal ในผ้าไม่เท่ากับจาน Carbon Ceramic</Note>
        <p>หากรถใช้จาน CCM จริง ENDLESS มี <Ref to="endlessCcm">กลุ่มผ้าสำหรับ CCM แยกต่างหาก เช่น CCD-P สำหรับถนนและ CCD-R สำหรับสนาม</Ref> และยังมี <Ref to="endlessCoating">ข้อควรระวังกับจานเคลือบกันสนิม</Ref> บางชนิดด้วย จึงไม่แนะนำให้จับคู่ MX72 หรือ SSM PLUS กับ CCB หรือ Brembo EV Kit แบบเหมารวม</p>
        <p><strong>คาลิเปอร์ 6POT และชุดจาน ENDLESS:</strong> ขอรหัสชุดที่ตรงรถ รวมความหนาจาน ขนาดผ้า เบรกมือ และแบบตรวจระยะเคลียร์ล้อก่อน ราคาไทยและการรองรับ Tesla แต่ละปี/รุ่นย่อยในงานนี้ยังเป็น <strong>Data unavailable</strong> การมีโลโก้บนภาพหรือมีร้านเสนอขายไม่แทนเอกสารติดตั้งจากผู้ผลิต ดู <Ref to="endlessFitment">ตารางรถที่ ENDLESS ระบุ</Ref> ประกอบ</p>
        <p>อีกแนวทางญี่ปุ่นที่นำมาเทียบในเครื่องมือด้านล่างคือ <Ref to="projectMu">Project μ TYPE PS</Ref> ให้ดูขอบเขตและคำอธิบายรุ่นจริง รวมถึงรหัสผ้า ไม่ใช้ความนิยมของแบรนด์แทนการตรวจความเข้ากันได้</p>
      </Section>

      <Section id="brand-compare" title="8. กดเทียบแบรนด์: Performance / ราคา / ฝุ่น">
        <p>วงกลมช่วยให้กวาดตาดูสามเรื่องได้เร็ว โดยเทียบเฉพาะตัวเลือกผ้า/ชุดจานกับผ้าที่ระบุชื่อชัดเจน ไม่เอาราคาผ้าหนึ่งเพลามาชนกับราคาชุด CCB ทั้งคัน และไม่สร้างคะแนน “แบรนด์นี้ 9/10” จากความรู้สึก</p>
        <BrakeBrandCompare />
      </Section>

      <Section id="carbon-ceramic" title="9. สายจัดเต็ม: Carbon Ceramic มีเหตุผลให้ชอบ โดยไม่ต้องอ้างว่าทุกคนต้องใช้">
        <div className="grid items-start gap-6 sm:grid-cols-2"><Photo src="/images/articles/tesla-plaid-carbon-ceramic-kit.jpg" alt="รายละเอียดล้อและเบรก Carbon Ceramic คาลิเปอร์แดงของ Tesla Model S Plaid Track Package" width={2000} height={2000}>ภาพจาก <Ref to="plaid">Tesla Model S Plaid Track Package</Ref> · แหล่งอ้างอิงตลาด UAE ไม่ใช่ประกาศขายหรือยืนยันสเปกไทย</Photo><div className="space-y-4"><h3 className="text-xl font-bold">สิ่งที่ได้ เมื่อเลือกชุดเหมาะกับรถ</h3><p>CCB ใช้วัสดุคอมโพสิตที่มีเส้นใยคาร์บอนกับเมทริกซ์เซรามิก จุดเด่นคือมวลจานที่ต่ำและการรองรับความร้อนสูงในชุดที่ออกแบบมา รวมถึงรายละเอียดงานที่หลายคนให้คุณค่า</p><p><Ref to="ccb">Brembo ระบุว่าจานคาร์บอนเซรามิกของตนหนักประมาณครึ่งหนึ่งของจานเหล็กหล่อ</Ref> แต่ต้องชั่งชุดที่เปรียบเทียบจริง ไม่เหมาว่าน้ำหนักระบบเบรกทั้งหมดลดครึ่งหนึ่ง และไม่มีสูตรสากลว่าเบาลงใต้สปริง 1 kg เท่ากับลดน้ำหนักตัวรถกี่ kg</p><p>ถ้าคุณต้องการวัสดุระดับนี้และงบพร้อม การเลือก CCB เป็นความชอบที่มีเหตุผลได้ เพียงรวมต้นทุนชิ้นส่วน การตรวจสภาพ และวิธีดูแลไว้ตั้งแต่ก่อนซื้อ</p></div></div>
        <h3 className="text-xl font-bold">แยก 4 ชื่อที่มักถูกปนกัน</h3>
        <ul className="list-disc space-y-3 pl-6 marker:text-lime-700"><li><strong>High-carbon cast iron:</strong> ยังเป็นจานเหล็กหล่อที่ปรับส่วนผสม ไม่ใช่ CCB ดูคำอธิบาย <Ref to="prime">Brembo Prime</Ref></li><li><strong>Carbon Ceramic / CCB / CCM:</strong> จานคอมโพสิตสำหรับระบบที่จับคู่กับผ้าและชิ้นส่วนเฉพาะ</li><li><strong>Carbon–Carbon:</strong> วัสดุจานที่พบในรถแข่งบางประเภท อย่ายกพฤติกรรมเมื่อเย็นมาเหมารวมกับ CCB สำหรับถนน</li><li><strong>Ceramic brake pads:</strong> ชื่อกลุ่มวัสดุผ้า ไม่รับรองการใช้กับ CCB ตัวอย่าง <Ref to="ceramicPad">Brembo P65017NX ระบุไม่ใช้กับจาน Carbon Ceramic</Ref></li></ul>
        <h3 className="text-xl font-bold">ทำไมชุดแพงจึงขายเป็นระบบ มากกว่าแค่จานสองใบ</h3>
        <p><Ref to="plaid">Tesla Model S Plaid Track Package</Ref> ที่อ้างอิงระบุจานหน้า 410 × 40 mm หลัง 410 × 32 mm พร้อมคาลิเปอร์ ผ้า น้ำมัน เบรกมือ และ firmware รวมทั้งข้อกำหนดล้อ ตัวอย่างนี้แสดงว่าการจับคู่ระบบสำคัญกว่าการเลือกเส้นผ่านศูนย์กลางหรือวัสดุแยกชิ้น ห้ามย้ายสเปกนี้ไปใช้กับ Model 3 หรือรถไทยรุ่นอื่นโดยไม่มีเอกสารรองรับ</p>
        <h3 className="text-xl font-bold">สิ่งที่ราคาแพงไม่ได้ลบออกไป</h3>
        <p>ผ้า น้ำมัน ยาง และระบบควบคุมยังมีขีดจำกัด จึงไม่ใช้คำว่า “ไม่มีวันเฟด” หรือ “ไม่มีวันเสียรูป” กับเบรกทั้งระบบ อายุใช้งานก็ขึ้นกับงานจริง <Ref to="ccbWear">Brembo แยกการสึกของการใช้ถนนกับงานสนามหนัก</Ref> ไว้ชัด คำกล่าวว่า CCB อยู่ได้ตลอดอายุรถจึงไม่ใช่เงื่อนไขรับประกันทุกคัน</p>
        <Note><strong>ทางเลือกสำหรับคนลงสนามบ่อย:</strong> เปรียบเทียบชุดจานเหล็กหล่อสองชิ้นระดับสูงที่มีอะไหล่วงแหวน ผ้าหลาย compound และข้อมูลอุณหภูมิสำหรับงานจริงกับ CCB ด้วย ต้นทุนใช้งานซ้ำและเวลารออะไหล่อาจสำคัญกว่าราคาชุดแรก ส่วนรถที่ต้องการ CCB จากโรงงานให้ยึดข้อกำหนดของแพ็กเกจนั้น</Note>
      </Section>

      <Section id="thai-roads" title="10. ถนนไทยเส้นไหนจะทำเบรกถึง 1,000°C ได้จริง?">
        <p className="rounded-2xl border border-amber-200 bg-amber-50 p-5"><strong>คำตอบที่ตรวจสอบได้ตอนนี้: Data unavailable</strong> ยังไม่มีชุดวัดที่เราพบซึ่งบอกว่ารถ EV รุ่นใด บรรทุกเท่าไร ใช้ regen แค่ไหน และวัดจุดใด จนยืนยันว่าถนนไทยเส้นนั้นทำจานถึง 1,000°C ได้ การไม่พบข้อมูลไม่ใช่ข้อพิสูจน์ว่าเป็นไปไม่ได้ แต่ยังใช้เป็นเหตุผลชี้ซื้อ CCB ไม่ได้</p>
        <div className="grid gap-5 sm:grid-cols-2"><div className="rounded-2xl border border-slate-200 p-5"><h3 className="text-xl font-bold">จอมทอง–ดอยอินทนนท์ · ทล.1009</h3><p className="mt-3"><Ref to="inthanon">สำนักงานประชาสัมพันธ์จังหวัดเชียงใหม่</Ref> ระบุบริบททางลาดชัน ฝน และถนนลื่น จึงเป็นตัวอย่างของเส้นทางที่ต้องเตรียมรถและวางแผนการลงเขา แต่ข้อมูลดังกล่าวไม่ได้รายงานอุณหภูมิจาน</p></div><div className="rounded-2xl border border-slate-200 p-5"><h3 className="text-xl font-bold">หล่มเก่า–ภูทับเบิก · ผ่าน ทล.2331</h3><p className="mt-3"><Ref to="thapBoek">DASTA อธิบายเส้นทางสูงชันและคดเคี้ยว</Ref> ซึ่งเป็นบริบทที่อาจต้องหน่วงรถต่อเนื่อง ความร้อนจริงยังขึ้นกับรถ โหลด เวลา และรูปแบบการเบรก ไม่มีตัวเลข 1,000°C ให้ยืนยันจากแหล่งนี้</p></div></div>
        <figure className="overflow-hidden rounded-2xl border border-slate-200"><Image src="/images/articles/doi-inthanon-road-2013.jpg" alt="แนวถนนริมไหล่เขาดอยอินทนนท์และพืชพรรณในภาพปี 2013" width={960} height={640} sizes="(max-width: 1024px) 100vw, 960px" className="h-auto w-full" /><figcaption className="px-5 py-4 text-sm leading-relaxed text-slate-500">ภาพบริบทดอยอินทนนท์ ถ่ายปี 2013 ไม่ใช่จุดทดสอบหรือสภาพถนนปัจจุบัน · Sanyaluckyeemou / <a href="https://commons.wikimedia.org/wiki/File:%E0%B8%96%E0%B8%99%E0%B8%99%E0%B9%81%E0%B8%AB%E0%B9%88%E0%B8%87%E0%B8%94%E0%B8%AD%E0%B8%A2%E0%B8%AD%E0%B8%B4%E0%B8%99%E0%B8%97%E0%B8%99%E0%B8%99%E0%B8%97%E0%B9%8C.jpg" className="underline">Wikimedia Commons</a> · <a href="https://creativecommons.org/licenses/by-sa/3.0/" className="underline">CC BY-SA 3.0</a> · คงภาพต้นฉบับ แสดงผลย่อขนาด</figcaption></figure>
        <h3 className="text-xl font-bold">ชีวิตจริง ภาระหนักมาจากอะไร?</h3>
        <p>ทางลงยาวเติมพลังงานจากความสูงเข้ามาตลอด หาก regen รับได้น้อยและต้องให้เบรกเสียดทานรับส่วนใหญ่ ภาระสะสมจะต่างจากการหยุดครั้งเดียวบนถนนราบมาก ตัวอย่างรถ 2,200 kg ลดระดับ 1,000 m มีพลังงานศักย์ <strong>21.58 MJ</strong> เทียบได้กับพลังงานหยุด 100 → 0 ราว 25.4 ครั้ง แต่เป็นเพียงตัวอย่างสมมติ ไม่ใช่การจำลองเส้นทางสองแห่งข้างต้น</p>
        <p><strong>อย่าตั้งเป้าว่าต้องไปให้ถึง 1,000°C:</strong> พลังงานเท่ากันที่ค่อย ๆ กระจายตลอดการเดินทาง กับอัดเข้าจานในเวลาสั้นและซ้ำถี่ อาจให้อุณหภูมิต่างกันมาก การระบายความร้อน สถานะแบตเตอรี่ และความเร็วมีส่วนทั้งหมด หากเกิดไฟเตือนหรือฟีลเบรกผิดปกติให้ลดความเสี่ยงและหยุดในตำแหน่งที่ปลอดภัยตามคู่มือ ไม่ทดลองลากเบรกเพื่อทำตัวเลขบนถนนสาธารณะ</p>
      </Section>

      <Section id="temperature" title="11. พลังงาน 1 MJ ไม่ได้แปลว่าจานจะร้อนกี่องศา">
        <div className="grid gap-3 sm:grid-cols-3">{[['ผิวหน้าจาน', 'จุดสัมผัสอาจมี peak สั้น ๆ'], ['เนื้อจาน', 'อุณหภูมิมวลจานและการกระจายความร้อน'], ['ผ้า / น้ำมันเบรก', 'วัสดุคนละชนิดและข้อจำกัดคนละค่า']].map(([title, body], index) => <div key={title} className="rounded-2xl bg-slate-950 p-5 text-white"><span className="text-sm font-bold text-lime-300">ตำแหน่ง {index + 1}</span><h3 className="mt-2 text-xl font-bold">{title}</h3><p className="mt-3 text-base text-slate-300">{body}</p></div>)}</div>
        <p><Ref to="apTemp">AP Racing ให้ช่วงอุณหภูมิเนื้อจาน 400–600°C สำหรับบริบทรถแข่งที่กล่าวถึง</Ref> และแยก peak ที่ผิวจานออกจากค่านั้น ส่วน <Ref to="ccb">คำอธิบาย Brembo เรื่อง CCB ที่รองรับ peak ใกล้ 1,000°C</Ref> เป็นความสามารถของผลิตภัณฑ์ ไม่ใช่อุณหภูมิปกติที่ EV ถนนไทยต้องทำให้ถึง จึงห้ามนำสองตัวเลขมาใช้เป็นคะแนนเทียบเบรกถนนทุกแบบ</p>
        <details className={styles.detail}><summary>เปิดตัวอย่าง Heat capacity: ทำไมต้องรู้มวลจานและการแบ่งความร้อน</summary><div className="space-y-4 pb-4 text-base"><p>สมมติการหยุดรถ 2,200 kg จาก 100 → 0 มีพลังงาน 848.8 kJ ให้จานรับทั้งหมด ไม่มี regen ไม่มีแรงต้านหรือ cooling และสมมติแบ่งหน้า 70% เท่ากันซ้าย–ขวา จานหน้าข้างหนึ่งจะรับประมาณ 297.1 kJ</p><p>ถ้าสมมติจานนั้นหนัก 10 kg และความจุความร้อนจำเพาะคงที่ 500 J/(kg·K) จะได้ ΔT = Q/(mc) ≈ <strong>59.4°C</strong> เป็นอุณหภูมิที่เพิ่มในแบบจำลอง ไม่ใช่อุณหภูมิสุดท้าย และไม่ใช่ peak ที่ผิว</p><p>มวล 10 kg ค่า 500 และการแบ่งหน้า 70% เป็นค่าที่เลือกเพื่ออธิบายสมการ ไม่ใช่ข้อมูลจานรุ่นใด ความจริงพลังงานแบ่งไปผ้าและชิ้นส่วนอื่น ความจุความร้อนเปลี่ยนตามอุณหภูมิ และมีการระบายตลอดเวลา จึงห้ามนำ 59.4°C ไปบวกซ้ำเพื่อทำนายว่ากี่โค้งจะถึง 1,000°C อ้างอิงหลักการ <a href="https://openstax.org/books/physics/pages/11-2-heat-specific-heat-and-heat-transfer" className="text-lime-800 underline">OpenStax: Heat and Specific Heat</a></p></div></details>
        <h3 className="text-xl font-bold">ถ้าต้องการรู้จริง ต้องวัดให้ตอบคำถามเดียวกัน</h3>
        <p>ขอให้ผู้ทดสอบระบุจุดวัด เครื่องมือ รถ ยาง โหลด สถานะแบตเตอรี่ ความเร็วต้น–ปลาย จำนวนรอบ และอากาศแวดล้อม <Ref to="apTemp">AP Racing เตือนว่าค่าวัดหลังหยุดลดลงเร็ว</Ref> จึงไม่แทนค่า peak ตอนเบรก การใช้สีวัดอุณหภูมิหรือเซนเซอร์สำหรับงานสนามต้องอยู่ในแผนทดสอบที่ผู้เชี่ยวชาญควบคุม และใช้เกณฑ์ของจาน/ผ้ารุ่นนั้น</p>
      </Section>

      <Section id="before-buying" title="12. ก่อนจ่ายเงิน ให้ร้านตอบเรื่องเหล่านี้ครบ">
        <ul className="list-disc space-y-3 pl-6 marker:text-lime-700"><li><strong>ตรงรถ:</strong> ปี รุ่นย่อย ตลาด VIN และระบบเบรกเดิม ไม่ใช้แค่ชื่อ Model 3 / Model Y / BYD เป็นคำรับรอง</li><li><strong>ตรงชุด:</strong> รหัสจาน คาลิเปอร์ ผ้า ความหนาจาน พื้นที่ทำงาน สมดุลหน้า–หลัง และความเข้ากันได้กับ ABS/ESC/เบรกมือ</li><li><strong>ตรงล้อ:</strong> แบบตรวจระยะเคลียร์กับขนาดล้อ ก้านล้อ และออฟเซ็ตจริง ไม่ตัดสินจากเลขนิ้วอย่างเดียว</li><li><strong>ตรงงาน:</strong> ถนนหรือสนาม ใช้เมื่อเย็นได้อย่างไร เสียง/ฝุ่น/การสึกที่ต้องยอมรับ และข้อกำหนดการ bedding-in ของชุดนั้น</li><li><strong>ตรงงบตลอดการใช้:</strong> ค่าอุปกรณ์ ติดตั้ง น้ำมัน ผ้า/จานทดแทน การตรวจสภาพ ค่าขนส่งและระยะรออะไหล่ ขอราคาแยกให้ครบ</li><li><strong>ตรวจส่งมอบ:</strong> รายการตรวจรั่ว ระยะเคลียร์ การทำงานระบบช่วยเบรก และกำหนดตรวจซ้ำที่ผู้ติดตั้งรับผิดชอบ</li></ul>
        <div className="rounded-2xl border border-lime-200 bg-lime-50 p-5"><h3 className="text-xl font-bold">ต้นทุนที่ควรเทียบ</h3><p className="mt-3">ชุดแรก + งานติดตั้งที่จำเป็น + ผ้า/จานที่คาดว่าจะเปลี่ยนตามการใช้งาน + งานตรวจ/บริการ + ค่าอะไหล่เฉพาะชุด</p><p className="mt-2 text-sm text-slate-600">ยังไม่มีใบเสนอราคาไทยที่ตรวจครบรายการในบทความนี้: Data unavailable จึงไม่ใส่ราคาตั้งต้นหรืออายุใช้งานที่แต่งขึ้น และไม่สรุปว่าชุดหนึ่งประหยัดกว่าอีกชุดกี่เปอร์เซ็นต์</p><a href="/downloads/evselect-brake-shop-checklist.txt" download className="mt-4 inline-flex min-h-11 items-center gap-2 font-bold text-lime-900 underline underline-offset-4"><Download className="h-5 w-5 shrink-0" aria-hidden="true" />ดาวน์โหลดเช็กลิสต์ภาษาไทย ส่งให้ร้านก่อนซื้อ</a></div>
      </Section>

      <Section id="faq" title="13. คำถามที่คนซื้อเบรกเจอบ่อย"><div className="space-y-3">{faqs.map(item => <details className={styles.detail} key={item.q}><summary>{item.q}</summary><p className="text-base text-slate-600">{item.a}</p></details>)}</div></Section>

      <section id="sources" aria-labelledby="sources-title" className="rounded-2xl bg-slate-50 p-5 text-sm sm:p-7"><h2 id="sources-title" className="mb-4 text-xl font-bold">ที่มาและขอบเขตของบทความ</h2><p className="mb-4">ตรวจแหล่งข้อมูลวันที่ 19 กันยายน 2569 บทความนี้เป็นการสังเคราะห์เอกสารผู้ผลิตและการคำนวณตัวอย่างของ EVSELECT ไม่ใช่ผลทดสอบเบรกบนถนนไทย ไม่มีการวัดระยะหยุด ฝุ่น หรืออุณหภูมิจากรถจริงในงานนี้ ข้อมูลผลิตภัณฑ์และการรองรับรถอาจเปลี่ยนตามปี รุ่น และตลาด</p><ul className="list-disc space-y-2 pl-5">{Object.entries(brakeSources).map(([key, source]) => <li key={key}><a href={source.url} className="text-slate-600 underline underline-offset-4 hover:text-lime-800">{source.title}</a></li>)}</ul></section>

      <section aria-labelledby="related-title" className="border-t border-slate-200 pt-8"><h2 id="related-title" className="mb-5 text-2xl font-bold">เลือกเบรกแล้ว ต่อภาพให้ครบทั้งคัน</h2><div className="grid gap-4 sm:grid-cols-2"><Link href="/articles/ev-tyre-and-coilover-selection-guide" className="rounded-2xl border border-slate-200 p-5 text-base font-semibold hover:border-lime-500">ยางและช่วงล่าง: อีกส่วนของความมั่นใจเวลาเบรก<ArrowRight className="mt-3 h-5 w-5 text-lime-700" aria-hidden="true" /></Link><Link href="/articles/ev-damper-tuning-bump-rebound-guide" className="rounded-2xl border border-slate-200 p-5 text-base font-semibold hover:border-lime-500">ซื้อโช้คหลักแสน ทำไมยังไม่จบ!? เลือกให้ตรงอาการ<ArrowRight className="mt-3 h-5 w-5 text-lime-700" aria-hidden="true" /></Link></div></section>
    </div>
    <footer className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500"><span>EVSELECT · เข้าใจรถให้ลึก เลือกให้ตรงใจ</span><Link href="/articles" className="inline-flex min-h-11 items-center gap-2 font-medium text-lime-800">อ่านบทความอื่น<ArrowRight className="h-4 w-4" aria-hidden="true" /></Link></footer>
  </article>;
}
