'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function updateFitment(batchId: string, vehicleId: string, status: string) {
  await prisma.fitment.upsert({
    where: {
      batchId_vehicleId: { batchId, vehicleId }
    },
    update: { status },
    create: {
      batchId,
      vehicleId,
      status
    }
  });

  revalidatePath('/fitment');
}
