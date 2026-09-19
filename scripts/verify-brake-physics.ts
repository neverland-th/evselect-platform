import assert from 'node:assert/strict';
import { descentEnergyMJ, kineticEnergyMJ, splitEnergy } from '../src/lib/brake-physics';
import { brakeComparisonProducts } from '../src/lib/brake-comparison';

const close = (actual: number, expected: number) => assert.ok(Math.abs(actual - expected) < 1e-9, `${actual} != ${expected}`);
// Independent SI example: 2,000 kg at 20 m/s has 400,000 J of translational energy.
close(kineticEnergyMJ(2000, 72), 0.4);
close(kineticEnergyMJ(2000, 72, 36), 0.3);
close(kineticEnergyMJ(2000, 72, 72), 0);
close(kineticEnergyMJ(4000, 72), 0.8);
close(kineticEnergyMJ(2000, 144), 1.6);
close(kineticEnergyMJ(2200, 120) / kineticEnergyMJ(2200, 100), 1.44);
close(descentEnergyMJ(2200, 1000), 21.582);
close(descentEnergyMJ(2200, 0), 0);
close(descentEnergyMJ(2200, 1000) / kineticEnergyMJ(2200, 100), 25.42752);
for (const share of [0, 20, 50, 80, 100]) {
  const split = splitEnergy(21.582, share);
  close(split.frictionMJ + split.regenerativeMJ, 21.582);
  assert.ok(split.frictionMJ >= 0 && split.regenerativeMJ >= 0);
}
assert.deepEqual(splitEnergy(1, 100), { regenerativeMJ: 1, frictionMJ: 0 });
assert.deepEqual(splitEnergy(1, 0), { regenerativeMJ: 0, frictionMJ: 1 });
for (const run of [() => kineticEnergyMJ(0, 100), () => kineticEnergyMJ(2000, 20, 30), () => kineticEnergyMJ(NaN, 100), () => descentEnergyMJ(2000, -1), () => splitEnergy(1, 101)]) assert.throws(run, RangeError);
console.log('Brake physics verified: SI anchors, speed squared, mass, descent, energy conservation and invalid inputs.');
for (const kit of brakeComparisonProducts) {
  assert.ok(kit.pistons >= 6 && kit.diameterMm >= 375 && kit.diameterMm <= 390, kit.name);
  assert.ok(kit.part && kit.source.startsWith('https://') && kit.contents.includes('จานคู่'));
}
console.log('Referenced kits have traceable sources and meet the requested rotor/piston scope.');
