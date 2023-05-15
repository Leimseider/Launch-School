function Circle(radius) {
  this.radius = radius;
}

Circle.prototype.area = function() {
  return 3.14159 * (this.radius * this.radius);
};


let a = new Circle(3);
let b = new Circle(4);

console.log(a.area().toFixed(2)); // => 28.27
console.log(b.area().toFixed(2)); // => 50.27
console.log(a.hasOwnProperty('area')); // => false