// Department.js
// Contoh penggunaan abstract class dengan metode abstrak

class Department {
  constructor(name) {
    if (this.constructor === Department) {
      throw new Error("Cannot instantiate from abstract class");
    }
    this.name = name;
  }

  // Harus dioverride di subclass
  getDepartmentInfo() {
    throw new Error("Method 'getDepartmentInfo()' must be implemented.");
  }
}

export { Department };
