const readline = require('readline-sync');

function prompt(message) {
  console.log(`${message}`);
}

prompt(`Welcome to the Car Loan Calculator!
Let's calculate your monthly payments.`);

prompt('What is the total amount of your loan?');
let loanAmount = readline.question();

prompt('What is the annual interest rate of the loan?');
let interestRate = parseFloat(readline.question()) / 100 / 12;

prompt('How many months is the term of the loan?')
let months = readline.question();

let monthlyPayment = loanAmount * (interestRate / (1 - Math.pow((1 + interestRate), (-months))));
if (interestRate === 0) {
    monthlyPayment = loanAmount / months;
  }

prompt(`Your monthly payment will be $${monthlyPayment.toFixed(2)}.`);



