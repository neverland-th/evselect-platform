'use client';

import { useState } from 'react';
import Link from 'next/link';

const roads = [
  { title: '🏙️ ในเมือง', situation: 'รอยต่อ คอสะพาน และทางขรุขระ', check: 'จดว่าเป็นแรงกระแทกครั้งเดียวหรือเด้งต่อหลายครั้ง พร้อมความเร็ว จำนวนคน และแรงดันลมยาง อย่าเพิ่งสรุปว่าต้องหมุน Bump ให้นิ่มลง', href: '#symptoms', anchor: 'แยกอาการกระด้าง เด้ง และยุบสุด' },
  { title: '🛣️ ทางไกล', situation: 'คลื่นถนนและการเคลื่อนตัวของตัวรถ', check: 'สังเกตว่าโยนหลังผ่านเนิน หรือสะเทือนถี่ตามรอยต่อ ความเร็วรถไม่ใช่ความเร็วแกนโช้ค และการเพิ่ม Rebound ไม่ได้แก้ทุกอาการ', href: '#shaft-speed', anchor: 'แยกความเร็วรถออกจากความเร็วแกนโช้ค' },
  { title: '🏁 สนามปิด', situation: 'การเบรกและเลี้ยวต่อเนื่องภายใต้การดูแล', check: 'ใช้ค่าตั้งต้นของผู้ผลิตและตรวจสภาพรถร่วมกับผู้ติดตั้งหรือผู้สอน ไม่หมุนทุกปุ่มแข็งสุด และไม่ใช้ถนนเปลี่ยวแทนสนาม', href: '#baseline', anchor: 'วางค่าตั้งต้นและบันทึกผลก่อนปรับโช้ค' },
];
const brands = [
  { name: 'KW V3', channel: 'Compression และ Rebound แยกปรับ', detail: 'ตัวอย่างนี้มี Low-speed Compression 12 คลิก และ Low-speed Rebound 16 คลิก ชื่อ V3 ไม่ได้หมายถึงปรับ 3-way', caution: 'จำนวนคลิกคือช่วงปรับ ไม่ใช่ค่าตั้งต้นสำหรับรถทุกคัน', url: 'https://www.kwsuspensions.com/uk/products/street-performance/v3-coilovers' },
  { name: 'TEIN FLEX Z', channel: 'Compression และ Rebound ปรับร่วม', detail: 'ปรับแรงหน่วง 16 ระดับผ่านตัวปรับร่วม ใช้โครงสร้าง Twin-tube จึงไม่ควรแยกสั่ง Bump กับ Rebound เป็นคนละตัวเลข', caution: 'ใช้คู่มือของรหัสชุดจริง และตรวจรุ่นรถก่อนเลือกซื้อ', url: 'https://www.tein.com/products/flex_z.html' },
  { name: 'BC Racing ER', channel: 'Compression และ Rebound แยกปรับ', detail: 'รุ่น ER ที่อ้างอิงมี Compression 30 คลิกที่ Reservoir และ Rebound 30 คลิกที่ส่วนบนของโช้ค ไม่ใช่สเปกของ BC Racing ทุกรุ่น', caution: 'มีถังแยกไม่ได้แปลว่าเป็น 3-way', url: 'https://www.bcracing.co.nz/types/er/' },
  { name: 'Öhlins DFV', channel: 'เทคโนโลยีวาล์ว ไม่ใช่จำนวนปุ่ม', detail: 'DFV อธิบายทางไหลของน้ำมันในจังหวะยุบและยืด การมีวาล์วหลายช่วงข้างในไม่ได้แปลว่ามีปุ่มแยกให้ผู้ใช้ปรับทุกช่วง', caution: 'ต้องอ่านคู่มือชุด Road & Track รหัสนั้นเพื่อดูจำนวนปุ่มและค่าตั้งต้น', url: 'https://www.ohlins.com/en-us/technology/dfv-technology' },
];
const questions = [
  { id: 'symptom', label: 'อยากแก้อาการไหนก่อน?', options: ['กระแทกแรงครั้งเดียว', 'เด้งต่อหลายครั้ง', 'ตัวรถโยน', 'อยากลดความสูง'] },
  { id: 'road', label: 'เจอบนถนนแบบไหนบ่อย?', options: ['ในเมืองและคอสะพาน', 'ทางไกลและคลื่นถนน', 'ผสมหลายแบบ', 'สนามปิด'] },
  { id: 'priority', label: 'อะไรสำคัญที่สุดในการใช้งาน?', options: ['ความสบายของผู้โดยสาร', 'การควบคุมตัวรถ', 'ระยะใต้ท้องรถ', 'ตรวจหาสาเหตุก่อนซื้อ'] },
];
const card = 'bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:p-8 space-y-5';
const button = 'rounded-xl border px-4 py-3 text-left text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime-400';
const selected = 'border-lime-400 bg-lime-400/15 text-lime-200';
const idle = 'border-zinc-600 bg-zinc-800 text-zinc-200';
const guide = '/articles/ev-damper-tuning-bump-rebound-guide';
const readingLink = 'inline-block text-sm font-semibold text-lime-300 underline underline-offset-4';

export default function EvDamperBasics() {
  const [roadIndex, setRoadIndex] = useState(0);
  const [brandIndex, setBrandIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const road = roads[roadIndex];
  const brand = brands[brandIndex];
  const complete = questions.every(q => Boolean(answers[q.id]));
  return <div className="my-10 space-y-6 text-zinc-200">
    <section className={card} aria-labelledby="damper-start">
      <h3 id="damper-start" className="text-xl font-bold text-white">⚖️ รถหนักขึ้น ไม่ได้แปลว่าโช้คเดิมใช้ไม่ได้</h3>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-zinc-700 bg-zinc-800 p-5"><p className="font-semibold text-white">สปริงรับน้ำหนัก</p><p className="mt-2 text-sm leading-relaxed text-zinc-300">ต้องดูน้ำหนักลงแต่ละเพลา สเปกสปริง ระยะทำงาน และน้ำหนักบรรทุก ไม่ใช้ตัวเลขน้ำหนักรถอย่างเดียวเลือกโช้ค</p></div>
        <div className="rounded-xl border border-lime-500/30 bg-zinc-800 p-5"><p className="font-semibold text-lime-300">โช้คหน่วงการเคลื่อนที่</p><p className="mt-2 text-sm leading-relaxed text-zinc-300">แรงหน่วงต้องทำงานร่วมกับสปริง ยาง และการติดตั้ง อาการเด้งหรือกระแทกจึงไม่ได้ชี้ไปที่ปุ่มปรับตัวเดียวเสมอ</p></div>
      </div>
      <p className="text-sm leading-relaxed text-zinc-300">ผู้ผลิตออกแบบช่วงล่างเดิมสำหรับรถรุ่นนั้นอยู่แล้ว หากมีอาการผิดปกติให้ตรวจสภาพและการใช้งานก่อนสรุปว่าต้องเปลี่ยนเป็นโช้คแต่ง</p>
      <Link href={`${guide}#basics`} className={readingLink}>แยกหน้าที่ของยาง สปริง โช้ค และ Bump stop</Link>
    </section>
    <section className={card} aria-labelledby="damper-roads">
      <h3 id="damper-roads" className="text-xl font-bold text-white">🛞 เริ่มจากถนนที่ใช้และอาการที่เจอ</h3>
      <div className="flex flex-wrap gap-2" role="group" aria-label="เลือกสภาพการใช้งาน">{roads.map((item, index) => <button key={item.title} type="button" aria-pressed={roadIndex === index} onClick={() => setRoadIndex(index)} className={`${button} ${roadIndex === index ? selected : idle}`}>{item.title}</button>)}</div>
      <div className="space-y-3 rounded-xl border border-zinc-700 bg-zinc-800 p-5" aria-live="polite"><p className="font-semibold text-white">{road.situation}</p><p className="text-sm leading-relaxed text-zinc-300">{road.check}</p><Link href={`${guide}${road.href}`} className={readingLink}>{road.anchor}</Link></div>
      <p className="text-xs leading-relaxed text-zinc-400">เป็นแนวทางเก็บข้อมูล ไม่ใช่ผลจำลองภาระโช้คหรือสูตรจำนวนคลิกสำหรับรถของคุณ</p>
    </section>
    <section className={card} aria-labelledby="damper-models">
      <h3 id="damper-models" className="text-xl font-bold text-white">📊 อ่านเป็นรุ่น ไม่เหมารวมทั้งแบรนด์</h3>
      <div className="grid gap-3 sm:grid-cols-2" role="group" aria-label="เลือกตัวอย่างโช้ค">{brands.map((item, index) => <button key={item.name} type="button" aria-pressed={brandIndex === index} onClick={() => setBrandIndex(index)} className={`${button} ${brandIndex === index ? selected : idle}`}><span className="block font-bold">{item.name}</span><span className="mt-1 block text-xs leading-relaxed text-zinc-300">{item.channel}</span></button>)}</div>
      <div className="space-y-3 rounded-xl border border-lime-500/30 bg-zinc-800 p-5" aria-live="polite"><p className="font-bold text-white">{brand.name}</p><p className="text-sm leading-relaxed text-zinc-200">{brand.detail}</p><p className="text-sm leading-relaxed text-amber-200">{brand.caution}</p><a href={brand.url} target="_blank" rel="noopener noreferrer" className={readingLink}>อ่านรายละเอียด {brand.name} จากแหล่งทางการ</a></div>
      <p className="text-xs leading-relaxed text-zinc-400">ยกตัวอย่างโครงสร้างและช่องปรับเท่านั้น ไม่ใช่อันดับความนุ่ม ราคาในไทย หรือการยืนยันว่ามีชุดตรงรุ่นสำหรับรถทุกคัน</p>
    </section>
    <section className={card} aria-labelledby="damper-brief">
      <h3 id="damper-brief" className="text-xl font-bold text-white">🎯 เตรียมโจทย์ให้ร้าน ก่อนถามว่าใช้แบรนด์ไหนดี</h3>
      {questions.map(q => <fieldset key={q.id} className="space-y-3"><legend className="font-medium text-white">{q.label}</legend><div className="grid gap-2 sm:grid-cols-2">{q.options.map(option => <button key={option} type="button" aria-pressed={answers[q.id] === option} onClick={() => setAnswers(current => ({ ...current, [q.id]: option }))} className={`${button} ${answers[q.id] === option ? selected : idle}`}>{option}</button>)}</div></fieldset>)}
      {complete && <div className="space-y-3 rounded-xl border border-lime-500/30 bg-lime-500/10 p-5" aria-live="polite"><p className="font-semibold text-lime-200">โจทย์ของคุณ: {answers.symptom} / {answers.road} / {answers.priority}</p><p className="text-sm leading-relaxed text-zinc-200">เพิ่มรุ่น ปี รุ่นย่อย ขนาดยาง ลมยาง น้ำหนักบรรทุก และค่าตั้งเดิม แล้วให้ผู้ติดตั้งตรวจหาสาเหตุ ผลนี้ไม่สามารถเลือกแบรนด์หรือจำนวนคลิกแทนการตรวจรถได้</p><Link href={`${guide}#buying-brief`} className={readingLink}>ดูข้อมูลที่ควรเตรียมคุยกับร้านช่วงล่าง</Link><button type="button" onClick={() => setAnswers({})} className={`${button} block border-zinc-500 text-zinc-100`}>ล้างคำตอบแล้วเลือกใหม่</button></div>}
    </section>
  </div>;
}
