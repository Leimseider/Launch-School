function vehicleBasics(object, kmTravelledPerLiter, fuelCapInLiter) {
  object.fuelEfficiency = kmTravelledPerLiter;
  object.fuelCap = fuelCapInLiter;
}

class WheeledVehicle {
  constructor(tirePressure) {
    this.tires = tirePressure;
  }

  tirePressure(tireIdx) {
    return this.tires[tireIdx];
  }

  inflateTire(tireIdx, pressure) {
    this.tires[tireIdx] = pressure;
  }
}

const Range = {
  range() {
    return this.fuelCap *  this.fuelEfficiency;
  }
};

class Auto extends WheeledVehicle {
  constructor() {
    // the array represents tire pressure for four tires
    super([30,30,32,32]);
  }
}

vehicleBasics(Auto, 50, 25.0);
Object.assign(Auto.prototype, Range);

class Motorcycle extends WheeledVehicle {
  constructor() {
    // array represents tire pressure for two tires
    super([20,20]);
  }
}

Object.assign(Motorcycle.prototype, Range);


class Catamaran {
  constructor(propellerCount, hullCount) {
    // catamaran specific logic

    this.propellerCount = propellerCount;
    this.hullCount = hullCount;
  }
}
Object.assign(Catamaran.prototype, Range);

console.log(Motorcycle.protype.tires);