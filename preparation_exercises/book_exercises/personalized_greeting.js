let rlSync = require('readline-sync');
let name = rlSync.question("What is your first name?\n");
let lname = rlSync.question("What is your last name?\n");
console.log(`Good Morning, ${name} ${lname}!`);