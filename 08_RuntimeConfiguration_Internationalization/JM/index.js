import readline from 'readline';
import BankTransferConfig from './BankTransferConfig.js';

const config = new BankTransferConfig().config;
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const promptText = config.lang === "id" 
  ? "Masukkan jumlah uang yang akan di-transfer: " 
  : "Please insert the amount of money to transfer: ";

rl.question(promptText, (input) => {
  const amount = parseInt(input);
  const fee = amount <= config.transfer.threshold 
    ? config.transfer.low_fee 
    : config.transfer.high_fee;

  const total = amount + fee;

  if (config.lang === 'id') {
    console.log(`Biaya transfer = ${fee}`);
    console.log(`Total biaya = ${total}`);
    console.log("Pilih metode transfer:");
  } else {
    console.log(`Transfer fee = ${fee}`);
    console.log(`Total amount = ${total}`);
    console.log("Select transfer method:");
  }

  config.methods.forEach((method, index) => {
    console.log(`${index + 1}. ${method}`);
  });

  rl.question('', () => {
    const confirmPrompt = config.lang === 'id' 
      ? `Ketik "${config.confirmation.id}" untuk mengkonfirmasi transaksi: ` 
      : `Please type "${config.confirmation.en}" to confirm the transaction: `;

    rl.question(confirmPrompt, (confirmInput) => {
      const isConfirmed = config.lang === 'id' 
        ? confirmInput.toLowerCase() === config.confirmation.id 
        : confirmInput.toLowerCase() === config.confirmation.en;

      if (isConfirmed) {
        console.log(config.lang === 'id' ? 'Proses transfer berhasil' : 'The transfer is completed');
      } else {
        console.log(config.lang === 'id' ? 'Transfer dibatalkan' : 'Transfer is cancelled');
      }

      rl.close();
    });
  });
});
