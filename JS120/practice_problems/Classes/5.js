class Cat {
  constructor(name) {
    let self = this;
    this.name = name;
    console.log(`Hello, my name is ${self.name}`);
  }

}

let kitty = new Cat('Sophie');