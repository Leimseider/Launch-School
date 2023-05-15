function leadingSubstrings(string) {
  let stringArray = string.split('');
  let newArray = [];
  for (let idx = 0; idx < stringArray.length; idx++) {
    newArray.push(stringArray.slice(0, idx + 1).join(''));
  }
  return newArray;
}

function substrings(string) {
  let finalArray = [];
  for (let idx = 0; idx < string.length; idx++) {
    let substrings = string.substring(idx);
    finalArray = finalArray.concat(leadingSubstrings(substrings));
  }
  return finalArray;
}

function palindromes(string) {
  let palindromeString = substrings(string);
  palindromeString = palindromeString.filter(element => element.length > 1)
                                     .filter(element => element === element.split('').reverse().join(''));
  console.log(palindromeString);
}


palindromes('abcd');       // []
palindromes('madam');      // [ "madam", "ada" ]

palindromes('hello-madam-did-madam-goodbye');
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

palindromes('knitting cassettes');
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]