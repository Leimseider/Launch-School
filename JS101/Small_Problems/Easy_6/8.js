function sequence(count, multiplier) {
  let finalArray = [];
  for (let idx = 1; idx <= count; idx++) {
    finalArray.push(multiplier * idx);
  }
  console.log(finalArray);
}

sequence(5, 1);          // [1, 2, 3, 4, 5]
sequence(4, -7);         // [-7, -14, -21, -28]
sequence(3, 0);          // [0, 0, 0]
sequence(0, 1000000);    // []