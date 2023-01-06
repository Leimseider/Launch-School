function union(array1, array2) {
  //iterate through array, compare to//

  let combinedArray = [];
  for (let i = 0; i < array1.length && array2.length; i++) {
    if (!combinedArray.includes(array1[i])) {
      combinedArray.push(array1[i]);
    }
    if (!combinedArray.includes(array2[i])) {
      combinedArray.push(array2[i]);
    }
  }
  console.log(combinedArray.sort());
}

union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]