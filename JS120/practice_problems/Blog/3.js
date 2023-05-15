//object literal, factory function, constructor/prototype(psuedo classical), oloo, classes

class Spaceship {
  constructor(pilot, engine, color) {
    this.pilot = pilot;
    this.engine = engine;
    this.color = color;
  }
  getPilot() {
    console.log(this.pilot);
  }
}

class Warship extends Spaceship {
  constructor(pilot, engine, color, weapon) {
    super(pilot, engine, color);
    this.weapon = weapon;
  }
  useWeapon() {
    console.log(`Fire the ${this.weapon}!`);
  }
}

const thrustable = {
  thrust() {
    console.log('Powering up thrusters.');
  }
};

class Stealthship extends Warship {
  constructor(pilot, engine, color, weapon) {
    super(pilot, engine, color, weapon);
  }
  cloak() {
    console.log(`We're hidden.`);
  }
}

Object.assign(Stealthship.prototype, thrustable);

let battleShip = new Warship('Harry', 'Nuclear', 'Red', 'Beam');
let cloakedShip = new Stealthship('Harry', 'Nuclear', 'Red', 'Twin Blaster');


console.log(battleShip);
cloakedShip.cloak();
cloakedShip.thrust();