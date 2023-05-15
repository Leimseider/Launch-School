let scissorsId = 0;
let scissorsName = 'Scissors';
let scissorsStock = 8;
let scissorsPrice = 10;

let drillId = 1;
let drillName = 'Cordless Drill';
let drillStock = 15;
let drillPrice = 45;

function createTool(id, name, stock, price) {
  return {
    id,
    name,
    stock,
    price,
  };
}

let drill = createTool(1, 'Cordless Drill', 15, 45);
let scissors = createTool(0, 'Scissors', 8, 10);

console.log(drill);
console.log(scissors);