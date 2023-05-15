function staggeredCase(string) {
  let finalString = '';
  for (let idx = 0; idx < string.length; idx++) {
    if (idx % 2 === 0) finalString += string[idx].toUpperCase();
    else finalString += string[idx].toLowerCase();
  }
  return finalString;
}

staggeredCase('I Love Launch School!');        // "I LoVe lAuNcH ScHoOl!"
staggeredCase('ALL_CAPS');                     // "AlL_CaPs"
staggeredCase('ignore 77 the 4444 numbers');   // "IgNoRe 77 ThE 4444 nUmBeRs"