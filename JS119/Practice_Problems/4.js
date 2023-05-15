// Write a function that takes an array of integers and
// returns the two numbers that are closest together in
// value.

// Examples:

/* 
create empty variables firstNumber, secondNumber
create empty array;
create difference variable, 
  
loop through each number,
  subtract first number with every number;
  if difference between two numbers is smaller than difference varaible
  first number reassign, second number reassign
push first and second n umber to empty array, return
*/

function closestNumbers(array) {
  let firstNumber = array[0];
  let secondNumber = array[1];
  let difference = (array[0] - array[1]);
  if (difference < 0) {
    difference = array[1] - array[0];
  }

  let finalArray = [array[0], array[1]];

  for (let idx = 0; idx < array.length; idx++) {
    for (let idx2 = 0; idx2 < array.length; idx2++) {
      if (idx === idx2) continue;
      let testNumber = 0;
      if (array[idx] - array[idx2] < 0) {
        testNumber = array[idx2] - array[idx];
      } else {
        testNumber = array[idx] - array[idx2];
      }
      if (testNumber < difference) {
        difference = testNumber;
        finalArray = [array[idx], array[idx2]];
      }
    }
  }
  return finalArray;
}

console.log(closestNumbers([5, 25, 15, 11, 20]));     // [15, 11]
console.log(closestNumbers([19, 25, 32, 4, 27, 16])); // [25, 27]
console.log(closestNumbers([12, 7, 17]));             // [12, 7]