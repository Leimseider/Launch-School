let lineNumber = 1;
let phrase = 'The Flintstones Rock!'
let padStartValue = phrase.length;

while (lineNumber < 11) {
  console.log(phrase.padStart(padStartValue, ' '))
  lineNumber++;
  padStartValue = padStartValue + 1;
}
