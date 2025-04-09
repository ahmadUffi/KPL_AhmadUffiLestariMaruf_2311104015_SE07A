class SayaTubeVideo {
  constructor(title) {
    if (typeof title !== "string" || title.length === 0) {
      throw new Error(
        "Judul video harus berupa string dan tidak boleh kosong."
      );
    }

    this.id = Math.floor(10000 + Math.random() * 90000); // ID random 5 digit
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

class SayaTubeUser {
  constructor(username) {
    if (typeof username !== "string" || username.length === 0) {
      throw new Error("Username harus berupa string dan tidak boleh kosong.");
    }

    this.id = Math.floor(10000 + Math.random() * 90000); // ID random 5 digit
    this.username = username;
    this.uploadedVideos = [];
  }

  AddVideo(video) {
    if (!(video instanceof SayaTubeVideo)) {
      throw new Error("Hanya bisa menambahkan instance dari SayaTubeVideo.");
    }
    this.uploadedVideos.push(video);
  }

  GetTotalVideoPlayCount() {
    return this.uploadedVideos.reduce(
      (total, video) => total + video.playCount,
      0
    );
  }

  PrintAllVideoPlaycount() {
    console.log(`User: ${this.username}`);
    this.uploadedVideos.forEach((video, index) => {
      console.log(`Video ${index + 1} judul: ${video.title}`);
    });
  }
}

// Contoh Penggunaan
const user = new SayaTubeUser("Ahmad uffi");
const videoTitles = [
  "Review Film Inception oleh Ahmad uffi",
  "Review Film Interstellar oleh Ahmad uffi",
  "Review Film The Dark Knight oleh Ahmad uffi",
  "Review Film Parasite oleh Ahmad uffi",
  "Review Film Whiplash oleh Ahmad uffi",
  "Review Film The Matrix oleh Ahmad uffi",
  "Review Film Fight Club oleh Ahmad uffi",
  "Review Film The Shawshank Redemption oleh Ahmad uffi",
  "Review Film Joker oleh Ahmad uffi",
  "Review Film The Godfather oleh Ahmad uffi",
];

videoTitles.forEach((title) => {
  const video = new SayaTubeVideo(title);
  video.IncreasePlayCount(Math.floor(Math.random() * 1000)); // Random play count
  user.AddVideo(video);
});

user.PrintAllVideoPlaycount();
console.log(`Total Play Count: ${user.GetTotalVideoPlayCount()}`);
