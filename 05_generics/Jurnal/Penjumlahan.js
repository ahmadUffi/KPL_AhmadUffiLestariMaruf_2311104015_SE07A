class Penjumlahan {
  constructor() {}

  penjumlahanTigaAngka(a, b, c) {
    if (
      typeof a !== "number" ||
      typeof b !== "number" ||
      typeof c !== "number"
    ) {
      throw new Error("Tipe data harus number");
    }

    return a + b + c;
  }
}

const penjumlahan = new Penjumlahan();
//2311104015
console.log(penjumlahan.penjumlahanTigaAngka(23, 11, 10)); // Output: 44

class SimpleDatabase {
  constructor() {
    this.storedDatas = [];
    this.inpuDates = [];
  }

  addData(data) {
    this.storedDatas.push(data);
    this.inpuDates.push(new Date().toUTCString());
  }

  printAllDatas() {
    this.storedDatas.forEach((data, index) => {
      console.log(`Data ke-${index + 1}: ${data}`);
      console.log(`Tanggal Input: ${this.inpuDates[index]}`);
      console.log("-------------------------");
    });
  }
}

const database = new SimpleDatabase();
database.addData(23);
database.addData(11);
database.addData(10);

// Memanggil method PrintAllData()
database.printAllDatas();
