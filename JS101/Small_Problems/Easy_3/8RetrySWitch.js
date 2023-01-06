/* eslint-disable max-lines-per-function */
function getGrade(num1, num2, num3) {
  let averageGrade = (num1 + num2 + num3) / 3;
  
  switch (true) {
    case averageGrade >= 90:
      console.log('A');
      break;
    case averageGrade >= 80 && averageGrade < 90:
      console.log('B');
      break;
    case averageGrade >= 70 && averageGrade < 80:
      console.log('C');
      break;
    case averageGrade >= 60 && averageGrade < 70:
      console.log('D');
      break;
    default:
      console.log('F');
  }
}

getGrade(95, 90, 93);    // "A"
getGrade(50, 50, 95);    // "D"