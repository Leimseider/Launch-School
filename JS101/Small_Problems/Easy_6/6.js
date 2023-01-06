function sequence(number) {
  let finalArray = [];
  for (let idx = 1; idx <= number; idx++) {
    finalArray.push(idx);
  }
  console.log(finalArray);
}


sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]