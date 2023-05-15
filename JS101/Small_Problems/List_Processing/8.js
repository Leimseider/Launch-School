function buyFruit(array) {
  let finalArray = [];
  for (let idx = 0; idx < array.length; idx++) {
    for (let idx2 = 0; idx2 < array[idx][1]; idx2++) {
      finalArray.push(array[idx][0]);
    }
  }
  console.log(finalArray);
}


buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]