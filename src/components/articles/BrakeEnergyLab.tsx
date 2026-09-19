'use client';

import { useState } from 'react';
import { descentEnergyMJ, kineticEnergyMJ, splitEnergy } from '@/lib/brake-physics';
import styles from './BrakeGuide.module.css';

function Slider({ id, label, value, unit, min, max, step, onChange }: { id: string; label: string; value: number; unit: string; min: number; max: number; step: number; onChange: (value: number) => void }) {
  return <div className={styles.control}>
    <label htmlFor={id}>{label} <output htmlFor={id}>{value.toLocaleString('en-US')} {unit}</output></label>
    <input id={id} type="range" min={min} max={max} step={step} value={value} onChange={event => onChange(Number(event.target.value))} />
  </div>;
}

export default function BrakeEnergyLab() {
  const [mass, setMass] = useState(2200);
  const [speed, setSpeed] = useState(100);
  const [regen, setRegen] = useState(0);
  const [height, setHeight] = useState(1000);
  const kinetic = kineticEnergyMJ(mass, speed);
  const downhill = descentEnergyMJ(mass, height);
  const split = splitEnergy(kinetic, regen);
  const descentSplit = splitEnergy(downhill, regen);
  const reference = kineticEnergyMJ(mass, 100);

  return <div className={styles.lab} data-testid="brake-energy-lab">
    <h3 className="text-xl font-bold leading-relaxed sm:text-2xl">ลองเปลี่ยนรถ เปลี่ยนความเร็ว แล้วดูภาระเบรก</h3>
    <p className={styles.help}>ตัวเลขเป็นแบบจำลองพลังงานของรถทั้งคัน ไม่มีตัวแปรแรงม้า และไม่ได้ทำนายอุณหภูมิจานหรือระยะหยุด</p>
    <noscript><style>{'.brake-lab-controls{display:none}'}</style><p className={styles.help}>กำลังแสดงตัวอย่างคงที่: รถ 2,200 kg หยุดจาก 100 km/h และลดระดับ 1,000 m หากเปิด JavaScript จะปรับค่าทดลองได้</p></noscript>
    <div className={`${styles.controls} brake-lab-controls`}>
      <Slider id="brake-mass" label="น้ำหนักรวมคนและสัมภาระ" value={mass} unit="kg" min={1400} max={3000} step={100} onChange={setMass} />
      <Slider id="brake-speed" label="ความเร็วเริ่มต้น → หยุดนิ่ง" value={speed} unit="km/h" min={40} max={160} step={10} onChange={setSpeed} />
      <Slider id="brake-regen" label="สมมติสัดส่วนพลังงานที่ regen รับ" value={regen} unit="%" min={0} max={80} step={10} onChange={setRegen} />
      <Slider id="brake-height" label="ระยะลดระดับแนวดิ่ง" value={height} unit="m" min={100} max={1500} step={100} onChange={setHeight} />
    </div>
    <p className={styles.help}>ความเร็วสูงใช้เปรียบเทียบทางฟิสิกส์สำหรับสนามปิด ไม่ใช่ความเร็วแนะนำบนถนน ค่า regen เป็นสมมติฐาน ไม่ใช่ค่าที่รถรับได้จริงหรือประสิทธิภาพชาร์จกลับแบตเตอรี่</p>
    <div className="mt-5 space-y-5" aria-live="polite" aria-atomic="true">
      <div className={styles.results}>
        <div className={styles.result}><span>พลังงานที่ต้องลดเมื่อหยุดรถ</span><strong data-testid="kinetic-energy">{kinetic.toFixed(2)} MJ</strong><span className={styles.help}>จาก {speed} → 0 km/h · ทั้งคัน</span></div>
        <div className={styles.result}><span>ส่วนที่เหลือให้เบรกเสียดทานรับ*</span><strong data-testid="friction-energy">{split.frictionMJ.toFixed(2)} MJ</strong><span className={styles.help}>เมื่อสมมติ regen รับ {regen}%</span></div>
      </div>
      <div>
        <div className={styles.bar} aria-hidden="true"><div style={{ width: `${regen}%`, background: '#65a30d' }} /><div style={{ width: `${100 - regen}%`, background: '#1e293b' }} /></div>
        <p className={styles.help}>เขียว: regen {split.regenerativeMJ.toFixed(2)} MJ · กรมท่า: เบรกเสียดทาน {split.frictionMJ.toFixed(2)} MJ</p>
      </div>
      <div className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5">
        <h4 className="font-bold">ทางลงยาวเพิ่มพลังงานมาอีกทาง</h4>
        <p>ลดระดับ {height.toLocaleString('en-US')} m มีพลังงานศักย์ <strong data-testid="descent-energy">{downhill.toFixed(2)} MJ</strong> เทียบได้กับพลังงานหยุด 100 → 0 ประมาณ <strong>{(downhill / reference).toFixed(1)} ครั้ง</strong></p>
        <p className={styles.help}>หากใช้เวลาลงสมมติ 20 นาที: เฉลี่ย {(downhill * 1000 / 1200).toFixed(1)} kW ก่อนหัก regen และแรงต้านอื่น ภายใต้สมมติฐาน regen เดียวกัน ส่วนเบรกเสียดทานจะเหลือ {descentSplit.frictionMJ.toFixed(2)} MJ ตลอดทาง</p>
      </div>
    </div>
    <div className={styles.energyRows}>
      <h4 className="font-bold">รถหนักเท่ากัน ความเร็วเพิ่ม 20% แต่พลังงานเพิ่ม 44%</h4>
      {[80, 100, 120, 160].map(kph => <div className={styles.energyRow} key={kph}><span>{kph} → 0 km/h · {kineticEnergyMJ(mass, kph).toFixed(2)} MJ · {(kph ** 2 / 10000).toFixed(2)} เท่าของ 100 km/h</span><div style={{ width: `${kph ** 2 / 256}%` }} aria-hidden="true" /></div>)}
    </div>
    <p className={styles.help}>สูตร: E = ½m(v₁² − v₂²), แปลง km/h ÷ 3.6 เป็น m/s; ทางลงใช้ E = mgh, g = 9.81 m/s²; 1 MJ = 1 ล้านจูล ตัวอย่างละแรงต้านอากาศ แรงต้านการหมุน และพลังงานหมุนของล้อ สมมติความเร็วต้น–ปลายทางลงเท่ากัน ไม่ได้แจกความร้อนไปจานแต่ละล้อ และไม่ได้คิดการระบายความร้อนระหว่างทาง</p>
    <p className={`${styles.help} mt-3`}>*เป็นส่วนที่เหลือในสมดุลพลังงานอย่างง่าย ไม่ใช่ความร้อนที่เนื้อจานทั้งหมดดูดซับ ตัวเลข “ครั้ง” ใช้เทียบพลังงานเท่านั้น ไม่ใช่จำนวนครั้งที่ควรเหยียบเบรก</p>
  </div>;
}
