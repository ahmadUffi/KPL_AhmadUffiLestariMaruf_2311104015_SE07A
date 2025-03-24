class SuperUser {
  constructor(user) {
    this.user = user;
  }

  sayHelo() {
    console.log(`Hallo User ${this.user}`);
  }
}

const user = new SuperUser("ahamd");

user.sayHelo(); // Output: Hallo User ahmad

class DataGeneric {
  constructor(data) {
    this.data = data;
  }

  printData() {
    console.log(`Data yang tersimpan adalah: ${this.data}`);
  }
}

const dataNIM = new DataGeneric("2311104015");

// Memanggil method printData()
dataNIM.printData();
