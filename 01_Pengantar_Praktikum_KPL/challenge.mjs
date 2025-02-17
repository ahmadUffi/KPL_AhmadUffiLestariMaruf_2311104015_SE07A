import process from "process";
import Readline from "readline";

const input = Readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const pertanyaan = [
  "siapa nama kamu? ",
  "jurusan kamu? ",
  "university kamu?",
  "berapa umur mu? ",
];

let jawaban = [];
let index = 0;

const tanya = () => {
  if (index < pertanyaan.length) {
    input.question(pertanyaan[index], (res) => {
      jawaban.push(res);
      index++;
      tanya();
    });
  } else {
    console.log("\n jawaban :");
    console.log(`Name: ${jawaban[0]}`);
    console.log(`Major: ${jawaban[1]}`);
    console.log(`University: ${jawaban[2]}`);
    console.log(`Age: ${jawaban[3]}`);
    input.close();
  }
};

tanya();
