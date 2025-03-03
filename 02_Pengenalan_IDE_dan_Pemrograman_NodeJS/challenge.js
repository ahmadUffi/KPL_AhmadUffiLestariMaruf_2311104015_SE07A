const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukkan jumlah barang yang dibeli: ", (jumlahBarang) => {
  jumlahBarang = parseInt(jumlahBarang);
  let barang = [];
  let totalHarga = 0;

  const inputHarga = (index) => {
    if (index < jumlahBarang) {
      rl.question(`Masukkan harga barang ke-${index + 1}: `, (harga) => {
        harga = parseFloat(harga);
        barang.push(harga);
        totalHarga += harga;
        inputHarga(index + 1);
      });
    } else {
      let kategoriDiskon = "";
      if (totalHarga > 100000) {
        kategoriDiskon = "Diskon Besar";
      } else if (totalHarga >= 50000 && totalHarga <= 100000) {
        kategoriDiskon = "Diskon Sedang";
      } else {
        kategoriDiskon = "Tidak Ada Diskon";
      }

      console.log("\nDetail Pembelian:");
      console.log(`Total Harga: Rp${totalHarga}`);
      console.log(`Jumlah Barang: ${jumlahBarang}`);
      console.log(`Kategori Diskon: ${kategoriDiskon}`);
      console.log("Detail Barang:");
      barang.forEach((harga, index) => {
        console.log(`Barang ${index + 1}: Rp${harga}`);
      });
      rl.close();
    }
  };

  inputHarga(0);
});
