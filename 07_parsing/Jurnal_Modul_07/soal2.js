import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

class TeamMembers2311104033 {
  static ReadJSON() {
    const filePath = path.join(__dirname, "jurnal7_2_2311104033.json");

    try {
      const data = fs.readFileSync(filePath, "utf-8");
      const jsonData = JSON.parse(data);

      console.log("Team member list:");
      jsonData.members.forEach(member => {
        const fullName = `${member.firstName} ${member.lastName}`;
        const detail = `(${member.age} ${member.gender})`;
        console.log(`${member.nim} ${fullName} ${detail}`);
      });
    } catch (err) {
      console.error("Gagal membaca atau parsing file JSON:", err.message);
    }
  }
}

TeamMembers2311104033.ReadJSON();
