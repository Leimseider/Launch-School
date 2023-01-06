// Ask user for first number
//Ask user for second number
//Ask user for operation
//Calculate
//Log result
const readline = require('readline-sync');
console.log('Welcome to Calculator!');
console.log('What\'s the first number?')
let number1 = readline.question();
console.log('What\'s the second number?')
let number2 = readline.question();
console.log(`${number1}, and ${number2}? Good choice.`);
console.log(`What do you want to do with these numbers? 
Enter 1 for addition.
Enter 2 for subtraction.
Enter 3 for multiplication.
Enter 4 for division.`)
let operator = readline.question();

let answer;
if (operator === '1') {
  answer = Number(number1) + Number(number2);
  } else if (operator === '2') {
    answer = Number(number1) - Number(number2)
  } else if (operator === '3') {
    answer = Number(number1) * Number(number2)
} else if (operator === '4') {
  answer = Number(number1) / Number(number2)
} 
console.log(`${answer}. Boom.`)