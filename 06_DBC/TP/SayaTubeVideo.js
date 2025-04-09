class SayaTubeVideo {
  constructor(title) {
    if (typeof title !== "string" || title.length === 0) {
      throw new Error(
        "Judul video harus berupa string dan tidak boleh kosong."
      );
    }

    this.id = Math.floor(10000 + Math.random() * 90000);
    this.title = title;
    this.playCount = 0;
  }

  IncreasePlayCount(count) {
    if (typeof count !== "number" || count <= 0) {
      throw new Error("Jumlah play count harus berupa angka positif.");
    }
    this.playCount += count;
  }

  PrintVideoDetails() {
    console.log(`ID Video: ${this.id}`);
    console.log(`Judul Video: ${this.title}`);
    console.log(`Jumlah Play: ${this.playCount}`);
  }
}

// Contoh penggunaan
const video = new SayaTubeVideo("Tutorial Design By Contract – Ahmad Uffi]");
video.IncreasePlayCount(100);
video.PrintVideoDetails();
