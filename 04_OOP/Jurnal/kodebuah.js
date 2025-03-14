class KodeBuah {
  constructor() {
    this.tableBuah = {
      apel: "A00",
      aprikot: "B00",
      alpukat: "C00",
      pisang: "D00",
      paprika: "E00",
      kurma: "K00",
      durian: "L00",
      anggur: "M00",
      melon: "N00",
      semangka: "O00",
    };
  }

  getKodeBuah(namaBuah) {
    return this.tableBuah[namaBuah.toLowerCase()] || "kode tidak ditemukan";
  }
}

const kodeBuah = new KodeBuah();

console.log(kodeBuah.getKodeBuah("apel"));
console.log(kodeBuah.getKodeBuah("jeruk"));
console.log(kodeBuah.getKodeBuah("melon"));
