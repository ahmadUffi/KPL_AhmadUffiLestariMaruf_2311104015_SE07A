// Fungsi assertion untuk defensive programming
// Digunakan untuk memastikan kondisi tertentu sebelum eksekusi kode
function assert(condition, message) {
  if (!condition) {
    throw new Error(`Assertion failed: ${message}`);
  }
}

// Generics Manual (Memastikan input adalah angka)
// Fungsi ini memastikan bahwa nilai yang diterima adalah angka valid
function ensureNumber(value, variableName) {
  const number = parseFloat(value);
  if (isNaN(number)) {
    throw new Error(
      `Type Error: ${variableName} harus berupa angka yang valid.`
    );
  }
  return number;
}
export { assert, ensureNumber };
