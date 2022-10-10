// Ask user for first number
//Ask user for second number
//Ask user for operation
//Calculate
//Log result

let operator;
let number1;
let number2;
let answer;
let redo;

const MESSAGES = require('./calculator_messages.json');
const readline = require('readline-sync');

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function prompt(message) {
  console.log(`=> ${message}`);
}

do {
prompt(MESSAGES['welcome']);

prompt(MESSAGES['firstNumber']);
number1 = readline.question();

while (invalidNumber(number1)) {
  prompt(MESSAGES['notNumber']);
  prompt(MESSAGES['firstNumber']);
  number1 = readline.question();
}

prompt(MESSAGES['secondNumber']);
number2 = readline.question();

while (invalidNumber(number2)) {
  prompt(MESSAGES['notNumber']);
  prompt(MESSAGES['secondNumber']);
  number2 = readline.question();
}

prompt(`${number1}, and ${number2}? Good choice.`);
prompt(MESSAGES['selectOperator']);

operator = Number(readline.question());

while (![1, 2, 3, 4].includes(operator)) {
  prompt(MESSAGES['tryAgain']);
  operator = Number(readline.question());
}
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
prompt(MESSAGES['performAgain']);
redo = readline.question();
} while (redo[0].toLowerCase() === 'y');

prompt(MESSAGES['goo']);