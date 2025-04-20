import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

class DataMahasiswa2311104033 {
  static ReadJSON() {
    const filePath = path.join(__dirname, "jurnal7_1_2311104033.json");

    try {
      const rawData = fs.readFileSync(filePath, "utf-8");
      const obj = JSON.parse(rawData);

      console.log("=== Data Mahasiswa Deserialized ===");
      console.log(`Nama Lengkap : ${obj.firstName} ${obj.lastName}`);
      console.log(`Jenis Kelamin: ${obj.gender}`);
      console.log(`Umur         : ${obj.age}`);
      console.log(`Alamat       : ${obj.address.streetAddress}, ${obj.address.city}, ${obj.address.state}`);
      console.log(`Mata Kuliah  :`);
      obj.courses.forEach((course, index) => {
        console.log(`  MK ${index + 1}: ${course.code} - ${course.name}`);
      });
    } catch (err) {
      console.error("Gagal membaca file JSON:", err.message);
    }
  }
}

DataMahasiswa2311104033.ReadJSON();
