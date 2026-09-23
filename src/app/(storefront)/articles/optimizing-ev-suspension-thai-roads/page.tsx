import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CalendarDays, Clock } from 'lucide-react';
import BrandHomeLink from '@/components/BrandHomeLink';
import { thaiRoadsArticle as article, thaiRoadSources as sources } from '@/lib/thai-roads-article';

const linkStyle = 'font-semibold text-lime-800 underline underline-offset-4 decoration-lime-500 hover:text-lime-950 focus-visible:outline-2 focus-visible:outline-offset-4';
const headingStyle = 'text-xl font-bold leading-snug text-slate-950 sm:text-2xl';
function Source({ href, children }: { href: string; children: ReactNode }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" className={linkStyle}>{children}<span className="sr-only"> (เปิดแท็บใหม่)</span></a>;
}

export const metadata: Metadata = {
  title: article.title + ' | EVSELECT', description: article.description,
  alternates: { canonical: article.path },
  openGraph: { title: article.title, description: article.description, url: 'https://evselects.com' + article.path, type: 'article', locale: 'th_TH', siteName: 'EVSELECT', publishedTime: article.publishedAt, modifiedTime: article.updatedAt, images: [{ url: article.image, width: 1280, height: 640, alt: article.imageAlt }] },
  twitter: { card: 'summary_large_image', title: article.title, description: article.description, images: [article.image] },
};
const jsonLd = {
  '@context': 'https://schema.org', '@type': 'Article', headline: article.title, description: article.description,
  image: 'https://evselects.com' + article.image, datePublished: article.publishedAt, dateModified: article.updatedAt,
  author: { '@type': 'Organization', name: 'EVSELECT', url: 'https://evselects.com/' },
  publisher: { '@type': 'Organization', name: 'EVSELECT', url: 'https://evselects.com/', logo: { '@type': 'ImageObject', url: 'https://evselects.com/logo-desktop.png' } },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://evselects.com' + article.path },
};

export default function ThaiRoadSuspensionGuidePage() {
  return <article className="mx-auto max-w-4xl bg-white px-4 py-10 text-base leading-8 text-slate-700 sm:px-6 md:py-16 lg:px-8">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
    <nav aria-label="Breadcrumb" className="mb-7"><Link href="/articles" className={linkStyle + ' inline-flex items-center gap-2 text-sm'}><ArrowLeft size={16} />บทความและคู่มือรถ EV</Link></nav>
    <header className="space-y-6">
      <p className="text-sm font-bold text-lime-800">คู่มือช่วงล่าง · เริ่มจากอาการบนเส้นทางที่คุณใช้จริง</p>
      <h1 className="text-3xl font-black leading-tight text-slate-950 sm:text-4xl" style={{ textWrap: 'balance' }}>{article.title.split('เช็ก')[0]}<span className="whitespace-nowrap">เช็ก</span>{article.title.split('เช็ก')[1]}</h1>
      <p>ผ่านรอยต่อสะพานทีไร คนข้างหลังสะดุ้ง แต่พอเจอถนนเป็นคลื่น รถกลับโยนจนต้องผ่อนคันเร่ง ถ้ารถคุณเป็นแบบนี้ คำว่า “เอาโช้คนุ่ม ๆ” อาจยังบอกช่างไม่พอ ลองแยกก่อนว่าแรงกระแทกเกิดตอนล้อขึ้นสันถนน ตัวรถเด้งต่อหลังผ่านไปแล้ว หรือพวงมาลัยสั่น เพราะแต่ละอาการพาไปสู่สิ่งที่ต้องตรวจคนละจุด บทนี้จะช่วยให้คุณเก็บข้อมูลและเลือกงานที่จำเป็น ก่อนจ่ายค่าเปลี่ยนช่วงล่างทั้งชุด</p>
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-500">
        <span className="inline-flex items-center gap-2"><CalendarDays size={16} />อัปเดต <time dateTime={article.updatedAt}>23 กันยายน 2569</time></span>
        <span className="inline-flex items-center gap-2"><Clock size={16} />ประมาณ {article.readTime}</span>
        <span>เรียบเรียงโดย <BrandHomeLink /></span>
      </div>
    </header>

    <figure className="my-9 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
      <Image src={article.image} alt={article.imageAlt} width={1280} height={640} sizes="(max-width: 896px) 100vw, 832px" className="h-auto w-full" priority />
      <figcaption className="p-4 text-sm leading-6">Model 3 Performance ปี 2024 เป็นตัวอย่างรถที่มีระบบปรับแรงหน่วงจากโรงงาน ซึ่งควรตรวจการตั้งค่าก่อนเลือกชุดใหม่ ภาพ: <Source href={article.imageSource}>iMoD Official / Wikimedia Commons</Source> · <Source href={article.imageLicenseUrl}>CC BY 3.0</Source> · ย่อขนาด ไม่ใช่ภาพทดสอบบนถนนไทย</figcaption>
    </figure>

    <div className="space-y-12">
      <section className="space-y-4 rounded-2xl border border-lime-200 bg-lime-50 p-5 sm:p-7" aria-labelledby="start-here">
        <h2 id="start-here" className={headingStyle}>ก่อนซื้อโช้ค ให้ตอบสามข้อนี้ได้ก่อน</h2>
        <ol className="list-decimal space-y-3 pl-6 marker:font-bold marker:text-lime-800">
          <li><strong>ไม่พอใจอาการไหน?</strong> กระแทกจังหวะเดียว เด้งต่อหลายจังหวะ โคลงเวลาเลี้ยว หรือสั่นที่พวงมาลัย ระบุให้ชัดกว่าคำว่า “ไม่นิ่ง”</li>
          <li><strong>เริ่มเป็นเมื่อไร?</strong> เป็นมาตั้งแต่รถเดิม หรือหลังเปลี่ยนยาง ล้อ สปริง หรือปรับความสูง บอกจำนวนผู้โดยสารและสัมภาระในวันที่เกิดอาการด้วย</li>
          <li><strong>ตรวจสภาพพื้นฐานแล้วหรือยัง?</strong> ยางเสียหาย ล้อคด หรือชิ้นส่วนหลวมควรได้รับการตรวจซ่อมก่อนปรับฟีลลิ่ง</li>
        </ol>
        <p>หากอาการเกิดขึ้นฉับพลันหลังตกหลุม มีเสียงผิดปกติ หรือควบคุมรถได้ต่างจากเดิมชัดเจน ให้จอดในจุดปลอดภัยและขอความช่วยเหลือ อย่าขับซ้ำเพื่อหาค่าปรับโช้ค</p>
      </section>

      <section className="space-y-5" aria-labelledby="symptoms">
        <h2 id="symptoms" className={headingStyle}>กระแทก เด้ง และสั่น ต้องเล่าให้ต่างกัน</h2>
        <p>รายการนี้ช่วยบันทึกอาการ ไม่ใช่การวินิจฉัยรถจากระยะไกล ให้ช่างตรวจรถจริงและประวัติการเปลี่ยนอะไหล่ประกอบ</p>
        <div className="space-y-5">
          <div><h3 className="text-lg font-bold text-slate-950">กระแทกตอนเจอรอยต่อหรือขอบฝาท่อ</h3><p>จดว่ารู้สึกที่ด้านหน้าหรือหลัง มีเสียงร่วมด้วยหรือไม่ และเกิดเฉพาะเมื่อบรรทุกหรือเปล่า จุดที่ควรให้ช่างตรวจมีทั้งยาง ล้อ จุดยึด และระยะทำงานของช่วงล่าง การรู้สึกแข็งเพียงอย่างเดียวยังระบุไม่ได้ว่าโช้คเสียหรือสปริงแข็งเกินไป</p></div>
          <div><h3 className="text-lg font-bold text-slate-950">ผ่านเนินแล้วตัวรถยังเด้งหรือโยนต่อ</h3><p>แยกจังหวะที่ล้อผ่านเนินออกจากการเคลื่อนไหวที่ตามมา แดมเปอร์มีหน้าที่ควบคุมการเคลื่อนไหวของช่วงล่างตาม <Source href={sources.kyb}>หลักการทำงานของโช้คจาก KYB</Source> แต่การจะปรับหรือเปลี่ยนอะไรต้องดูสภาพและสเปกทั้งชุด</p></div>
          <div><h3 className="text-lg font-bold text-slate-950">พวงมาลัยสั่น หรือรถดึงซ้าย–ขวา</h3><p>ควรตรวจยาง ล้อ และศูนย์ล้อด้วย <Source href={sources.tyres}>คู่มือดูแลยาง Tesla</Source> แยกอาการสั่นที่อาจต้องตรวจสมดุลล้อ ออกจากรถดึงหรือยางสึกผิดปกติที่ควรตรวจแนวล้อ อ่านต่อเรื่อง <Link href="/articles/ev-camber-adjustment-wheel-alignment-guide" className={linkStyle}>การอ่านใบตั้งศูนย์และแคมเบอร์</Link> เพื่อรู้ว่าร้านกำลังแก้ค่าไหน</p></div>
        </div>
      </section>

      <section className="space-y-5" aria-labelledby="baseline">
        <h2 id="baseline" className={headingStyle}>ตั้งต้นจากยาง น้ำหนักบรรทุก และโหมดเดิม</h2>
        <p>ตรวจแรงดันตอนยางเย็นตามป้ายรถหรือคู่มือที่ตรงกับชุดล้อและยาง ไม่ลดลมจนต่ำกว่าสเปกเพื่อกลบความกระด้าง สำหรับ Model 3 <Source href={sources.tyres}>Tesla เตือนไม่ให้ปล่อยลมยางร้อนเพื่อให้เท่าค่าแนะนำตอนเย็น</Source> และให้ตรวจรอยบวม บาด หรือการสึกผิดปกติด้วย</p>
        <p>การเดินทางคนเดียวกับนั่งเต็มคันเป็นคนละเงื่อนไข จดน้ำหนักบรรทุกโดยประมาณและตรวจพิกัดจากป้ายรถ เช่น <Source href={sources.loading}>ข้อมูลน้ำหนักรวมและน้ำหนักเพลาของ Model 3</Source> หากจะเปลี่ยนขนาดยาง อ่าน <Link href="/articles/ev-tyre-and-coilover-selection-guide" className={linkStyle}>วิธีเลือกยางและคอยล์โอเวอร์ให้รับน้ำหนักรถ EV</Link> ก่อนตัดสินจากความหนาแก้มยางหรือความสวยของล้อ</p>
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <h3 className="mb-2 text-lg font-bold text-slate-950">ตัวอย่าง: Model 3 Performance ที่มีช่วงล่าง Adaptive</h3>
          <p><Source href={sources.suspension}>คู่มือ Model 3 สำหรับประเทศไทย หัวข้อ Suspension</Source> ระบุโหมด Standard และ Sport สำหรับรุ่น Performance โดย Sport ให้การตอบสนองแน่นกว่า ควรตรวจโหมดที่ใช้อยู่และเปรียบเทียบภายใต้สภาพการใช้งานปกติก่อนซื้ออะไหล่ใหม่ เมนูและความพร้อมใช้งานต้องตรงกับรถและซอฟต์แวร์ของคุณ ตัวอย่างนี้ไม่ครอบคลุม Model 3 ทุกรุ่นหรือทุกปี</p>
        </div>
      </section>

      <section className="space-y-5" aria-labelledby="whole-system">
        <h2 id="whole-system" className={headingStyle}>รถเตี้ยลง ต้องตรวจมากกว่าระยะใต้ท้อง</h2>
        <p>ระยะใต้ท้องรถกับระยะยุบของช่วงล่างเป็นคนละเรื่อง คันที่ไม่ครูดทางลาดตอนจอดว่างอาจให้ผลต่างเมื่อบรรทุก จึงควรให้ผู้ติดตั้งตรวจระยะยุบ–ยืด การทำงานของยางกันกระแทก การติดซุ้มล้อ และทางเดินสายเบรก/สายเซนเซอร์ ตามคู่มือรถและชุดช่วงล่างนั้น</p>
        <p>อย่าใช้ระยะยุบขั้นต่ำหรือจำนวนมิลลิเมตรที่โหลดได้เพียงค่าเดียวกับ EV ทุกคัน ขอให้ร้านอธิบายว่าความสูงที่เสนออยู่ในช่วงที่ผู้ผลิตชุดนั้นกำหนดอย่างไร รวมถึงต้องตั้งศูนย์หรือปรับเทียบระบบใดตามขั้นตอนของรถรุ่นนั้น</p>
        <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
          <Image src="/images/articles/single-wishbone-suspension.jpg" alt="แบบจำลอง MacPherson strut พร้อมลูกศรชี้ชุดสตรัท คอม้า ดุมและสตัดล้อ ปีกนกล่าง และชุดเบรก" width={1920} height={849} sizes="(max-width: 896px) 100vw, 832px" className="h-auto w-full" />
          <figcaption className="space-y-3 p-4 text-sm leading-6">
            <p>ภาพโครงสร้างทั่วไปเพื่อให้เห็นชิ้นส่วนรอบโช้ค ไม่ใช่ช่วงล่าง Model 3 หรือแบบสำหรับติดตั้งกับ EV รุ่นใดโดยเฉพาะ ภาพ: <Source href={sources.diagram}>Atharv Chandel / Wikimedia Commons</Source> · <Source href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</Source> · ย่อขนาด</p>
            <p>อ่านป้ายในภาพ: MacPherson Strut = ชุดสตรัท, Steering Knuckle = คอม้า, Wheel Studs &amp; Wheel Hub = สตัดล้อและดุมล้อ, Lower Wishbone = ปีกนกล่าง, Brake Assembly = ชุดเบรก</p>
            <Link href="/images/articles/single-wishbone-suspension.jpg" prefetch={false} className={linkStyle}>ดูภาพโครงสร้างขนาดเต็ม</Link>
          </figcaption>
        </figure>
        <p>สปริงกับแดมเปอร์ต้องทำงานร่วมกัน ส่วนชื่อ Monotube, Twin-tube และถุงลมบอกคนละคุณสมบัติ อ่าน <Link href="/articles/shock-absorber-types-monotube-twintube-air-ev" className={linkStyle}>ประเภทโช้คและระบบถุงลม</Link> เพื่อเทียบชุดที่ร้านเสนอให้ตรงหน้าที่ของมัน</p>
      </section>

      <section className="space-y-5" aria-labelledby="adjustment">
        <h2 id="adjustment" className={headingStyle}>ถ้าปรับโช้คได้ เริ่มจากค่าอ้างอิงของชุดนั้น</h2>
        <p><Source href={sources.kw}>KW อธิบายการปรับ Compression และ Rebound</Source> ว่าใช้ควบคุมการยุบกับการคืนตัวคนละช่วง การปรับจึงมีผลมากกว่าความรู้สึก “นุ่ม–แข็ง” และจำนวนคลิกของโช้คคนละรุ่นเทียบเป็นแรงหน่วงเท่ากันไม่ได้</p>
        <p>ใช้ค่าเริ่มต้น วิธีนับคลิก และขอบเขตการปรับจากคู่มือของรหัสสินค้าที่ติดตั้ง ให้ช่างช่วยวางลำดับการปรับและบันทึกค่าเดิมไว้ก่อน หากต้องการเข้าใจว่าอาการโยนกับรอยต่อถนนเกี่ยวกับวาล์วอย่างไร อ่าน <Link href="/articles/ev-damper-tuning-bump-rebound-guide" className={linkStyle}>วิธีปรับ Bump และ Rebound</Link> ต่อได้</p>
        <ol className="list-decimal space-y-3 pl-6 marker:font-bold">
          <li><strong>เก็บสภาพตั้งต้น:</strong> รุ่นยาง แรงดันเย็น จำนวนผู้โดยสาร โหมดรถ ความสูง และค่าปรับที่ใช้อยู่</li>
          <li><strong>เปรียบเทียบอย่างปลอดภัย:</strong> ใช้เส้นทางคุ้นเคย สภาพถนนและบรรทุกใกล้เคียงกัน เคารพความเร็วที่กำหนดและลดลงตามสภาพ ไม่จงใจวิ่งชนหลุมหรือหักหลบเพื่อทดสอบ</li>
          <li><strong>เปลี่ยนทีละเรื่อง:</strong> ปรับตามคู่มือและคำแนะนำผู้ติดตั้ง แล้วบันทึกสิ่งที่ดีขึ้นและแย่ลง ให้ผู้โดยสารช่วยจดหรือจดหลังจอด อย่าใช้โทรศัพท์ขณะขับ</li>
          <li><strong>หยุดเมื่อรถผิดปกติ:</strong> หากมีเสียงใหม่ ล้อเสียดสี ไฟเตือน หรือการควบคุมแย่ลง ให้หยุดการเปรียบเทียบและส่งตรวจ ไม่แก้ด้วยการหมุนคลิกต่อไปเรื่อย ๆ</li>
        </ol>
      </section>

      <section className="space-y-4" aria-labelledby="rain">
        <h2 id="rain" className={headingStyle}>หน้าฝน: ความสูงรถไม่ใช่ใบอนุญาตลุยน้ำ</h2>
        <p>ไม่มีสูตรคลายโช้คที่ทำให้ขับผ่านน้ำขังได้อย่างปลอดภัย แรงดันและสภาพยาง ความเร็ว รวมถึงสภาพทางยังต้องได้รับการประเมินตามการใช้งานจริง หากไม่ทราบความลึกหรือสภาพพื้นใต้น้ำ ให้เลือกเส้นทางอื่น ไม่ใช้ความสูงใต้ท้องรถเป็นตัวรับรอง</p>
        <p><Source href={sources.flood}>คำแนะนำ Tesla เมื่อรถจมน้ำ</Source> ระบุว่าอย่านำรถกลับมาใช้งานจนกว่าศูนย์หรือผู้ซ่อมที่ได้รับอนุญาตจะตรวจแล้ว การเปลี่ยนโช้ค กระบอกสแตนเลส หรือเพิ่มความสูงรถไม่ใช่หลักฐานว่าระบบไฟฟ้าและแบตเตอรี่พร้อมลุยน้ำ</p>
      </section>

      <section className="space-y-5 rounded-2xl border border-slate-200 p-5 sm:p-7" aria-labelledby="installer">
        <h2 id="installer" className={headingStyle}>ก่อนอนุมัติงาน ขอคำตอบจากร้านให้ครบ</h2>
        <ul className="list-disc space-y-3 pl-6">
          <li>พบสาเหตุอะไรจากการตรวจจริง และมีชิ้นส่วนใดควรซ่อมก่อนอัปเกรด?</li>
          <li>รหัสชุดตรงกับรุ่น ปี รุ่นย่อย น้ำหนักเพลา และระบบช่วงล่างไฟฟ้าเดิมหรือไม่?</li>
          <li>ความสูงและค่าตั้งต้นอ้างอิงเอกสารใด ต้องตั้งศูนย์หรือปรับเทียบอะไรหลังติดตั้ง?</li>
          <li>จะตรวจการติดซุ้ม ระยะทำงาน จุดยึด และสายต่าง ๆ อย่างไร พร้อมส่งมอบค่าก่อน–หลังหรือไม่?</li>
          <li>หากไม่ชอบฟีลลิ่ง มีขั้นตอนปรับแก้ บริการตรวจตามระยะ และค่าใช้จ่ายอะไรบ้าง?</li>
        </ul>
        <p>เป้าหมายที่คุยกันรู้เรื่องกว่า “นุ่มที่สุด” คือ “ลดอาการกระแทกที่รอยต่อในเส้นทางประจำ โดยยังควบคุมรถและรองรับผู้โดยสารตามการใช้งานได้” ให้ร้านอธิบายข้อแลกเปลี่ยนของชุดที่เสนอและวิธีตรวจผลกับรถคุณ</p>
      </section>

      <section className="space-y-4 border-t border-slate-200 pt-8" aria-labelledby="sources">
        <h2 id="sources" className={headingStyle}>แหล่งข้อมูลและขอบเขตบทความ</h2>
        <p>ตรวจแหล่งข้อมูลวันที่ 23 กันยายน 2569 บทนี้เป็นแนวทางเก็บอาการและคุยกับผู้ติดตั้ง เรียบเรียงจากคู่มือและหลักการของผู้ผลิต ไม่มีผลทดสอบถนนไทยของ <BrandHomeLink /> และไม่ใช่สูตรตั้งช่วงล่างเฉพาะคัน</p>
        <ul className="list-disc space-y-2 pl-6 text-sm leading-6">
          <li>Tesla Model 3 คู่มือประเทศไทย รุ่นปี 2024 เป็นต้นไป ซอฟต์แวร์ 2026.26: <Source href={sources.tyres}>ยางและศูนย์ล้อ</Source>, <Source href={sources.loading}>น้ำหนักบรรทุก</Source>, <Source href={sources.suspension}>ระบบช่วงล่าง Performance</Source> และ <Source href={sources.flood}>กรณีรถจมน้ำ</Source> — ต้องเทียบกับคู่มือที่ตรงรถคุณ</li>
          <li><Source href={sources.kyb}>KYB: คำถามเรื่องการทำงานของโช้ค</Source> — ใช้อธิบายหน้าที่ ไม่ใช้ยืนยันการติดตั้งกับ EV ทุกรุ่น</li>
          <li><Source href={sources.kw}>KW: Function &amp; Quality</Source> — หลักการปรับช่วงล่าง ไม่ใช่เอกสารรับรองชุดติดตั้งหรือเงื่อนไขรับประกันในไทย</li>
        </ul>
      </section>
      <aside className="rounded-2xl bg-slate-950 p-6 text-slate-200">
        <p className="font-bold text-white">เปิดความรู้ก่อน เปิดขายเมื่อข้อมูลพร้อม</p>
        <p className="mt-2 text-sm leading-7"><Link href="/" className="font-semibold text-lime-300 underline underline-offset-4">EVSELECT</Link> ยังไม่มีสินค้าพร้อมจำหน่าย และยังไม่เปิดรับคำสั่งซื้อหรือชำระเงิน อ่าน <Link href="/articles" className="font-semibold text-lime-300 underline underline-offset-4">บทความและคู่มือรถ EV</Link> เพื่อเตรียมข้อมูลก่อนเลือกอุปกรณ์ได้ครับ</p>
      </aside>
    </div>
  </article>;
}
