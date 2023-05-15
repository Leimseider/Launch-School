function rotateRightmostDigits(number, target) {
  if (target <= 1) {
    return number;
  }
  let numberArray = String(number).split('');
  let firstSlice = numberArray.slice(0, -target);
  let secondSlice = numberArray.slice(-(target - 1));
  let rotatedNumber = numberArray[numberArray.length - target];
  let finalArray = firstSlice.concat(secondSlice).concat(rotatedNumber);
  let finalNumber = +finalArray.join('');
  return finalNumber;
}

function maxRotation(number) {
  let numberLength = String(number).split('').length;
  for (let idx = numberLength; idx > 1; idx--) {
    number = rotateRightmostDigits(number, idx);
  }
  console.log(number);
}

maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845