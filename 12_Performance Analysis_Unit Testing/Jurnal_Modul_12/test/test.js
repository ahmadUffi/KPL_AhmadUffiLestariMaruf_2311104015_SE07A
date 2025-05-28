const assert = require("assert");
const { CariNilaiPangkat } = require("../app");

describe("CariNilaiPangkat", () => {
  it("should return 1 if b is 0", () => {
    assert.strictEqual(CariNilaiPangkat(5, 0), 1);
  });

  it("should return -1 if b is negative", () => {
    assert.strictEqual(CariNilaiPangkat(5, -2), -1);
  });

  it("should return -2 if b > 10 or a > 100", () => {
    assert.strictEqual(CariNilaiPangkat(5, 11), -2);
    assert.strictEqual(CariNilaiPangkat(101, 2), -2);
  });

  it("should return -3 if result exceeds MAX_SAFE_INTEGER", () => {
    assert.strictEqual(CariNilaiPangkat(9, 30), -3);
  });

  it("should return correct power if all is valid", () => {
    assert.strictEqual(CariNilaiPangkat(2, 3), 8);
  });
});
