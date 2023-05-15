// Write a function that takes one argument, an array of
// integers. The function should return minimum sum of 5
// consecutive numbers in the array. If the array contains
// less than 5 elements, the function should return null.

// Examples:

/* if array length is less than 5 return null
let first number = sum of first 5 numbers
for loop function
  if array[idx + 4] = undefined, break
let index + index +1 = comparison
  if comparison < first number, first number = comparison
return first number
*/

function minimumSum(array) {
  if (array.length < 5) return null;
  let totalSum = array[0] + array[1] + array[2] + array[3] + array[4];

  for (let idx = 1; idx < array.length - 4; idx++) {
    let testSum = array[idx] + array[idx + 1] + array[idx + 2] +
                  array[idx + 3] + array[idx + 4];
    if (testSum < totalSum) totalSum = testSum;
  }
  return totalSum;
}
//13 minutes
console.log(minimumSum([1, 2, 3, 4]) === null);
console.log(minimumSum([1, 2, 3, 4, 5, -5]) === 9);
console.log(minimumSum([1, 2, 3, 4, 5, 6]) === 15);
console.log(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16);
console.log(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10);

// The tests above should each log "true".