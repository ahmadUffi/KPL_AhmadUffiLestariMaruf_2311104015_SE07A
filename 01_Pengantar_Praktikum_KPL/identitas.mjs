import process from "process";
import Readline from "readline";

const inpt = Readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

inpt.question("what is your name", (name) => {
  console.log(`Hello, ${name}!`);
  inpt.close();
});
