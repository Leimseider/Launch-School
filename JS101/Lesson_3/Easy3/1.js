let numbers = [1, 2, 3, 4];
numbers.splice(0, 4);
console.log(numbers);

numbers = [1, 2, 3, 4];
while (numbers.length) {
  numbers.pop();
}
console.log(numbers);

numbers = [1, 2, 3, 4];
numbers.length = 0;
console.log(numbers);

numbers = [1, 2, 3, 4];
while (numbers.length) {
  numbers.shift();
}
console.log(numbers);