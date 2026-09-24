import assert from 'node:assert/strict';
import { randomUUID } from 'node:crypto';
import { loadEnvConfig } from '@next/env';

async function main() {
  loadEnvConfig(process.cwd());
  const { prisma } = await import('../src/lib/prisma');
  try {
    const counts = await prisma.$transaction([
      prisma.category.count(), prisma.vehicle.count(), prisma.product.count(), prisma.batch.count(), prisma.fitment.count(),
    ]);
    const relations = await prisma.fitment.findMany({ include: { vehicle: true, batch: { include: { product: { include: { category: true } } } } } });
    assert.equal(relations.length, counts[4]);
    for (const fitment of relations) {
      assert.equal(fitment.vehicle.id, fitment.vehicleId);
      assert.equal(fitment.batch.id, fitment.batchId);
      assert.equal(fitment.batch.product.id, fitment.batch.productId);
      assert.equal(fitment.batch.product.category.id, fitment.batch.product.categoryId);
      assert(fitment.createdAt instanceof Date);
    }
    const probeId = `prisma-probe-${randomUUID()}`;
    const rollback = new Error('Intentional database verification rollback');
    try {
      await prisma.$transaction(async transaction => {
        await transaction.category.create({ data: { id: probeId, name: probeId } });
        assert.equal((await transaction.category.findUniqueOrThrow({ where: { id: probeId } })).id, probeId);
        throw rollback;
      }, { maxWait: 15_000, timeout: 30_000 });
    } catch (error) {
      if (error !== rollback) throw error;
    }
    assert.equal(await prisma.category.findUnique({ where: { id: probeId } }), null);
    console.log(JSON.stringify({ counts, joinedFitments: relations.length, prismaWriteReadRollbackVerified: true }));
  } finally {
    await prisma.$disconnect();
  }
}

main().catch(error => {
  console.error(`Database verification failed (${error?.code || error?.name || 'unknown'}).`);
  const message = String(error?.message ?? '').replace(/postgres(?:ql)?:\/\/[^\s]+/gi, '[redacted database URL]');
  console.error(message);
  process.exitCode = 1;
});
