const swimMixin = {
  tow() {
    console.log(`I can tow a trailer!`);
  }
};


class Truck {}
Object.assign(Truck.prototype, swimMixin);

class Car {}



let truck = new Truck();
truck.tow();