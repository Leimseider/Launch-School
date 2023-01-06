
function multiply(array, multiplier) {
  let newArray = [];
  for (let counter = 0; counter < array.length; counter++) {
    let arrayValue = array[counter] * multiplier;
    newArray.push(arrayValue);
  }
  console.log(newArray);
}

let myNumbers = [1, 4, 3, 7, 2, 6];
multiply(myNumbers, 3); // => [3, 12, 9, 21, 6, 18]