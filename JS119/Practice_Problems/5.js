// Write a function that takes a string as an argument and
// returns the character that occurs least often in the
// given string. If there are multiple characters with the
// same lowest number of occurrences, then return the one
// that appears first in the string. When counting
// characters, consider uppercase and lowercase versions to
// be the same.

// Examples:

/*
creat blank objectl
split string into each letter;
count how many times each letter occurs ( +1 to object)
create variable to contain letter, compare each to see which is lowest, reassign
*/

function leastCommonChar(string) {
  let letterArray = string.split('');
  let letterObject = {};
  for (let idx = 0; idx < letterArray.length; idx++) {
    if (!letterObject[letterArray[idx].toLowerCase()]) {
      letterObject[letterArray[idx].toLowerCase()] = 1;
    } else {
      letterObject[letterArray[idx].toLowerCase()] += 1;
    }
  }
  let lowestNumber = Object.values(letterObject)[0];
  let indexPosition = 0;
  for (let idx = 0; idx < Object.values(letterObject).length; idx++) {
    if (Object.values(letterObject)[idx] < lowestNumber) {
      lowestNumber = Object.values(letterObject)[idx];
      indexPosition = idx;
    }
  }
  return Object.keys(letterObject)[indexPosition];

}

console.log(leastCommonChar("Hello World") === "h");
console.log(leastCommonChar("Peter Piper picked a peck of pickled peppers") ===
                            "t");
console.log(leastCommonChar("Mississippi") === "m");
console.log(leastCommonChar("Happy birthday!") === ' ');
console.log(leastCommonChar("aaaaaAAAA") === 'a');

// The tests above should each log "true".