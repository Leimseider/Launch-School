function wordToDigit(string) {
  let wordsArray = string.split(" ");
  return wordsArray.map(word => {
    let newWord = word;
    for (let [key, value] of Object.entries(wordDigits)){
      newWord = newWord.replace(key, value);
    }
    return newWord;
  }).join(" ");
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."