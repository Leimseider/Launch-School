/*create new array
iterate through original array
if original array index is odd, then double that value
and add it to the new array
if original array is even, simply add it to the new array
*/
let newArray = [];

function doubleOddNumbers(array) {
  for (let counter = 0; counter < array.length; counter++) {
    let testIndex = counter % 2;
    if (testIndex !== 0) {
      let indexValue = array[counter] * 2;
      newArray.push(indexValue);
    } else {
      newArray.push(array[counter]);
    }
  }
  console.log(newArray);
}

let myNumbers = [1, 4, 3, 7, 2, 6];
doubleOddNumbers(myNumbers);

// not mutated
console.log(myNumbers); 