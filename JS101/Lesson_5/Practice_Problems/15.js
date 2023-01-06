let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];


console.log(arr.filter((element, index) => {
  let valueArray = Object.values(arr[index]);
  for (let idx = 0; idx < valueArray.length; idx++) {
    for (let idx2 = 0; idx2 < valueArray[idx].length; idx2++) {
      if (valueArray[idx][idx2] % 2 !== 0) {
        return false;
      }
    }
  }
  return true;
}));

