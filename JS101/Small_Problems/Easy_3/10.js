function century(number) {
  let numberResult = Math.ceil(number / 100).toString();
  let finalDigit = numberResult[(numberResult.length - 1)];
  if (numberResult[(numberResult.length - 2)] === '1') {
    numberResult += 'th';
  } else if (finalDigit === '1') {
    numberResult += "st";
  } else if (finalDigit === '2') {
    numberResult += 'nd';
  } else if (finalDigit === '3') {
    numberResult += "rd";
  } else {
    numberResult += 'th';
  }
  console.log(numberResult);
}

century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"