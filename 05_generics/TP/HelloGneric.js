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
