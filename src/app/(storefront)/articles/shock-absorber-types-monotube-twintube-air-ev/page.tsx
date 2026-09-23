import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CalendarDays, Clock } from 'lucide-react';
import BrandHomeLink from '@/components/BrandHomeLink';
import { shockTypesArticle as article, shockSources as sources } from '@/lib/shock-types-article';

const linkStyle = 'font-semibold text-lime-800 underline underline-offset-4 decoration-lime-500 hover:text-lime-950 focus-visible:outline-2 focus-visible:outline-offset-4';
const headingStyle = 'text-xl font-bold leading-snug text-slate-950 sm:text-2xl';
function Source({ href, children }: { href: string; children: ReactNode }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" className={linkStyle}>{children}<span className="sr-only"> (เปิดแท็บใหม่)</span></a>;
}

export const metadata: Metadata = {
  title: `${article.title} | EVSELECT`, description: article.description,
  alternates: { canonical: article.path },
  openGraph: { title: article.title, description: article.description, url: `https://evselects.com${article.path}`, type: 'article', locale: 'th_TH', siteName: 'EVSELECT', publishedTime: article.publishedAt, modifiedTime: article.updatedAt, images: [{ url: article.image, width: 1920, height: 1440, alt: article.imageAlt }] },
  twitter: { card: 'summary_large_image', title: article.title, description: article.description, images: [article.image] },
};
const jsonLd = {
  '@context': 'https://schema.org', '@type': 'Article', headline: article.title, description: article.description,
  image: `https://evselects.com${article.image}`, datePublished: article.publishedAt, dateModified: article.updatedAt,
  author: { '@type': 'Organization', name: 'EVSELECT', url: 'https://evselects.com/' },
  publisher: { '@type': 'Organization', name: 'EVSELECT', url: 'https://evselects.com/', logo: { '@type': 'ImageObject', url: 'https://evselects.com/logo-desktop.png' } },
  mainEntityOfPage: { '@type': 'WebPage', '@id': `https://evselects.com${article.path}` },
};

function DamperDiagram({ twin }: { twin: boolean }) {
  const id = twin ? 'twin-diagram' : 'mono-diagram';
  return <svg viewBox="0 0 300 280" role="img" aria-labelledby={`${id}-title ${id}-desc`} className="mx-auto w-full max-w-[320px]">
    <title id={`${id}-title`}>{twin ? 'ภาพโครงสร้าง Twin-tube แบบย่อ' : 'ภาพโครงสร้าง Monotube แบบมีลูกสูบแยกแก๊ส'}</title>
    <desc id={`${id}-desc`}>{twin ? 'ลูกสูบทำงานในกระบอกชั้นใน น้ำมันสำรองอยู่ระหว่างกระบอกสองชั้น และมีวาล์วฐานด้านล่าง' : 'ลูกสูบทำงานในกระบอกเดียว มีลูกสูบลอยแยกห้องน้ำมันออกจากห้องแก๊สด้านล่าง'}</desc>
    <rect x="28" y="60" width="100" height="214" rx="8" fill={twin ? '#dbeafe' : '#93c5fd'} stroke="#334155" strokeWidth="4" />
    {twin && <><rect x="44" y="76" width="68" height="170" fill="#93c5fd" stroke="#334155" strokeWidth="3" /><rect x="31" y="64" width="94" height="12" fill="#dcfccd" /></>}
    <path d="M78 18V155" stroke="#64748b" strokeWidth="12" />
    <rect x={twin ? 46 : 31} y="150" width={twin ? 64 : 94} height="14" rx="2" fill="#334155" />
    {twin ? <rect x="46" y="241" width="64" height="8" fill="#15803d" /> : <><rect x="31" y="216" width="94" height="55" fill="#dcfccd" /><rect x="31" y="210" width="94" height="8" fill="#15803d" /></>}
    <g fill="#0f172a" fontSize="15" fontWeight="600">
      <text x="148" y="39">ก้านโช้ค</text><path d="M137 34H91" stroke="#64748b" />
      <text x="148" y="114">ห้องน้ำมัน</text><path d="M137 109H99" stroke="#64748b" />
      <text x="148" y="162">ลูกสูบและวาล์ว</text><path d="M137 157H117" stroke="#64748b" />
      {twin ? <><text x="148" y="206">น้ำมันสำรอง</text><path d="M137 201H121" stroke="#64748b" /><text x="148" y="254">วาล์วฐาน</text><path d="M137 249L109 245" stroke="#64748b" /></> : <><text x="148" y="217">ลูกสูบแยกแก๊ส</text><path d="M137 212H117" stroke="#64748b" /><text x="148" y="259">ห้องแก๊ส</text><path d="M137 254H107" stroke="#64748b" /></>}
    </g>
  </svg>;
}

export default function ShockAbsorberTypesGuidePage() {
  return <article className="mx-auto max-w-4xl bg-white px-4 py-10 text-base leading-8 text-slate-700 sm:px-6 md:py-16 lg:px-8">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
    <nav aria-label="Breadcrumb" className="mb-7"><Link href="/articles" className={`${linkStyle} inline-flex items-center gap-2 text-sm`}><ArrowLeft size={16} />บทความและคู่มือรถ EV</Link></nav>
    <header className="space-y-6">
      <p className="text-sm font-bold text-lime-800">คู่มือช่วงล่าง · รู้ว่าเปลี่ยนอะไร ก่อนจ่ายค่าโช้ค</p>
      <h1 className="text-3xl font-black leading-tight text-slate-950 sm:text-4xl" style={{ textWrap: 'balance' }}>{article.title.split('ถุงลม')[0]}<span className="whitespace-nowrap">ถุงลม</span>{article.title.split('ถุงลม')[1]}</h1>
      <p>รถกระแทกตอนผ่านรอยต่อ แต่กลับโยนบนถนนเป็นคลื่น เปลี่ยนเป็น Monotube แล้วจะจบไหม? ชื่อโครงสร้างยังตอบแทนการเซ็ตช่วงล่างทั้งชุดไม่ได้ครับ ก่อนเลือกระหว่างโช้คแต่งกับถุงลม ลองแยกให้ออกว่าอะไรควบคุมการยุบ–คืนตัว อะไรรองรับน้ำหนัก และระบบไฟฟ้าปรับส่วนไหน คุณจะคุยกับร้านได้ตรงอาการขึ้น และไม่จ่ายเพิ่มเพียงเพราะชื่อเทคโนโลยีดูแพงกว่า</p>
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-500">
        <span className="inline-flex items-center gap-2"><CalendarDays size={16} />อัปเดต <time dateTime={article.updatedAt}>23 กันยายน 2569</time></span>
        <span className="inline-flex items-center gap-2"><Clock size={16} />ประมาณ {article.readTime}</span>
        <span>เรียบเรียงโดย <BrandHomeLink /></span>
      </div>
    </header>
    <div className="mt-10 space-y-12">
      <section className="space-y-4 rounded-2xl border border-lime-200 bg-lime-50 p-5 sm:p-7" aria-labelledby="three-questions">
        <h2 id="three-questions" className={headingStyle}>สามคำถามที่ต้องแยก ก่อนเทียบราคา</h2>
        <ol className="list-decimal space-y-3 pl-6 marker:font-bold marker:text-lime-800">
          <li><strong>โครงสร้างข้างในเป็นแบบไหน?</strong> Monotube และ Twin-tube บอกการจัดวางกระบอกทำงานกับห้องชดเชยปริมาตร</li>
          <li><strong>ปรับแรงหน่วงอย่างไร?</strong> เซ็ตมาคงที่ ปรับด้วยมือ หรือมีระบบไฟฟ้าควบคุมวาล์ว/ของไหล เป็นอีกคุณสมบัติหนึ่ง</li>
          <li><strong>ใช้สปริงอะไรรับน้ำหนัก?</strong> สปริงเหล็กหรือถุงลมเป็นเรื่องของสปริง รถถุงลมยังต้องมีแดมเปอร์ควบคุมการเคลื่อนไหวด้วย</li>
        </ol>
        <p>รถหนึ่งคันจึงมีทั้งถุงลมและแดมเปอร์แปรผันได้ การเอา “Monotube vs ถุงลม” มาเลือกผู้ชนะทันทีทำให้เทียบข้ามหน้าที่ของชิ้นส่วน</p>
      </section>

      <section className="space-y-5" aria-labelledby="construction">
        <h2 id="construction" className={headingStyle}>Monotube กับ Twin-tube ต่างกันตรงไหน?</h2>
        <p><Source href={sources.kyb}>คำอธิบายโครงสร้างจาก KYB</Source> ช่วยให้เห็นภาพ: เมื่อโช้คยุบและยืด น้ำมันไหลผ่านวาล์ว เกิดแรงต้านการเคลื่อนที่ พลังงานส่วนหนึ่งเปลี่ยนเป็นความร้อน โครงสร้างห้องน้ำมันและห้องแก๊สเป็นวิธีจัดการการทำงานนี้ แต่ยังไม่ใช่คะแนนความนุ่มของรถทั้งคัน</p>
        <div className="grid gap-5 sm:grid-cols-2">
          <section className="space-y-3 rounded-2xl border border-slate-200 p-4" aria-labelledby="twin-tube">
            <h3 id="twin-tube" className="text-lg font-bold text-slate-950">Twin-tube: กระบอกสองชั้น</h3>
            <DamperDiagram twin />
            <p>ลูกสูบเคลื่อนในกระบอกชั้นใน ส่วนพื้นที่ระหว่างกระบอกเป็นแหล่งพักน้ำมัน วาล์วที่ลูกสูบและวาล์วฐานช่วยควบคุมการไหล จึงต้องดูการออกแบบวาล์วของรุ่นนั้นร่วมด้วย</p>
          </section>
          <section className="space-y-3 rounded-2xl border border-slate-200 p-4" aria-labelledby="mono-tube">
            <h3 id="mono-tube" className="text-lg font-bold text-slate-950">Monotube: กระบอกเดียว</h3>
            <DamperDiagram twin={false} />
            <p>แบบที่แสดงมีลูกสูบลอยแยกแก๊สออกจากน้ำมัน ห้องแก๊สช่วยชดเชยปริมาตรเมื่อก้านโช้คเคลื่อนเข้าไป รายละเอียดขนาด แรงดัน และวาล์วยังต่างกันตามผลิตภัณฑ์</p>
          </section>
        </div>
        <p className="text-sm leading-6">ภาพวาดโดย <BrandHomeLink /> เพื่ออธิบายหลักการทั่วไป ไม่ใช่สัดส่วนจริงหรือภาพตัดของยี่ห้อใด และไม่แสดงค่าประสิทธิภาพจากการทดสอบ</p>
        <p>ตัวอย่างที่หักล้างความเข้าใจว่า Twin-tube ต้องเป็นของประหยัดเสมอ คือ <Source href={sources.kw}>KW V3 ที่ใช้โครงสร้าง Twin-tube</Source> และแยกปรับ Compression กับ Rebound ได้ ชื่อกระบอกจึงไม่พอจะตัดสินว่าโช้คตัวไหนเหมาะกับคุณกว่า</p>
        <figure className="grid items-center gap-5 rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:grid-cols-[200px_1fr]">
          <Image src="/images/articles/gas-damper-photo.jpg" alt="โช้ค Pro Comp ES9000 สีขาว ก้านโลหะยืดออก บนพื้นหลังสีฟ้า" width={400} height={525} sizes="200px" className="mx-auto h-auto w-full max-w-[200px] rounded-lg" />
          <figcaption className="space-y-3 text-sm leading-6">
            <p>ภาพโช้คแก๊สให้เห็นก้าน กระบอก และจุดยึดภายนอก รูปลักษณ์ภายนอกเพียงอย่างเดียวไม่ยืนยันโครงสร้างภายในหรือความเข้ากันได้กับรถ EV</p>
            <p>ภาพในคลังปี 2549: <Source href={sources.damperPhoto}>TEy~commonswiki / Wikimedia Commons</Source> (เครดิตตามหน้าคลังภาพ) · <Source href="https://creativecommons.org/licenses/by-sa/3.0/">CC BY-SA 3.0</Source> · แสดงเต็มภาพและย่อขนาด ไม่ใช่สินค้าที่เราเสนอขาย</p>
          </figcaption>
        </figure>
      </section>

      <section className="space-y-4" aria-labelledby="extra-hardware">
        <h2 id="extra-hardware" className={headingStyle}>Inverted และซับแทงก์ บอกการออกแบบเพิ่มอีกชั้น</h2>
        <p><strong>Inverted หรือโช้คหัวกลับ</strong> เป็นการกลับการจัดวางชุดแดมเปอร์ <Source href={sources.bilstein}>BILSTEIN อธิบายในงานสตรัท MacPherson</Source> ว่าชุดไกด์ช่วยรับแรงที่เกี่ยวกับการนำทางล้อ ประโยชน์ต้องดูร่วมกับจุดยึดและช่วงล่างของรถ ไม่ใช่ข้อสรุปว่า SUV ไฟฟ้าทุกคันต้องใช้หัวกลับ</p>
        <p><strong>Reservoir หรือซับแทงก์</strong> เป็นส่วนของการจัดการปริมาตรของไหลและแก๊สในแบบที่ออกแบบไว้ เช่น <Source href={sources.kw}>KW ระบุทั้งถังในตัว ถังติดกระบอก และถังต่อสาย</Source> ในผลิตภัณฑ์บางกลุ่ม การมีถังให้เห็นไม่ได้ยืนยันว่าเย็นกว่ากี่เท่าหรือขับสบายกว่ารุ่นไม่มีถัง ต้องเทียบข้อมูลและผลใช้งานของชุดจริง</p>
        <p>ถ้ากำลังเลือกระหว่างโช้คปรับหนึ่งทางกับหลายทาง อ่านต่อเรื่อง <Link href="/articles/ev-tyre-and-coilover-selection-guide" className={linkStyle}>ช่องปรับคอยล์โอเวอร์และสิ่งที่ต้องเช็กให้ตรงรถ</Link> จำนวนปุ่มไม่ควรเป็นเหตุผลหลักในการเพิ่มงบ</p>
      </section>

      <section className="space-y-4" aria-labelledby="electronic-and-air">
        <h2 id="electronic-and-air" className={headingStyle}>แดมเปอร์ไฟฟ้าไม่ใช่ถุงลม และแต่ละระบบใช้วิธีต่างกัน</h2>
        <div className="space-y-4">
          <section className="rounded-xl bg-slate-50 p-5"><h3 className="mb-2 text-lg font-bold text-slate-950">CDC: ปรับแรงหน่วงผ่านวาล์ว</h3><p><Source href={sources.zf}>ZF Continuous Damping Control</Source> ใช้ข้อมูลเซนเซอร์คำนวณแรงหน่วงแต่ละล้อ และควบคุมวาล์วในช่วงการทำงานที่ออกแบบไว้ การมีโหมด Comfort/Sport ไม่ได้บอกว่าใช้ระบบของ ZF เสมอไป ต้องตรวจผู้ผลิตและรุ่นระบบ</p></section>
          <section className="rounded-xl bg-slate-50 p-5"><h3 className="mb-2 text-lg font-bold text-slate-950">MagneRide: ใช้ของไหล MR</h3><p><Source href={sources.magneride}>MagneRide ของ BWI</Source> ใช้ของไหล Magnetorheological ซึ่งตอบสนองต่อสนามแม่เหล็กเพื่อควบคุมแรงหน่วง เป็นอีกวิธีหนึ่ง ไม่ควรใช้ชื่อ CDC หรือ MagneRide แทนโช้คไฟฟ้าทุกชนิด</p></section>
          <section className="rounded-xl bg-slate-50 p-5"><h3 className="mb-2 text-lg font-bold text-slate-950">Air spring: ถุงลมทำหน้าที่สปริง</h3><p>ถุงลมใช้อากาศอัดเป็นส่วนรับแรงยืดหยุ่น <Source href={sources.airSpring}>Monroe อธิบายการรองรับภาระบรรทุกของ Air spring</Source> ส่วนการปรับระดับและโหมดใช้งานขึ้นกับระบบรถ ต้องตรวจคู่มือรุ่นนั้น อย่าอนุมานจากคำว่าถุงลมเพียงคำเดียวว่ายกสูงได้เท่าใดหรือลุยน้ำได้เพิ่มขึ้น</p></section>
        </div>
        <p>เมื่อเข้าใจว่าแดมเปอร์ควบคุมการเคลื่อนไหวอย่างไรแล้ว ดู <Link href="/articles/ev-damper-tuning-bump-rebound-guide" className={linkStyle}>วิธีแยก Bump กับ Rebound และแนวทางปรับแดมเปอร์</Link> ต่อได้ บทนั้นอธิบายการปรับ ส่วนหน้านี้ใช้แยกประเภทอุปกรณ์ก่อนเลือกชุด</p>
      </section>

      <section className="space-y-4" aria-labelledby="thai-example">
        <h2 id="thai-example" className={headingStyle}>ตัวอย่างสเปกไทย: ZEEKR 7X ต้องดูรุ่นย่อย</h2>
        <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
          <Image src={article.image} alt={article.imageAlt} width={1920} height={1440} sizes="(max-width: 896px) 100vw, 832px" className="h-auto w-full" />
          <figcaption className="space-y-2 p-4 text-sm leading-6"><p>ZEEKR 7X ภาพประกอบรุ่นรถ ภาพนี้ไม่ยืนยันตลาดจำหน่าย รุ่นย่อย หรืออุปกรณ์ของรถสเปกไทย ข้อมูลช่วงล่างอ้างจากโบรชัวร์ด้านล่าง</p><p>ภาพ: <Source href={article.imageSource}>{article.imageAuthor} / Wikimedia Commons</Source> · <Source href={article.imageLicenseUrl}>{article.imageLicense}</Source> · ย่อขนาด แสดงเต็มสัดส่วน</p></figcaption>
        </figure>
        <p><Source href={sources.zeekr}>สเปก ZEEKR 7X ประเทศไทย</Source> มี Standard RWD, Long Range RWD และ Performance AWD แต่ <Source href={sources.zeekrBrochure}>โบรชัวร์ไทย สิงหาคม 2025 หน้า 3</Source> ทำเครื่องหมายอุปกรณ์ “ถุงลมพร้อม CCD Electromagnetic Vibration Reduction System” เฉพาะ <strong>Performance AWD</strong> ส่วนสองรุ่น RWD เป็นขีด จึงไม่ควรเหมารวมว่า 7X ทุกรุ่นได้ช่วงล่างชุดเดียวกัน</p>
        <p>โบรชัวร์เดียวกันระบุน้ำหนัก Performance AWD ที่ <strong>2,535 กก.</strong> และกำลัง <strong>475 kW / 637 แรงม้า</strong> ตัวอย่างนี้ชี้ว่าการเลือกช่วงล่างและยางต้องรู้รุ่นย่อยจริง ไม่ใช้แค่ชื่อรถ ส่วนคำว่า CCD ในเอกสารยังไม่พอให้สรุปว่าเป็น ZF CDC หรือ BWI MagneRide</p>
        <p className="text-sm leading-6">ตรวจหน้าไทยและโบรชัวร์ที่เชื่อมจากหน้านั้นวันที่ 23 กันยายน 2569 อุปกรณ์อาจเปลี่ยนตามปีรถและตลาด ควรยืนยันกับเอกสารของคันที่จะซื้อ</p>
      </section>

      <section className="space-y-4" aria-labelledby="before-buying">
        <h2 id="before-buying" className={headingStyle}>ก่อนซื้อ ให้ร้านตอบห้าข้อนี้ให้ได้</h2>
        <ol className="list-decimal space-y-3 pl-6 marker:font-bold marker:text-lime-800">
          <li><strong>แก้อาการอะไร?</strong> ระบุพื้นผิว ความเร็วตามกฎหมาย จำนวนผู้โดยสาร และสิ่งที่เปลี่ยนจากเดิม แยกอาการกระแทกกับอาการโยนก่อนเปลี่ยนทั้งชุด</li>
          <li><strong>ตรงรถคันไหน?</strong> ขอรหัสสินค้า รุ่น ปี รุ่นย่อย น้ำหนักเพลาที่รองรับ และข้อจำกัดของระบบไฟฟ้าเดิมจากผู้ผลิตชุดนั้น</li>
          <li><strong>ยังเหลือระยะยุบเท่าไร?</strong> ให้ผู้ติดตั้งตรวจช่วงทำงาน สปริง ยางกันกระแทก และระยะห่างที่ความสูงใช้งานจริง ไม่กำหนดตัวเลขเดียวครอบคลุมทุก EV</li>
          <li><strong>หลังติดตั้งมีหลักฐานอะไร?</strong> ขอค่าตั้งต้น วิธีทดลองอย่างปลอดภัย และใบตั้งศูนย์เมื่อมีงานที่กระทบมุมล้อ อ่าน <Link href="/articles/ev-camber-adjustment-wheel-alignment-guide" className={linkStyle}>วิธีอ่านใบตั้งศูนย์และแยก Camber/Toe</Link> ไว้คุยกับร้าน</li>
          <li><strong>ซ่อมและดูแลที่ไหน?</strong> ขอเงื่อนไขรับประกัน ค่าอะไหล่ งานโอเวอร์ฮอล และผู้ให้บริการในไทยเป็นลายลักษณ์อักษร คำว่า Monotube ไม่ได้แปลว่าทุกรุ่นถอดซ่อมได้</li>
        </ol>
        <p>ถ้าโจทย์คือขับทุกวัน ให้เริ่มจากความเข้ากันได้และอาการที่อยากแก้ แล้วทดลองชุดที่สภาพใกล้รถคุณเมื่อทำได้ ความนุ่ม การควบคุม และค่าใช้จ่ายระยะยาวควรถูกประเมินร่วมกัน ไม่ตัดสินจากชนิดกระบอกหรือจำนวนปุ่มเพียงอย่างเดียว</p>
      </section>

      <section className="space-y-4" aria-labelledby="sources">
        <h2 id="sources" className={headingStyle}>แหล่งอ้างอิงและขอบเขตของบทความ</h2>
        <p>บทความนี้เรียบเรียงจากคำอธิบายผู้ผลิต ไม่มีผลทดสอบโช้คไดโนหรือการวัดอุณหภูมิบนถนนไทยของ <BrandHomeLink /> ข้อมูลทดสอบเปรียบเทียบชุดจริงเป็น Data unavailable จึงไม่ให้เปอร์เซ็นต์ความเหนือกว่า ไม่ให้คะแนนจำลอง และไม่รับรองการติดตั้งจากภาพประกอบ</p>
        <ul className="list-disc space-y-2 pl-6">
          <li><Source href={sources.kyb}>KYB — หลักการทำงานและโครงสร้าง Twin-tube/Monotube</Source></li>
          <li><Source href={sources.kw}>KW — โครงสร้างและระบบปรับของผลิตภัณฑ์แต่ละกลุ่ม</Source></li>
          <li><Source href={sources.bilstein}>BILSTEIN — โครงสร้างหัวกลับและการวิเคราะห์ความเสียหาย</Source></li>
          <li><Source href={sources.zf}>ZF — การควบคุมแรงหน่วง CDC</Source> · <Source href={sources.magneride}>BWI — เทคโนโลยี MagneRide</Source></li>
          <li><Source href={sources.airSpring}>Monroe — Air spring</Source></li>
          <li><Source href={sources.zeekrBrochure}>ZEEKR — โบรชัวร์ประเทศไทย ตารางอุปกรณ์และรุ่นย่อย</Source></li>
        </ul>
      </section>
      <aside className="space-y-3 rounded-2xl bg-slate-900 p-5 text-white sm:p-7">
        <p className="font-bold"><Link href="/" className="text-lime-300 underline underline-offset-4 hover:text-lime-100">EVSELECT</Link> · เปิดความรู้ก่อน เปิดขายเมื่อข้อมูลพร้อม</p>
        <p className="text-sm leading-6 text-slate-200">ยังไม่มีสินค้าพร้อมจำหน่าย และยังไม่เปิดรับคำสั่งซื้อหรือชำระเงิน</p>
        <Link href="/articles?category=suspension" className="inline-flex items-center gap-2 font-semibold text-lime-300 underline underline-offset-4">เลือกอ่านคู่มือช่วงล่างต่อ<ArrowRight size={18} /></Link>
      </aside>
    </div>
  </article>;
}
