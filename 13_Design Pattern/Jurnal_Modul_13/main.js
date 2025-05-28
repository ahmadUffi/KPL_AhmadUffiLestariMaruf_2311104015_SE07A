const PusatDataSingleton = require("./DataSingleton");

const data1 = PusatDataSingleton.GetDataSingleton();
const data2 = PusatDataSingleton.GetDataSingleton();

data1.AddSebuahData("Nama Anggota 1");
data1.AddSebuahData("Nama Anggota 2");
data1.AddSebuahData("Nama Asisten Praktikum");

console.log("\nCetak dari data2:");
data2.PrintSemuaData();

data2.HapusSebuahData(2);

console.log("\nSetelah penghapusan (dari data1):");
data1.PrintSemuaData();

console.log("\nJumlah data:");
console.log("Data1 count:", data1.GetSemuaData().length);
console.log("Data2 count:", data2.GetSemuaData().length);
