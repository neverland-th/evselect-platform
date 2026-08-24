import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  const activeBatches = await prisma.batch.findMany({
    where: { status: 'ACTIVE' },
    include: {
      product: { include: { category: true } },
      fitments: {
        where: { status: 'PASSED' },
        include: { vehicle: true }
      }
    }
  });

  const headers = ['SKU', 'Name', 'Description', 'Categories', 'Meta: fitment_vehicles'];
  
  const rows = activeBatches.map(batch => {
    const p = batch.product;
    const compatibleVehicles = batch.fitments
      .map(f => `${f.vehicle.make} ${f.vehicle.model} ${f.vehicle.variant} (${f.vehicle.year})`)
      .join(', ');

    return [
      p.sku,
      `"${p.title.replace(/"/g, '""')}"`,
      `"${(p.description || '').replace(/"/g, '""')}"`,
      p.category.wooId || p.category.name,
      `"${compatibleVehicles}"`
    ].join(',');
  });

  const csv = [headers.join(','), ...rows].join('\n');

  return new NextResponse(csv, {
    headers: {
      'Content-Type': 'text/csv',
      'Content-Disposition': 'attachment; filename="woo_export.csv"',
    },
  });
}