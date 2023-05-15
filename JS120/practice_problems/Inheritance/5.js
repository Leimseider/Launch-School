class Cat {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello! My name is ${this.name}!`;
  }
}
function walkMixIn(obj) {
  obj.prototype.walk = function() {
    return `Let's go on a walk!`;
  };
}
walkMixIn(Cat);

let kitty = new Cat("Sophie");
console.log(kitty.greet());
console.log(kitty.walk());
console.log(Cat.walk());
