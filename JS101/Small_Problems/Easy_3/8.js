/* eslint-disable max-lines-per-function */
function getGrade(num1, num2, num3) {
  let averageGrade = Math.floor((num1 + num2 + num3) / 3 / 10);
  switch (averageGrade) {
    case 10:
      console.log('A');
    case 9:
      console.log('A');
      break;
    case 8:
      console.log('B');
      break;
    case 7:
      console.log('C');
      break;
    case 6:
      console.log('D');
      break;
    default:
      console.log('F');
  }
}


getGrade(95, 90, 93);    // "A"
getGrade(50, 50, 95);    // "D"