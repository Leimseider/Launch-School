/* eslint-disable max-lines-per-function */
/* Take the number 735291 and rotate it by one digit to the left, getting 352917. 
Next, keep the first digit fixed in place and rotate the remaining digits to get 329175. 
Keep the first two digits fixed in place and rotate again to get 321759. 
Keep the first three digits fixed in place and rotate again to get 321597. 
Finally, keep the first four digits fixed in place and rotate the final two digits to get 321579. 
*/
//735291 > 352917 rotated number = 3
//352917 > 329175

function maxRotation(integer) {
  let rotatedNumber = [];
  let integerArray = integer.toString().split('');
  let sliceArray = integerArray.slice();

  for (let idx = 0; idx <= integerArray.length; idx++) {
    let newArray = sliceArray.slice(idx + 1);
    newArray.push(sliceArray[idx]);
    rotatedNumber.push(newArray[idx]);
    newArray.unshift(rotatedNumber[idx]);
    sliceArray = newArray;
  }
  console.log(+rotatedNumber.join(''));
}


maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845

  /*
  let firstRotation = integer.toString().split('').slice(1);
  firstRotation.push(integer.toString().slice(0)[0]);

  let secondRotation = firstRotation.slice(2);
  secondRotation.push(firstRotation[1]);
  secondRotation.unshift(firstRotation[0]);

  let thirdRotation = secondRotation.slice(3);
  thirdRotation.push(secondRotation[2]);
  thirdRotation.unshift(secondRotation[0], secondRotation[1]);

  let fourthRotation = thirdRotation.slice(4);
  fourthRotation.push(thirdRotation[3]);
  fourthRotation.unshift(thirdRotation[0], thirdRotation[1], thirdRotation[2]);
  console.log(fourthRotation);
}
*/

