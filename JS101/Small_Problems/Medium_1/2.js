function rotateRightmostDigits(number, count) {
  let numberArray = number.toString().split('');
  let target = numberArray.length - count;
  let newNumberArray = [];

  for (let idx = 0; idx <= numberArray.length; idx++) {
    if (idx === numberArray.length) {
      newNumberArray.push(numberArray[target]);
    }
    if (idx === target) {
      continue;
    }
    newNumberArray.push(numberArray[idx]);
  }

  console.log(+newNumberArray.join(''));

}


rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917