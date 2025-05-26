import { FPB, KPK, Turunan, Integral } from "./matematikaLibraries/index.js";

console.log("FPB dari 60 dan 45:", FPB(60, 45));
console.log("KPK dari 12 dan 8:", KPK(12, 8));

const p1 = [1, 4, -12, 9];
console.log("Turunan dari x³ + 4x² -12x + 9:", Turunan(p1));

const p2 = [4, 6, -12, 9];
console.log("Integral dari 4x³ + 6x² -12x + 9:", Integral(p2));
