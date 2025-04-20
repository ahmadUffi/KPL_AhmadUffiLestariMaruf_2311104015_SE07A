import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

class DataCourse2311104033 {
  static ReadJSON() {
    const filePath = path.join(__dirname, "tp7_2_2311104033.json");

    try {
      const rawData = fs.readFileSync(filePath, "utf-8");
      const jsonData = JSON.parse(rawData);

      console.log("Daftar mata kuliah yang diambil:");
      jsonData.courses.forEach((course, index) => {
        console.log(`MK ${index + 1} ${course.code} - ${course.name}`);
      });
    } catch (err) {
      console.error("Gagal membaca file JSON:", err.message);
    }
  }
}

DataCourse2311104033.ReadJSON();
