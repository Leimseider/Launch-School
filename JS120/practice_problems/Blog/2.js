function spaceShipPrototype(make, model, pilot) {
  this.make = make;
  this.model = model;
  this.pilot = pilot;
}

spaceShipPrototype.prototype.getMake = function() {
  console.log(this.make);
};

let brigadeShip = new spaceShipPrototype('Honda', 'Brigader', 'Noah');

brigadeShip.getMake();
console.log(brigadeShip);

