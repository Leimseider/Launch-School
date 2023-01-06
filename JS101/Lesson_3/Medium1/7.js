let answer = 42;

function messWithIt(someNumber) {
  answer += 8;
}

let newAnswer = messWithIt(answer);

messWithIt(answer);
messWithIt(answer);
messWithIt(answer);
console.log(answer - 8);