import Link from 'next/link';
import BrandHomeLink from '@/components/BrandHomeLink';
import InformationPage, { informationLinkStyle } from '@/components/InformationPage';

export const metadata = {
  alternates: { canonical: '/editorial-policy' },
  robots: { index: false, follow: true },
  title: 'นโยบายบรรณาธิการ | EVSELECT',
  description: 'แนวทางจัดทำบทความ EVSELECT: ระบุแหล่งข้อมูล แยกสเปกจากประสบการณ์ เปิดเผยข้อจำกัดของภาพและการทดสอบ พร้อมช่องทางแจ้งแก้ไข',
};

export default function EditorialPolicyPage() {
  return <InformationPage title="แนวทางจัดทำบทความ" intro={<>หลักการของ <BrandHomeLink /> คือให้ผู้อ่านเห็นทั้งข้อมูลที่นำไปใช้ตัดสินใจได้ และสิ่งที่ยังต้องตรวจสอบ ข้อต่อไปนี้เป็นมาตรฐานที่ใช้ในการจัดทำและทบทวนเนื้อหา</>}>
    <section className="space-y-3"><h2 className="text-2xl font-bold text-slate-900">ระบุว่าเรารู้จากไหน</h2><ul className="list-disc space-y-3 pl-6"><li>ข้อมูลสเปกต้องระบุรุ่น ปี รุ่นย่อย ตลาด และแหล่งผู้ผลิตที่เกี่ยวข้อง พร้อมวันที่เมื่อข้อมูลเปลี่ยนได้</li><li>แยกหลักการทั่วไป ข้อมูลผู้ผลิต ความเห็น และประสบการณ์เจ้าของรถ ไม่อ้างว่าทดสอบเองหากไม่มีหลักฐานการทดสอบ</li><li>คะแนนหรือกราฟเปรียบเทียบต้องอธิบายวิธีคิดและข้อจำกัด ค่าประเมินไม่ใช่ผลวัดจากห้องทดสอบ</li><li>ภาพต้องมีที่มาและสิทธิ์ใช้งาน ระบุให้ชัดเมื่อเป็นภาพประกอบ ภาพต่างประเทศ หรือภาพสร้างด้วย AI และไม่ใช้ภาพเพื่อยืนยันการติดตั้งแทนข้อมูลจริง</li></ul></section>
    <section className="space-y-3"><h2 className="text-2xl font-bold text-slate-900">ตรวจจากหน้าที่คนอ่านเห็นจริง</h2><p>ก่อนเผยแพร่หรือแก้ไขเนื้อหา ต้องอ่านทั้งบทความและดูทุกภาพในหน้าแสดงผลจริงบนคอมพิวเตอร์และมือถือ รวมถึงตาราง กราฟ และปุ่มที่เกี่ยวข้อง เพื่อให้หัวเรื่อง บทนำ และเนื้อหาสื่อสารตรงกัน</p><p>หากพบข้อมูลคลาดเคลื่อน ภาพไม่ตรงรุ่น หรือลิงก์เสีย <Link href="/contact" className={informationLinkStyle}>แจ้งทีมงานพร้อมลิงก์บทความ</Link> ได้ การตรวจทานยังมีโอกาสผิดพลาด และเราจะใช้ข้อมูลที่ตรวจสอบได้ประกอบการแก้ไข</p></section>
  </InformationPage>;
}
