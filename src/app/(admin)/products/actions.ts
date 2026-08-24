'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createProduct(formData: FormData) {
  const title = formData.get('title') as string;
  const sku = formData.get('sku') as string;
  const categoryId = formData.get('categoryId') as string;
  const description = formData.get('description') as string;

  if (!title || !sku || !categoryId) return;

  const product = await prisma.product.create({
    data: { title, sku, categoryId, description },
  });

  redirect(`/products/${product.id}`);
}

export async function createBatch(productId: string, formData: FormData) {
  const supplierName = formData.get('supplierName') as string;
  const supplierUrl = formData.get('supplierUrl') as string;
  const cost = parseFloat(formData.get('cost') as string);
  const moq = parseInt(formData.get('moq') as string, 10);

  if (!supplierName) return;

  await prisma.batch.create({
    data: {
      productId,
      supplierName,
      supplierUrl: supplierUrl || null,
      cost: isNaN(cost) ? null : cost,
      moq: isNaN(moq) ? null : moq,
      status: 'SHORTLISTED'
    }
  });

  revalidatePath(`/products/${productId}`);
}

export async function updateBatchStatus(batchId: string, status: string, productId: string) {
  await prisma.batch.update({
    where: { id: batchId },
    data: { status }
  });
  revalidatePath(`/products/${productId}`);
}