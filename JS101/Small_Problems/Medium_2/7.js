function bubbleSort(array) {
  while (checkSort(array)) {
    for (let idx = 0; idx < array.length; idx++) {
      let firstNumber = array[idx];
      let secondNumber = array[idx + 1];
      if (array[idx] > array[idx + 1]) {
        array[idx] = secondNumber;
        array[idx + 1] = firstNumber;
      }
    }
  }
}

function checkSort(array) {
  for (let idx = 0; idx < array.length; idx++) {
    if (array[idx] > array[idx + 1]) {
      return true;
    }
  }
  return false;
}


let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie', 'Abby'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler",]