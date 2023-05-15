
function triangle(num1, num2, num3) {
  let triangleArray = [num1, num2, num3];
  let largestNumber = Math.max(...triangleArray);
  triangleArray.splice((triangleArray.indexOf(largestNumber)), 1);
  if ((triangleArray[0] + triangleArray[1]) <= largestNumber) {
    console.log('invalid');
    return;
  }
  if (triangleArray[0] === largestNumber &&
      triangleArray[1] === largestNumber) console.log('equilateral');
  else if (triangleArray[0] === largestNumber ||
    triangleArray[1] === largestNumber) console.log("isosceles");
  else console.log('scalene');
}

triangle(3, 3, 3);        // "equilateral"
triangle(3, 3, 1.5);      // "isosceles"
triangle(3, 4, 5);        // "scalene"
triangle(0, 3, 3);        // "invalid"
triangle(3, 1, 1);        // "invalid"
triangle(0, 0, 0);