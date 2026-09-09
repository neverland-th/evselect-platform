import { prisma } from '@/lib/prisma';
import { createVehicle, deleteVehicle, seedVehicles } from './actions';

export default async function VehiclesPage() {
  let vehicles: { id: string; make: string; model: string; year: string; variant: string }[] = [];
  try {
    vehicles = await prisma.vehicle.findMany({
      orderBy: [{ make: 'asc' }, { model: 'asc' }, { year: 'asc' }, { variant: 'asc' }]
    });
  } catch {
    vehicles = [];
  }

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Vehicle Taxonomy</h1>
        <form action={seedVehicles}>
          <button type="submit" className="bg-gray-100 text-gray-800 border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-200">
            Seed Thai Market EVs
          </button>
        </form>
      </div>

      <div className="bg-white rounded-lg shadow p-6 mb-8 border border-gray-200">
        <h2 className="text-lg font-semibold mb-4">Add New Vehicle Variant</h2>
        <form action={createVehicle} className="flex gap-4 items-end">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">Make</label>
            <input type="text" name="make" required className="w-full border border-gray-300 rounded-md p-2" placeholder="e.g. Tesla" />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">Model</label>
            <input type="text" name="model" required className="w-full border border-gray-300 rounded-md p-2" placeholder="e.g. Model 3" />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">Year</label>
            <input type="text" name="year" required className="w-full border border-gray-300 rounded-md p-2" placeholder="e.g. Highland" />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">Variant</label>
            <input type="text" name="variant" required className="w-full border border-gray-300 rounded-md p-2" placeholder="e.g. Long Range AWD" />
          </div>
          <button type="submit" className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
            Save
          </button>
        </form>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Make</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Model</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Year/Gen</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Thai Variant</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {vehicles.map((v) => (
              <tr key={v.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{v.make}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{v.model}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{v.year}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">{v.variant}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <form action={async () => {
                    'use server';
                    await deleteVehicle(v.id);
                  }}>
                    <button type="submit" className="text-red-600 hover:text-red-900">Delete</button>
                  </form>
                </td>
              </tr>
            ))}
            {vehicles.length === 0 && (
              <tr>
                <td colSpan={5} className="px-6 py-4 text-center text-sm text-gray-500">
                  No vehicles found. Click "Seed Thai Market EVs" to populate.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
