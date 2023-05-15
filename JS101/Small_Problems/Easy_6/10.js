function reverseWords(string) {
  let finalArray = [];
  let wordArray = string.split(' ');
  for (let idx = 0; idx < wordArray.length; idx++) {
    if (wordArray[idx].length > 4) {
      let letterArray = wordArray[idx].split('');
      finalArray.push(letterArray.reverse().join(''));
    } else {
      finalArray.push(wordArray[idx]);
    }
  }
  console.log(finalArray.join(' '));
}


reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"