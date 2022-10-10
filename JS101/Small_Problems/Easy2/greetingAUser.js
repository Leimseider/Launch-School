const readline = require('readline-sync');

console.log('What is your name?');
let userName = readline.question();

if (userName.charAt(userName.length - 1) === '!') {
  console.log(`HELLO ${userName.toUpperCase()} WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${userName}.`);
}