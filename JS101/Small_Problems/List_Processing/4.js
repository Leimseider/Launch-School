function leadingSubstrings(string) {
  let stringArray = string.split('');
  let newArray = [];
  for (let idx = 0; idx < stringArray.length; idx++) {
    newArray.push(stringArray.slice(0, idx + 1).join(''));
  }
  console.log(newArray);
}

leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]