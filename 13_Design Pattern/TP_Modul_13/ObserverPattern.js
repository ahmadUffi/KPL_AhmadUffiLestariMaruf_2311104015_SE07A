class Subject {
  constructor() {
    this.observers = [];
    this.state = 0;
  }

  attach(observer) {
    this.observers.push(observer);
  }

  detach(observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  notify() {
    this.observers.forEach(observer => observer.update(this));
  }

  setState(newState) {
    this.state = newState;
    this.notify();
  }

  getState() {
    return this.state;
  }
}

class ConcreteObserver {
  constructor(name) {
    this.name = name;
  }

  update(subject) {
    console.log(`${this.name} menerima update: State sekarang = ${subject.getState()}`);
  }
}

const subject = new Subject();

const observer1 = new ConcreteObserver("Observer 1");
const observer2 = new ConcreteObserver("Observer 2");

subject.attach(observer1);
subject.attach(observer2);

console.log("Set state ke 1");
subject.setState(1);

console.log("Set state ke 2");
subject.setState(2);

subject.detach(observer1);

console.log("Set state ke 3 (Observer 1 sudah dilepas)");
subject.setState(3);
