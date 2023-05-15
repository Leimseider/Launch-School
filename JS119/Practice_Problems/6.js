/*
split the string into characters
assign new variable to check[0]
set repeatcount to check.length - 1
set counter variable to 0

create loop to iterate throguh each character from string
  if character = check[0]
    is next character === to check[0] (repeat this for the amount of repeatcount)
    if all yes, add 1 to counter variable

  return counter variable
*/

function solution(string, check) {
 let stringArray = string.split('');
 let targetLetter = check[0];
 let repeatCount = check.length - 1;
 let totalCount = 0;

 for (let idx = 0 ; idx < stringArray.length; idx++) {
  if (stringArray[idx] === targetLetter) {
    for (let idx2 = 1; idx2 <= repeatCount; idx2++) {
      if (stringArray[idx + idx2] !== targetLetter) break;
      if (idx2 === repeatCount) totalCount++;
    }
  }
 }
 console.log(totalCount);
}

solution('aa_bb_cc_dd_bb_e', 'bb')// # should return 2 since bb shows up twice
solution('aaabbbcccc', 'bbb')// # should return 1