function maxRotation(integer) {
  let rotatedNumber = [];
  let integerArray = integer.toString().split('');
  let sliceArray = integerArray.slice();
  let newArray = sliceArray.slice(1);
  console.log(newArray);
}

maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845
