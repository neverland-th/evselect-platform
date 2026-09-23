import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CalendarDays, Clock } from 'lucide-react';
import BrandHomeLink from '@/components/BrandHomeLink';
import { hybridEvArticle as article, hybridEvSources as sources } from '@/lib/hybrid-ev-article';

const linkStyle = 'font-semibold text-lime-800 underline underline-offset-4 decoration-lime-500 hover:text-lime-950 focus-visible:outline-2 focus-visible:outline-offset-4';
const headingStyle = 'text-xl font-bold leading-snug text-slate-950 sm:text-2xl';
function Source({ href, children }: { href: string; children: ReactNode }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" className={linkStyle}>{children}<span className="sr-only"> (เปิดแท็บใหม่)</span></a>;
}
export const metadata: Metadata = {
  title: article.title + ' | EVSELECT', description: article.description,
  alternates: { canonical: article.path },
  openGraph: { title: article.title, description: article.description, url: 'https://evselects.com' + article.path, type: 'article', locale: 'th_TH', siteName: 'EVSELECT', publishedTime: article.publishedAt, modifiedTime: article.updatedAt, images: [{ url: article.image, width: 1920, height: 1198, alt: article.imageAlt }] },
  twitter: { card: 'summary_large_image', title: article.title, description: article.description, images: [article.image] },
};
const jsonLd = {
  '@context': 'https://schema.org', '@type': 'Article', headline: article.title, description: article.description,
  image: 'https://evselects.com' + article.image, datePublished: article.publishedAt, dateModified: article.updatedAt,
  author: { '@type': 'Organization', name: 'EVSELECT', url: 'https://evselects.com/' },
  publisher: { '@type': 'Organization', name: 'EVSELECT', url: 'https://evselects.com/', logo: { '@type': 'ImageObject', url: 'https://evselects.com/logo-desktop.png' } },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://evselects.com' + article.path },
};

export default function HybridToEVChassisDynamicsPage() {
  return <article className="mx-auto max-w-4xl bg-white px-4 py-10 text-base leading-8 text-slate-700 sm:px-6 md:py-16 lg:px-8">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
    <nav aria-label="Breadcrumb" className="mb-7"><Link href="/articles" className={linkStyle + ' inline-flex items-center gap-2 text-sm'}><ArrowLeft size={16} />บทความและคู่มือรถ EV</Link></nav>
    <header className="space-y-6">
      <p className="text-sm font-bold text-lime-800">จากรถคันเดิมสู่ EV · เข้าใจก่อนตัดสินใจแต่ง</p>
      <h1 className="text-3xl font-black leading-tight text-slate-950 sm:text-4xl" style={{ textWrap: 'balance' }}>เปลี่ยนจาก Hybrid เป็น EV: ทำไม<span className="whitespace-nowrap">คันเร่ง</span> เบรก และช่วงล่างรู้สึกต่างกัน?</h1>
      <p>ลองขับ EV แล้วชอบแรงดึง แต่พอยกคันเร่งกลับรู้สึกหน่วงจนต้องปรับจังหวะเท้า ส่วนคนนั่งข้างหลังบอกว่ารถโยนกว่าคันเดิม—สามความรู้สึกนี้อาจมาจากคนละเรื่อง ก่อนสรุปว่าต้องเปลี่ยนโช้คหรือเบรก บทนี้จะช่วยแยกการตอบสนองของระบบขับเคลื่อนออกจากอาการช่วงล่าง และเตรียมคำถามให้คุณลองรถได้ตรงกับชีวิตประจำวัน</p>
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-500">
        <span className="inline-flex items-center gap-2"><CalendarDays size={16} />อัปเดต <time dateTime={article.updatedAt}>23 กันยายน 2569</time></span>
        <span className="inline-flex items-center gap-2"><Clock size={16} />ประมาณ {article.readTime}</span>
        <span>เรียบเรียงโดย <BrandHomeLink /></span>
      </div>
      <p className="border-l-4 border-lime-400 pl-4 text-sm leading-6">บทอธิบายจากเอกสารผู้ผลิตและหลักการทั่วไป ตัวอย่าง Volkswagen และ Tesla ใช้เฉพาะขอบเขตที่ระบุ ยังไม่มีผลวัดเปรียบเทียบรถไฮบริดกับ EV โดยทีมงาน จึงไม่กำหนดเปอร์เซ็นต์ความนุ่ม ระยะเบรก หรือค่าจูนแทนรถทุกรุ่น</p>
    </header>

    <figure className="my-9 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
      <Image src={article.image} alt={article.imageAlt} width={1920} height={1198} sizes="(max-width: 896px) 100vw, 832px" className="h-auto w-full" priority />
      <figcaption className="p-4 text-sm leading-6">แชสซี Volkswagen ID.3 จัดแสดง เห็นชุดแบตเตอรี่ขนาดใหญ่ระหว่างล้อ ภาพปี 2021 ใช้ประกอบเรื่องการจัดวางอุปกรณ์ ไม่ใช่ภาพเปรียบเทียบรถไฮบริดหรือหลักฐานสเปกรถไทย ภาพ: <Source href={article.imageSource}>{article.imageAuthor}</Source> · <Source href={article.imageLicenseUrl}>{article.imageLicense}</Source> · ย่อขนาด</figcaption>
    </figure>

    <div className="space-y-12">
      <section className="space-y-5" aria-labelledby="powertrain">
        <h2 id="powertrain" className={headingStyle}>HEV, PHEV และ BEV บอกระบบขับเคลื่อน ไม่ได้บอกความนุ่ม</h2>
        <p>เริ่มจากความหมายตาม <Source href={sources.definitions}>คำอธิบายรถไฟฟ้าและไฮบริดของ U.S. Department of Energy</Source> คำเรียกเหล่านี้ไม่ได้กำหนดขนาดแบตเตอรี่หรือตำแหน่งอุปกรณ์ให้เหมือนกันทุกรุ่น:</p>
        <dl className="space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-7">
          <div><dt className="font-bold text-slate-950">HEV — ไฮบริดที่ไม่เสียบปลั๊กชาร์จ</dt><dd>ใช้เครื่องยนต์ร่วมกับมอเตอร์ไฟฟ้า เก็บพลังงานส่วนหนึ่งกลับเข้าแบตเตอรี่ระหว่างชะลอรถ วิธีส่งกำลังและตำแหน่งแบตเตอรี่ขึ้นอยู่กับรุ่น</dd></div>
          <div><dt className="font-bold text-slate-950">PHEV — ไฮบริดที่เสียบปลั๊กชาร์จได้</dt><dd>มีทั้งเครื่องยนต์และระบบขับเคลื่อนไฟฟ้า ใช้พลังงานจากแบตเตอรี่ที่ชาร์จภายนอกได้ ระยะขับไฟฟ้าและเงื่อนไขที่เครื่องยนต์ทำงานต้องดูคู่มือของคันนั้น</dd></div>
          <div><dt className="font-bold text-slate-950">BEV — รถไฟฟ้าแบตเตอรี่</dt><dd>ใช้มอเตอร์ไฟฟ้าขับเคลื่อนและชาร์จพลังงานจากภายนอก ไม่มีเครื่องยนต์สันดาปสำหรับขับรถ แต่รูปแบบตัวถัง ล้อ ยาง และช่วงล่างยังต่างกันมากระหว่างรุ่น</dd></div>
        </dl>
        <p>ถ้าเปลี่ยนจากไฮบริดซีดานไปเป็น EV SUV คุณกำลังเปลี่ยนทั้งประเภทตัวถังและระบบขับเคลื่อนพร้อมกัน จึงควรเทียบรถที่ขนาดใกล้กัน ใช้ล้อรุ่นที่จะซื้อ และพาผู้โดยสารประจำไปด้วย ความต่างที่รู้สึกจะได้ไม่ถูกโยนให้คำว่า “ไฟฟ้า” เพียงอย่างเดียว</p>
      </section>

      <section className="space-y-5" aria-labelledby="weight">
        <h2 id="weight" className={headingStyle}>แบตเตอรี่ใต้พื้นช่วยจัดวางน้ำหนัก แต่ไม่ได้ทำให้ทุกคันบาลานซ์เหมือนกัน</h2>
        <p>ตัวอย่างที่มีข้อมูลชัดคือ <Source href={sources.id3}>การจัดวางแบตเตอรี่ของ Volkswagen ID.3 ในเอกสารปี 2020</Source>: ผู้ผลิตระบุแบตเตอรี่ระหว่างเพลาในตำแหน่งต่ำ และการกระจายน้ำหนักใกล้ 50:50 ข้อมูลนี้อธิบายรถในเอกสารนั้น ไม่ใช่ข้อสรุปว่า BEV ทุกคันต้องเป็น 50:50 หรือเลี้ยวดีกว่า HEV ทุกคัน</p>
        <p>จุดศูนย์ถ่วงคือจุดแทนตำแหน่งเฉลี่ยของมวลทั้งคัน ส่วนการกระจายน้ำหนักหน้า–หลังบอกภาระที่แต่ละเพลารับ สองเรื่องนี้เกี่ยวข้องกันแต่ใช้แทนกันไม่ได้ และทั้งคู่ยังไม่ใช่ผลทดสอบการเข้าโค้งหรือความสบายของผู้โดยสาร</p>
        <p>สิ่งที่เจ้าของรถใช้ตัดสินใจได้ทันทีคือ น้ำหนักบรรทุกที่อนุญาต สเปกยาง และแรงดันตามคู่มือ ตัวอย่าง <Source href={sources.tyres}>การดูแลยาง Model 3 ในคู่มือประเทศไทย</Source> ให้ยึดแรงดันบนป้ายรถและตรวจขณะยางเย็น หากกำลังเปลี่ยนล้อหรือยาง อ่าน <Link href="/articles/ev-tyre-and-coilover-selection-guide" className={linkStyle}>วิธีเลือกยางและคอยล์โอเวอร์สำหรับ EV แรงและหนัก</Link> เพื่อเตรียมรหัสยางและข้อมูลรถให้ครบก่อนคุยกับร้าน</p>
      </section>

      <section className="space-y-5" aria-labelledby="response">
        <h2 id="response" className={headingStyle}>คันเร่งไวแค่ไหน ต้องดูโหมดและรถจริงด้วย</h2>
        <p>รถไฮบริดก็มีมอเตอร์ไฟฟ้า จึงไม่ควรแบ่งง่าย ๆ ว่าไฮบริดรอ 300 ms แต่ EV ทุกคันตอบใน 10 ms ความรู้สึกตอนแตะคันเร่งขึ้นอยู่กับการควบคุมกำลังและโหมดที่เลือกด้วย ตัวอย่าง <Source href={sources.acceleration}>โหมดอัตราเร่งของ Model 3</Source> ระบุว่า Chill จำกัดอัตราเร่งเพื่อให้การตอบสนองนุ่มนวลขึ้น ชื่อและตัวเลือกโหมดของรถอื่นต้องตรวจแยก</p>
        <p>ตอนลองรถ เริ่มจากการออกตัวและผ่อนความเร็วอย่างต่อเนื่องในเส้นทางที่ได้รับอนุญาต สังเกตว่าคุมความเร็วต่ำได้ง่ายหรือไม่ และผู้โดยสารรู้สึกอย่างไร ไม่จำเป็นต้องกดเต็มคันเร่งเพื่อหาคำตอบ หากสงสัยว่าตัวเลขกำลังต่างจากแรงดึงที่รู้สึกอย่างไร อ่าน <Link href="/articles/ev-horsepower-vs-torque-explained" className={linkStyle}>แรงม้ากับแรงบิดในรถ EV</Link> ต่อได้</p>
        <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
          <Image src={article.motorImage} alt="ห้องอุปกรณ์ใต้ฝากระโปรง Toyota bZ4X เห็นอินเวอร์เตอร์ สายสีส้ม และแบตเตอรี่แรงดันต่ำ" width={1920} height={1280} sizes="(max-width: 896px) 100vw, 832px" className="h-auto w-full" />
          <figcaption className="p-4 text-sm leading-6">อินเวอร์เตอร์อยู่เหนือมอเตอร์ของ Toyota bZ4X ตามคำอธิบายต้นฉบับ ภาพรถจัดแสดงในคอสตาริกา ปี 2022 ใช้ดูอุปกรณ์ ไม่ใช่ผลทดสอบการตอบสนองหรือสเปกไทย ภาพ: <Source href={article.motorSource}>Mariordo (Mario Roberto Durán Ortiz)</Source> · <Source href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</Source> · ย่อขนาด</figcaption>
        </figure>
      </section>

      <section className="space-y-5" aria-labelledby="braking">
        <h2 id="braking" className={headingStyle}>Regen ช่วยชะลอรถ ส่วนเบรกยังต้องพร้อมใช้งาน</h2>
        <p><Source href={sources.regen}>Bosch อธิบาย Regenerative Braking</Source> ว่าใช้มอเตอร์ในบทบาทเครื่องกำเนิดไฟฟ้า เปลี่ยนพลังงานการเคลื่อนที่บางส่วนกลับเป็นไฟฟ้า พร้อมสร้างแรงหน่วง เมื่อแรงเบรกที่ต้องการเกินส่วนที่ระบบนี้ทำได้ เบรกเสียดทานเข้ามาช่วย การประสานสองส่วนนี้มักเรียกว่า Brake Blending</p>
        <p>แต่ไม่ควรเหมาว่าทุกคันใช้ฮาร์ดแวร์เดียวกัน เช่น <Source href={sources.ipb}>Integrated Power Brake ของ Bosch</Source> มีเซ็นเซอร์อ่านความต้องการเบรกและชุดจำลองความรู้สึกแป้น นี่เป็นคำอธิบายระบบหนึ่ง ไม่ใช่หลักฐานว่า HEV และ BEV ทุกคันตัดแป้นเบรกออกจากวงจรไฮดรอลิกแบบเดียวกัน</p>
        <p><Source href={sources.braking}>คู่มือการเบรก Model 3 สำหรับประเทศไทย</Source> ระบุว่าแรงหน่วงจาก Regen อาจลดลงเมื่อแบตเตอรี่เย็นหรือชาร์จเต็ม และผู้ขับต้องพร้อมใช้แป้นเบรกเพื่อชะลอหรือหยุดรถ อย่าใช้ความรู้สึกจากการยกคันเร่งครั้งหนึ่งกะระยะหยุดทุกครั้ง โดยเฉพาะเมื่อสภาพถนน น้ำหนักบรรทุก หรือระดับแบตเตอรี่เปลี่ยน</p>
        <p>สำหรับคนกำลังคิดอัปเกรด ให้แยก “ไม่คุ้นแรงหน่วงตอนถอนคันเร่ง” ออกจาก “ต้องการเปลี่ยนอุปกรณ์เบรก” ก่อน อ่าน <Link href="/articles/ev-carbon-ceramic-brakes-guide" className={linkStyle}>Carbon Ceramic คุ้มไหมสำหรับการอัปเกรดเบรก EV</Link> เพื่อดูขอบเขตชุดเบรกและค่าใช้จ่ายที่ต้องเปรียบเทียบ ไม่ใช้ชื่อวัสดุสรุปว่าจะทำให้ฟีลแป้นตรงใจโดยอัตโนมัติ</p>
      </section>

      <section className="space-y-5" aria-labelledby="ride">
        <h2 id="ride" className={headingStyle}>รถโยนกับรถกระแทก ต้องแยกอาการก่อนเปลี่ยนโช้ค</h2>
        <p>แรงสะเทือนตอนล้อผ่านรอยต่อกับการที่ตัวถังยังขยับต่อหลังผ่านรอยต่อเป็นคนละช่วงของเหตุการณ์ <Source href={sources.dampers}>คำอธิบายหน้าที่โช้คอัพของ KYB</Source> เน้นการควบคุมการเคลื่อนที่ของรถและช่วงล่าง จึงต้องพิจารณาการทำงานร่วมกับสปริงและยาง ไม่ใช่เห็นน้ำหนักรถมากแล้วสรุปว่าต้องใช้ Monotube หรือวาล์วแบบใดทันที</p>
        <p>เวลาเทียบรถ ให้บันทึกขนาดล้อ รุ่นยาง แรงดันตามป้าย จำนวนผู้โดยสาร และโหมดช่วงล่างถ้ามี จากนั้นลองนั่งทั้งหน้าและหลังบนเส้นทางที่ใกล้เคียงการใช้จริง อ่าน <Link href="/articles/optimizing-ev-suspension-thai-roads" className={linkStyle}>วิธีประเมินอาการช่วงล่างบนถนนไทย</Link> เพื่ออธิบายกับผู้ขายได้ว่าติดตรงจังหวะใด</p>
        <p>ถ้ารถติดตั้งโช้คที่ปรับได้อยู่แล้ว ให้เริ่มจากค่าที่ผู้ผลิตชุดนั้นแนะนำและบันทึกก่อนเปลี่ยนค่า ความสัมพันธ์ของสปริงกับแดมเปอร์มีผลต่ออาการที่รู้สึก ส่วนวิธีแยกจังหวะยุบและยืดอ่านที่ <Link href="/articles/ev-damper-tuning-bump-rebound-guide" className={linkStyle}>แนวทางปรับ Bump และ Rebound</Link> จำนวนคลิกและขอบเขตการปรับต้องอ้างอิงชุดที่ติดตั้งกับรถคันจริง</p>
      </section>

      <section className="space-y-5 rounded-2xl border border-lime-200 bg-lime-50 p-5 sm:p-7" aria-labelledby="try-car">
        <h2 id="try-car" className={headingStyle}>ลองรถให้ได้คำตอบกลับบ้าน</h2>
        <ol className="list-decimal space-y-3 pl-6">
          <li><strong>รถรุ่นที่จะซื้อ:</strong> ตรวจรุ่นย่อย ล้อ ยาง และโหมดที่กำลังใช้ รถทดลองกับรถส่งมอบอาจจัดอุปกรณ์ต่างกัน</li>
          <li><strong>ความง่ายในการควบคุม:</strong> ลองออกตัว ผ่อนคันเร่ง และเบรกตามปกติ รักษาระยะปลอดภัยตามสภาพทาง ไม่สร้างสถานการณ์ฉุกเฉินเพื่อทดสอบระบบ</li>
          <li><strong>ความสบายของคนที่นั่งจริง:</strong> ให้ผู้โดยสารประจำนั่งตำแหน่งที่จะใช้ บอกแยกว่ารู้สึกกระแทก โยน หรือหน่วงจากคันเร่ง</li>
          <li><strong>ข้อจำกัดที่ต้องรู้:</strong> ให้ผู้ส่งมอบอธิบาย Regen การหยุดรถ และสัญญาณเตือนจากคู่มือของรุ่นนั้น</li>
          <li><strong>ค่าใช้จ่ายที่ตามมา:</strong> ขอราคายางตรงสเปกและแผนบำรุงรักษา ก่อนตัดสินใจเพิ่มขนาดล้อหรือเปลี่ยนชุดช่วงล่าง</li>
        </ol>
        <p>รถที่เหมาะกับคุณควรควบคุมได้มั่นใจและตอบโจทย์ผู้โดยสาร การเปลี่ยนเป็น EV ไม่ได้แปลว่าต้องเริ่มด้วยชุดแต่ง ให้การใช้งานจริงระบุปัญหาก่อน แล้วเลือกอ่านรายละเอียดหรือปรึกษาผู้เชี่ยวชาญเฉพาะเรื่องนั้น</p>
      </section>
    </div>

    <aside className="mt-12 space-y-4 rounded-2xl border border-lime-200 p-5 text-sm leading-7">
      <p className="font-bold text-slate-950"><BrandHomeLink /> — เปิดความรู้ก่อน เปิดขายเมื่อข้อมูลพร้อม</p>
      <p>ยังไม่มีสินค้าพร้อมจำหน่าย และยังไม่เปิดรับคำสั่งซื้อหรือชำระเงิน ข้อมูลนี้ใช้ประกอบการศึกษา การเลือกอุปกรณ์ต้องตรวจรุ่นรถ สภาพรถ และข้อกำหนดของผู้ผลิตก่อนเสมอ</p>
      <Link href="/articles" className={linkStyle}>เลือกอ่านบทความ EV ตามเรื่องที่กำลังตัดสินใจ</Link>
    </aside>
  </article>;
}
