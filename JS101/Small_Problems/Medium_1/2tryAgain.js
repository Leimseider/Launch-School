function rotateRightmostDigits(number, target) {
  if (target <= 1) {
    console.log(number);
    return;
  }
  let numberArray = String(number).split('');
  let firstSlice = numberArray.slice(0, -target);
  let secondSlice = numberArray.slice(-(target - 1));
  let rotatedNumber = numberArray[numberArray.length - target];
  let finalArray = firstSlice.concat(secondSlice).concat(rotatedNumber);
  let finalNumber = +finalArray.join('');
  console.log(finalNumber);
}

rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917