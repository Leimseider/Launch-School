class Cat {
  constructor(name) {
    this.name = name;
  }
  static genericGreeting() {
    console.log(`I'm a cat.`);
  }
  personalGreeting() {
    console.log(`My name is ${this.name}.`);
  }
}

let kitty = new Cat("Sophie");
Cat.genericGreeting();
kitty.personalGreeting();