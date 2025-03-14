class DoorMachine {
  constructor() {
    this.state = "Terkunci";
    this.transition = {
      Terkunci: { BukaPintu: "Terbuka", KunciPintu: "Terkunci" },
      Terbuka: { BukaPintu: "Terbuka", KunciPintu: "Terkunci" },
    };
  }

  action(action) {
    console.log(`anda melakukan aksi ${action}`);
    const nextState = this.transition[this.state][action];
    // console.log(nextState);
    if (nextState) {
      this.state = nextState;
      console.log(`Pintu  ${this.state}`);
      console.log(`posisi pintu saat ini ${this.state}`);
    } else {
      console.log("aksi yang anda coba lakukan tidak dikenali");
    }
  }
}

const pintu = new DoorMachine();

pintu.action("BukaPintu");

pintu.action("KunciPintu");
