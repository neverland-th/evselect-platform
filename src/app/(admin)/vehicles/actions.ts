'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function createVehicle(formData: FormData) {
  const make = formData.get('make') as string;
  const model = formData.get('model') as string;
  const year = formData.get('year') as string;
  const variant = formData.get('variant') as string;

  if (!make || !model || !year || !variant) return;

  await prisma.vehicle.create({
    data: { make, model, year, variant },
  });

  revalidatePath('/vehicles');
}

export async function deleteVehicle(id: string) {
  await prisma.vehicle.delete({
    where: { id },
  });
  revalidatePath('/vehicles');
}

export async function seedVehicles() {
  const thaiVehicles = [
    { make: 'BYD', model: 'Atto 3', year: '2022+', variant: 'Standard Range' },
    { make: 'BYD', model: 'Atto 3', year: '2022+', variant: 'Extended Range' },
    { make: 'BYD', model: 'Seal', year: '2023+', variant: 'Dynamic' },
    { make: 'BYD', model: 'Seal', year: '2023+', variant: 'Premium' },
    { make: 'BYD', model: 'Seal', year: '2023+', variant: 'AWD Performance' },
    { make: 'BYD', model: 'Sealion 7', year: '2024+', variant: 'Standard' },
    { make: 'Tesla', model: 'Model 3', year: 'Legacy', variant: 'Standard Range Plus' },
    { make: 'Tesla', model: 'Model 3', year: 'Highland', variant: 'RWD' },
    { make: 'Tesla', model: 'Model 3', year: 'Highland', variant: 'Long Range AWD' },
    { make: 'Tesla', model: 'Model Y', year: '2022+', variant: 'RWD' },
    { make: 'Tesla', model: 'Model Y L', year: '2024+', variant: 'RWD' },
    { make: 'Geely', model: 'EX2', year: '2024+', variant: 'Standard' },
    { make: 'Deepal', model: 'S05', year: '2024+', variant: 'Standard' },
    { make: 'Zeekr', model: 'X', year: '2024+', variant: 'Premium' },
    { make: 'Zeekr', model: '009', year: '2024+', variant: 'Luxury' },
  ];

  for (const v of thaiVehicles) {
    await prisma.vehicle.upsert({
      where: {
        make_model_year_variant: {
          make: v.make,
          model: v.model,
          year: v.year,
          variant: v.variant
        }
      },
      update: {},
      create: v,
    });
  }
  revalidatePath('/vehicles');
}