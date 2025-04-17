const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

rl.question("Masukkan sebuah angka (1 - 10000): ", (nilaiString) => {
  let nilaiInt = parseInt(nilaiString);

  if (isNaN(nilaiInt) || nilaiInt < 1 || nilaiInt > 10000) {
    console.log(
      "Input tidak valid! Harap masukkan angka antara 1 hingga 10000."
    );
  } else {
    if (isPrime(nilaiInt)) {
      console.log(`Angka ${nilaiInt} merupakan bilangan prima`);
    } else {
      console.log(`Angka ${nilaiInt} bukan merupakan bilangan prima`);
    }
  }

  rl.close();
});
