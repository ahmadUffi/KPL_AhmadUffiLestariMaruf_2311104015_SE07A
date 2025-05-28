const express = require("express");
const path = require("path");
const app = express();

function CariNilaiPangkat(a, b) {
  if (b === 0) return 1;
  if (b < 0) return -1;
  if (b > 10 || a > 100) return -2;

  let result = 1;
  for (let i = 0; i < b; i++) {
    result *= a;
    if (result > Number.MAX_SAFE_INTEGER) return -3;
  }
  return result;
}

app.use(express.static(path.join(__dirname, "public")));

app.get("/pangkat/:a/:b", (req, res) => {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);
  const result = CariNilaiPangkat(a, b);
  res.json({ result });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

module.exports = { CariNilaiPangkat };
