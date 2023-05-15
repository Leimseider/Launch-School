function fibonacci(number) {
  let counter = 0;
  let secondCounter = 1;
  for (let idx = 0; idx < number - 2; idx++) {
    secondCounter += counter;
    counter = secondCounter - counter;
  }
  console.log(counter + secondCounter);
}
//, 5, 8, 13, 21, 34
fibonacci(20);       // 6765
fibonacci(50);       // 12586269025
fibonacci(75);       // 2111485077978050