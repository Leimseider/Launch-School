function wordCap(string) {
  let finalString = '';
  for (let idx = 0; idx < string.length; idx++) {
    if (string.split('')[idx - 1] ===  undefined ||
        string.split('')[idx - 1] === ' ') {
          finalString += string[idx].toUpperCase();
    } else {
      finalString += string[idx].toLowerCase();
    }
  }
  console.log(finalString);
}

wordCap('four score and seven');       // "Four Score And Seven"
wordCap('the javaScript language');    // "The Javascript Language"
wordCap('this is a "quoted" word');    // 'This Is A "quoted" Word'