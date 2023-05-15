let spaceship = {
  pilot: 'Harry',
  engineType: 'Tylium',
  weaponType: 'Particle Beam',
  prepWeapon() {
    console.log(`${this.pilot}, fire up the ${this.weaponType}.`);
  }
};

let spaceship2 = {
  pilot: 'Larry',
  engineType: 'Tylium',
  weaponType: 'Electro Bomb',
};

spaceship.prepWeapon();
let prepWeapon = spaceship.prepWeapon;
prepWeapon.call(spaceship2);
