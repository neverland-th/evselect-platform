import BrandHomeLink from '@/components/BrandHomeLink';
import InformationPage, { informationLinkStyle } from '@/components/InformationPage';

export const metadata = {
  alternates: { canonical: '/contact' },
  robots: { index: false, follow: true },
  title: 'ติดต่อเรา | EVSELECT',
  description: 'ติดต่อทีม EVSELECT ผ่าน Facebook เพื่อถามเกี่ยวกับบทความ แจ้งข้อมูลที่ควรแก้ไข หรือบอกรุ่นรถและอุปกรณ์ที่สนใจ',
};

export default function ContactPage() {
  return <InformationPage title="ติดต่อทีมงาน" intro={<>ถามเรื่องบทความ แจ้งข้อมูลที่ควรแก้ไข หรือบอกรุ่นรถและอุปกรณ์ที่คุณสนใจกับทีม <BrandHomeLink /> ได้ผ่าน Facebook</>}>
    <section className="space-y-4"><h2 className="text-2xl font-bold text-slate-900">คุยกับเราทาง Facebook</h2><p><a href="https://m.me/evselects" className={informationLinkStyle}>เปิดแชทกับทีมงาน</a> หรือ <a href="https://www.facebook.com/evselects" className={informationLinkStyle}>ดูเพจและข่าวเปิดตัว</a> ลิงก์ทั้งสองเปิดบริการของ Facebook ซึ่งอาจขอให้คุณเข้าสู่ระบบ</p><p>ถ้าถามเรื่องรถ ระบุรุ่น ปี รุ่นย่อย และสิ่งที่อยากทราบ ถ้าแจ้งแก้บทความ แนบลิงก์หน้าเว็บกับข้อความหรือภาพที่พบปัญหา จะช่วยให้ตรวจได้ตรงจุด</p></section>
    <section className="space-y-3"><h2 className="text-2xl font-bold text-slate-900">ยังไม่เปิดรับคำสั่งซื้อ</h2><p>ขณะนี้ยังไม่มีสินค้าพร้อมจำหน่าย และยังไม่เปิดรับคำสั่งซื้อหรือชำระเงิน การส่งคำถามหรือบอกรุ่นรถยังไม่ใช่การจองสินค้า</p></section>
  </InformationPage>;
}
