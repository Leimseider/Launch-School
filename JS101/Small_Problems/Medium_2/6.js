function sumSquareDifference(number) {
  console.log(firstSum(number) - secondSum(number));
}

function firstSum(number) {
  let sum = 0;
  for (let idx = 0; idx <= number; idx++) {
    sum += idx;
  }
  return sum ** 2;
}

function secondSum(number) {
  let sum = 0;
  for (let idx = 0; idx <= number; idx++) {
    sum += (idx ** 2);
  }
  return sum;
}

sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10);     // 2640
sumSquareDifference(1);      // 0
sumSquareDifference(100);    // 25164150