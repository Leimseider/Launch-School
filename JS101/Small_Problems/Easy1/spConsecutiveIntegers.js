const readline = require('readline-sync');

console.log('Enter an integer greater than 0:');
let selectedInteger = readline.question();

console.log('Enter "s" to compute the sum, or "p" to compute the product.');
let selectedOperator = readline.question();


if (selectedOperator === 's') {
  let sumResult = 0;
  for (let i = 1; i <= selectedInteger; i++) {
    sumResult += i;
  }
  console.log(`The sum of the integers between 1 and ${selectedInteger} is ${sumResult}.`);
} else if (selectedOperator === 'p') {
  let productResult = 1;
  for (let i = 1; i <= selectedInteger; i++) {
    productResult *= i;
  }
  console.log(`The product of the integers between 1 and ${selectedInteger} is ${productResult}.`);
}
