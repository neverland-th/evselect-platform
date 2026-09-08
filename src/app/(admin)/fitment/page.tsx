import { prisma } from '@/lib/prisma';
import { updateFitment } from './actions';

const FITMENT_STATUSES = ['UNVERIFIED', 'TEST_SCHEDULED', 'PASSED', 'PASSED_WITH_MODIFICATION', 'FAILED', 'RETEST_REQUIRED'];

export default async function FitmentPage() {
  type AdminBatch = Awaited<ReturnType<typeof prisma.batch.findMany<{
    where: { status: { in: ['SAMPLE_RECEIVED', 'ACTIVE', 'RETEST_REQUIRED'] } };
    include: { product: true; fitments: true };
  }>>>[number];

  type AdminVehicle = Awaited<ReturnType<typeof prisma.vehicle.findMany>>[number];

  let activeBatches: AdminBatch[] = [];
  let vehicles: AdminVehicle[] = [];

  try {
    activeBatches = await prisma.batch.findMany({
      where: { status: { in: ['SAMPLE_RECEIVED', 'ACTIVE', 'RETEST_REQUIRED'] } },
      include: {
        product: true,
        fitments: true
      },
      orderBy: { createdAt: 'desc' }
    });

    vehicles = await prisma.vehicle.findMany({
      orderBy: [{ make: 'asc' }, { model: 'asc' }, { year: 'asc' }, { variant: 'asc' }]
    });
  } catch {
    activeBatches = [];
    vehicles = [];
  }

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Fitment Matrix</h1>
        <p className="text-gray-500">Track and verify vehicle compatibility for received samples.</p>
      </div>

      <div className="space-y-8">
        {activeBatches.map(batch => (
          <div key={batch.id} className="bg-white rounded-lg shadow overflow-hidden border border-gray-200">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex justify-between items-center">
              <div>
                <h2 className="text-lg font-bold">{batch.product.title} (SKU: {batch.product.sku})</h2>
                <p className="text-sm text-gray-600">Supplier: {batch.supplierName} | Batch Status: {batch.status}</p>
              </div>
            </div>
            <div className="p-0">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-white">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Make</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Model / Variant</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Fitment Status</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-100">
                  {vehicles.map(vehicle => {
                    const fitment = batch.fitments.find(f => f.vehicleId === vehicle.id);
                    const currentStatus = fitment?.status || 'UNVERIFIED';
                    
                    return (
                      <tr key={vehicle.id} className={currentStatus === 'PASSED' ? 'bg-green-50' : currentStatus === 'FAILED' ? 'bg-red-50' : ''}>
                        <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900">{vehicle.make}</td>
                        <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-700">{vehicle.model} ({vehicle.year}) - <span className="font-medium text-blue-700">{vehicle.variant}</span></td>
                        <td className="px-6 py-2 whitespace-nowrap text-sm">
                          <form action={async (formData) => {
                            'use server';
                            const status = formData.get('status') as string;
                            await updateFitment(batch.id, vehicle.id, status);
                          }}>
                              <div className="flex items-center gap-2">
                                <select 
                                  name="status"
                                  defaultValue={currentStatus}
                                  className="border border-gray-300 rounded-md p-1.5 text-sm bg-white"
                                >
                                  {FITMENT_STATUSES.map(s => <option key={s} value={s}>{s.replace(/_/g, ' ')}</option>)}
                                </select>
                                <button type="submit" className="px-2 py-1 bg-blue-50 text-blue-600 rounded text-xs font-semibold hover:bg-blue-100">
                                  Save
                                </button>
                              </div>
                          </form>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        ))}
        {activeBatches.length === 0 && (
          <p className="text-gray-500 bg-white p-6 rounded-lg shadow text-center">
            No batches ready for testing. Receive a sample in the Products tab first.
          </p>
        )}
      </div>
    </div>
  );
}