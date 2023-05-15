// Write a function named toWeirdCase that accepts a string,
// and returns the same sequence of characters with every
// 4th character in every second word converted to
// uppercase. Other characters should remain the same.

// Examples:

/* create empty array;
  split original sentence into words
    if word is odd number, push word
  if word is even number, add each letter to NEW variable (string),
    if letter is 4th character, then capitalize it
    push word to array
  return first array joined with space
*/

function toWeirdCase(string) {
  let finalArray = [];
  let wordArray = string.split(' ');
  for (let idx = 0; idx < wordArray.length; idx++) {
    if (idx % 2 === 0) finalArray.push(wordArray[idx]);
    if (idx % 2 === 1) {
      let letterArray = wordArray[idx].split('');
      let emptyString = '';
      letterArray.forEach((element, index) => {
        if ((index + 1) % 4 === 0) emptyString += element.toUpperCase();
        if ((index + 1) % 4 !== 0) emptyString += element;
      });
      finalArray.push(emptyString);
    }
  }
  return finalArray.join(' ');
}
//19 minutes

console.log(
  toWeirdCase('Lorem Ipsum is simply dummy text of the printing world') ===
              'Lorem IpsUm is simPly dummy texT of the printing worLd');
console.log(
  toWeirdCase('It is a long established fact that a reader will be distracted') ===
              'It is a lonG established facT that a reader wilL be disTracTed');
console.log(toWeirdCase('aaA bB c') === 'aaA bB c');
console.log(
  toWeirdCase('Miss Mary Poppins word is supercalifragilisticexpialidocious') ===
              'Miss MarY Poppins worD is supErcaLifrAgilIstiCexpIaliDociOus');

// The tests above should print "true".