export function FPB(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

export function KPK(a, b) {
  return (a * b) / FPB(a, b);
}

export function Turunan(coefficients) {
  const turunan = coefficients
    .slice(0, -1)
    .map((coef, index) => {
      const pangkat = coefficients.length - index - 1;
      const hasil = coef * pangkat;
      if (hasil === 0) return null;
      if (pangkat - 1 === 0) return `${hasil}`;
      else if (pangkat - 1 === 1) return `${hasil}x`;
      return `${hasil}x^${pangkat - 1}`;
    })
    .filter(Boolean);
  return turunan.join(" + ").replace(/\+\s\-/g, "- ");
}

export function Integral(coefficients) {
  const integral = coefficients
    .map((coef, index) => {
      const pangkat = coefficients.length - index;
      const hasil = coef / pangkat;
      if (hasil === 0) return null;
      if (pangkat === 1) return `${hasil}x`;
      return `${hasil}x^${pangkat}`;
    })
    .filter(Boolean);
  return integral.join(" + ").replace(/\+\s\-/g, "- ") + " + C";
}
