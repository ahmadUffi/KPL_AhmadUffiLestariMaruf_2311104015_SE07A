import {
  akarPersamaanKuadrat,
  hasilKuadrat,
} from "./aljbabarLibraries/index.js";

const akar = akarPersamaanKuadrat([1, -3, -10]);
console.log("Akar-akar dari x² - 3x - 10:", akar);

const kuadrat = hasilKuadrat([2, -3]);
console.log("Hasil kuadrat dari 2x - 3:", kuadrat);
