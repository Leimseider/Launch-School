function wordToDigit(string) {
  let finalString = '';
  string.split(' ').forEach(element => {
    switch (element) {
      case "one":
        finalString += " 1";
        break;
      case "two":
        finalString += " 2";
        break;
      case "three":
        finalString += " 3";
        break;
      case "four":
        finalString += ' 4';
        break;
      case "five":
        finalString += " 5";
        break;
      case "six":
        finalString += " 6";
        break;
      case "seven":
        finalString += " 7";
        break;
      case "eight":
        finalString += " 8";
        break;
      case "nine":
        finalString += " 9";
        break;
      case "zero":
        finalString += " 0";
        break;
      default:
        finalString += `${element} `;
    }
  });
  console.log(finalString);
}

wordToDigit('Please call me at five five five one two three four. Thanks.');
// "Please call me at 5 5 5 1 2 3 4. Thanks."