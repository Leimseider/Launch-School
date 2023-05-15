function sumOfSums(array) {
  let number = 0;
  for (let idx = 1; idx <= array.length; idx++) {
    number += array.slice(0, idx).reduce(
      (accumulator, currentValue) => accumulator + currentValue);
  }
  console.log(number);
}


sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]);              // 4
sumOfSums([1, 2, 3, 4, 5]);  // 35