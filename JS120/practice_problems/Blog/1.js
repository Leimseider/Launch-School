function Spaceship(speed, pilot, crewSize) {
  this.speed = speed;
  this.pilot = pilot;
  this.crewSize = crewSize;
}

let spaceship1 = new Spaceship(5000000, 'Larry', 12);
let spaceship2 = new Spaceship(5500000, 'Marty', 18);
let spaceship3 = new Spaceship(6000000, 'Sammy', 22);

Spaceship.prototype.getPilotName = function() {
  console.log(this.pilot);
};

spaceship1.getPilotName();