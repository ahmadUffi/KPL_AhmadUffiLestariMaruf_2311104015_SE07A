export function akarPersamaanKuadrat([a, b, c]) {
  const diskriminan = b * b - 4 * a * c;
  if (diskriminan < 0) return [];
  const sqrtD = Math.sqrt(diskriminan);
  const x1 = (-b + sqrtD) / (2 * a);
  const x2 = (-b - sqrtD) / (2 * a);
  return [x1, x2];
}

export function hasilKuadrat([a, b]) {
  return [a * a, 2 * a * b, b * b];
}
