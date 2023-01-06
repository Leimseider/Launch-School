// eslint-disable-next-line max-lines-per-function
function cleanUp(string) {
  let cleanString = '';
  let finalString ='';
  for (let i = 0; i < string.length; i++) {
    if (string[i] === '-' ||
        string[i] === '+' ||
        string[i] === '*' ||
        string[i] === '&' ||
        string[i] === '?' ||
        string[i] === "'") {
      cleanString += " ";
    } else {
      cleanString += string[i];
    }
  }
  for (let i = 0; i < cleanString.length; i++) {
    if (cleanString[i] === " " && cleanString[i + 1] === " ") {
      // do nothing
    } else {
      finalString += cleanString[i];
    }
  }
  console.log(finalString);
}

cleanUp("---what's my +*& line?");    // " what s my line "