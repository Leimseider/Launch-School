function average(array) {
  let averageArray = array.reduce((accumulator, currentValue) =>
    accumulator + currentValue);
  console.log(Math.floor(averageArray / array.length));
}

average([1, 5, 87, 45, 8, 8]);       // 25
average([9, 47, 23, 95, 16, 52]);    // 40