function createTool(id, name, stock, price) {
  return {
    id,
    name,
    stock,
    price,
    describe() {
      for (let prop in this) {
        console.log(`${prop}: ${this[prop]}`);
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

function setPrice(tool, price) {
  if (price > 0) tool.price = price;
  else console.log('Price cannot be negative!');
  console.log(tool);
}

function describeProduct(product) {
  for (let prop in product) {
    console.log(`${prop}: ${product[prop]}`);
  }
}

describeProduct(drill);