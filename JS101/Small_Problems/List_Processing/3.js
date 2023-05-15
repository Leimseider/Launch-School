function multiplyAllPairs(array1, array2) {
  let finalArray = [];
  array1.forEach(firstNumber => {
    array2.forEach(secondNumber => {
      finalArray.push(firstNumber * secondNumber);
    });
  });
  console.log(finalArray.sort((a, b) => a - b));
}

multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]