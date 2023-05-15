

function letterCaseCount(string) {
  let allLetters = 'abcdefghijklmnopqrstuvwxyz';
  let allCapitals = allLetters.toUpperCase();
  let finalObject = {lowercase: 0, uppercase: 0, neither: 0};

  string.split('').forEach((character) => {
    switch (true) {
      case allLetters.includes(character):
        finalObject.lowercase += 1;
        break;
      case allCapitals.includes(character):
        finalObject.uppercase += 1;
        break;
      default:
        finalObject.neither += 1;
    }
  });
  console.log(finalObject);
}


letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }