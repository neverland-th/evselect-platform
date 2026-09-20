import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Link from 'next/link';
import BrandHomeLink from '@/components/BrandHomeLink';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, BookOpen, CalendarDays, SlidersHorizontal } from 'lucide-react';
import { damperArticle } from '@/lib/damper-article';
import DamperExplorer, { DamperScenarios } from '@/components/articles/DamperExplorer';
import DamperPhoto from '@/components/articles/DamperPhoto';
import styles from '@/components/articles/DamperGuide.module.css';

export const metadata: Metadata = {
  alternates: { canonical: damperArticle.path },
  title: `${damperArticle.title} เข้าใจโช้คสตรัทปรับเกลียว | EVSELECT`,
  description: damperArticle.description,
  openGraph: {
    title: damperArticle.title,
    description: damperArticle.description,
    url: damperArticle.url,
    siteName: 'EVSELECT Thailand',
    locale: 'th_TH',
    type: 'article',
    publishedTime: damperArticle.publishedAt,
    modifiedTime: damperArticle.updatedAt,
    images: [{ url: damperArticle.coverUrl, width: 2160, height: 1212, alt: damperArticle.coverAlt }],
  },
  twitter: {
    card: 'summary_large_image',
    title: damperArticle.title,
    description: damperArticle.description,
    images: [damperArticle.coverUrl],
  },
};

const sources = {
  kwComfort: { title: 'KW — Street Comfort: จุดประสงค์ของกลุ่มผลิตภัณฑ์', url: 'https://www.kwsuspensions.com/uk/products/street-comfort' },
  hksR: { title: 'HKS — HIPERMAX R: การใช้งานสนามและการขับประจำวัน', url: 'https://www.hks-power.co.jp/en/product/suspension/hipermax/r/index.html' },
  teinFlex: { title: 'TEIN — FLEX Z: โครงสร้าง Twin-tube และการปรับยุบ–ยืดร่วมกัน', url: 'https://uk.tein.com/products/flex_z/' },
  teinMono: { title: 'TEIN — MONO SPORT: Monotube และช่องปรับแรงหน่วง', url: 'https://www.tein.com/products/mono_sport.html' },
  teinValve: { title: 'TEIN — Features: Needle valve และช่องปรับร่วม/แยก', url: 'https://www.tein.com/products/features.html' },
  bilstein: { title: 'BILSTEIN Academy — การปรับ B16/EVO T1 และทางน้ำมัน Bypass', url: 'https://performance.bilstein.com/en/suspensions-with-damping-force-adjustment/' },
  bilsteinFixed: { title: 'BILSTEIN — B14 และ B16: แรงหน่วงคงที่กับปรับได้', url: 'https://performance.bilstein.com/en/why-so-many-options/' },
  kwV2: { title: 'KW — V2: ปรับ Low-speed Rebound', url: 'https://www.kwsuspensions.com/uk/products/street-performance/v2-coilovers' },
  kwV3: { title: 'KW — V3: แยก Low-speed Compression และ Rebound', url: 'https://www.kwsuspensions.com/uk/products/street-performance/v3-coilovers' },
  kwV4: { title: 'KW — V4: Low-/High-speed Compression และ Low-speed Rebound', url: 'https://www.kwsuspensions.com/uk/products/street-performance/v4-coilovers' },
  bcER: { title: 'BC Racing — ER: Compression และ Rebound แยกช่องปรับ', url: 'https://www.bcracing.co.nz/types/er/' },
  bcZR: { title: 'BC Racing — ZR: สามช่องปรับและรูปแบบ Reservoir', url: 'https://bcracing-na.com/series/zr-series/' },
  ohlins: { title: 'Öhlins — DFV: การไหลของน้ำมันและการชดเชยอุณหภูมิ', url: 'https://www.ohlins.com/en-us/technology/dfv-technology' },
  ohlinsRT: { title: 'Öhlins — Road & Track รหัส TES MA10S1 สำหรับ Model 3 2020: ตัวอย่างช่องปรับร่วม', url: 'https://www.ohlins.com/en-us/automotive/road-and-track/tesla-model-3-model-y-road-and-track-set?v=tesla-model-3-2020' },
  ohlinsManual: { title: 'Öhlins — คู่มือ Road & Track Automotive: Preload, ระยะทำงาน และความปลอดภัย', url: 'https://www.ohlins.com/storage/7AC688BED0B27E53064F094EF615E1B088E4D8FEA94635A5D2ECCC5FB1894053/b31b9618ad354b438a407241ceb64a6d/pdf/media/d60188c2ea574151aad35b903c54e441/OM_07451-01_7_R_T.pdf' },
  eibach: { title: 'Eibach — Suspension Worksheet: Motion ratio และ Wheel rate', url: 'https://eibach.com/storage/catalogs/suspension-worksheet.pdf' },
  penske: { title: 'Penske — Suspension Tuning: อุปกรณ์เดียวกันไม่ได้เหมาะกับผู้ขับทุกคน', url: 'https://www.penskeshocks.com/master-the-process-of-suspension-tuning-penske-racing-shocks' },
  springPrinciples: { title: 'Penske — Shocks and Springs: Spring rate, Preload และแรงหน่วง', url: 'https://www.penskeshocks.com/shocks-and-springs' },
  bilsteinInstall: { title: 'BILSTEIN — ข้อผิดพลาดการติดตั้ง: บูชบิดค้าง รหัสสินค้า และศูนย์ล้อ', url: 'https://workshop.bilstein.com/cs/watch-out-avoid-these-installation-mistakes/' },
  teinSetup: { title: 'TEIN — Ride Height FAQ: Lever ratio, ระยะยุบ และ Bump rubber', url: 'https://www.tein.com/question/settei.html' },
  bcSetup: { title: 'BC Racing — FAQ: ความสัมพันธ์ของ Spring rate กับ Valving', url: 'https://bcracing-na.com/faq/' },
  hks: { title: 'HKS — HIPERMAX S: Single-tube, WR Needle และการปรับความสูง', url: 'https://www.hks-power.co.jp/en/product/suspension/hipermax/maxs/index.html' },
  hks2026: { title: 'HKS — Product Code List 2026: เทียบรหัส HIPERMAX S เดิม/ใหม่', url: 'https://www.hks-power.co.jp/en/product/suspension/hipermax/maxs/new_hipermax_s_list.pdf' },
  hksManual: { title: 'HKS — คู่มือ HIPERMAX R รหัส 80310-AN002: วิธีนับคลิกเฉพาะรุ่น', url: 'https://www.hks-power.co.jp/product_search/product/download/5005/ja_en/80310-AN002.pdf' },
  teinTH: { title: 'TEIN Sales Thailand — ผลิตภัณฑ์และช่องทางในประเทศไทย', url: 'https://thailand.tein.com/' },
  bcTH: { title: 'BC Racing — รายชื่อผู้จัดจำหน่าย รวมประเทศไทย', url: 'https://www.bcracing.co.nz/distributors/' },
  bilsteinTH: { title: 'BILSTEIN — รายชื่อผู้จัดจำหน่ายในเอเชีย รวมประเทศไทย', url: 'https://www.bilstein.jp/btc/distributor' },
  hksTH: { title: 'HKS — Global Sales Network', url: 'https://www.hks-global.com/network/index.html' },
  ohlinsTH: { title: 'Öhlins — กลุ่มผลิตภัณฑ์ Automotive ภาษาไทย', url: 'https://www.ohlins.com/th-th/automotive' },
};

type SourceKey = keyof typeof sources;
function Ref({ to, children }: { to: SourceKey; children: ReactNode }) {
  return <a href={sources[to].url} target="_blank" rel="noopener noreferrer" className="font-medium text-lime-800 underline decoration-lime-300 underline-offset-4 hover:text-lime-950">{children}<span className="sr-only"> (เปิดแท็บใหม่)</span></a>;
}
function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-28 space-y-5">
      <h2 id={`${id}-title`} className="border-l-4 border-lime-500 pl-4 text-2xl font-bold leading-snug text-slate-950 sm:text-3xl">{title}</h2>
      {children}
    </section>
  );
}
function Note({ title, children, headingLevel = 3 }: { title: ReactNode; children: ReactNode; headingLevel?: 2 | 3 }) {
  const Heading = headingLevel === 2 ? 'h2' : 'h3';
  return <aside className="rounded-2xl border border-lime-200 bg-lime-50/60 p-5 sm:p-6"><Heading className="mb-2 text-lg font-semibold text-slate-950">{title}</Heading><div>{children}</div></aside>;
}

const contents = [
  ['fitment-before-brand', 'ใส่รถรุ่นเดียวกันได้ ทำไมขับแล้วไม่เหมือนกัน'],
  ['basics', 'เริ่มจากพื้นฐาน: ยาง สปริง Damper และ Bump stop'],
  ['types', 'สตรัทปรับเกลียวมีกี่แบบ? แยกสเปกสามเรื่องก่อน'],
  ['spring-height', 'Spring rate, Preload และระยะยุบ ต้องมาก่อนปุ่ม'],
  ['explorer', 'ดูภาพช่องปรับ: ปุ่มเดียวทำอะไรได้บ้าง'],
  ['inside', 'หมุนคลิกแล้วเกิดอะไรขึ้นข้างในโช้ค'],
  ['shaft-speed', 'Low-Speed ไม่ใช่ขับช้า'],
  ['one-way', '1-Way: ปุ่มเดียว ไม่ได้ทำงานเหมือนกัน'],
  ['two-way', '2-Way: อยากคุมยุบ แต่ไม่อยากรั้งยืด'],
  ['three-way', '3-Way: ช่องที่เพิ่มมาช่วยอะไร'],
  ['brands', 'เทียบหลายแบรนด์ อ่านสเปกให้พ้นชื่อรุ่น'],
  ['character-and-roads', 'โช้คมีนิสัยต่างกัน แล้วเข้ากับถนนที่เราใช้ไหม'],
  ['reservoir', 'ซับแทงก์ วาล์ว และกราฟไดโนบอกอะไร'],
  ['symptoms', 'เด้ง กระด้าง หรือยุบสุด แยกอาการก่อนจูน'],
  ['examples', 'ลองคิด 3 สถานการณ์ ก่อนหมุนปุ่มจริง'],
  ['ev-fitment', 'แต่ง EV ให้จบ ต้องเช็กอะไรบ้าง'],
  ['baseline', 'เริ่มจูนจากหลักฐาน ไม่ใช่สูตรคลิกในคอมเมนต์'],
  ['buying-brief', 'เปลี่ยนคำว่า “อยากได้ตัวจบ” เป็นโจทย์ที่ร้านตอบได้'],
  ['toolkit', 'แบบบันทึกและเช็กลิสต์ส่งให้ร้าน'],
  ['choose', 'ขับทุกวันหรือ Track Day ควรจ่ายถึงกี่ Way'],
  ['faq', 'คำถามที่ควรรู้ก่อนสั่งซื้อ'],
] as const;

const comparisons: { name: string; type: string; controls: string; lesson: string; source: SourceKey }[] = [
  { name: 'TEIN FLEX Z', type: '1-Way แบบปรับร่วม', controls: 'Compression + Rebound ผ่านตัวปรับเดียว', lesson: '16 ระดับคือจำนวนตำแหน่ง ไม่ใช่ 16 ช่องอิสระ; ใช้โครงสร้าง Twin-tube', source: 'teinFlex' },
  { name: 'TEIN MONO SPORT', type: '1-Way แบบปรับร่วม', controls: 'Compression + Rebound ผ่านตัวปรับเดียว', lesson: 'เป็น Monotube แต่จำนวนช่องปรับเท่ากับตัวอย่าง Twin-tube ข้างบน', source: 'teinMono' },
  { name: 'BILSTEIN B16 แบบปรับมือ', type: '1-Way แบบปรับร่วม', controls: 'Bump + Rebound เปลี่ยนพร้อมกัน', lesson: 'ตัวอย่าง PSS10 มี 10 ตำแหน่ง; ไม่เหมารวมรุ่นควบคุมอิเล็กทรอนิกส์', source: 'bilstein' },
  { name: 'Öhlins Road & Track DFV', type: '1-Way ในชุดที่อ้างอิง', controls: 'Compression + Rebound ผ่านตัวปรับเดียว', lesson: 'ตัวอย่าง TES MA10S1 หน้า Model 3 2020; ต้องตรวจปี/รุ่นย่อยจริง ไม่ใช้ยืนยัน Highland หรือ Model Y ทุกคัน', source: 'ohlinsRT' },
  { name: 'KW V2', type: '1-Way แบบ Rebound', controls: 'Low-speed Rebound; Compression กำหนดจากโรงงาน', lesson: 'ปุ่มเดียวไม่ได้หมายความว่าต้องเปลี่ยนยุบกับยืดไปพร้อมกันเสมอ', source: 'kwV2' },
  { name: 'KW V3', type: '2-Way', controls: 'Low-speed Compression + Low-speed Rebound แยกปรับ', lesson: 'V3 เป็นชื่อซีรีส์ ไม่ได้หมายถึง 3-Way', source: 'kwV3' },
  { name: 'BC Racing ER', type: '2-Way', controls: 'Compression + Rebound แยกปรับ', lesson: 'มี Reservoir แต่ไม่ได้กลายเป็น 3-Way เพราะมีถังแยก', source: 'bcER' },
  { name: 'BC Racing ZR', type: '3-Way', controls: 'Low-speed Compression + High-speed Compression + Rebound', lesson: 'เพิ่มอิสระฝั่งยุบ โดยยังมีช่องปรับ Rebound ของตัวเอง', source: 'bcZR' },
  { name: 'KW V4', type: '3-Way', controls: 'Low-speed Compression + High-speed Compression + Low-speed Rebound', lesson: 'อ่านชื่อช่องจริงด้วย เพราะขอบเขตการทำงานไม่ได้เหมือนกันทุกซีรีส์', source: 'kwV4' },
];

const faqs = [
  { q: 'โช้คที่คนใช้รถรุ่นเดียวกับเราแนะนำ คือชุดที่ดีที่สุดแล้วหรือยัง?', a: 'ยังตอบไม่ได้ การตรงรุ่นเป็นด่านแรกเรื่องความเข้ากันได้ แต่ความเหมาะสมต้องดูปีและรุ่นย่อย ยาง โหลด ความสูง ถนน อาการที่อยากแก้ และความสบายที่ยอมแลกได้ รีวิวที่มีรายละเอียดเหล่านี้ใช้ช่วยคัดตัวเลือกได้ ส่วนคำว่า “ใส่แล้วจบ” ที่ไม่มีเงื่อนไขยังใช้ตัดสินแทนรถเราไม่ได้' },
  { q: 'ซื้อโช้คหลักแสนแล้วไม่ดีขึ้น ควรเปลี่ยนเป็นรุ่นแพงกว่าทันทีไหม?', a: 'เริ่มจากตรวจว่าปัญหาอยู่ตรงไหนก่อน ขอรหัสชุด ค่าตั้งต้น สเปกสปริง ความสูง ใบตั้งศูนย์ และผลตรวจระยะทำงานจากผู้ติดตั้ง ตรวจยาง จุดยึด และบูชที่อาจบิดค้างด้วย ถ้าโครงสร้างและงานติดตั้งถูกต้องแล้วจึงประเมินว่าช่วงแรงหน่วงหรือสปริงไม่ตรงโจทย์หรือไม่ การเปลี่ยนชุดมีเหตุผลเมื่ออธิบายข้อจำกัดของชุดเดิมได้ ไม่ใช่เพียงเพราะราคาที่จ่ายไปยังไม่ให้ความรู้สึกที่หวัง' },
  { q: 'ปรับอ่อนสุดแล้วกระด้าง แปลว่าสปริงแข็งไปแน่นอนหรือเปล่า?', a: 'ไม่แน่นอน ต้องแยกแรงกระแทกครั้งแรกออกจากการเด้งตาม และตรวจยาง ระยะยุบ Bump stop ความฝืด จุดยึด กับงานติดตั้ง ปุ่มอ่อนสุดยังมีแรงหน่วงจากวาล์วส่วนอื่น และในบางกรณีการยุบมากจนใช้ระยะหมดก็ทำให้รู้สึกกระแทกได้ อาการอย่างเดียวจึงไม่พอจะสั่งเปลี่ยนสปริงหรือเปิดปุ่มเพิ่ม' },
  { q: '3-Way จะนุ่มกว่า 1-Way เสมอไหม?', a: 'ไม่เสมอ จำนวนช่องปรับบอกว่าคุณเปลี่ยนแรงหน่วงได้ละเอียดกี่ด้าน ไม่ได้บอกสปริง ระยะยุบ ความฝืด หรือคุณภาพการตั้งค่า ชุด 1-way ที่เลือกและติดตั้งเหมาะกับรถอาจลงตัวกว่าชุด 3-way ที่ใช้สปริงหรือความสูงผิดเป้าหมายได้ การเปรียบเทียบต้องเป็นรถ ยาง โหลด และเส้นทางเดียวกัน ไม่ใช่เทียบจากตัวเลขบนกล่องอย่างเดียว' },
  { q: 'ทำไมโช้ค 1-Way ถึงโฆษณาว่าปรับทั้ง Compression และ Rebound?', a: 'เพราะปุ่มเดียวสามารถเปลี่ยนแรงหน่วงสองทิศทางพร้อมกันตามความสัมพันธ์ที่ผู้ผลิตออกแบบได้ เช่น TEIN FLEX Z และ BILSTEIN B16 แบบปรับมือ สิ่งที่ไม่มีคืออิสระในการเปลี่ยนเฉพาะฝั่งหนึ่งโดยคงอีกฝั่งไว้ ส่วน KW V2 เป็นอีกแนวทาง คือให้เจ้าของปรับ Rebound และกำหนด Compression จากโรงงาน' },
  { q: 'KW V3 คือ 3-Way ใช่ไหม แล้วชื่อรุ่นอื่นอ่านอย่างไร?', a: 'ไม่ใช่ KW V3 ในหน้าผลิตภัณฑ์ที่อ้างอิงแยกปรับ Low-speed Compression และ Low-speed Rebound จึงเป็น 2-way ส่วน V4 ที่อ้างอิงเพิ่ม High-speed Compression เป็น 3-way อย่าแปลงเลข V, R, จำนวนคลิก หรือชื่อเทคโนโลยีของแบรนด์อื่นเป็นจำนวนช่องปรับโดยไม่มีคู่มือยืนยัน' },
  { q: 'ตั้งตรงกลางจำนวนคลิกไว้ก่อน ปลอดภัยที่สุดหรือเปล่า?', a: 'ไม่ใช่กฎทั่วไป ค่าตั้งต้นต้องมาจากเอกสารของชุดและรถรุ่นนั้น หากผู้ผลิตระบุค่ากลางก็ทำตามได้ แต่ห้ามนำไปใช้เป็นเหตุผลว่าทุกรุ่นควรเริ่มที่ครึ่งหนึ่งของช่วงปรับ วิธีนับจากสุดแข็งหรือสุดอ่อน ตำแหน่งศูนย์ และจำนวนตำแหน่งใช้งานอาจต่างกัน' },
  { q: 'มีซับแทงก์แล้วทนหลุมกว่า และไม่ต้องกลัวความร้อนใช่ไหม?', a: 'ไม่ใช่ Reservoir เป็นส่วนหนึ่งของระบบน้ำมัน ก๊าซ และวาล์ว ไม่ได้เพิ่มความแข็งแรงของล้อ ยาง หรือช่วงล่างทั้งชุดโดยอัตโนมัติ และไม่ได้ทำให้โช้คไม่มีขีดจำกัดความร้อน ต้องดูโครงสร้างจริง ระยะทำงาน การติดตั้ง การใช้งาน และการบำรุงรักษาร่วมกัน' },
  { q: 'เอาค่าคลิกของ Tesla ไปใช้กับ BYD หรือ Geely ได้ไหม?', a: 'ไม่ควรคัดลอกข้ามรถหรือข้ามชุดโช้ค จำนวนคลิกเท่ากันไม่ได้แปลว่าแรงหน่วงเท่ากัน น้ำหนักเพลา สปริง อัตราทดการเคลื่อนที่ของช่วงล่าง ยาง และช่วงการปรับอาจต่างกัน แม้เป็นรถชื่อรุ่นเดียวกันก็ต้องดูปี รุ่นย่อย และรหัสสินค้า' },
  { q: 'จูนเองได้แค่ไหน และเมื่อไรควรหยุด?', a: 'เฉพาะการปรับภายนอกที่คู่มืออนุญาตและเข้าถึงได้อย่างปลอดภัย ควรบันทึกค่าตั้งต้นก่อนเสมอ งานถอดสปริง เปิดกระบอก เติมก๊าซ ย้าย Reservoir หรือเปลี่ยนความสูงที่กระทบระยะทำงานควรให้ผู้ติดตั้งที่มีเครื่องมือรับผิดชอบ หากมีเสียงผิดปกติ รั่ว ยางเสียดสี หรือการควบคุมแย่ลง ให้หยุดทดลองและตรวจรถก่อน' },
];

export default function EVDamperTuningGuidePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: damperArticle.title,
    description: damperArticle.description,
    image: [damperArticle.coverUrl],
    mainEntityOfPage: damperArticle.url,
    author: { '@type': 'Organization', name: 'EVSELECT' },
    publisher: { '@type': 'Organization', name: 'EVSELECT', url: 'https://evselects.com' },
    datePublished: damperArticle.publishedAt,
    dateModified: damperArticle.updatedAt,
    inLanguage: 'th-TH',
    citation: Object.values(sources).map(source => source.url),
  };

  return (
    <article className="mx-auto max-w-5xl bg-white px-4 py-10 text-slate-900 sm:px-6 md:py-16 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'บทความ EVSELECT', item: 'https://evselects.com/articles' }, { '@type': 'ListItem', position: 2, name: damperArticle.title, item: damperArticle.url }] }).replace(/</g, '\\u003c') }} />
      <nav aria-label="เส้นทางบทความ" className="mb-8">
        <Link href="/articles" className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-slate-600 hover:text-lime-800">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" /> กลับไปหน้ารวมบทความ
        </Link>
      </nav>

      <header className="mb-12 space-y-6">
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <span className="inline-flex items-center gap-2 rounded-full bg-lime-100 px-3 py-1.5 font-semibold text-lime-900"><SlidersHorizontal className="h-4 w-4" aria-hidden="true" /> เจาะลึกช่วงล่าง • คู่มือหลายแบรนด์</span>
          <span className="inline-flex items-center gap-2 text-slate-500"><CalendarDays className="h-4 w-4" aria-hidden="true" /> อัปเดต <time dateTime={damperArticle.updatedAt}>19 ก.ย. 2569</time></span>
        </div>
        <h1 className="text-3xl font-extrabold leading-snug tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">{damperArticle.title.split(/(1-Way|2-Way|3-Way)/g).map((part, index) => <span key={index} className={/^\d-Way$/.test(part) ? 'whitespace-nowrap' : undefined}>{part}</span>)}</h1>
        <p className="max-w-3xl text-lg leading-relaxed text-slate-600 sm:text-xl">{damperArticle.subtitle}</p>
        <p className="max-w-3xl leading-relaxed text-slate-600">“รถรุ่นนี้ต้องโช้ครุ่นนี้ ใส่แล้วจบ” ฟังดูช่วยตัดสินใจง่าย แต่พอติดตั้งกับรถเรา กลับสะเทือนตรงรอยต่อ ผู้โดยสารหลังบ่น หรือปรับอ่อนแล้วรถยังเด้ง ทำไมจ่ายหลักแสนแล้วยังต้องแก้อีก?</p>
        <p className="max-w-3xl leading-relaxed text-slate-600">เพราะ <strong>“ใส่ตรงรุ่น” กับ “เหมาะกับเรา” เป็นคนละคำถาม</strong> ต้องจับคู่โช้ค สปริง ยาง ระยะทำงาน และงานติดตั้งเข้ากับถนนกับโหลดที่ใช้จริง บทความนี้เริ่มจากหน้าที่ของแต่ละชิ้น แล้วค่อยลงลึกถึง Preload, Wheel rate, 1-Way–3-Way และคำถามที่ใช้คุยกับร้านก่อนเสียเงินรอบใหม่</p>
        <p className="max-w-3xl leading-relaxed text-slate-600">เรื่องนี้เกิดได้กับโช้คทุกงบ ราคาไม่ได้พิสูจน์ว่าชุดนั้นผิด และความไม่พอใจก็ไม่ได้แปลว่าเจ้าของรถปรับไม่เป็น เราต้องรู้ก่อนว่าซื้อมาเพื่อแก้อะไร และสิ่งที่ไม่ลงตัวเกิดจากส่วนไหน</p>
        <p className="text-sm text-slate-500">เรียบเรียงโดย <BrandHomeLink /> · อธิบายกลไกจากเอกสารผู้ผลิต ไม่ใช่ผลทดสอบเปรียบเทียบของกองบรรณาธิการ</p>
        <nav aria-label="ทางลัดตามสิ่งที่ต้องการ" className="flex flex-wrap gap-2 text-sm">
          {[['#fitment-before-brand', 'ทำไมตรงรุ่นยังไม่จบ'], ['#explorer', 'ดูภาพช่องปรับ'], ['#buying-brief', 'เตรียมโจทย์ให้ร้าน']].map(([href, label]) => <a key={href} href={href} className="inline-flex min-h-11 items-center rounded-full border border-lime-200 bg-lime-50 px-4 py-2 font-semibold text-lime-900 underline-offset-4 hover:underline">{label} <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" /></a>)}
        </nav>
        <figure className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50">
          <Image src={damperArticle.cover} alt={damperArticle.coverAlt} sizes="(max-width: 1024px) 100vw, 960px" preload className="h-auto w-full object-contain" />
          <figcaption className="border-t border-slate-200 bg-white px-5 py-4 text-xs leading-relaxed text-slate-500">ภาพโช้คสตรัทปรับเกลียว KW ที่เจ้าของเว็บไซต์จัดส่งให้ ใช้อธิบายภาพรวม ไม่ระบุรุ่นของแต่ละชิ้นหรือยืนยันการติดตั้งกับรถใด · <a href="https://www.kwsuspensions.com/uk/products/street-performance" target="_blank" rel="noopener noreferrer" className="text-lime-800 underline underline-offset-4">ดูผลิตภัณฑ์จาก KW ↗<span className="sr-only"> (เปิดแท็บใหม่)</span></a></figcaption>
        </figure>
        <Note title="คำตอบสั้น ๆ ก่อนลงรายละเอียด" headingLevel={2}>
          <p className="leading-relaxed"><strong>อย่าเริ่มจาก “ยี่ห้อไหนจบ” ให้เริ่มจาก “อาการไหนอยากแก้ และอะไรที่ยอมเสียไม่ได้”</strong> เลือกชุดที่รองรับรถจริง มีสปริงและระยะทำงานเหมาะกับโหลด ติดตั้งถูก และมีคนดูแลค่าตั้งต้นให้ ก่อนเพิ่มจำนวนช่องปรับ ปุ่มมากขึ้นช่วยแยกการจูน แต่ไม่ซ่อมยางผิดสเปก เพิ่มระยะยุบที่หายไป หรือแก้บูชที่ติดตั้งบิดค้าง</p>
        </Note>
        <nav aria-label="สารบัญบทความ" className="rounded-2xl border border-slate-200 p-5 sm:p-6">
          <p className="mb-4 flex items-center gap-2 font-semibold"><BookOpen className="h-5 w-5 text-lime-700" aria-hidden="true" /> เลือกอ่านเรื่องที่กำลังสงสัย</p>
          <ol className="grid gap-x-8 gap-y-2 sm:grid-cols-2">
            {contents.map(([id, label], index) => <li key={id}><a href={`#${id}`} className="flex min-h-11 items-start gap-3 rounded-lg py-2 text-sm leading-relaxed text-slate-600 hover:text-lime-800"><span className="mt-0.5 w-5 shrink-0 whitespace-nowrap text-xs font-semibold tabular-nums text-lime-700">{String(index + 1).padStart(2, '0')}</span><span>{label}</span></a></li>)}
          </ol>
        </nav>
      </header>

      <div className="space-y-14 text-base leading-[1.95] text-slate-700 sm:text-lg [&_h3]:text-slate-950 [&_strong]:font-semibold [&_strong]:text-slate-950">
        <Section id="fitment-before-brand" title="ใส่รถรุ่นเดียวกันได้ ทำไมคนหนึ่งบอกจบ อีกคนอยากถอด?">
          <p>คำแนะนำจากคนใช้จริงมีประโยชน์ เมื่อรู้เงื่อนไขของรถเขาด้วย ลองนึกถึงเจ้าของรถรุ่นเดียวกันสองคน: คนแรกขับคนเดียว ใช้ยางแก้มหนา ต้องผ่านรอยต่อทุกวัน อีกคนใช้ล้อใหญ่ บรรทุกคนหลังบ่อย และอยากลดการโยนตัวเป็นหลัก แม้เลือกโช้คซีรีส์เดียวกัน คำว่า “ดีขึ้น” ของทั้งคู่ก็อาจหมายถึงคนละผลลัพธ์ <strong>นี่เป็นตัวอย่างสมมติ ไม่ใช่ผลทดลองรถสองคัน</strong></p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 p-5"><h3 className="mb-2 text-lg font-bold">ด่านที่ 1 · Fitment: ชุดนี้ออกแบบให้รถเราหรือไม่</h3><p className="text-base">ตรวจรหัสสินค้า ปี รุ่นย่อย ตลาดจำหน่าย น้ำหนักเพลา จุดยึด และระบบปรับไฟฟ้าเดิม การขันน็อตลงรูได้ยังไม่พอจะยืนยันว่าระยะทำงานและเงื่อนไขทั้งหมดถูกต้อง</p></div>
            <div className="rounded-2xl border border-lime-200 bg-lime-50/60 p-5"><h3 className="mb-2 text-lg font-bold">ด่านที่ 2 · Suitability: ชุดนี้ตรงชีวิตที่ใช้รถหรือไม่</h3><p className="text-base">ดูอาการที่อยากแก้ ถนน ยาง ผู้โดยสาร ความสูง เสียงที่รับได้ และเวลาสำหรับดูแล ชุดที่ผ่านด่านแรกหลายชุดยังอาจให้ข้อแลกเปลี่ยนต่างกันได้</p></div>
          </div>
          <p>จากนั้นยังมีอีกสองเรื่อง: <strong>ติดตั้งและตั้งค่าได้ถูกต้องไหม</strong> และ <strong>ลองภายใต้เงื่อนไขที่เทียบกันได้แล้วตรงเป้าหมายหรือยัง</strong> คำว่า “ดีที่สุด” จึงต้องมีส่วนต่อท้ายว่าดีสำหรับใคร ใช้แบบไหน และวัดจากอะไร ไม่ใช่ยกคำตัดสินของรถอีกคันมาแทนการตรวจรถเรา</p>
          <p><Ref to="penske">Penske อธิบายเรื่องนี้ไว้ตรงประเด็น</Ref>: อุปกรณ์ระดับสูงเพียงอย่างเดียวไม่รับประกันผล และการใช้ชุดเดียวกับคนอื่นไม่ได้ทำให้ได้พฤติกรรมที่ต้องการโดยอัตโนมัติ ขณะที่ <Ref to="bilsteinInstall">BILSTEIN เน้นการระบุรหัสรถและงานติดตั้งให้ถูกต้อง</Ref> ทั้งสองเรื่องต้องมาคู่กันก่อนคุยจำนวนคลิก</p>
          <Note title="ถ้าใส่แล้วไม่ลงตัว ยังไม่ต้องเริ่มที่โช้คชุดถัดไป">
            <p>ขอข้อมูลชุดที่อยู่บนรถและค่าตั้งปัจจุบันก่อน แล้วเรียงตรวจ <strong>ยาง/สภาพรถ → งานติดตั้งและระยะทำงาน → สปริงกับโหลด → Baseline และแรงหน่วง</strong> ลำดับนี้เป็นแนวทางคุยกับผู้ตรวจ ไม่ใช่การวินิจฉัยจากหน้าจอ หากมีเสียง รั่ว หรือเสียดสี ให้จัดการความผิดปกติก่อนทดลองปรับ</p>
          </Note>
        </Section>

        <Section id="basics" title="เริ่มจากพื้นฐาน: ยาง สปริง Damper และ Bump stop ทำงานคนละหน้าที่">
          <p>ตอนล้อเจอรอยต่อ แรงไม่ได้เดินทางจากถนนถึงโช้คอย่างเดียว ยางยุบตัว ล้อกับช่วงล่างเคลื่อน สปริงเปลี่ยนแรงตามระยะ และ Damper ต้านการเคลื่อนไหว สิ่งที่คนบนเบาะรู้สึกเป็นผลรวมของระบบ การบอกว่า “เปลี่ยนโช้คแล้วต้องนุ่ม” จึงยังข้ามรายละเอียดสำคัญอยู่</p>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ['ยาง · จุดรับอินพุตแรก', 'โครงสร้างยาง ขนาด แรงดัน และสภาพมีส่วนกับแรงสะเทือนและการยึดเกาะ ต้องตั้งตามข้อมูลรถ/ยางและโหลดที่ใช้งานก่อนเปรียบเทียบช่วงล่าง ไม่ลดลมเพื่อกลบปัญหาโช้ค'],
              ['สปริง · รับน้ำหนักและเก็บพลังงาน', 'สปริงช่วยพยุงตัวรถและสร้างแรงเพิ่มเมื่อยุบตัว ส่วนสูงที่รถจอดอยู่จึงเกี่ยวกับแรงที่รับ สปริง และ geometry ไม่ใช่หมุน Compression ให้แข็งแล้วถือว่าเพิ่มกำลังรับน้ำหนักได้'],
              ['Damper · คุมการเคลื่อนไหว', 'สร้างแรงหน่วงระหว่างยุบและยืด สลายพลังงานเป็นความร้อน ช่วยควบคุมการสั่นและการเคลื่อนตัวถัง ปุ่มเปลี่ยนแรงหน่วง ไม่เปลี่ยน Spring rate'],
              ['Bump stop · ส่วนหนึ่งของช่วงปลายระยะ', 'เมื่อช่วงล่างยุบถึงตำแหน่งที่ชิ้นส่วนนี้เริ่มทำงาน มันเพิ่มแรงต้านแบบที่ออกแบบไว้ ไม่ใช่ชิ้นส่วนไร้หน้าที่ และไม่ใช่ทุกการสัมผัสแปลว่าเสีย แต่การเข้าแรงหรือบ่อยผิดปกติต้องตรวจสาเหตุ'],
            ].map(([title, text]) => <div key={title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5"><h3 className="mb-2 text-lg font-bold">{title}</h3><p className="text-base">{text}</p></div>)}
          </div>
          <p>ให้แยกคำว่า <strong>กระแทกครั้งแรก</strong>, <strong>เด้งตามหลายครั้ง</strong> และ <strong>โยนตัวตอนเบรกหรือเปลี่ยนทิศทาง</strong> ออกจากกัน รถอาจคุมตัวถังดีแต่ยังสะเทือนรอยต่อ หรือผ่านเนินนุ่มแต่สั่นต่อได้ คำบรรยายนี้ช่วยชี้ว่าควรเก็บข้อมูลอะไร แต่ยังไม่ใช่เหตุผลให้สั่งลด Compression หรือเพิ่ม Rebound ทันที</p>
          <p>ภาพรวม spring กับ damper อ้างอิง <Ref to="springPrinciples">คำอธิบายของ Penske</Ref> และข้อจำกัดความสูง/ระยะทำงานอ้างอิง <Ref to="teinSetup">TEIN Ride Height FAQ</Ref> ต่อไปเราจะดูว่าชุดปรับเกลียวเปลี่ยนอะไรได้ และมีอะไรที่ปุ่มปรับทำแทนไม่ได้</p>
        </Section>

        <Section id="types" title="โช้คสตรัทปรับเกลียวมีกี่แบบ? อย่าเอาสามเรื่องมาปนกัน">
          <p>บทความนี้ใช้คำว่า “โช้คสตรัทปรับเกลียว” สำหรับชุดโช้คแต่งปรับความสูงที่กำลังพูดถึง ส่วนคำว่า Coilover ในเอกสารผู้ผลิตมาจาก Coil Spring Over Shock คือสปริงขดที่จัดวางรอบแดมเปอร์ แต่บางรถใช้สปริงกับโช้คหลังแยกตำแหน่งกัน ชุดที่ขายในชื่อ Coilover จึงไม่จำเป็นต้องมีสปริงครอบโช้คครบทั้งสี่ต้น และไม่ได้แปลว่าโช้คแต่งทุกชนิดเป็นสตรัท สิ่งสำคัญคือรูปแบบที่ออกแบบให้ทำงานกับช่วงล่างของรถนั้น</p>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              ['โครงสร้างภายใน', 'Monotube / Twin-tube', 'บอกการจัดห้องน้ำมัน ก๊าซ และทางไหล ไม่ได้บอกจำนวนช่องปรับ'],
              ['การตั้งความสูง', 'เบ้าสปริง / ความยาวชุด', 'บอกว่าปรับตำแหน่งใด และกระทบระยะยุบ–ยืดกับ Preload อย่างไร'],
              ['การปรับแรงหน่วง', 'Fixed / 1 / 2 / 3-Way', 'บอกว่าคนตั้งโช้คเปลี่ยนคุณลักษณะแรงหน่วงได้แยกกันกี่ช่อง'],
            ].map(([label, heading, description]) => <div key={label} className="rounded-2xl border border-slate-200 bg-slate-50 p-5"><p className="text-xs font-semibold text-lime-800">{label}</p><h3 className="my-2 text-lg font-bold">{heading}</h3><p className="text-sm leading-relaxed">{description}</p></div>)}
          </div>
          <p>ดูตัวอย่างจากแบรนด์เดียวกันได้เลย: <Ref to="teinFlex">TEIN FLEX Z เป็น Twin-tube</Ref> ขณะที่ <Ref to="teinMono">TEIN MONO SPORT เป็น Monotube</Ref> แต่ทั้งสองหน้าผลิตภัณฑ์ระบุการปรับ Compression และ Rebound พร้อมกันผ่านตัวปรับเดียว ดังนั้น “Monotube” ไม่ได้แปลว่า 2-way และ “Twin-tube” ก็ไม่ได้แปลว่าไม่มีปุ่มปรับ</p>
          <p>อีกกรณีที่ถูกมองข้ามคือ <strong>ปรับความสูงได้ แต่ปรับแรงหน่วงไม่ได้</strong> เช่น BILSTEIN B14 ที่ผู้ผลิตแยกจาก B16 แบบปรับแรงหน่วงได้ โรงงานเป็นผู้กำหนดวาล์วและแรงหน่วงหลักไว้ให้ ไม่ได้แปลว่าโช้คไม่ทำงานหรือมีคุณภาพต่ำกว่าโดยอัตโนมัติ แต่ผู้ใช้ไม่สามารถชดเชยพฤติกรรมด้วยปุ่มภายนอกได้เหมือนรุ่นปรับได้ <Ref to="bilsteinFixed">ดูคำอธิบาย B14/B16 จาก BILSTEIN</Ref></p>
          <p>ส่วนระบบที่สั่งปรับด้วยมอเตอร์หรืออิเล็กทรอนิกส์เป็นอีกมิติหนึ่ง: ให้ถามว่าระบบนั้นหมุนตัวปรับเดิม เปลี่ยนวาล์วตามโหมด หรือควบคุมการหน่วงอัตโนมัติแบบใด อย่านับจำนวนโหมด Comfort/Sport เป็นจำนวน Way และอย่าใช้คำว่า “ปรับไฟฟ้า” แทนการอธิบายโครงสร้างจริง</p>
        </Section>

        <Section id="spring-height" title="Spring rate, Preload และระยะยุบ: พื้นฐานต้องลงตัวก่อนจูนปุ่ม">
          <h3 className="text-xl font-bold">Spring rate คืออัตราสปริง ไม่ใช่เลขคลิก</h3>
          <p>สำหรับสปริงเชิงเส้นในช่วงทำงานปกติ Spring rate บอกว่าต้องเพิ่มแรงเท่าไรจึงยุบเพิ่มได้หนึ่งหน่วยระยะ ยิ่งค่าสูง สปริงยิ่งต้านการยุบเพิ่มมากขึ้น ส่วนแดมเปอร์สร้างแรงต้านที่เกี่ยวกับการเคลื่อนที่ของมัน การหมุนปุ่มจึงไม่เปลี่ยนค่าอัตราสปริงที่คุณซื้อมา หากสปริงไม่เหมาะกับน้ำหนักเพลาและการใช้งาน การจูนแรงหน่วงอย่างเดียวอาจไม่แก้ต้นเหตุ</p>
          <p>การเทียบสปริงต้องดูหน่วยด้วย ตัวเลขที่ร้านเรียกว่า “กี่เค” กับ N/mm ไม่ใช่เลขที่นำมาเทียบกันตรง ๆ และ Spring rate หน้า–หลังอย่างเดียวก็ยังไม่ใช่ความแข็งที่ล้อรับจริง เพราะตำแหน่งติดตั้งและอัตราทดระหว่างล้อกับสปริงต่างกันได้ นี่เป็นอีกเหตุผลที่ไม่ควรยกค่าจากรถอีกโมเดลมาใช้ทันที</p>
          <h3 className="text-xl font-bold">Preload ไม่ใช่ปุ่มเปลี่ยนสปริงอ่อนให้กลายเป็นสปริงแข็ง</h3>
          <p>Preload คือการอัดสปริงไว้ก่อนในเงื่อนไขอ้างอิงของการประกอบ สำหรับสปริงเชิงเส้น การเพิ่ม Preload ไม่ได้เปลี่ยนค่า k ของสปริง แต่เปลี่ยนแรงตั้งต้นและอาจเปลี่ยนตำแหน่งทำงาน ระยะยืด หรือความสูงตามรูปแบบชุด ถ้ามีสปริง Progressive, Helper หรือ Tender ทำงานร่วมกัน ต้องพิจารณาพฤติกรรมของทั้งชุดเพิ่มเติม ไม่ควรใช้คำอธิบายของสปริงเดี่ยวครอบทุกกรณี</p>
          <p><Ref to="ohlinsManual">คู่มือ Öhlins</Ref> วัด Preload จากความยาวสปริงอิสระลบความยาวตอนติดตั้งโดยโช้คยืดสุด จึงต้องรู้เงื่อนไขการวัด ไม่ดูแค่จำนวนเกลียวที่เห็น ขณะเดียวกันการเปลี่ยน Spring rate มากกว่าช่วงที่ชุดเดิมรองรับอาจต้องปรับ Valving ให้สัมพันธ์กันด้วย ซึ่ง <Ref to="bcSetup">BC Racing อธิบายไว้ใน FAQ</Ref> อย่าใช้ปุ่มเป็นเหตุผลว่าสปริงแข็งหรืออ่อนเท่าไรก็ใส่แทนกันได้</p>
          <p>ชุดปรับความสูงบางแบบใช้การเลื่อนเบ้าสปริง บางแบบแยกการปรับความยาวชุดออกจากเบ้าสปริงได้ ผู้ผลิตอย่าง <Ref to="teinMono">TEIN</Ref> และ <Ref to="bcZR">BC Racing</Ref> ระบุคุณลักษณะการปรับความสูงของซีรีส์ตัวอย่างไว้ แต่คำว่า Full-length adjustable ไม่ใช่ใบอนุญาตให้ลดรถจนสุดเกลียวโดยไม่ตรวจระยะปลอดภัย</p>
          <p>หากสปริงหลังแยกจากโช้ค การเปลี่ยนความยาวโช้คไม่ได้เป็นตัวตั้งความสูงรถแบบเดียวกับการเลื่อนเบ้าสปริง <Ref to="ohlinsManual">คู่มือ Öhlins Road & Track Automotive</Ref> แยกกรณีนี้ไว้อย่างชัดเจน เพราะความยาวโช้คเกี่ยวกับการจัดสรรระยะยุบ–ยืดด้วย ให้ใช้คู่มือติดตั้งของชุดจริงเป็นหลัก ไม่คัดลอกวิธีหมุนด้านหน้ามาใช้ด้านหลังโดยอัตโนมัติ</p>
          <h3 className="text-xl font-bold">Travel ต้องเหลือทั้งทางยุบและทางยืด</h3>
          <p><strong>Bump travel</strong> คือระยะที่ช่วงล่างยังยุบต่อได้จากระดับใช้งาน ส่วน <strong>Droop หรือ Rebound travel</strong> คือระยะที่ยังยืดลงไปได้ เพื่อให้ล้อตามผิวทางเมื่อถนนต่ำลงหรือโหลดเปลี่ยน ทั้งสองอย่างต้องตรวจที่ชุดจริง ไม่ดูความสูงซุ้มล้ออย่างเดียว และระยะของก้านโช้คไม่จำเป็นต้องเท่ากับระยะเคลื่อนของล้อ</p>
          <p>รถที่โหลดเตี้ยจนใช้ช่วงยุบไปมาก กับรถที่ยืดลงได้ไม่พออาจต่างมีอาการไม่สบายหรือเสียการตามผิวทางได้ แต่แก้คนละทาง ต้องให้ผู้ติดตั้งตรวจสปริง ระยะก้าน Bump stop จุดจำกัดการยืด ระยะล้อ–ตัวถัง และชิ้นส่วนอื่นตามคู่มือ การตั้งให้ “เหลือครึ่งยุบครึ่งยืด” จึงไม่ใช่กฎของรถทุกคัน</p>
          <h3 className="text-xl font-bold">รถยุบสุดบ่อย ปุ่มแข็งขึ้นอาจแค่กลบอาการ</h3>
          <p>หากลดความสูงจนเหลือระยะยุบไม่พอ รถอาจเข้า Bump stop บ่อยขึ้น ชิ้นส่วนนี้เป็นส่วนหนึ่งของลักษณะการรับแรงช่วงปลายระยะ ไม่ใช่ของที่ควรตัดทิ้งทันทีเพราะรู้สึกกระด้าง ก่อนเพิ่มแรงหน่วงเพื่อพยายามหยุดการยุบ ต้องตรวจความสูงติดตั้ง ระยะทำงาน สปริง และน้ำหนักบรรทุกให้ถูก การเลือกโช้คควรจบพร้อมการตั้งศูนย์และตรวจระยะเคลียร์ ไม่ใช่จบตอนรถออกจากฮอยสต์</p>
          <Note title="ซื้อชุดถูก แต่บูชบิดค้าง ก็ทำให้รถผิดบุคลิกได้">
            <p>จุดยึดที่ใช้ <strong>Bonded rubber bush</strong> มีเนื้อยางรับการบิดระหว่างการเคลื่อนที่ หากขันล็อกในตำแหน่งที่ผิดจากขั้นตอนรถ หรือเปลี่ยนความสูงแล้วไม่ได้จัดการความเค้นค้างตามที่กำหนด อาจทำให้ความสูง การขับ และการสึกหรอผิดคาด <Ref to="bilsteinInstall">BILSTEIN อธิบายข้อผิดพลาดนี้ไว้โดยตรง</Ref> ให้ร้านตรวจว่าจุดยึดที่เกี่ยวข้องถูกขันที่ระดับใช้งานและตามแรงขัน/ลำดับของคู่มือหรือไม่ ไม่ใช่ให้เจ้าของรถคลายน็อตทั้งชุดเอง</p>
          </Note>
          <details id="wheel-rate-example" className="scroll-mt-28 rounded-2xl border border-lime-200 bg-lime-50/60 p-5 sm:p-6">
            <summary className="cursor-pointer text-lg font-bold text-slate-950 marker:text-lime-700"><h3 className="inline text-lg font-bold">อ่านต่อแบบลงลึก: สปริง 100 N/mm เท่ากัน แต่ที่ล้ออาจไม่เท่ากัน</h3></summary>
            <div className="mt-4 space-y-4">
            <p><strong>Wheel rate</strong> ในตัวอย่างนี้คือความแข็งจากสปริงเมื่อพิจารณาที่การเคลื่อนแนวดิ่งของล้อ เรากำหนด <strong>MR = ระยะยุบสปริง ÷ ระยะยุบล้อ</strong> โดยใช้การเคลื่อนที่จริงที่รวมผลของมุมติดตั้งแล้ว หากสปริงยุบ 7 mm เมื่อล้อยุบ 10 mm จะได้ MR = 0.7</p>
            <p className="my-4 rounded-xl border border-lime-200 bg-white p-4 font-semibold text-slate-950">Wheel rate ≈ Spring rate × MR²</p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl bg-white p-4"><h4 className="font-semibold text-slate-950">ตัวอย่าง A · MR = 1.0</h4><p className="mt-2 text-base">100 N/mm × 1.0² = <strong>100 N/mm</strong><br />ล้อยุบ 10 mm สปริงยุบ 10 mm</p></div>
              <div className="rounded-xl bg-white p-4"><h4 className="font-semibold text-slate-950">ตัวอย่าง B · MR = 0.7</h4><p className="mt-2 text-base">100 N/mm × 0.7² = <strong>49 N/mm</strong><br />ล้อยุบ 10 mm สปริงยุบ 7 mm</p></div>
            </div>
            <p className="mt-4"><strong>เป็นตัวเลขสมมติเพื่ออธิบาย ไม่ใช่สเปกรถหรือสูตรแนะนำสปริง</strong> ใช้ linear spring และสมมติ MR คงที่โดยประมาณใกล้ ride height พิจารณาเฉพาะส่วนของสปริง ไม่รวมความแข็งจากยาง บูช กันโคลง หรือ Bump stop และไม่ใช้ตัดสินความสบายทั้งคัน</p>
            <p className="mt-3 text-base">อ้างอิงหลักการจาก <Ref to="eibach">Eibach Suspension Worksheet</Ref> แต่ประกาศนิยาม MR ของบทความนี้ให้ชัด: บางแหล่งใช้ล้อหารสปริงจึงต้องกลับสูตร และเมื่อ ratio วัดจากการเคลื่อนจริงรวมมุมแล้ว ไม่คูณตัวชดเชยมุมซ้ำ สำหรับสปริงกับ damper ที่อยู่คนละตำแหน่ง ค่า MR ของทั้งสองก็อาจไม่เท่ากัน</p>
            </div>
          </details>
        </Section>

        <DamperPhoto name="tein" />

        <Section id="explorer" title="เห็นภาพในหนึ่งนาที: หนึ่งปุ่มไม่ได้แปลว่าหนึ่งผลลัพธ์">
          <p>เลือกชนิดเพื่อดูความสัมพันธ์ระหว่างปุ่มกับแรงหน่วง ภาพนี้ใช้หลักการของรุ่นตัวอย่างใน <a href="#brands" className="text-lime-800 underline underline-offset-4">ตารางผู้ผลิต</a> ไม่ได้จำลองแรงหน่วงจริง และไม่ใช้สีหรือความยาวเส้นแทนระดับความนุ่ม</p>
          <DamperExplorer />
        </Section>

        <Section id="inside" title="หมุนคลิกแล้วเกิดอะไรขึ้นข้างในโช้ค?">
          <h3 className="text-xl font-bold">สปริงเก็บพลังงาน ส่วนแดมเปอร์คุมการเคลื่อนไหว</h3>
          <p>เมื่อรถวิ่งผ่านลูกระนาด ล้อและช่วงล่างเคลื่อนที่ สปริงยุบเพื่อรับแรงแล้วพยายามคืนตัว ถ้ามีแต่สปริง ระบบก็มีแนวโน้มสั่นต่อไป แดมเปอร์หรือที่เราเรียกกันว่าโช้คอัพจึงสร้างแรงต้านการเคลื่อนที่เพื่อสลายพลังงานส่วนหนึ่งเป็นความร้อน ช่วยให้การยุบ–ยืดถูกควบคุม ไม่ได้ทำหน้าที่เหมือนสปริงแข็งอีกเส้นหนึ่ง</p>
          <p><strong>Compression หรือ Bump</strong> คือช่วงที่แดมเปอร์สั้นลง ส่วน <strong>Rebound</strong> คือช่วงที่ยืดออก แรงหน่วงมีได้ทั้งสองทิศทาง รถที่เด้งซ้ำหลังผ่านเนินกับรถที่กระแทกสั้น ๆ ตอนชนรอยต่ออาจต้องตรวจคนละเรื่อง การเรียกรวมว่า “โช้คแข็งไป” จึงยังไม่ละเอียดพอสำหรับการแก้ปัญหา</p>
          <h3 className="text-xl font-bold">ลูกสูบเคลื่อน น้ำมันผ่านวาล์ว แล้วปุ่มไปเกี่ยวตรงไหน?</h3>
          <p>ภายในแดมเปอร์ไฮดรอลิก ลูกสูบและก้านทำให้น้ำมันต้องเคลื่อนผ่านทางไหลที่ออกแบบไว้ ความต้านทานการไหลสร้างความต่างความดันและแรงหน่วง ทางไหลไม่ได้มีแค่รูเดียว: อาจมีช่อง Bypass หรือ Bleed ที่น้ำมันผ่านได้ง่าย รวมถึงวาล์วและแผ่นชิมที่ตอบสนองเมื่อความต่างความดันมากขึ้น รายละเอียดแต่ละแบบไม่เหมือนกัน</p>
          <p>ตัวปรับภายนอกจำนวนมากเชื่อมกับ Needle valve หรือกลไกเปลี่ยนทางไหล เมื่อหมุนปุ่ม เราจึงเปลี่ยนเงื่อนไขที่น้ำมันไหลผ่าน ไม่ได้เปลี่ยนเนื้อโลหะหรือค่า Spring rate ของสปริง ตัวอย่าง <Ref to="teinValve">TEIN อธิบายการใช้ Needle valve</Ref> ส่วน <Ref to="bilstein">BILSTEIN อธิบาย Bypass ที่ใช้ปรับ B16</Ref> ซึ่งเปลี่ยนพฤติกรรมฝั่งยุบและยืดไปพร้อมกัน</p>
          <p>คำว่า “เพิ่มความหนืด” ในภาษาคนแต่งรถจึงควรเข้าใจว่าเป็นการเพิ่มแรงหน่วงในส่วนที่ตัวปรับมีอิทธิพล ไม่ใช่การทำให้น้ำมันทั้งกระบอกข้นขึ้น และไม่ใช่เพิ่มแรงต้านทุกความเร็วเท่ากันหมด โช้คหนึ่งคลิกอาจเปลี่ยนความรู้สึกมากในบางสถานการณ์ แต่แทบไม่แก้ปัญหาอีกสถานการณ์หนึ่ง</p>
        </Section>

        <Section id="shaft-speed" title="Low-Speed ไม่ใช่ขับช้า: จุดที่คนปรับโช้คเข้าใจผิดบ่อย">
          <p>Low-speed และ High-speed ในเรื่องแดมเปอร์หมายถึง <strong>ความเร็วการเคลื่อนที่ของก้านโช้ค</strong> ไม่ใช่ความเร็วรถบนหน้าปัด ไม่ใช่ความเร็วรอบมอเตอร์ และไม่ใช่ว่าปุ่มหนึ่งใช้ในเมือง อีกปุ่มใช้บนทางด่วน</p>
          <p>ลองนึกถึงการเบรกอย่างนุ่มนวลบนพื้นเรียบ ตัวถังค่อย ๆ ก้มลง ก้านโช้คอาจเคลื่อนค่อนข้างช้า แม้รถกำลังวิ่งด้วยความเร็วสูงกว่าอีกคันหนึ่งที่คลานผ่านขอบต่างระดับแหลม ๆ กรณีหลังล้ออาจถูกเร่งให้ขยับอย่างรวดเร็วในระยะสั้น จึงสร้างการเคลื่อนที่ของก้านที่เร็วได้ แม้ความเร็วรถไม่สูง</p>
          <p>การโยนตัว การเริ่มก้ม–เงย และการเริ่มเอียงตัวมักมีองค์ประกอบของการเคลื่อนที่ก้านช่วงช้า ส่วนขอบหลุม รอยต่อคม หรือขอบผิวทางมักสร้างองค์ประกอบที่เร็วกว่า แต่เหตุการณ์จริงผสมหลายช่วงความเร็ว รูปทรงสิ่งกีดขวาง ยาง ความเร็วรถ และอัตราทดการเคลื่อนที่ของช่วงล่างล้วนมีผล จึงไม่ควรติดป้ายว่าลูกระนาดทุกลูกเป็น High-speed หรือทุกการเข้าโค้งเป็น Low-speed ล้วน ๆ</p>
          <Note title="ไม่มีเส้นแบ่งเดียวที่ใช้ได้กับทุกแบรนด์">
            <p>อย่าจำค่าความเร็วหนึ่งค่าแล้วใช้แบ่ง Low/High กับโช้คทุกชุด ผู้ผลิตออกแบบย่านที่วาล์วและตัวปรับมีอิทธิพลต่างกัน และย่านเหล่านี้อาจซ้อนทับกันได้ ตัวอย่างระบบ <Ref to="ohlins">Öhlins DFV</Ref> แสดงให้เห็นว่าทางน้ำมันที่ทำงานเด่นเปลี่ยนไปตามสภาวะ ไม่ใช่สวิตช์ที่สลับจากวาล์วหนึ่งไปอีกวาล์วหนึ่งตามความเร็วรถ</p>
          </Note>
        </Section>

        <Section id="one-way" title="1-Way: ปุ่มเดียว แต่ไม่ได้ปรับเหมือนกันทุกยี่ห้อ">
          <p>วิธีนับที่ใช้ในบทความนี้คือ <strong>จำนวนช่องแรงหน่วงที่ผู้ใช้ปรับแยกจากกันได้ต่อแดมเปอร์</strong> ไม่ใช่จำนวนคลิกของปุ่ม ไม่ใช่จำนวนโช้คทั้งคัน และไม่นับแหวนปรับความสูงหรือ Preload เป็นช่องแรงหน่วง ทั้งนี้ ภาษาการตลาดบางหน้าใช้คำว่า “way” แทน “ระดับ” ด้วย จึงต้องอ่านว่าปุ่มนั้นควบคุมอะไรจริง</p>
          <h3 className="text-xl font-bold">แนวทางแรก: ปรับ Rebound ส่วน Compression โรงงานจัดมาให้</h3>
          <p><Ref to="kwV2">KW V2</Ref> เป็นตัวอย่างของช่องปรับ Low-speed Rebound ขณะที่การตั้ง Compression ถูกกำหนดไว้จากโรงงาน หากต้องการเปลี่ยนการหน่วงตอนคืนตัวก็มีปุ่มให้ทำ แต่หากต้องการลดแรงหน่วงฝั่งยุบแยกต่างหาก ผู้ใช้ไม่ได้มีปุ่มนั้นเพิ่มมาให้ นี่ไม่ได้แปลว่าโช้คไม่มี Compression damping เพียงแต่ไม่ใช่ช่องที่ปรับเองจากภายนอกในชุดนี้</p>
          <h3 className="text-xl font-bold">แนวทางที่สอง: ปุ่มเดียวขยับทั้งยุบและยืดไปด้วยกัน</h3>
          <p><Ref to="teinFlex">TEIN FLEX Z</Ref> และ <Ref to="bilstein">BILSTEIN B16 แบบปรับมือ</Ref> เป็นตัวอย่างที่ผู้ผลิตระบุการเปลี่ยน Compression/Bump และ Rebound พร้อมกัน ส่วน <Ref to="ohlinsRT">Öhlins Road & Track DFV รหัส TES MA10S1 ในหน้า Model 3 2020</Ref> ก็ระบุตัวปรับร่วมแบบ 1-way โดยความสัมพันธ์ของแรงหน่วงแต่ละทิศทางเป็นสิ่งที่ออกแบบไว้ ไม่จำเป็นต้องเพิ่มเท่ากันแบบหนึ่งต่อหนึ่ง ตัวอย่างนี้ไม่ใช่การรับรองว่ารหัสเดียวกันใช้กับ Tesla ทุกปีหรือทุกรุ่นย่อย</p>
          <p>ข้อดีเชิงการใช้งานคือมีตัวแปรให้จัดการน้อย เมื่ออยากเปลี่ยนบุคลิกโดยรวมก็ปรับได้ง่ายกว่า แต่ข้อจำกัดคือ หากลดค่าจนผ่านรอยต่อสบายขึ้นแล้วการคืนตัวกลับไม่ลงตัว คุณอาจไม่สามารถเพิ่มเฉพาะ Rebound โดยคง Compression เดิมได้ผ่านปุ่มนั้น เรื่องนี้ต้องดูวงจรจริง ไม่ใช่ตัดสินจากสีสปริงหรือยี่ห้อ</p>
          <Note title="16 ระดับ ไม่ใช่ 16 ช่องอิสระ">
            <p>จำนวนตำแหน่งบอกความละเอียดของการเลือกภายในช่วงที่ออกแบบไว้ ไม่ได้บอกว่าแรงหน่วงกว้างกว่า แม่นกว่า หรือมีคุณภาพสูงกว่าอีกแบรนด์เสมอไป การเปรียบเทียบต้องดูช่วงแรงหน่วงจริง ความสม่ำเสมอ และความเหมาะสมกับรถด้วย</p>
          </Note>
        </Section>

        <div className="grid gap-5 sm:grid-cols-2"><DamperPhoto name="bilstein" /><DamperPhoto name="ohlins" /></div>

        <Section id="two-way" title="2-Way: อยากคุมยุบ แต่ไม่อยากรั้งยืด ต้องแยกช่องปรับ">
          <p>ในตัวอย่างที่เลือกมา 2-way ให้ช่องปรับ Compression และ Rebound แยกกัน เป้าหมายคือไม่ต้องยอมเปลี่ยนสองทิศทางไปพร้อมกันทุกครั้ง สมมติการคืนตัวอยู่ในจุดที่พอใจแล้ว แต่ต้องการสำรวจผลของแรงหน่วงตอนยุบ ระบบลักษณะนี้เปิดโอกาสให้เปลี่ยนเฉพาะช่อง Compression แล้วประเมินผลได้</p>
          <p><Ref to="kwV3">KW V3</Ref> แยก Low-speed Compression กับ Low-speed Rebound ส่วน <Ref to="bcER">BC Racing ER</Ref> ระบุการปรับ Compression และ Rebound แยกกันพร้อม Reservoir ภายนอก ทั้งคู่ใช้เป็นตัวอย่างหลักการ 2-way ได้ แต่ไม่ได้หมายความว่าวงจรภายใน ช่วงแรงหน่วง หรือทุกความเร็วที่ปุ่มมีผลจะเหมือนกัน</p>
          <p><strong>2-Way ไม่ได้แปลว่าต้องมีถังแยกที่มองเห็นเสมอ:</strong> ให้ตรวจตำแหน่งตัวปรับและโครงสร้างของรหัสสินค้าจริง ไม่ใช้การเห็นหรือไม่เห็น Reservoir เป็นตัวนับช่อง และคำว่า “เปิดอ่อนสุด” ก็ไม่ได้แปลว่าปิดการทำงานของ Compression damping ทั้งหมด วาล์วส่วนอื่นยังมีบทบาทตามการออกแบบ</p>
          <h3 className="text-xl font-bold">แยกปุ่มได้ ไม่ได้แปลว่าข้างในแยกขาดทุกสภาวะ</h3>
          <p>น้ำมันยังทำงานอยู่ในระบบเดียวกัน ช่องทางไหลและวาล์วอาจมีผลร่วมกันบางย่าน คำว่า Independent adjustment จึงหมายถึงมีตัวควบคุมที่ผู้ใช้แยกตั้งได้ ไม่ใช่คำสัญญาว่าเปลี่ยนช่องหนึ่งแล้วกราฟอีกฝั่งจะไม่ขยับแม้แต่น้อยทุกความเร็ว หากต้องการพิสูจน์ให้ละเอียด ต้องอาศัยเอกสารวงจรหรือกราฟทดสอบของรุ่นนั้น</p>
          <p>อีกข้อจำกัดคือ หากช่อง Compression ที่ให้มามุ่งปรับย่านก้านเคลื่อนช้า การลดค่านั้นไม่ได้รับประกันว่าจะทำให้แรงกระแทกจากขอบคมหายไป ปัญหาอาจอยู่ที่ยาง ระยะยุบ Bump stop หรือวาล์วย่านอื่นที่ผู้ใช้ปรับไม่ได้ การมีปุ่มเพิ่มเป็นเครื่องมือแยกโจทย์ ไม่ใช่เครื่องมือชดเชยทุกส่วนของช่วงล่าง</p>
          <p>2-way จึงเหมาะที่จะพิจารณาเมื่อคุณมีเป้าหมายแยกฝั่งยุบกับยืดจริง และมีผู้ติดตั้งหรือผู้จูนที่บันทึกการเปลี่ยนค่าเป็น ไม่ใช่เพียงอยากได้คำว่า “ปรับอิสระ” บนรายการอุปกรณ์</p>
        </Section>

        <Section id="three-way" title="3-Way: ช่องที่เพิ่มมา ไม่ได้มีไว้เพิ่มความแข็งอย่างเดียว">
          <p>รูปแบบ 3-way ที่ยกตัวอย่างในบทความนี้คือ <strong>Low-speed Compression + High-speed Compression + Rebound</strong> การเพิ่มช่อง High-speed Compression ทำให้ผู้จูนมีทางเลือกในการจัดลักษณะแรงหน่วงฝั่งยุบละเอียดขึ้น โดยไม่ต้องใช้ช่องเดียวรับผิดชอบทั้งพฤติกรรมการเคลื่อนไหวช้าและแรงอินพุตที่ทำให้ก้านเคลื่อนเร็วทั้งหมด</p>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              ['01', 'Low-speed Compression', 'ปรับแรงหน่วงฝั่งยุบในย่านที่ก้านเคลื่อนช้า ตามช่วงอิทธิพลของวาล์ว'],
              ['02', 'High-speed Compression', 'ปรับคุณลักษณะฝั่งยุบเมื่อก้านเคลื่อนเร็ว ไม่ใช่ปุ่มสำหรับขับรถเร็ว'],
              ['03', 'Rebound', 'ปรับการต้านตอนโช้คยืดกลับ โดยต้องอ่านว่าครอบคลุมย่านใด'],
            ].map(([n, title, text]) => <div key={n} className="rounded-2xl border border-slate-200 p-5"><p className="text-xs font-bold text-lime-700">ช่องปรับ {n}</p><h3 className="my-2 text-base font-bold">{title}</h3><p className="text-sm leading-relaxed">{text}</p></div>)}
          </div>
          <p><Ref to="bcZR">BC Racing ZR</Ref> ระบุช่อง Low-speed Compression, High-speed Compression และ Rebound ส่วน <Ref to="kwV4">KW V4</Ref> ระบุ Low-/High-speed Compression พร้อม Low-speed Rebound ทั้งสองเป็นตัวอย่างสามช่อง แต่ขอบเขตของ Rebound และรูปแบบชุดยังต้องอ่านเฉพาะรุ่น อย่าใช้ชื่อ “3-way” แทนรายละเอียดทั้งหมด</p>
          <h3 className="text-xl font-bold">ทำไมแยก Low กับ High แล้วจึงมีประโยชน์?</h3>
          <p>โจทย์สมมติคืออยากรักษาการควบคุมการก้ม–เงยที่พอใจไว้ แต่ต้องการปรับการตอบสนองต่อแรงอินพุตที่คมกว่า การแยกฝั่ง Compression เป็นสองช่องทำให้มีโอกาสจัดสมดุลสองย่านได้ตรงเป้าขึ้น แทนที่จะขยับช่องเดียวแล้วเปลี่ยนหลายความรู้สึกไปพร้อมกัน อย่างไรก็ตาม ผลลัพธ์ต้องประเมินกับชุดจริง เพราะวาล์วอาจมีอิทธิพลซ้อนทับ และสปริงกับระยะทำงานยังเป็นข้อจำกัดอยู่</p>
          <p>การปรับ High-speed Compression ไม่จำเป็นต้องแปลว่าเปิดรูน้ำมันแบบเดียวกับ Low-speed ทุกแบบ บางระบบเปลี่ยนแรงกดเริ่มต้นของชุดวาล์วหรือจุดที่วาล์วเปิดทำงาน จึงมีผลกับรูปร่างของกราฟด้วย ผู้ใช้ควรดูคู่มือว่าเพิ่มหรือลดค่าแล้วหมายถึงอะไร ไม่เดาจากตำแหน่งปุ่มใหญ่หรือปุ่มเล็กบนถัง</p>
          <p>ค่าใช้จ่ายและความซับซ้อนที่เพิ่มขึ้นจึงควรแลกกับโจทย์ที่ชัดเจน มีจุดตั้งต้น และมีผู้ดูแลที่อธิบายการเปลี่ยนค่าได้ หากยังแยกไม่ออกว่ารถมีอาการตอนยุบ ตอนยืด หรือกำลังชน Bump stop การเพิ่มช่องปรับอาจเพิ่มความสับสนมากกว่าช่วยให้จบเร็วขึ้น</p>
        </Section>

        <DamperPhoto name="bc" />

        <Section id="brands" title="อ่านสเปกให้พ้นชื่อรุ่น: เทียบตัวอย่างหลายแบรนด์">
          <p>ตารางนี้เปรียบเทียบ <strong>ชนิดของตัวควบคุม</strong> ไม่ใช่จัดอันดับความนุ่ม ความเร็ว หรือความคุ้มค่า และไม่ได้ยืนยันว่ามีชุดสำหรับรถ EV ของคุณครบทุกแบรนด์ หน้าผลิตภัณฑ์ต่างประเทศใช้ยืนยันหลักการของรุ่นตัวอย่างเท่านั้น รุ่นย่อย อุปกรณ์ และเงื่อนไขจำหน่ายในไทยต้องตรวจอีกครั้ง</p>
          <div className="rounded-2xl border border-slate-200" role="region" aria-label="ตารางเปรียบเทียบช่องปรับโช้คสตรัทปรับเกลียว">
            <table className={styles.table} role="table">
              <caption>นับช่องปรับ ไม่ใช่นับตัวเลขบนกล่อง · มือถืออ่านเป็นการ์ดได้โดยไม่เลื่อนด้านข้าง</caption>
              <thead role="rowgroup"><tr role="row"><th scope="col">ตัวอย่างสินค้า</th><th scope="col">ประเภท</th><th scope="col">ปรับอะไรได้</th><th scope="col">จุดที่ต้องอ่านให้ถูก</th></tr></thead>
              <tbody role="rowgroup">{comparisons.map(row => <tr key={row.name} role="row"><th scope="row" role="rowheader"><Ref to={row.source}>{row.name}</Ref></th><td role="cell" data-label="ประเภท">{row.type}</td><td role="cell" data-label="ปรับอะไรได้">{row.controls}</td><td role="cell" data-label="จุดที่ต้องอ่านให้ถูก">{row.lesson}</td></tr>)}</tbody>
            </table>
          </div>
          <h3 className="text-xl font-bold">แล้ว HKS HIPERMAX อยู่ตรงไหน?</h3>
          <p><Ref to="hks">HKS HIPERMAX S</Ref> เป็นอีกตัวอย่างของชุด Single-tube ที่มีการปรับแรงหน่วงและการตั้งความสูง โดยผู้ผลิตอธิบาย WR Needle เป็นส่วนหนึ่งของระบบปรับ จุดที่ควรอ่านจากตัวอย่างนี้คือชื่อเทคโนโลยีวาล์ว จำนวนระดับ และวิธีปรับความสูงเป็นข้อมูลคนละช่อง อย่านำคำว่า Dual ในชื่อเทคโนโลยีภายใน หรือจำนวน 30 ระดับ ไปสรุปว่าแยก Compression/Rebound ได้สองช่องโดยอัตโนมัติ ต้องยืนยันจากคู่มือรหัสสินค้าที่กำลังซื้อ</p>
          <Note title="ข้อมูลปี 2026 ที่มีผลกับการซื้อ: ชื่อเดิมอาจไม่ใช่รหัสเดิม">
            <p><Ref to="hks2026">HKS เผยแพร่ตาราง HIPERMAX S ปี 2026 เทียบรหัสเดิมกับรหัสใหม่</Ref> ขณะที่หน้ารุ่นปัจจุบันอธิบายการปรับ WR Needle และ Advanced Bump Rubber Plus โดยแยกจากรุ่นถึงปี 2025 สิ่งที่ควรถามร้านจึงไม่ใช่แค่ “มี HIPERMAX S ไหม” แต่เป็น <strong>รหัสอะไร รุ่นปรับปรุงไหน และใช้คู่มือฉบับใด</strong> ตารางระบุข้อมูล ณ มกราคม 2026 ไม่ใช่หลักฐานสต็อกหรือวันส่งของในไทย และเราไม่ได้ทดสอบว่ารุ่นใหม่ดีกว่ากับรถคันใด</p>
          </Note>
          <p><strong>ตัวอย่างที่สำคัญกับคนใช้ EV:</strong> ตารางเดียวกันระบุ Model 3 รหัสรถ 3L23T พร้อมช่วงปี 19/09–23/08 และเปลี่ยนรหัสชุดจาก 80300-AA004 เป็น 80330-AA004P การเห็นคำว่า “Model 3” จึงไม่พอจะยืนยันกับ Highland หรือ Performance คนละปี ต้องตรวจรายละเอียดความเข้ากันได้ของรถคันจริงตามที่เอกสารระบุ ไม่คัดลอกรหัสนี้ไปสั่งซื้อให้รถอีกเจเนอเรชัน</p>
          <h3 className="text-xl font-bold">มีบริบทในไทย ไม่เท่ากับมีหลักฐานว่า “ขายดีที่สุด”</h3>
          <p>สำหรับผู้อ่านไทย เราเลือกตัวอย่างที่ตรวจข้อมูลผู้ผลิตได้ พร้อมช่องทางเกี่ยวข้องกับตลาดไทย เช่น <Ref to="teinTH">TEIN Sales Thailand</Ref>, <Ref to="bcTH">เครือข่ายผู้จัดจำหน่าย BC Racing</Ref>, <Ref to="bilsteinTH">รายชื่อผู้จัดจำหน่าย BILSTEIN</Ref>, <Ref to="hksTH">เครือข่าย HKS</Ref> และ <Ref to="ohlinsTH">กลุ่มผลิตภัณฑ์ Automotive ของ Öhlins ภาษาไทย</Ref> ส่วน KW ใช้เป็นตัวอย่างการแยกช่องปรับที่ชัดเจน ไม่ได้ให้แบรนด์ในภาพเป็นคำตอบเดียวของบทความ</p>
          <p>เราไม่มีข้อมูลยอดขายหรือส่วนแบ่งตลาดที่เปรียบเทียบแบรนด์เหล่านี้ในประเทศไทยด้วยเกณฑ์เดียวกัน จึงไม่เรียงอันดับ “ยอดนิยมที่สุด” ไม่ลงราคาที่ไม่ยืนยัน และไม่ถือว่าการพบช่องทางจำหน่ายเป็นหลักฐานว่าทุกรหัสสินค้ามีสต็อกหรือมีบริการซ่อมในประเทศ</p>
        </Section>

        <Section id="character-and-roads" title="โช้คแต่ละชุดมีนิสัยของมัน แล้วเข้ากับถนนที่เราขับไหม?">
          <p>คำว่า “หนึบ” ของแต่ละคนไม่เหมือนกัน บางคนหมายถึงเบรกแล้วหน้ารถไม่ก้มมาก บางคนหมายถึงผ่านเนินแล้วไม่โยนซ้ำ อีกคนกลับต้องการให้ผ่านรอยต่อแล้วไม่สะเทือนถึงเบาะ ทั้งสามคนอาจพูดว่าอยากได้โช้คหนึบ ๆ เหมือนกัน แต่กำลังขอให้ช่วงล่างทำคนละอย่าง</p>
          <p><strong>Character หรือบุคลิกของโช้ค จึงไม่ได้มีแค่นุ่มกับแข็ง</strong> ต้องแยกว่ารับแรงกระแทกช่วงแรกยังไง คุมการเคลื่อนตัวถังแค่ไหน และคืนตัวหลังผ่านเนินแบบไหน สิ่งที่รู้สึกผ่านเบาะยังเป็นผลจากทั้งชุด ทั้งสปริง ยาง เบ้าโช้ค ความฝืด และระยะยุบที่เหลือ ไม่ใช่ลายเซ็นของแบรนด์อย่างเดียว</p>

          <h3 className="text-xl font-bold">แบรนด์เดียวกัน ยังทำโช้คมาคนละโจทย์</h3>
          <p>ดู <Ref to="hks">HKS HIPERMAX S</Ref> กับ <Ref to="hksR">HIPERMAX R</Ref> เป็นตัวอย่าง: S รุ่นปัจจุบันชูความสบายบนถนนควบคู่กับการควบคุมตัวรถ ส่วน R ให้น้ำหนักกับการขับในสนาม โดยยังคำนึงถึงการใช้งานประจำวัน นี่คือจุดประสงค์ที่ผู้ผลิตระบุ ไม่ใช่ผลทดสอบของเราว่า S ต้องนุ่มกว่า R ในรถทุกคัน</p>
          <div className="grid gap-5 sm:grid-cols-2"><DamperPhoto name="hksS" /><DamperPhoto name="hksR" /></div>
          <p>ฝั่ง KW ก็มี <Ref to="kwComfort">กลุ่ม Street Comfort</Ref> ที่ตั้งโจทย์เรื่องความสบายไว้ชัดเจน จึงไม่ควรสรุปว่า “โช้คเยอรมันต้องแข็ง” หรือ “โช้คญี่ปุ่นต้องนุ่ม” จากชื่อประเทศ แล้วข้ามไปเลือกยี่ห้อเลย ให้ถามต่อว่าซีรีส์ไหน รหัสไหน ใช้กับรถอะไร และโรงงานตั้งใจให้ใช้งานแบบไหน</p>

          <h3 className="text-xl font-bold">ถนนเยอรมันกับถนนไทย: รีวิวดีที่นั่น ไม่ได้แปลว่าจะถูกใจเราที่นี่</h3>
          <p>ประเด็นไม่ใช่ว่าเยอรมันเรียบทุกเส้น หรือไทยขรุขระทุกเส้น แต่คือ <strong>ถนนที่ใช้ทดสอบกับถนนที่เราต้องเจอทุกวัน อาจเป็นคนละโจทย์</strong> ถ้ารีวิวใช้ทางผิวเรียบต่อเนื่องเป็นหลัก แต่เส้นทางของเราต้องผ่านรอยต่อสะพาน ฝาท่อ ทางปะ และเนินชะลอความเร็ว ความประทับใจจากรีวิวนั้นก็ยังตอบเรื่องการใช้งานของเราไม่ครบ แม้รถและโช้คจะชื่อรุ่นเดียวกัน</p>
          <DamperPhoto name="bangkok" />
          <p>ลองแยกสิ่งที่ถนนส่งเข้าช่วงล่าง: ทางเป็นคลื่นยาวกับขอบรอยต่อคม ๆ ทำให้ล้อและก้านโช้คเคลื่อนต่างกัน ความเร็วรถ ยาง และน้ำหนักบรรทุกก็เปลี่ยนสิ่งที่เรารู้สึกด้วย รถที่คุมตัวถังได้นิ่งตอนผ่านคลื่นยาวจึงยังอาจสะเทือนเมื่อผ่านรอยต่อสั้น ๆ ได้ อย่ารีบสรุปว่าโช้คเสีย หรือหมุนให้อ่อนลงทุกช่องโดยยังไม่แยกอาการ <a href="#shaft-speed" className="text-lime-800 underline underline-offset-4">ย้อนดูความต่างของความเร็วรถกับความเร็วก้านโช้ค</a></p>
          <p>ในบทความนี้เราไม่มีข้อมูลวัดความขรุขระของถนนเยอรมันและไทยที่นำมาเทียบกันด้วยวิธีเดียวกัน จึงไม่จัดอันดับว่าประเทศไหนเรียบกว่ากัน ใช้เส้นทางจริงของเจ้าของรถเป็นโจทย์จะมีประโยชน์กับการเลือกโช้คมากกว่าใช้ประเทศต้นทางของแบรนด์เป็นคำตอบ</p>

          <h3 className="text-xl font-bold">จูนได้ ไม่ได้แปลว่าเปลี่ยนนิสัยได้หมด</h3>
          <p>ปุ่มปรับเปลี่ยนแรงหน่วงได้ภายในช่วงที่ชุดนั้นออกแบบไว้ ไม่ได้เปลี่ยนอัตราสปริง เพิ่มระยะยุบที่หายไปจากการโหลดเตี้ย หรือเปลี่ยนเบ้าแข็งให้กลายเป็นเบ้ายาง ถ้าเลือกพื้นฐานผิดโจทย์ การไล่คลิกอาจช่วยได้บางส่วน แต่ไม่ควรคาดหวังว่าจะเปลี่ยนชุดเน้นสนามให้มีพฤติกรรมเหมือนชุดเน้นความสบายทุกด้าน</p>
          <p>ตัวอย่างจาก <Ref to="bilstein">BILSTEIN Academy</Ref> แยกแรงหน่วงพื้นฐานที่กำหนดโดยลูกสูบและทางน้ำมัน ออกจากส่วน Bypass ที่ผู้ใช้ปรับได้ ข้อนี้ช่วยอธิบายว่าทำไมโช้คสองชุดที่หมุนไปสุดอ่อนเหมือนกัน จึงไม่ได้กลายเป็นโช้คที่ทำงานเหมือนกัน</p>

          <Note title="ก่อนถามว่าแบรนด์ไหนดี ลองบอกให้ร้านรู้ว่าเราใช้รถยังไง">
            <ul className="list-disc space-y-2 pl-5">
              <li><strong>เส้นทาง:</strong> ใช้ในเมือง ทางด่วน หรือต่างจังหวัดเป็นหลัก จุดไหนที่นั่งแล้วไม่สบาย และเจออาการแบบไหน</li>
              <li><strong>คนและของ:</strong> ปกติขับคนเดียว มีผู้โดยสารหลัง หรือบรรทุกของบ่อยแค่ไหน</li>
              <li><strong>สิ่งที่อยากได้:</strong> ลดแรงสะเทือนจากรอยต่อ ลดการโยนซ้ำ หรือควบคุมตัวถังตอนเปลี่ยนทิศทาง เลือกเรื่องสำคัญก่อน</li>
              <li><strong>ข้อจำกัดที่รับได้:</strong> ความสูงที่ต้องผ่านทางขึ้นบ้าน เสียงจากช่วงล่าง และเวลาที่พร้อมกลับไปตรวจหรือตั้งรถ</li>
              <li><strong>หลักฐานก่อนจ่าย:</strong> ขอรหัสชุด คู่มือ ค่าตั้งต้น และถ้ามีโอกาส ลองรถรุ่นเดียวกันที่ใช้ยางกับความสูงใกล้เคียง บนเส้นทางที่สะท้อนการใช้งานจริง</li>
            </ul>
          </Note>
          <p><strong>ซื้อโช้คให้ตรงชีวิตที่ใช้รถ ไม่ใช่ซื้อให้ตรงภาพรถที่อยากเป็น</strong> ถ้าขับไปทำงานทุกวัน แต่ลงสนามนาน ๆ ครั้ง ความสบายของคนในรถและการผ่านเส้นทางประจำควรมีน้ำหนักในคำตัดสินด้วย ส่วนใครใช้สนามจริงจัง ก็ต้องคุยเรื่องยาง สปริง และการตั้งรถให้ครบ ไม่ใช่เลือกจากคำว่า Racing อย่างเดียว</p>
        </Section>


        <Section id="reservoir" title="ซับแทงก์ไม่ได้มีไว้โชว์—แต่ก็ไม่ใช่ใบรับประกันความนุ่ม">
          <p>เมื่อก้านโช้คเลื่อนเข้าออก ปริมาตรที่มันกินในตัวแดมเปอร์เปลี่ยนไป ระบบต้องมีทางรองรับการเปลี่ยนปริมาตรนี้ ในการออกแบบที่มีส่วนก๊าซแยกจากน้ำมัน ก๊าซและชิ้นส่วนกั้นช่วยให้จัดการปริมาตรและความดันได้ รูปแบบจริงขึ้นกับโครงสร้าง ไม่ใช่โช้คทุกแบบใช้การจัดห้องเหมือนกัน</p>
          <p>Reservoir หรือซับแทงก์แยกอาจช่วยจัดพื้นที่ให้น้ำมัน ก๊าซ และชุดวาล์ว พร้อมเพิ่มทางเลือกการระบายความร้อนและตำแหน่งตัวปรับ ตัวอย่าง <Ref to="bcER">BC Racing ER</Ref> มีถังแยกแต่เป็น 2-way ส่วน <Ref to="bcZR">ZR</Ref> มีสามช่องปรับและรูปแบบติดตั้ง Reservoir ต่างกันตามชนิดช่วงล่าง จึงเห็นได้ชัดว่าจำนวนถังไม่ใช่วิธีนับ Way</p>
          <p>แดมเปอร์ทำงานแล้วเกิดความร้อน อุณหภูมิมีผลต่อพฤติกรรมน้ำมันและแรงหน่วงได้ ผู้ผลิตจึงออกแบบการชดเชยหรือการจัดการความร้อนตามเป้าหมาย เช่น <Ref to="ohlins">Öhlins อธิบายกลไกชดเชยอุณหภูมิของ DFV</Ref> แต่ชื่อเทคโนโลยีอย่างเดียวไม่ได้พิสูจน์ว่าค่าแรงหน่วงคงที่ทุกสถานการณ์ ต้องมีเงื่อนไขทดสอบและผลวัดประกอบ</p>
          <h3 className="text-xl font-bold">Monotube กับ Twin-tube: อ่านรูปแบบ ไม่ตัดสินจากคำเดียว</h3>
          <p>โดยหลัก Monotube ใช้กระบอกทำงานหลักหนึ่งชุด โดยหลายแบบแยกน้ำมันกับก๊าซด้วยลูกสูบกั้น ส่วน Twin-tube มีท่อทำงานและพื้นที่รอบนอกเป็นส่วนของการจัดน้ำมัน/ปริมาตร ข้อจำกัดด้านพื้นที่ ระยะชัก การจัดวาล์ว แรงเสียดทาน และความร้อนขึ้นกับการออกแบบจริง ไม่ควรสรุปว่า Monotube ต้องกระด้าง หรือ Twin-tube ต้องนุ่มกว่าเสมอ ตัวอย่าง FLEX Z กับ MONO SPORT ช่วยให้เห็นว่าทั้งสองโครงสร้างสามารถมีปุ่มปรับแบบร่วมได้</p>
          <h3 className="text-xl font-bold">กราฟ F–V มีประโยชน์ เมื่อรู้ว่ากำลังดูข้อมูลอะไร</h3>
          <p>กราฟ Force–Velocity แสดงความสัมพันธ์ของแรงหน่วงกับความเร็วลูกสูบ/ก้านในการทดสอบ ช่วยมองผลของการเปลี่ยนคลิกได้ละเอียดกว่าคำว่า “แข็งขึ้น” แต่ต้องทราบทิศทางยุบ–ยืด อุณหภูมิ ช่วงระยะทดสอบ และการตั้งค่าที่ใช้ การเอากราฟคนละเงื่อนไขมาเทียบแล้วเลือกเส้นที่ดูสวยกว่าไม่ใช่การเปรียบเทียบสมรรถนะอย่างยุติธรรม</p>
          <p>คำว่า Digressive โดยทั่วไปอธิบายเส้นแรงหน่วงที่มีอัตราการเพิ่มลดลงในย่านความเร็วที่สูงขึ้น ไม่ได้หมายความว่าแรงหน่วงต้องลดลงเป็นศูนย์เมื่อเจอหลุม และไม่ได้พิสูจน์ว่าจะสบายกว่ารถเดิมทุกคัน บทความนี้จึงไม่วาดกราฟพร้อมตัวเลขสมมติให้ดูเหมือนผลทดสอบ และไม่กำหนดอัตราส่วน Rebound ต่อ Compression สูตรเดียวสำหรับ EV ทุกคัน</p>
        </Section>

        <Section id="symptoms" title="เด้ง กระด้าง หรือยุบสุด? ฟังอาการให้ถูกก่อนจับปุ่ม">
          <p>คำบอกเล่าจากผู้ขับเป็นจุดเริ่มต้น ไม่ใช่ผลวินิจฉัย อาการคล้ายกันอาจมาจากยาง สปริง โช้ค บูช จุดยึด หรือการติดตั้ง ใช้ตารางนี้เพื่อคุยกับผู้ตรวจรถ ไม่ใช่เป็นคำสั่งให้เพิ่มหรือลดคลิกทันที</p>
          <div className="space-y-4">
            {[
              ['ผ่านเนินแล้วเด้งซ้ำ ไม่ยอมหยุด', 'ตรวจว่าแรงหน่วงคืนตัวสัมพันธ์กับสปริงหรือไม่ รวมถึงสภาพโช้ค จุดยึด และโหลด การเพิ่ม Rebound อาจเป็นตัวแปรที่ผู้จูนพิจารณา แต่ต้องตัดปัญหาชำรุดและการติดตั้งก่อน'],
              ['สะเทือนแหลม ๆ ทันทีที่เจอรอยต่อ', 'ตรวจแรงดันลมยางตามข้อมูลรถ สภาพ/ขนาดยาง ระยะยุบ Bump stop และความฝืด ไม่ควรสรุปว่าต้องลด Low-speed Compression เพราะอินพุตคมอาจเกี่ยวกับการทำงานอีกย่าน'],
              ['เจอคลื่นต่อเนื่องแล้วรถเหมือนยุบค้าง', 'Rebound ที่รั้งการยืดมากเกินไปอาจทำให้ช่วงล่างคืนระยะไม่ทัน หรือเกิด Pack-down ได้ แต่ต้องแยกจากการติดขัดและระยะทำงานผิด ไม่ใช่สั่งลดค่าโดยไม่ตรวจ'],
              ['รถก้ม เงย หรือเอียงตัวมาก', 'ต้องแยกความเร็วของการเริ่มเคลื่อนไหวจากตำแหน่งสมดุลขณะรับแรงต่อเนื่อง แดมเปอร์มีบทบาทช่วงกำลังเคลื่อน ส่วนสปริง กันโคลง และเรขาคณิตก็มีบทบาท ไม่ควรเพิ่มแรงหน่วงเพื่อหวังแทนสปริงทุกกรณี'],
              ['กระแทกตึง มีเสียง หรือยางเสียดสี', 'หยุดการทดลองจูน ตรวจจุดยึด ระยะล้อ–ยาง สปริง แหวนล็อก และการยุบ–ยืด การเพิ่มคลิกเพื่อกลบเสียงอาจปล่อยให้ความผิดปกติทางกลยังอยู่'],
            ].map(([title, description]) => <div key={title} className="rounded-2xl border border-slate-200 p-5"><h3 className="mb-2 text-lg font-bold">{title}</h3><p className="text-base leading-relaxed">{description}</p></div>)}
          </div>
          <Note title="ความรู้สึกแน่นขึ้น ไม่ใช่หลักฐานว่าเกาะถนนขึ้นเสมอ">
            <p>รถที่ส่งแรงสะเทือนมากขึ้นอาจทำให้รู้สึกสปอร์ต แต่ไม่ได้ยืนยันว่ามีแรงยึดเกาะหรือระยะเบรกดีขึ้น อย่าใช้การลองเข้าโค้งเร็วขึ้นบนถนนสาธารณะเป็นวิธีพิสูจน์ และอย่าลดลมยางนอกคำแนะนำรถเพื่อกลบอาการช่วงล่าง</p>
          </Note>
        </Section>

        <Section id="examples" title="สามสถานการณ์ที่คนแต่งรถเจอ—คุณจะเริ่มตรวจตรงไหน?">
          <p><strong>แบบฝึกคิดที่ <BrandHomeLink /> เรียบเรียงขึ้น:</strong> ทุกกรณีด้านล่างเป็นสถานการณ์สมมติเพื่อเชื่อมกลไกกับการตัดสินใจ ไม่ใช่ผลทดลองกับ Tesla, BYD, Geely หรือโช้คยี่ห้อใด ลองตอบก่อนเปิดคำอธิบาย ไม่มีคำตอบเป็นสูตรคลิกข้ามรุ่น</p>
          <DamperScenarios />
          <p className="text-sm">หลักการประกอบคำอธิบาย: <Ref to="ohlinsManual">คู่มือ Öhlins เรื่องระยะทำงานและการเริ่มตั้งค่า</Ref>, <Ref to="teinFlex">วงจรปรับร่วมของ TEIN</Ref> และ <Ref to="kwV4">การแยกย่านของ KW</Ref></p>
        </Section>

        <Section id="ev-fitment" title="แต่ง EV ให้จบ ต้องดูมากกว่าคำว่า “รองรับรถหนัก”">
          <p>รถไฟฟ้าไม่ได้หนักเท่ากันทุกคัน และน้ำหนักรวมไม่ใช่ข้อมูลเดียวที่ใช้เลือกช่วงล่าง น้ำหนักลงเพลาหน้า–หลัง ชนิดระบบขับเคลื่อน แบตเตอรี่ อุปกรณ์ประจำรุ่น และโหลดใช้งานมีผลต่อโจทย์ คนขับ Geely EX2 ใช้ในเมืองกับคนขับ Tesla Model 3 Performance ไปสนามไม่ได้มีความต้องการเดียวกัน แม้ทั้งคู่เป็น EV</p>
          <p>ก่อนเลือกแบรนด์ ให้เริ่มจากตัวรถ: <strong>ยี่ห้อ รุ่น ปี รุ่นย่อย ตลาดจำหน่าย และระบบช่วงล่างเดิม</strong> จากนั้นจึงตรวจรหัสสินค้าผู้ผลิต ช่วงน้ำหนักเพลาที่รองรับและเงื่อนไขติดตั้ง ชื่อรุ่นรถที่คล้ายกัน รูปขายออนไลน์ หรือคำว่า “ใส่ได้” จากโพสต์เดียวไม่เพียงพอจะยืนยันกับรถสเปกไทย</p>
          <ul className="list-disc space-y-3 pl-6 marker:text-lime-700">
            <li><strong>ระยะทำงานและความสูง:</strong> ตรวจช่วงความสูงที่ผู้ผลิตอนุญาต ระยะยุบ–ยืด และส่วนใต้ท้องรถ ไม่ลดรถจนกระทบพื้นที่ป้องกันแบตเตอรี่หรือจุดที่ต้องมีระยะปลอดภัย</li>
            <li><strong>ล้อ ยาง และศูนย์ล้อ:</strong> ขนาดยาง น้ำหนักล้อ Offset และมุมล้อเปลี่ยนพฤติกรรมรถได้ ชุดโช้คไม่ใช่คำตอบแยกขาดจากสิ่งเหล่านี้ อ่าน <Link href="/articles/ev-tyre-and-coilover-selection-guide" className="text-lime-800 underline underline-offset-4">วิธีเลือกยางกับโช้คให้ทำงานร่วมกัน</Link> โดยเริ่มจากขนาดยางและพิกัดรับน้ำหนักของรถ</li>
            <li><strong>Top mount และ NVH:</strong> รูปแบบจุดยึดมีผลต่อเส้นทางส่งเสียงและแรงสะเทือน หากเปลี่ยนเป็นจุดยึดแข็งขึ้น ต้องคุยเรื่องความสบายและเสียงที่ยอมรับได้ ไม่ถือว่ามี Pillowball แล้วดีกว่าสำหรับทุกการใช้งาน</li>
            <li><strong>ระบบปรับไฟฟ้าเดิม:</strong> หากรถมีแดมเปอร์ควบคุมอิเล็กทรอนิกส์ ต้องตรวจความเข้ากันได้และวิธีจัดการระบบตามเอกสาร ไม่สมมติว่าชุดปรับมือแทนได้โดยไม่มีผลกับโหมดรถหรือไฟแจ้งเตือน</li>
            <li><strong>บริการหลังติดตั้ง:</strong> ใครตั้งศูนย์ ใครตรวจซ้ำ มีอะไหล่และบริการซ่อมตามรุ่นหรือไม่ เงื่อนไขรับประกันไทยเป็นอย่างไร ให้ยืนยันเป็นเอกสาร ไม่ใช้เงื่อนไขตลาดสหรัฐฯ หรือยุโรปแทน</li>
          </ul>
          <p><strong>ยังไม่มีรายการรหัสสินค้าที่เรายืนยันครบกับรถทุกโมเดลในไทย</strong> บทความจึงไม่เสนอรายการ “ซื้อได้ทันที” ใช้ <a href="#toolkit" className="text-lime-800 underline underline-offset-4">เช็กลิสต์ส่งให้ร้านด้านล่าง</a> เพื่อขอคู่มือและการยืนยันรหัสสินค้า จากนั้นให้ผู้ติดตั้งตรวจระยะจริงก่อนตกลงสั่งซื้อ</p>
        </Section>

        <Section id="baseline" title="เริ่มจูนจากหลักฐาน ไม่ใช่สูตรคลิกในคอมเมนต์">
          <p>จุดเริ่มที่ดีที่สุดไม่ใช่แข็งสุด อ่อนสุด หรือครึ่งทางโดยอัตโนมัติ แต่คือ <strong>Baseline ที่ผู้ผลิตกำหนดสำหรับรหัสสินค้าและรถคันนั้น</strong> ตัวอย่างคู่มือ <Ref to="hksManual">HKS HIPERMAX R รหัส 80310-AN002</Ref> มีวิธีนับตำแหน่งและค่าตั้งต้นของตัวเอง นำมาแสดงว่าคู่มือสำคัญ ไม่ใช่เพื่อนำค่านั้นไปใช้กับ HKS ทุกรุ่นหรือข้ามแบรนด์</p>
          <ol className="list-decimal space-y-4 pl-6 marker:font-bold marker:text-lime-800">
            <li><strong>เช็กสภาพรถและงานติดตั้งก่อน:</strong> ยาง ลมยาง จุดยึด ความสูง และศูนย์ล้อต้องอยู่ในเงื่อนไขที่ผู้ติดตั้งตรวจแล้ว หากมีรั่ว เสียง หรือการเสียดสี ให้แก้สาเหตุก่อนเริ่มทดลองค่าปุ่ม</li>
            <li><strong>บันทึกจุดอ้างอิงให้กลับได้:</strong> จดรหัสชุดและสปริง ความสูง โหลดรถ ขนาดยาง ลมยาง และค่าตั้งทุกช่องทั้งสี่มุม พร้อมระบุว่านับจากด้านใด ทำตามคู่มือ และไม่ฝืนตัวปรับเมื่อถึงจุดหยุด</li>
            <li><strong>เลือกอาการหนึ่งอย่างที่ต้องการประเมิน:</strong> เช่น การสั่นซ้ำหลังผ่านเนินที่ใช้อยู่ประจำ แทนคำกว้าง ๆ ว่า “อยากเกาะกว่าเดิม” แยกให้ออกว่าต้องการประเมินความสบาย การคืนตัว หรือระยะทำงาน</li>
            <li><strong>เปลี่ยนทีละตัวแปรตามขอบเขตคู่มือ:</strong> จำนวนคลิกต่อครั้งและคู่ล้อที่ควรเปลี่ยนให้ยึดคำแนะนำของชุด/ผู้จูน ไม่เปลี่ยนสปริง ความสูง ลมยาง และปุ่มพร้อมกันแล้วสรุปว่าดีขึ้นเพราะโช้ค</li>
            <li><strong>ใช้เงื่อนไขที่เทียบกันได้และไม่เพิ่มความเสี่ยง:</strong> รักษาโหลด เส้นทาง และความเร็วที่ปลอดภัยเท่าเดิม ประเมินความสบายในกรอบการขับปกติ การทดสอบขีดจำกัดควรอยู่ในสนามปิดกับผู้ดูแล ไม่ใช้ถนนสาธารณะ</li>
            <li><strong>ถ้าไม่ดีขึ้น ให้กลับ Baseline:</strong> จดว่าเปลี่ยนอะไรและเกิดอะไรขึ้น หากผลไม่สอดคล้องกับสมมติฐาน ให้ตรวจต้นเหตุใหม่ อย่าเพิ่มความแข็งต่อไปเรื่อย ๆ จนกว่าจะรู้สึกว่าทนได้</li>
          </ol>
          <p>บันทึกที่มีประโยชน์ควรมี “อาการก่อนปรับ → ช่องที่เปลี่ยน → เงื่อนไขทดลอง → ผลที่สังเกต → กลับค่าเดิมหรือคงไว้” ผู้จูนที่อธิบายลำดับนี้ได้ให้ข้อมูลที่ใช้ต่อได้มากกว่าคำว่าเซ็ตมาแล้วจบโดยไม่มีรายละเอียด และการจูนภายนอกไม่ใช่งานเปิดกระบอกโช้คหรือจัดการก๊าซแรงดันด้วยตัวเอง</p>
          <p>แนวทางเริ่มจากค่าที่แนะนำ บันทึก และเปลี่ยนทีละตัวแปรสอดคล้องกับ <Ref to="ohlinsManual">คำแนะนำการตั้งค่าและความปลอดภัยของ Öhlins</Ref> ซึ่งยังเตือนให้หยุดใช้เมื่อพบการรั่ว เสียง หรือการทำงานผิดปกติ และให้ผู้มีความรู้พร้อมเครื่องมือเป็นผู้จัดการชิ้นส่วนที่มีก๊าซแรงดัน</p>
        </Section>

        <Section id="buying-brief" title="เปลี่ยนคำว่า “อยากได้ตัวจบ” เป็นโจทย์ที่ร้านตอบได้">
          <p>ก่อนให้ร้านเลือกรุ่น ลองส่งโจทย์สั้น ๆ ที่มีอาการและข้อจำกัด ยิ่งระบุสิ่งที่ต้องการได้ชัด ยิ่งประเมินได้ว่าร้านกำลังเสนอชุดให้ตรงการใช้งาน หรือกำลังอธิบายเพียงว่ามีสินค้าอะไรอยู่</p>
          <div className="rounded-2xl border border-lime-200 bg-lime-50/60 p-5 sm:p-6">
            <h3 className="mb-3 text-xl font-bold">ตัวอย่างโจทย์สมมติสำหรับรถใช้งานทุกวัน</h3>
            <p>“รถ [รุ่น / ปี / รุ่นย่อย / ตลาด] ใช้ยาง [รุ่น / ขนาด] มีผู้โดยสารหลังเป็นประจำ อาการหลักคือแรงสะเทือนครั้งแรกที่รอยต่อบนเส้นทางไปทำงาน อยากให้ผู้โดยสารสบายขึ้น โดยไม่เพิ่มการโยนซ้ำและยังขึ้นทางลาดบ้านได้ งบรวมต้องครอบคลุมติดตั้ง ตั้งศูนย์ และตรวจซ้ำ ขอรหัสชุด สปริง ช่วงความสูงที่แนะนำ และเหตุผลที่เลือกพร้อมคู่มือ”</p>
            <p className="mt-4 text-base">นี่เป็นแบบตั้งคำถาม ไม่ใช่คำรับรองว่าชุดใดทำได้ครบทุกข้อ ถ้าต้องแลกการคุมตัวถัง เสียง หรือความสูง ให้ร้านอธิบายก่อนซื้อ แล้วตกลงว่าจะประเมินผลกันอย่างไร</p>
          </div>
          <h3 className="text-xl font-bold">สิ่งที่ควรได้กลับมา นอกเหนือจากชื่อยี่ห้อและราคา</h3>
          <ul className="list-disc space-y-3 pl-6 marker:text-lime-700">
            <li><strong>เหตุผลที่ชุดนี้ตรงโจทย์:</strong> รหัสที่รองรับรถ สปริง ช่วงความสูง และลักษณะช่องปรับเกี่ยวข้องกับอาการอย่างไร ถ้ายังไม่มีข้อมูล ต้องระบุว่าจะตรวจอะไรเพิ่ม</li>
            <li><strong>ข้อแลกเปลี่ยนที่พูดตรง ๆ:</strong> ระยะทำงาน ความสบาย เสียงจาก Top mount และข้อจำกัดระบบปรับไฟฟ้าเดิม ไม่รับคำว่า “ดีทุกด้าน” โดยไม่มีเงื่อนไข</li>
            <li><strong>งานติดตั้งและผลตรวจส่งมอบ:</strong> ค่าตั้งสี่มุมพร้อมวิธีนับ ความสูงกับจุดวัด ใบตั้งศูนย์ การตรวจบูช/ระยะเคลียร์ และนัดตรวจซ้ำตามที่ตกลง</li>
            <li><strong>งบตลอดการใช้งาน:</strong> ขอราคาแยกชุด ติดตั้ง ตั้งศูนย์ และงานเพิ่มเติม พร้อมช่องทางอะไหล่ ซ่อมบำรุง หรือ Revalve ตามรหัสจริง ไม่ใช้ราคาหน้ากล่องเป็นต้นทุนทั้งหมด</li>
          </ul>
          <p>หากรถเดิมยังมีปัญหายางหรือชิ้นส่วนสึก งานซ่อมให้กลับมาปกติอาจต้องมาก่อนการอัปเกรด ส่วนรถที่ติดชุดใหม่แล้วไม่ลงตัว ควรตกลงให้ตรวจและบันทึกชุดปัจจุบันก่อนเสนอเปลี่ยนอีกชุด เพื่อให้รู้ว่าจ่ายรอบถัดไปเพื่อแก้ข้อจำกัดอะไร</p>
          <p>ใช้ <a href="/downloads/evselect-coilover-shop-checklist.txt" download className="font-semibold text-lime-800 underline underline-offset-4">เช็กลิสต์ภาษาไทย 12 ข้อสำหรับส่งให้ร้าน</a> และแบบบันทึกด้านล่าง ข้อมูลที่ไม่มีหลักฐานให้เขียนว่า “ต้องยืนยัน” ไม่เติมคำตอบแทนผู้ผลิตหรือผู้ติดตั้ง</p>
        </Section>

        <Section id="toolkit" title="อย่าให้ค่าที่ดีหายไป: เก็บ Baseline และถามร้านให้ครบ">
          <p>ใช้แบบบันทึกเดียวกันตั้งแต่ก่อนติดตั้งจนถึงตรวจซ้ำ จะช่วยแยกได้ว่าเปลี่ยนโช้ค เปลี่ยนความสูง หรือเปลี่ยนเงื่อนไขรถไปด้วย แบบฟอร์มนี้ไม่คำนวณค่าจูนและไม่แทนคู่มือผู้ผลิต</p>
          <div className={styles.download}>
            <a href="/downloads/evselect-damper-setup-log.html">เปิดแบบบันทึกที่กรอกและพิมพ์ได้ <span aria-hidden="true">→</span><span className="mt-2 block text-sm font-normal">ข้อมูลรถ · สี่มุม · ช่องปรับ · รอบ A–B–A</span></a>
            <a href="/downloads/evselect-coilover-shop-checklist.txt" download>ดาวน์โหลดเช็กลิสต์ถามร้าน <span aria-hidden="true">↓</span><span className="mt-2 block text-sm font-normal">ข้อความภาษาไทยสำหรับแนบถามผู้ติดตั้ง</span></a>
          </div>
          <p className="text-sm">แบบบันทึกไม่ส่งข้อมูลเข้าระบบและไม่บันทึกอัตโนมัติ ใช้เมนูพิมพ์ของเบราว์เซอร์เพื่อบันทึกเป็น PDF ก่อนปิดหน้า ไม่ต้องกรอกชื่อ ที่อยู่ หรือเลขตัวถังเต็ม</p>
          <h3 className="text-xl font-bold">ประเมิน A–B–A ให้รู้ว่าอะไรเปลี่ยน ไม่ใช่แค่จำว่ารอบหลังดีกว่า</h3>
          <ol className="list-decimal space-y-3 pl-6 marker:text-lime-800">
            <li><strong>A — บันทึก Baseline:</strong> ใช้ค่าตามคู่มือที่ตรวจแล้ว บันทึกอาการในเงื่อนไขขับปกติเดิม ไม่สร้างเหตุอันตรายเพื่อทดสอบ</li>
            <li><strong>B — เปลี่ยนหนึ่งตัวแปร:</strong> ให้ผู้จูนกำหนดช่องและขนาดการเปลี่ยนภายในขอบเขตที่อนุญาต บันทึกสิ่งที่เปลี่ยนจริง ไม่สรุปจากความรู้สึก “สปอร์ตขึ้น” อย่างเดียว</li>
            <li><strong>A อีกครั้ง — ตรวจความทำซ้ำได้:</strong> หากไม่มีอาการผิดปกติและผู้จูนเห็นว่าเหมาะสม กลับค่าที่บันทึกไว้เพื่อดูว่าอาการกลับไปทางเดิมหรือไม่ ถ้าโหลด ผิวทาง หรือสภาพยางต่างกัน ให้ระบุว่าเทียบกันไม่ได้</li>
          </ol>
          <p>นี่เป็นแผนเปรียบเทียบที่เสนอ ไม่ใช่ผลทดสอบที่ทำแล้ว หากมีเสียง รั่ว หรือการควบคุมผิดปกติ ให้หยุดและตรวจรถ ไม่ต้องทำให้ครบรอบ A–B–A และแม้บันทึกดีขึ้นก็ยังไม่ใช่หลักฐานว่าระยะเบรกสั้นลงหรือเกาะถนนมากขึ้น</p>
        </Section>

        <DamperPhoto name="race" />

        <Section id="choose" title="ขับทุกวันหรือ Track Day—ควรจ่ายถึงกี่ Way ถึงพอดี?">
          <h3 className="text-xl font-bold">ใช้ถนนเป็นหลัก: เริ่มจากชุดที่ตรงโจทย์ ไม่ใช่ช่องปรับมากที่สุด</h3>
          <p>ถ้าต้องการรถขับง่าย ผ่านทางขึ้นอาคารและรอยต่อประจำวันได้ดีขึ้น แต่ไม่ได้ต้องการเปลี่ยนบุคลิกบ่อย ชุดแรงหน่วงคงที่ที่เหมาะกับรถหรือ 1-way ที่มี Baseline และบริการหลังติดตั้งชัดเจนควรอยู่ในตัวเลือกด้วย งบส่วนหนึ่งอาจมีประโยชน์กับการเลือกสปริง ความสูง ยาง และงานติดตั้ง มากกว่าซื้อช่องปรับที่ไม่ได้ใช้</p>
          <h3 className="text-xl font-bold">รู้แล้วว่าอยากแยกยุบกับยืด: 2-Way เพิ่มเครื่องมือที่ตรงงาน</h3>
          <p>เมื่อคุณอธิบายความต้องการสองฝั่งแยกกันได้ หรือกำลังแก้ข้อจำกัดของปุ่มร่วมกับผู้จูน 2-way เป็นขั้นที่มีเหตุผล แต่ต้องตรวจว่าช่องที่เพิ่มมามีอิทธิพลกับย่านที่ต้องการจริง ตัวอย่างเช่น ต้องการจัดการแรงอินพุตก้านเร็ว ก็ไม่ควรสรุปว่า Low-speed Compression knob จะแก้ได้ทั้งหมด</p>
          <h3 className="text-xl font-bold">ทำ Track Day จริงจัง: 3-Way ควรมาพร้อมแผนทดสอบ</h3>
          <p>ถ้ามีโจทย์แยกการควบคุมตัวถังกับการรับอินพุตคมชัด มีข้อมูลการตั้งรถ และมีผู้จูนคอยประเมิน 3-way เพิ่มทางเลือกให้ทำงานละเอียดขึ้น แต่ความสามารถของชุดยังต้องสอดคล้องกับสปริง ยาง และช่วงล่างทั้งระบบ อย่าซื้อจากจำนวนช่องแล้วคาดหวังเวลาในสนามที่ดีขึ้นโดยไม่มีการเปรียบเทียบภายใต้เงื่อนไขเดียวกัน</p>
          <Note title={<>คำแนะนำของ <BrandHomeLink /></>}>
            <p>ให้เลือก <strong>ชุดที่ยืนยันสเปกกับรถได้ มี Baseline เหมาะกับการใช้งาน และมีคนดูแลหลังติดตั้ง</strong> ก่อนเลือกจำนวน Way เพิ่มงบเมื่อรู้ว่าต้องการช่องปรับนั้นเพื่อแก้อะไร ไม่ใช่เพราะตัวเลขมากกว่าดูเป็นรุ่นที่จบกว่า</p>
          </Note>
        </Section>

        <Section id="faq" title="ก่อนกดสั่ง: คำถามที่ช่วยกันเสียเงินซ้ำ">
          <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 px-5 sm:px-6">
            {faqs.map(item => <details key={item.q} className="group py-5"><summary className="cursor-pointer text-lg font-semibold text-slate-950 marker:text-lime-700">{item.q}</summary><p className="mt-4 text-base leading-[1.95]">{item.a}</p></details>)}
          </div>
        </Section>

        <section aria-labelledby="sources-title" className="rounded-2xl bg-slate-50 p-5 text-sm sm:p-7">
          <h2 id="sources-title" className="mb-3 text-xl font-bold text-slate-950">อ่านต้นฉบับจากผู้ผลิต</h2>
          <p className="mb-5 leading-relaxed">ตรวจข้อมูลวันที่ 19 กันยายน 2569 ข้อกำหนดผลิตภัณฑ์อาจต่างตามรุ่น ตลาด และรุ่นปรับปรุง ตรวจคู่มือรหัสสินค้าปัจจุบันก่อนใช้ข้อมูลเพื่อซื้อ ติดตั้ง หรือปรับตั้ง ตัวอย่างแบรนด์ไม่ใช่การรับรองผลทดสอบหรือการยืนยันสต็อกในไทย</p>
          <ul className="list-disc space-y-2 pl-5">{Object.entries(sources).map(([key, source]) => <li key={key}><a href={source.url} target="_blank" rel="noopener noreferrer" className="text-slate-600 underline decoration-slate-300 underline-offset-4 hover:text-lime-800">{source.title}<span className="sr-only"> (เปิดแท็บใหม่)</span></a></li>)}</ul>
        </section>

        <section aria-labelledby="related-title" className="border-t border-slate-200 pt-8">
          <h2 id="related-title" className="mb-5 text-2xl font-bold text-slate-950">เข้าใจโช้คแล้ว ต่อภาพช่วงล่างให้ครบ</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/articles/ev-tyre-and-coilover-selection-guide" className="rounded-2xl border border-slate-200 p-5 text-base font-semibold transition hover:border-lime-500">ยางกับโช้คสตรัทปรับเกลียว ต้องเลือกให้ทำงานด้วยกัน <ArrowRight className="mt-3 h-5 w-5 text-lime-700" aria-hidden="true" /></Link>
            <Link href="/articles/shock-absorber-types-monotube-twintube-air-ev" className="rounded-2xl border border-slate-200 p-5 text-base font-semibold transition hover:border-lime-500">Monotube, Twin-tube และถุงลม ต่างกันตรงไหน <ArrowRight className="mt-3 h-5 w-5 text-lime-700" aria-hidden="true" /></Link>
          </div>
        </section>
      </div>
      <footer className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500"><span><BrandHomeLink /> · เข้าใจรถให้ลึก เลือกให้ตรงใจ</span><Link href="/articles" className="inline-flex min-h-11 items-center gap-2 font-medium text-lime-800">อ่านบทความอื่น <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link></footer>
    </article>
  );
}
