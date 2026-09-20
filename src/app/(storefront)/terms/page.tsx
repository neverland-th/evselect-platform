import Link from 'next/link';
import InformationPage, { informationLinkStyle } from '@/components/InformationPage';

export const metadata = {
  alternates: { canonical: '/terms' },
  robots: { index: false, follow: true },
  title: 'ข้อตกลงและเงื่อนไข | EVSELECT',
  description: 'สถานะการจัดทำข้อตกลงและเงื่อนไข EVSELECT และข้อมูลช่วงเตรียมเปิดตัวสินค้า',
};

export default function TermsPage() {
  return <InformationPage title="ข้อตกลงและเงื่อนไข" intro="รายละเอียดข้อตกลงและเงื่อนไขฉบับเต็มอยู่ระหว่างจัดทำและตรวจสอบ หน้านี้ยังไม่ใช่เงื่อนไขการซื้อขาย">
    <section className="space-y-3"><h2 className="text-2xl font-bold text-slate-900">สถานะช่วงเตรียมเปิดตัว</h2><p>ขณะนี้ยังไม่มีสินค้าพร้อมจำหน่าย และยังไม่เปิดรับคำสั่งซื้อหรือชำระเงิน ดู <Link href="/#launch" className={informationLinkStyle}>ข้อมูลการเตรียมเปิดตัว</Link> หรือ <Link href="/contact" className={informationLinkStyle}>ติดต่อทีมงาน</Link> หากมีคำถาม</p></section>
  </InformationPage>;
}
