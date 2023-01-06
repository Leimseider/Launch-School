function findFibonacciIndexByLength(length) {
  let count = 2n;
  let firstNumber = 1n;
  let secondNumber = 1n;
  let fibonacciNumber = 0n;

  do {
    fibonacciNumber = firstNumber + secondNumber;
    firstNumber = secondNumber;
    secondNumber = fibonacciNumber;
    count++;
  } while (String(fibonacciNumber).length < length);
  console.log(count);
}


findFibonacciIndexByLength(2n);
findFibonacciIndexByLength(3n);
findFibonacciIndexByLength(10n);
findFibonacciIndexByLength(10000n);