let codes = '0123456789abcdef';
let dashNumbers = [8, 12, 16, 20];
let finalString = '';

for (let idx = 0; idx < 32; idx++) {
  let codeNumber = Math.floor(Math.random() * 16);
  if (dashNumbers.includes(idx)) {
    finalString += '-';
  }
  finalString += codes[codeNumber];
}

console.log(finalString);
