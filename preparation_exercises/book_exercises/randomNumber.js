function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let tries = 0;
tries += 1;

do {
    result = randomNumberBetween(1, 6); result <= 2)
  result = randomNumberBetween(1, 6);
  tries += 1;
}

console.log('It took ' + String(tries) + ' tries to get a number greater than 2');