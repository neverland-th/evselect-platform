import { createHmac } from 'node:crypto';

export const DAILY_LIMIT = 5;
type QuotaRow = { used: number; visitors: string[] };

export function quotaIdentity(ip: string, secret: string, now = Date.now()) {
  const day = new Date(now + 7 * 60 * 60 * 1000).toISOString().slice(0, 10);
  return { day, visitor: createHmac('sha256', secret).update(day + ':' + ip).digest('hex') };
}

export function quotaResult(row: QuotaRow | undefined, visitor: string) {
  const remaining = Math.max(0, DAILY_LIMIT - (row?.used ?? 0));
  const alreadyUsed = row?.visitors.includes(visitor) ?? false;
  const error = alreadyUsed ? 'เครือข่ายนี้ใช้สิทธิ์ทดลองวันนี้ครบแล้ว กลับมาลองใหม่พรุ่งนี้ได้ครับ'
    : !remaining ? 'โควตาทดลองของวันนี้ครบแล้ว กลับมาลองใหม่พรุ่งนี้ได้ครับ' : '';
  return { allowed: !error, remaining, error, message: `ทดลอง 1 ครั้งต่อเครือข่าย/วัน · เหลือโควตารวม ${remaining} จาก ${DAILY_LIMIT} ครั้งวันนี้` };
}

export async function readQuota(day: string, visitor: string) {
  const { prisma } = await import('@/lib/prisma');
  const rows = await prisma.$queryRaw<QuotaRow[]>`SELECT "used", "visitors" FROM "VehicleStyleQuota" WHERE "day" = ${day}`;
  return quotaResult(rows[0], visitor);
}

export async function reserveQuota(day: string, visitor: string) {
  const { prisma } = await import('@/lib/prisma');
  // One atomic row update enforces both limits across processes and deployments.
  // Reserve before contacting the paid provider; ambiguous failures are not retried/refunded.
  const rows = await prisma.$queryRaw<{ used: number }[]>`
    INSERT INTO "VehicleStyleQuota" ("day", "used", "visitors") VALUES (${day}, 1, ARRAY[${visitor}]::text[])
    ON CONFLICT ("day") DO UPDATE SET "used" = "VehicleStyleQuota"."used" + 1,
      "visitors" = array_append("VehicleStyleQuota"."visitors", ${visitor})
    WHERE "VehicleStyleQuota"."used" < ${DAILY_LIMIT} AND NOT (${visitor} = ANY("VehicleStyleQuota"."visitors"))
    RETURNING "used"`;
  if (!rows.length) return { reserved: false, ...await readQuota(day, visitor) };
  const cutoff = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);
  await prisma.$executeRaw`DELETE FROM "VehicleStyleQuota" WHERE "day" < ${cutoff}`;
  return { reserved: true, remaining: DAILY_LIMIT - rows[0].used, error: '' };
}
