// Given an array of numbers, for each number, find out how
// many numbers in the array are smaller than it. When
// counting numbers, only count unique values. That is, if a
// given number occurs multiple times in the array, it
// should only be counted once.

// Examples:

/*
create empty array
iterate through original array;
  set variable equal to target number;
  set variable to 0, which counts how many numbers are smaller;  
  create empty array which will hold values which were smaller 
  add 1 to counter if smaller than target number;
  then push comparison number to new array;
  finally, push counter to array

*/

function smallerNumbersThanCurrent(array) {
  let finalArray = [];
  array.forEach((element) => {
    let counter = 0;
    let comparedNumbers = [];
    for (let idx = 0; idx < array.length; idx++) {
      if (comparedNumbers.includes(array[idx])) continue;
      if (element > array[idx]) counter++;
      comparedNumbers.push(array[idx]);
    }
    finalArray.push(counter);
  });
  return finalArray;
}

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3])); // [3, 0, 1, 1, 2]
console.log(smallerNumbersThanCurrent(
  [1, 4, 6, 8, 13, 2, 4, 5, 4])); // [0, 2, 4, 5, 6, 1, 2, 3, 2]
console.log(smallerNumbersThanCurrent([7, 7, 7, 7])); // [0,0,0,0]
console.log(smallerNumbersThanCurrent([6, 5, 4, 8])); // [2, 1, 0, 3]
console.log(smallerNumbersThanCurrent([1])); // [0]