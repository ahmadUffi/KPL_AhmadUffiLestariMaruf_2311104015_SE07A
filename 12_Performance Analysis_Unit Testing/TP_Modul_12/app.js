const express = require("express");
const app = express();
const path = require("path");

function CariTandaBilangan(a) {
  if (a < 0) return "Negatif";
  if (a > 0) return "Positif";
  return "Nol";
}

app.use(express.static(path.join(__dirname, "public")));

app.get("/check/:num", (req, res) => {
  const num = parseInt(req.params.num);
  const result = CariTandaBilangan(num);
  res.json({ result });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

module.exports = { CariTandaBilangan };
