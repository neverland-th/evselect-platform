import Link from 'next/link';
import BrandHomeLink from '@/components/BrandHomeLink';
import InformationPage, { informationLinkStyle } from '@/components/InformationPage';

export const metadata = {
  alternates: { canonical: '/about' },
  robots: { index: false, follow: true },
  title: 'เกี่ยวกับเรา | EVSELECT',
  description: 'รู้จัก EVSELECT: บทความรถ EV และแนวทางเลือกอุปกรณ์เสริมสำหรับผู้ใช้รถในไทย พร้อมสถานะการเตรียมเปิดตัวสินค้า',
};

export default function AboutPage() {
  return <InformationPage title="เกี่ยวกับเรา" intro={<><BrandHomeLink /> รวบรวมบทความรถยนต์ไฟฟ้า ความรู้เรื่องช่วงล่าง และแนวทางเลือกอุปกรณ์เสริมสำหรับผู้ใช้รถ EV ในไทย เพื่อช่วยให้คุณตั้งคำถามและตรวจข้อมูลได้ก่อนตัดสินใจ</>}>
    <section className="space-y-3"><h2 className="text-2xl font-bold text-slate-900">เปิดความรู้ก่อน เปิดขายเมื่อข้อมูลพร้อม</h2><p>ตอนนี้ยังไม่มีสินค้าพร้อมจำหน่าย และยังไม่เปิดรับคำสั่งซื้อหรือชำระเงิน คุณอ่านบทความได้ และบอกรุ่นรถหรืออุปกรณ์ที่สนใจผ่าน <Link href="/contact" className={informationLinkStyle}>ช่องทางติดต่อทีมงาน</Link></p></section>
    <section className="space-y-3"><h2 className="text-2xl font-bold text-slate-900">อ่านข้อมูลพร้อมที่มาและข้อจำกัด</h2><p>หลักการของเราคือแยกข้อมูลผู้ผลิต ความรู้ทั่วไป และประสบการณ์เจ้าของรถให้ชัดเจน สเปกหรือภาพจากต่างประเทศไม่ยืนยันว่าอุปกรณ์นั้นติดตั้งกับรถสเปกไทยได้ ดูรายละเอียดที่ <Link href="/editorial-policy" className={informationLinkStyle}>แนวทางจัดทำและแก้ไขบทความ</Link></p></section>
  </InformationPage>;
}
