let ninjaA;

{
  const Ninja = function() {
    this.swung = false;
  };

  ninjaA = new Ninja();
}

// create a `ninjaB` object here; don't change anything else
let ninjaB = Object.create(ninjaA);

console.log(ninjaA.constructor === ninjaB.constructor); // => true