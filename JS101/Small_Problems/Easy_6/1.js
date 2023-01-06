function repeater(string) {
  let length = string.length;
  let finalString = '';
  for (let idx = 0; idx < length; idx++) {
    finalString += string[idx] + string[idx];
  }
  console.log(finalString);
}


repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""