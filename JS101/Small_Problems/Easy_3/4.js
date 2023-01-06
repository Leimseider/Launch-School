function findFibonacciIndexByLength(number) {
  let array = [1, 1];
  for (let i = 0; i < 100; i++) {
    array.push((Math.floor(array[i]) + Math.floor(array[i + 1])));
    if (array[i].toString().split('').length === number) {
      array.pop();
      array.pop();
      break;
    }
  }
  console.log(array);
  console.log(array.length);
}



findFibonacciIndexByLength(16);