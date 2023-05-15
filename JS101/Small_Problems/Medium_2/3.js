function triangle(num1, num2, num3) {
  let triangleArray = [num1, num2, num3];
  if (triangleArray.includes(0)) {
    console.log('invalid');
    return;
  }
  if (triangleArray.reduce((acc, cur) => acc + cur, 0) !== 180) {
     console.log('invalid');
     return;
  }
  for (let idx = 0; idx < triangleArray.length; idx++) {
    if (triangleArray[idx] > 90) {
      console.log('obtuse');
      return;
    } else if (triangleArray[idx] === 90) {
      console.log('right');
      return;
    }
  }
  console.log('acute');
}

triangle(60, 70, 50);       // "acute"
triangle(30, 90, 60);       // "right"
triangle(120, 50, 10);      // "obtuse"
triangle(0, 90, 90);        // "invalid"
triangle(50, 50, 50);       // "invalid"