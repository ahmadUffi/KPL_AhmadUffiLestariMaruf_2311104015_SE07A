// Manager.js
// Class turunan dari Employee dengan tambahan atribut bonus dan salary (Polymorphism + Encapsulation)

import { Employee } from "./Employee.js";

export default class Manager extends Employee {
  constructor(name, age, jobTitle, salary, bonus) {
    super(name, age, jobTitle);
    this.salary = salary; //salary harus didefinisikan di sini
    this.bonus = bonus;
    this.jobTitle = jobTitle; // Untuk dipakai di introduce
  }

  // Mengembalikan total gaji
  getTotalSalary() {
    return this.salary + this.bonus;
  }

  // Override method introduce
  introduce() {
    return `${super.introduce()} I am a ${
      this.jobTitle
    }. My total salary is ${this.getTotalSalary()}.`;
  }
}
