import readline from 'readline';
import CovidConfig from './CovidConfig.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const config = new CovidConfig();

config.UbahSatuan();

const satuan = config.config.satuan_suhu;
const batasDemam = config.config.batas_hari_deman;
const pesanTerima = config.config.pesan_diterima;
const pesanTolak = config.config.pesan_ditolak;

rl.question(`Berapa suhu badan anda saat ini? Dalam nilai ${satuan}: `, (suhuInput) => {
  const suhu = parseFloat(suhuInput);

  rl.question("Berapa hari yang lalu (perkiraan) anda terakhir memiliki gejala demam? ", (hariInput) => {
    const hari = parseInt(hariInput);

    let isSuhuNormal = false;

    if (satuan === "celcius") {
      isSuhuNormal = suhu >= 36.5 && suhu <= 37.5;
    } else if (satuan === "fahrenheit") {
      isSuhuNormal = suhu >= 97.7 && suhu <= 99.5;
    }

    const isDemamOk = hari < batasDemam;

    if (isSuhuNormal && isDemamOk) {
      console.log(pesanTerima);
    } else {
      console.log(pesanTolak);
    }

    rl.close();
  });
});
