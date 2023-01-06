function multiplicativeAverage(array) {
  let total = 1;
  array.forEach(element => {
    total *= element;
  });
  total = total / array.length;
  console.log(total.toFixed(3));
}


multiplicativeAverage([3, 5]);                   // "7.500"
multiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"