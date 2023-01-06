let readlineSync = require('readline-sync');
let today = new Date();
let year = today.getFullYear();

console.log('What age are you?');
let age = readlineSync.question();
console.log('What age would you like to retire?');
let retireAge = readlineSync.question();

let yearsLeft = retireAge - age;
let retireYear = year + yearsLeft;
console.log(`It's ${year}. You will retire in ${retireYear}.
You only have ${yearsLeft} years of work to go!`);
