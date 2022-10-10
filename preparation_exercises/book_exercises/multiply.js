function getNumber(prompt) {
    let readlineSync = require('readline-sync');
  let number = readlineSync.question(prompt);
  return number;
}
let firstNumber = getNumber('Choose your first number: ');
let secondNumber = getNumber('Choose your second number: ');
function multiply(firstNumber, secondnumber){
  return firstNumber * secondNumber
};
console.log(`${firstNumber} * ${secondNumber} = ${multiply(firstNumber, secondNumber)}.`)