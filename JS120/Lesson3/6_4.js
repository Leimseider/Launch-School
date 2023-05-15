function createTool(id, name, stock, price) {
  return {
    id,
    name,
    stock,
    price,
    describe() {
      for (let prop in this) {
        if (typeof this[prop] !== 'function') console.log(`${prop}: ${this[prop]}`);
      }
    },
    setPrice(newPrice) {
      if (this.price > 0) this.price = newPrice;
      else console.log('Price cannot be negative!');
    }
  };
}

let drill = createTool(1, 'Cordless Drill', 15, 45);
let scissors = createTool(0, 'Scissors', 8, 10);


drill.describe();