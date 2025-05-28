import { Person } from './Person.js';

export class Employee extends Person {
    constructor(name, age, position) {
        super(name, age);
        this.position = position;
    }

    introduce() {
        return `${super.introduce()} and I am a ${this.position}.`;
    }
}
