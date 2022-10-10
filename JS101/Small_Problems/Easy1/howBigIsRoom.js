const readline = require('readline-sync');

console.log('Enter the length of the room in metres:')
let length = readline.question();

console.log('Enter the width of the room in metres:')
let width = readline.question();

let totalAreaMetres = (length * width);
let totalAreaFeet = Math.round(totalAreaMetres * 10.7639 * 100) / 100;

console.log(`The area of the room is ${totalAreaMetres} square meters (${totalAreaFeet} square feet).`);