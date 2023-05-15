const PERIOD = '.';
const NUMBER_OBJECT = {
  zero: '0',
  one: '1',
  two: '2',
  three: '3',
  four: '4',
  five: '5',
  six: '6',
  seven: '7',
  eight: '8',
  nine: '9',
};
let finalArray = [];

function wordToDigit(string) {
  finalArray = [];
  let wordArray = string.split(' ');
  separatePeriods(wordArray);
  changeToDigits(finalArray);
  let finalText = changeToText(finalArray);
  console.log(finalText);
}

function separatePeriods(array) {
  for (let idx = 0; idx < array.length; idx++) {
    if (array[idx].includes(PERIOD)) {
      let letterLength = (array[idx].length);
      finalArray.push(array[idx].substring(0, letterLength - 1));
      finalArray.push(PERIOD);
      continue;
    }
    finalArray.push(array[idx]);
  }
}

function changeToDigits(array) {
  array.forEach((element, index) => {
    if (Object.keys(NUMBER_OBJECT).includes(element)) {
      array[index] = NUMBER_OBJECT[element];
    }
  });
}

function changeToText(array) {
  let finalText = '';
  for (let idx = 0; idx < array.length; idx++) {
    if (array[idx] === PERIOD) continue;
    if (array[idx + 1] === PERIOD) {
      if (idx === array.length - 2) {
        finalText += array[idx] + PERIOD;
        return finalText;
      }
      finalText += array[idx] + PERIOD + ' ';
      continue;
    }
    finalText += array[idx] + ' ';
  }
}
/*push every element into new array
if the element contains a period, push substring into array, push period into array
change every element that is a number into digit
iterate through array, add/reassign each element to a string -
if the string has a period ahead of it, and is last word, add the string with the period (no space)
if the string has a period ahead of it, and is not last word, add the string with the period and a space
if the element is a period, continue
otherwise, just add the string
*/

wordToDigit('Please call me at five five five one two three four. Thanks.');
wordToDigit('The weight is done.');      // "The w8 is d1."
// "Please call me at 5 5 5 1 2 3 4. Thanks."