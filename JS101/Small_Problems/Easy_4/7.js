function runningTotal(array) {
  let mapArray = array;
  let firstElement = 0;
  //map solution - non destructive
  let finalArray = mapArray.map((element) => {
    firstElement += element;
    return firstElement;
  });
  console.log(finalArray);

  //original solution - destructive
  for (let i = 0; i < array.length; i++) {
    let lastNumber = array[i - 1];
    if (i > 0) {
      array[i] += lastNumber;
    }
  }
  console.log(array);
}
runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []