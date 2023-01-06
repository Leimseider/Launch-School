function crunch(string) {
  let arr = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== string[(i - 1)]) {
      arr.push(string[i]);
    }
  }
  console.log(arr.join(''));
}

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""