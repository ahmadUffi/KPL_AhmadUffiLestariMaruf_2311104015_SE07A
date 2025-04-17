const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukkan satu huruf (kapital): ", (huruf) => {
  if (huruf.length !== 1 || !/[A-Z]/.test(huruf)) {
    console.log("Input tidak valid! Harap masukkan satu huruf kapital (A-Z).");
  } else {
    const vokal = ["A", "I", "U", "E", "O"];

    if (vokal.includes(huruf)) {
      console.log(`Huruf ${huruf} merupakan huruf vokal`);
    } else {
      console.log(`Huruf ${huruf} merupakan huruf konsonan`);
    }
  }

  rl.close();
});
