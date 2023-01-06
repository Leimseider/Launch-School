function factors(number) {
  let divisor = number;
  let factors = [];
  do {
    if (number <= 0) {
      console.log('The answer is unknown...');
      break;
    } else if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  } while (divisor !== 0);
  if (number > 0) {
    return factors
  };
}
console.log(factors(12));