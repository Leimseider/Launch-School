let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

console.log(arr.sort((a, b) => {
  let aCounter = 0;
  let bCounter = 0;
  a.forEach(element => {
    if (element % 2 === 1) {
      aCounter += element;
    }
  });
  b.forEach(element => {
    if (element % 2 === 1) {
      bCounter += element;
    }
  });

  return aCounter - bCounter;
}));

// [ [ 1, 8, 3 ], [ 1, 6, 7 ], [ 1, 5, 3 ] ]