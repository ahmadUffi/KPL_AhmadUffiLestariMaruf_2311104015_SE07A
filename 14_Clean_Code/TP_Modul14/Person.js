// Person.js
// Class ini merepresentasikan orang dengan nama dan usia (Encapsulation)

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method untuk memperkenalkan diri
  introduce() {
    return `My name is ${this.name} and I am ${this.age} years old.`;
  }
}

export { Person };
