let statement = "The Flintstones Rock";
let letterObject = {};
/* 

{ T: 1, h: 1, e: 2, F: 1, l: 1, ... }
*/

for (let i = 0; i < statement.length; i++) {
  let targetLetter = statement[i];
  let letterCounter = 0;
  if (letterObject[targetLetter]) {
    continue;
  }
  if (targetLetter === ' ') {
    continue;
  }
  for (let i2 = i; i2 < statement.length; i2++) {
    if (statement[i2] === targetLetter) {
      letterCounter += 1;
    }
  }
  letterObject[targetLetter] = letterCounter;
}
console.log(letterObject);