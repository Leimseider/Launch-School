let array = [];
let readlineSync = require('readline-sync');

console.log('Enter the first number.');
array.push(readlineSync.question());

console.log('Enter the second number.');
array.push(readlineSync.question());

console.log('Enter the third number.');
array.push(readlineSync.question());

console.log('Enter the fourth number.');
array.push(readlineSync.question());

console.log('Enter the fifth number.');
array.push(readlineSync.question());

console.log('Enter the last number.');
let compareNumber = readlineSync.question();

array.includes(compareNumber) ? 
  console.log(`${compareNumber} appears in ${array}.`) :
  console.log(`${compareNumber} does not appear in ${array}.`);

