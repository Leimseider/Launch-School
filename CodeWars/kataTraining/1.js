let counter1 = 0;
let counter2 = 0;
let counter3 = 0;

function validBraces(braces) {
  for (let idx = 0; idx < braces.length; idx++) {
    checkLetter(braces[idx]);
  }
  console.log(checkCounters(counter1, counter2, counter3));
  return checkCounters(counter1, counter2, counter3);
  
}

function checkLetter(letter) {
switch (letter) {
  case '(':
    counter1++;
    break;
  case ')':
    counter1--;
    break;
  case '{':
    counter2++;
    break;
  case '}':
    counter2--;
    break;
  case '[':
    counter3++;
    break;
  case ']':
    counter3--;
    break;
  }
}

function checkCounters(counter1, counter2, counter3) {
  if (counter1 !== 0) return false;
  if (counter2 !== 0) return false;
  if (counter3 !== 0) return false;
  return true;
}

validBraces("([{}])");
validBraces("()");
//()[]{}

/*"(){}[]"   =>  True
"([{}])"   =>  True
"(}"       =>  False
"[(])"     =>  False
"[({})](]" =>  False
const expr = 'Papayas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // Expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}*/