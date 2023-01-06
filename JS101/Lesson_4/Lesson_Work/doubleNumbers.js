function doubleNumbers(array) {
  let finalArray = array.slice();
  let actualArrayLength = array.length;
  for (let counter = 0; counter < actualArrayLength; counter++) {

    let newValue = finalArray[counter] * 2;
    array.shift();
    array.push(newValue);
  }
  console.log(array);
}


let myNumbers = [1, 4, 3, 7, 2, 6];
doubleNumbers(myNumbers); // => [2, 8, 6, 14, 4, 12]
myNumbers;                // => [1, 4, 3, 7, 2, 6]