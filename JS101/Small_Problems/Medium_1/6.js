
function fibonacci(number) {
  if (number === 1) {
    return 1;
  }
  console.log(number + fibonacci(number - 1));
}
// F(n - 1) + F(n - 2)

function sum(num) {
  if ( num === 1) {
    return 1;
  }
  return num + sum(num - 1);
}

function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

fibonacci(1);       // 1
fibonacci(2);       // 1
fibonacci(3);       // 2
fibonacci(4);       // 3
fibonacci(5);       // 5
fibonacci(12);      // 144
fibonacci(20);      // 6765