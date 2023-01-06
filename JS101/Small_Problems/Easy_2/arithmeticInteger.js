const readline = require('readline-sync');

function prompt(string) {
  console.log(`==> ${string}`);
}
prompt(`Enter the first number:`);
let number1 = Number(readline.question());
prompt(`Enter the second number:`);
let number2 = Number(readline.question());

prompt(`${number1} + ${number2} = ${number1 + number2}.`);
prompt(`${number1} - ${number2} = ${number1 - number2}.`);
prompt(`${number1} * ${number2} = ${number1 * number2}.`);
prompt(`${number1} / ${number2} = ${number1 / number2}.`);
prompt(`${number1} % ${number2} = ${number1 % number2}.`);
prompt(`${number1} ** ${number2} = ${number1 ** number2}.`);

/*
==> 23 + 17 = 40
==> 23 - 17 = 6
==> 23 * 17 = 391
==> 23 / 17 = 1
==> 23 % 17 = 6
==> 23 ** 17 = 1.4105003956066297e+23 */