class PosisiKarakterGame {
  constructor() {
    this.state = "Berdiri"; // State awal
    this.transitions = {
      Berdiri: { TombolS: "Jongkok", TombolW: "Terbang" },
      Jongkok: { TombolW: "Berdiri", TombolS: "Tengkurap" },
      Tengkurap: { TombolW: "Jongkok" },
      Terbang: { TombolS: "Berdiri", TombolX: "Terbang" },
    };
  }

  tekanTombol(tombol) {
    console.log(`tombol ${tombol} ditekan`);
    const nextState = this.transitions[this.state][tombol];
    if (nextState) {
      this.state = nextState;
      console.log(
        `Tombol arah ${tombol} ditekan, karakter sekarang dalam posisi: ${this.state}`
      );
    } else {
      console.log(
        `Tombol arah ${tombol} ditekan, tetapi karakter gagal bergerak`
      );
    }
  }
}

// Contoh penggunaan
const karakter = new PosisiKarakterGame();
karakter.tekanTombol("TombolS");
karakter.tekanTombol("TombolS");
karakter.tekanTombol("TombolW");
karakter.tekanTombol("TombolW");
karakter.tekanTombol("TombolW");
karakter.tekanTombol("TombolS");
