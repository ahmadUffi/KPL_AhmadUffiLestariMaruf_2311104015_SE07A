const assert = require("assert");
const { CariTandaBilangan } = require("../app");

describe("CariTandaBilangan", () => {
  it("Mengembalikan 'Negatif' untuk angka negatif", () => {
    assert.strictEqual(CariTandaBilangan(-10), "Negatif");
  });

  it("Mengembalikan 'Positif' untuk angka positif", () => {
    assert.strictEqual(CariTandaBilangan(5), "Positif");
  });

  it("Mengembalikkan 'Nol' untuk 0", () => {
    assert.strictEqual(CariTandaBilangan(0), "Nol");
  });
});
