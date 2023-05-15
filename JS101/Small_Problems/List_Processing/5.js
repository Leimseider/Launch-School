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
  console.log(finalArray);
}

substrings('abcde');

// returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]