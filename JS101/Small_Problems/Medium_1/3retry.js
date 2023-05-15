function rotateRightmostDigits(number, n) {
  let numberArray = number.toString().split('');
  let sliceStart = numberArray.length - n;
  let sliceArray = numberArray.slice(sliceStart);
  let rotatedSlice = sliceArray.slice(1).concat(sliceArray[0]);
  let leftArray = numberArray.slice(0, sliceStart);
  let result = +(leftArray.concat(rotatedSlice).join(''));
  return result;
}

function maxRotation(integer) {
  let length = integer.toString().length;
  let maxRotation = integer;

  for (let i = length; i >= 2; i--) {
    maxRotation = rotateRightmostDigits(maxRotation, i);
  }

  console.log(maxRotation);
}


maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845