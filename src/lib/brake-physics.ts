/** Educational energy balance, not a brake-temperature or stopping-distance model. */
export function kineticEnergyMJ(massKg: number, initialKph: number, finalKph = 0): number {
  if (![massKg, initialKph, finalKph].every(Number.isFinite) || massKg <= 0 || finalKph < 0 || initialKph < finalKph) {
    throw new RangeError('Expected positive mass and initial speed >= final speed >= 0');
  }
  return 0.5 * massKg * ((initialKph / 3.6) ** 2 - (finalKph / 3.6) ** 2) / 1_000_000;
}

export function descentEnergyMJ(massKg: number, heightMetres: number): number {
  if (![massKg, heightMetres].every(Number.isFinite) || massKg <= 0 || heightMetres < 0) {
    throw new RangeError('Expected positive mass and non-negative vertical descent');
  }
  return massKg * 9.81 * heightMetres / 1_000_000;
}

export function splitEnergy(totalMJ: number, regenerativePercent: number) {
  if (![totalMJ, regenerativePercent].every(Number.isFinite) || totalMJ < 0 || regenerativePercent < 0 || regenerativePercent > 100) {
    throw new RangeError('Expected non-negative energy and regeneration between 0 and 100 percent');
  }
  const regenerativeMJ = totalMJ * (regenerativePercent / 100);
  return { regenerativeMJ, frictionMJ: totalMJ - regenerativeMJ };
}
