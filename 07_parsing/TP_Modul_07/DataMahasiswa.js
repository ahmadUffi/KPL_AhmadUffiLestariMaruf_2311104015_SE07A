import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

class DataMahasiswa2311104033 {
  static ReadJSON() {
    const filePath = path.join(__dirname, "tp7_1_2311104033.json");

    try {
      const data = fs.readFileSync(filePath, "utf-8");
      const obj = JSON.parse(data);

      const { depan: namaDepan, belakang: namaBelakang } = obj.nama;
      const { nim, fakultas } = obj;

      console.log(`Nama ${namaDepan} ${namaBelakang} dengan nim ${nim} dari fakultas ${fakultas}`);
    } catch (err) {
      console.error("Gagal membaca atau parsing file JSON:", err.message);
    }
  }
}

DataMahasiswa2311104033.ReadJSON();
