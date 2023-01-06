let consonants = 'abcdfghjklmnpqrstvwxz';
function doubleConsonants(string) {
  let length = string.length;
  let finalString = '';
  for (let idx = 0; idx < length; idx++) {
    if (consonants.includes(string[idx].toLowerCase())) {
      finalString += string[idx] + string[idx];
    } else {
      finalString += string[idx];
    }
  }
  console.log(finalString);
}

doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""