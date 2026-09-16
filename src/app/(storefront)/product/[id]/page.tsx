import { notFound } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowLeft,
  CheckCircle2,
  MessageCircle,
  Package,
  Rocket,
  ShieldCheck,
} from 'lucide-react';

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = await prisma.product.findUnique({ where: { id } });

  if (!product) return { title: 'ไม่พบสินค้า | EVSELECT' };

  return {
    title: `${product.title} | EVSELECT`,
    description: product.description || `ดูรายละเอียดและข้อมูลรุ่นรถสำหรับ ${product.title}`,
  };
}

const verifiedStatuses = new Set(['PASSED', 'PASSED_WITH_MODIFICATION']);
const statusLabel: Record<string, string> = {
  PASSED: 'ตรวจผ่าน',
  PASSED_WITH_MODIFICATION: 'ใช้ได้เมื่อปรับตามเงื่อนไข',
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = await prisma.product.findUnique({
    where: { id },
    include: {
      category: true,
      batches: {
        include: { fitments: { include: { vehicle: true } } },
      },
    },
  });

  if (!product) notFound();

  const fitments = product.batches.flatMap((batch) => batch.fitments);
  const uniqueFitments = Array.from(
    new Map(
      fitments.map((fitment) => [
        `${fitment.vehicle.make}-${fitment.vehicle.model}-${fitment.vehicle.year}-${fitment.vehicle.variant}`,
        fitment,
      ]),
    ).values(),
  );
  const verifiedFitments = uniqueFitments.filter((fitment) => verifiedStatuses.has(fitment.status));
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 md:py-16 lg:px-8">
        <Link href="/#launch" className="mb-8 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-slate-600 hover:text-lime-700">
          <ArrowLeft className="h-4 w-4" /> กลับไปดูสถานะการเปิดตัว
        </Link>

        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <div className="flex min-h-72 items-center justify-center rounded-3xl border border-slate-200 bg-slate-50 p-10 text-center lg:sticky lg:top-28 lg:h-[32rem]">
            <div>
              <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-lime-100 text-lime-800">
                <Package className="h-10 w-10" />
              </span>
              <p className="mt-6 font-semibold text-slate-900">กำลังจัดเตรียมข้อมูลสำหรับการเปิดตัว</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">ภาพ รายละเอียด ราคา และวันเปิดจำหน่ายจะแสดงเมื่อข้อมูลพร้อม</p>
            </div>
          </div>

          <div>
            <nav className="flex flex-wrap items-center gap-2 text-sm text-slate-500" aria-label="เส้นทางหน้า">
              <Link href="/" className="hover:text-lime-700">หน้าแรก</Link>
              <span aria-hidden="true">/</span>
              <span>{product.category.name}</span>
            </nav>

            <p className="mt-7 text-sm font-semibold text-lime-800">SKU: {product.sku}</p>
            <h1 className="mt-3 font-bold text-slate-950">{product.title}</h1>
            {product.description && <p className="mt-5 text-base leading-relaxed text-slate-600">{product.description}</p>}

            <div className="mt-8 rounded-2xl border border-lime-200 bg-lime-50 p-5">
              <p className="inline-flex items-center gap-2 text-sm font-semibold text-lime-800"><Rocket className="h-4 w-4" /> สถานะ Pre-launch</p>
              <p className="mt-2 text-lg font-bold text-slate-950">สินค้านี้ยังไม่เปิดจำหน่าย</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">EVSELECT จะเปิดรายละเอียดราคา รุ่นรถที่รองรับ และข้อจำกัด เมื่อข้อมูลพร้อมให้คุณตัดสินใจ</p>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <Link href="/#launch" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-3 font-semibold text-white hover:bg-slate-800">
                <Rocket className="h-5 w-5" /> ดูสถานะการเปิดตัว
              </Link>
              <a href="https://m.me/evselects" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-blue-200 bg-blue-50 px-5 py-3 font-semibold text-blue-700 hover:bg-blue-100">
                <MessageCircle className="h-5 w-5" /> บอกรุ่นรถที่คุณใช้
              </a>
            </div>

            <section className="mt-10 border-t border-slate-200 pt-8">
              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-1 h-6 w-6 shrink-0 text-lime-700" />
                <div>
                  <h2 className="font-bold">รุ่นรถที่มีผลตรวจผ่านในระบบ</h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">ข้อมูลนี้ยังไม่ใช่ประกาศเปิดขาย กรุณาตรวจรุ่น ปี รุ่นย่อย และตำแหน่งติดตั้งอีกครั้งเมื่อสินค้าเปิดตัว</p>
                </div>
              </div>

              {verifiedFitments.length > 0 && (
                <div className="mt-6 space-y-3">
                  {verifiedFitments.map((fitment) => (
                    <div key={fitment.id} className="flex items-start justify-between gap-4 rounded-xl border border-lime-200 bg-lime-50 p-4">
                      <div>
                        <p className="font-semibold text-slate-900">{fitment.vehicle.year} {fitment.vehicle.make} {fitment.vehicle.model}</p>
                        <p className="mt-1 text-sm text-slate-600">{fitment.vehicle.variant}</p>
                      </div>
                      <span className="inline-flex shrink-0 items-center gap-1 text-xs font-semibold text-lime-800"><CheckCircle2 className="h-4 w-4" /> {statusLabel[fitment.status] || fitment.status}</span>
                    </div>
                  ))}
                </div>
              )}

              {verifiedFitments.length === 0 && (
                <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-relaxed text-amber-900">
                  ยังไม่มีข้อมูลรุ่นรถที่พร้อมแสดงในหน้านี้ คุณส่งรุ่น ปี และรุ่นย่อยให้ทีม EVSELECT ใช้ประกอบการเตรียมเปิดตัวได้
                </div>
              )}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
