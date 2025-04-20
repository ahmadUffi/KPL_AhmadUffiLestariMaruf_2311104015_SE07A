import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

class GlossaryItem2311104033 {
  static ReadJSON() {
    const filePath = path.join(__dirname, "jurnal7_3_2311104033.json");

    try {
      const rawData = fs.readFileSync(filePath, "utf-8");
      const jsonData = JSON.parse(rawData);

      const entry = jsonData.glossary.GlossDiv.GlossList.GlossEntry;

      console.log("Glossary Entry:");
      console.log(`ID: ${entry.ID}`);
      console.log(`SortAs: ${entry.SortAs}`);
      console.log(`GlossTerm: ${entry.GlossTerm}`);
      console.log(`Acronym: ${entry.Acronym}`);
      console.log(`Abbreviation: ${entry.Abbrev}`);
      console.log(`Definition: ${entry.GlossDef.para}`);
      console.log(`Gloss See Also: ${entry.GlossDef.GlossSeeAlso.join(", ")}`);
      console.log(`Gloss See: ${entry.GlossSee}`);
    } catch (err) {
      console.error("Gagal membaca file JSON:", err.message);
    }
  }
}

GlossaryItem2311104033.ReadJSON();
