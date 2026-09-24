import { timingSafeEqual } from 'node:crypto';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  const secret = process.env.DATABASE_HEALTH_TOKEN;
  const authorization = request.headers.get('authorization') ?? '';
  const expected = secret ? `Bearer ${secret}` : '';
  const suppliedBytes = Buffer.from(authorization);
  const expectedBytes = Buffer.from(expected);

  if (!secret || suppliedBytes.length !== expectedBytes.length || !timingSafeEqual(suppliedBytes, expectedBytes)) {
    return new Response('Not Found', { status: 404, headers: { 'Cache-Control': 'no-store' } });
  }

  try {
    const { prisma } = await import('@/lib/prisma');
    const [categories, vehicles, products, batches, fitments] = await prisma.$transaction([
      prisma.category.count(), prisma.vehicle.count(), prisma.product.count(), prisma.batch.count(), prisma.fitment.count(),
    ]);
    return Response.json({ status: 'ok', counts: { categories, vehicles, products, batches, fitments } }, {
      headers: { 'Cache-Control': 'no-store' },
    });
  } catch (error) {
    const code = error && typeof error === 'object' && 'code' in error ? String(error.code) : 'unknown';
    const message = error instanceof Error ? error.message.replace(/postgres(?:ql)?:\/\/[^\s]+/gi, '[redacted database URL]') : 'Unknown database error';
    console.error('Database health check failed', { code, message });
    return Response.json({ status: 'unavailable' }, { status: 503, headers: { 'Cache-Control': 'no-store' } });
  }
}
