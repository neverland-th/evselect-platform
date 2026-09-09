'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function createCategory(formData: FormData) {
  const name = formData.get('name') as string;
  const shopeeId = formData.get('shopeeId') as string;
  const wooId = formData.get('wooId') as string;

  if (!name) return;

  await prisma.category.create({
    data: {
      name,
      shopeeId: shopeeId || null,
      wooId: wooId || null,
    },
  });

  revalidatePath('/categories');
}

export async function deleteCategory(id: string) {
  await prisma.category.delete({
    where: { id },
  });
  revalidatePath('/categories');
}
