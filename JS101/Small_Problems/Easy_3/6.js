const readline = require('readline-sync');

console.log('Welcome to madlibs.');
console.log('Choose and noun.');
let noun = readline.question();
console.log('Choose a verb.');
let verb = readline.question();
console.log('Choose an adjective.');
let adjective = readline.question();
console.log('Choose an adverb.');
let adverb = readline.question();

console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`);