function featured(number) {
  if (number >= 9876543201) {
    console.log("There is no possible number that fulfills those requirements.");
    return;
  }
  let finalNumber = oddMultiple7(number);
  let counter = 0;
  while (counter === 0) {
    if (checkMultiples(finalNumber) === true) {
      counter += 1;
      console.log(finalNumber);
    }
    finalNumber += 14;
  }
}

function oddMultiple7(number) {
  do {
    number += 1;
  } while (number % 7 !== 0 || number % 2 !== 1 );

  return number;
}

function checkMultiples(number) {
  let numberString = String(number).split('');
  for (let idx = 0; idx < numberString.length; idx++) {
    for (let idx2 = idx + 1; idx2 <= numberString.length; idx2++) {
      if (numberString[idx] === numberString[idx2]) {
        return false;
      } else if (idx === numberString.length - 1 &&
                idx2 === numberString.length) {
        return true;
      }
    }
  }
  return false;
}

/* A featured number (something unique to this exercise) is an odd number 
that is a multiple of 7, with all of its digits occurring exactly once each. 
For example, 49 is a featured number, but 98 is not (it is not odd), 
97 is not (it is not a multiple of 7), 
and 133 is not (the digit 3 appears twice).
*/

featured(12);           // 21
featured(20);           // 21
featured(21);           // 35
featured(997);          // 1029
featured(1029);         // 1043
featured(999999);       // 1023547
featured(999999987);    // 1023456987
featured(9876543186);   // 9876543201
featured(9876543200);   // 9876543201
featured(9876543201);   // "There is no possible number that fulfills those requirements."
