// Ask user for first number
//Ask user for second number
//Ask user for operation
//Calculate
//Log result
const readline = require('readline-sync');
function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function prompt(message) {
  console.log(`=> ${message}`);
}

prompt('Welcome to Calculator!');

prompt("What's the first number?");
let number1 = readline.question();

while (invalidNumber(number1)) {
  prompt("That's not a number!");
  prompt("What's the first number?");
  number1 = readline.question();
}

prompt('What\'s the second number?');
let number2 = readline.question();

while (invalidNumber(number2)) {
  prompt("That's not a number!");
  prompt('What\'s the second number?');
  number2 = readline.question();
}

prompt(`${number1}, and ${number2}? Good choice.`);
prompt(`What do you want to do with these numbers? 
Enter 1 for addition.
Enter 2 for subtraction.
Enter 3 for multiplication.
Enter 4 for division.`);

let operator = Number(readline.question());

while (![1, 2, 3, 4].includes(operator)) {
  prompt("Really? Let's try again.");
  operator = Number(readline.question());
}
let answer;
switch (operator) {
  case 1:
    answer = Number(number1) + Number(number2);
    break;
  case 2:
    answer = Number(number1) - Number(number2);
    break;
  case 3:
    answer = Number(number1) * Number(number2);
    break;
  case 4:
    answer = Number(number1) / Number(number2);
    break;
}
prompt(`${answer}. Boom.`);