function staggeredCase(string) {
  let finalString = '';
  let counter = 0;
  let letters = 'abcdefghiklmnopqrstuvwxyz';
  for (let idx = 0; idx < string.length; idx++) {
    if (!letters.includes(string[idx].toLowerCase())) {
      finalString += string[idx];
      continue;
    }
    if (counter === 0) {
      finalString += string[idx].toUpperCase();
      counter = 1;
    } else {
      finalString += string[idx].toLowerCase();
      counter = 0;
    }
  }
  return finalString;
}

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);