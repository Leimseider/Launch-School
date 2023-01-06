const readline = require('readline-sync');

console.log('What is the bill?');
let bill = readline.question();

console.log('What is the tip percentage?');
let tipPercentage = readline.question();

let tip = (bill * (tipPercentage / 100)).toFixed(2);
let total = (Number(bill) + Number(tip));

console.log(`The tip is ${tip}.`);

console.log(`The total is ${total}.`); // or the below

console.log('The total is ' + (Number(bill) + Number(tip)) + '.');
