const readline = require("readline");

// Membuat interface untuk input dari user via terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Membuat array dari 0 sampai 49
const array = Array.from({ length: 50 }, (_, index) => index);

// Melakukan iterasi terhadap array
array.forEach((num) => {
    let output = `${num}`;

    // Cek apakah habis dibagi 2 dan 3
    if (num % 2 === 0 && num % 3 === 0) {
        output += " #$#$";
    } else if (num % 2 === 0) {
        output += " ##";
    } else if (num % 3 === 0) {
        output += " $$";
    }

    // Menampilkan hasil ke terminal
    console.log(output);
});

// Menerima input angka dari user
rl.question("Masukkan angka (1-10000): ", (nilaiString) => {
    const nilaiInt = parseInt(nilaiString);

    // Validasi input user
    if (!isNaN(nilaiInt) && nilaiInt >= 1 && nilaiInt <= 10000) {
        console.log(`Anda memasukkan angka: ${nilaiInt}`);
    } else {
        console.log("Masukkan angka yang valid antara 1 hingga 10000!");
    }

    // Menutup interface readline
    rl.close();
});
