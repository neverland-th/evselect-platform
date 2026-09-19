import styles from './DamperGuide.module.css';

const modes = [
  { id: 'rebound', label: '1-Way · ยืดอย่างเดียว', title: 'หนึ่งช่องปรับ ไม่ได้แปลว่าทำงานแค่ทิศเดียว', example: 'ตัวอย่าง: KW V2', groups: [['ปุ่ม Rebound', 'แรงหน่วงตอนยืด']], fixed: 'แรงหน่วงตอนยุบยังทำงาน แต่ผู้ผลิตตั้งไว้ ไม่ได้มีปุ่ม Compression ให้ปรับเอง', takeaway: 'ถ้าอยากเปลี่ยนฝั่งยุบโดยเฉพาะ ปุ่ม Rebound ไม่ใช่ตัวแทนของช่องปรับที่ไม่มี' },
  { id: 'coupled', label: '1-Way · ยุบ–ยืดร่วม', title: 'ปุ่มเดียว เปลี่ยนสองทิศทางตามวงจรที่ออกแบบไว้', example: 'ตัวอย่าง: TEIN FLEX Z / BILSTEIN B16 แบบปรับมือ', groups: [['ปุ่มร่วม', 'แรงหน่วงตอนยุบ', 'แรงหน่วงตอนยืด']], fixed: 'สองผลลัพธ์ ไม่ใช่สองช่องอิสระ และไม่จำเป็นต้องเปลี่ยนแรงเท่ากัน', takeaway: 'หากปรับแล้วฝั่งหนึ่งดีขึ้น แต่อีกฝั่งไม่ลงตัว ต้องประเมินข้อจำกัดของปุ่มร่วม ไม่ใช่หมุนเพิ่มไปเรื่อย ๆ' },
  { id: 'two', label: '2-Way · แยกยุบ/ยืด', title: 'แยกสองช่อง เพื่อไม่ต้องขยับสองฝั่งพร้อมกันทุกครั้ง', example: 'ตัวอย่าง: KW V3 / BC Racing ER', groups: [['ปุ่ม Compression', 'แรงหน่วงตอนยุบ'], ['ปุ่ม Rebound', 'แรงหน่วงตอนยืด']], fixed: 'KW V3 ระบุช่อง Low-speed ทั้งสองฝั่ง ส่วนขอบเขตของรุ่นอื่นต้องอ่านคู่มือ', takeaway: 'คงค่าปุ่ม Rebound ไว้ แล้วสำรวจผลของ Compression ได้ แต่การตอบสนองของช่วงล่างทั้งระบบยังเกี่ยวข้องกัน' },
  { id: 'three', label: '3-Way · แยกยุบช้า/เร็ว', title: 'เพิ่มช่องฝั่งยุบ ไม่ใช่เพิ่มปุ่ม “ความเร็วรถ”', example: 'ตัวอย่าง: BC Racing ZR / KW V4', groups: [['ปุ่ม LSC', 'ยุบ · ย่านก้านเคลื่อนช้า'], ['ปุ่ม HSC', 'ยุบ · ย่านก้านเคลื่อนเร็ว'], ['ปุ่ม Rebound', 'แรงหน่วงตอนยืด']], fixed: 'เป็นรูปแบบ 3-Way ของตัวอย่างที่อ้างอิง ย่านอิทธิพลอาจซ้อนกัน และ KW V4 ระบุ Rebound แบบ Low-speed', takeaway: 'มีเครื่องมือเพิ่มเพื่อแยกโจทย์ฝั่งยุบ แต่ไม่ได้รับประกันว่ารอยต่อทุกแบบจะนุ่มขึ้น หรือแก้ระยะยุบที่ไม่พอได้' },
];

export default function DamperExplorer() {
  return (
    <fieldset className={styles.explorer} aria-describedby="explorer-help">
      <legend className={styles.legend}>ลองเลือกแบบ แล้วดูว่าปุ่มเชื่อมกับอะไร</legend>
      <p id="explorer-help" className={styles.help}>ภาพความสัมพันธ์เชิงแนวคิด ไม่ใช่ภาพวงจรภายในจริง กราฟไดโน หรือสูตรตั้งคลิก · ใช้ปุ่มลูกศรบนแป้นพิมพ์เลือกได้</p>
      <div className={styles.options}>
        {modes.map((mode, i) => <label key={mode.id} className={styles.option}><input type="radio" name="damper-mode" value={mode.id} defaultChecked={i === 0} aria-controls={`explorer-${mode.id}`} /><span>{mode.label}</span></label>)}
      </div>
      {modes.map(mode => <div key={mode.id} id={`explorer-${mode.id}`} data-mode={mode.id} className={styles.panel}>
        <p className={styles.eyebrow}>{mode.example}</p>
        <h3 className={styles.panelTitle}>{mode.title}</h3>
        <div className={styles.flow}>
          {mode.groups.map(group => <div key={group[0]} className={styles.branch}>
            <div className={styles.knob}><span aria-hidden="true">◉</span> {group[0]}</div>
            <div className={styles.connector} aria-hidden="true">↓</div>
            <ul className={styles.outputs}>{group.slice(1).map(output => <li key={output}>{output}</li>)}</ul>
          </div>)}
        </div>
        <p className={styles.help}>{mode.fixed}</p>
        <p className={styles.takeaway}><strong>แปลเป็นการใช้งาน:</strong> {mode.takeaway}</p>
      </div>)}
    </fieldset>
  );
}

export function DamperScenarios() {
  return <div className={styles.cases}>
    {[
      { title: '01 · คลานผ่านรอยต่อ แต่กระแทกแรง: ต้องดู Low-speed เสมอไหม?', prompt: 'รถสมมติผ่านขอบต่างระดับค่อนข้างคมด้วยความเร็วต่ำ คนขับจึงคิดว่าต้องปรับ LSC เพราะรถไม่ได้วิ่งเร็ว คุณเห็นด้วยหรือไม่?', answer: 'ไม่เห็นด้วยกับเหตุผลนี้ ความเร็วรถต่ำไม่ได้แปลว่าก้านโช้คเคลื่อนช้า อินพุตคมอาจทำให้ล้อและก้านเคลื่อนเร็ว ต้องตรวจยาง ระยะทำงาน และสภาพรถก่อนระบุว่าช่องใดควรมีบทบาท แม้มี HSC ก็ไม่ใช่เหตุผลให้ขับชนรอยต่อเพื่อทดลอง', action: 'บันทึกว่าเป็นแรงกระแทกครั้งเดียวหรือมีเด้งตาม ระบุผิวทาง โหลด และลมยางเดิมให้ร้านตรวจ โดยไม่เพิ่มความเร็วเพื่อทดสอบ' },
      { title: '02 · ลดปุ่มเดียวแล้วนั่งสบายขึ้น แต่เด้งตาม: ซื้อ 3-Way เลยไหม?', prompt: 'สมมติว่าตรวจสภาพรถแล้ว และคู่มือยืนยันว่าเป็น 1-Way แบบปรับร่วม เมื่อเปลี่ยนตามคำแนะนำผู้จูน ความสะเทือนลดลง แต่มีการสั่นต่อหลังผ่านเนินมากขึ้น', answer: 'ยังสรุปไม่ได้ว่าต้องซื้อ 3-Way ตัวอย่างนี้แสดงข้อแลกเปลี่ยนที่อาจเกิดจากการคุมยุบ–ยืดร่วมกัน ควรกลับค่าที่บันทึกไว้ ตรวจว่าสังเกตผลซ้ำได้หรือไม่ และคุยเรื่องสปริง/วาล์ว/ช่องปรับที่ขาดก่อน 2-Way อาจเป็นเครื่องมือที่ตรงโจทย์กว่า แต่ต้องพิสูจน์กับชุดจริง', action: 'ส่งคู่มือช่องปรับและบันทึกก่อน–หลังให้ผู้จูน ถามว่าแยก Compression/Rebound จะช่วยแก้ข้อจำกัดนี้จริงหรือยังมีสาเหตุอื่น' },
      { title: '03 · คนเต็มคันแล้วตึงเหมือนชนอะไร: เพิ่มความแข็งช่วยจบไหม?', prompt: 'รถสมมติเพิ่งลดความสูง ขับคนเดียวไม่ชัด แต่เมื่อมีผู้โดยสารและสัมภาระกลับกระแทกตึงหรือมีเสียง', answer: 'ต้องหยุดการทดลองและตรวจทางกลก่อน จำนวน Way ไม่เพิ่มระยะยุบให้โดยอัตโนมัติ ต้องแยกการเข้า Bump stop การเสียดสี จุดยึด และโหลดเกินขอบเขต การรั้งการยุบด้วยปุ่มอาจเปลี่ยนอาการ แต่ไม่ได้ยืนยันว่าแก้ต้นเหตุหรือปลอดภัยแล้ว', action: 'ให้ผู้ติดตั้งตรวจความสูง ระยะยุบ–ยืดและระยะเคลียร์ตามคู่มือ พร้อมโหลดใช้งานที่ปลอดภัย ไม่ตัด Bump stop หรือเพิ่มคลิกเพื่อกลบเสียง' },
    ].map(item => <div key={item.title} className={styles.case}>
      <h3>{item.title}</h3><p>{item.prompt}</p>
      <details><summary>เปิดคำอธิบายและสิ่งที่ควรทำต่อ</summary><p>{item.answer}</p><p><strong>ข้อมูลที่ใช้ต่อได้:</strong> {item.action}</p></details>
    </div>)}
  </div>;
}
