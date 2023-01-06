function swap(string) {
  let swapArray = string.split(' ');
  let finalArray = [];
  swapArray.forEach((element, index) => {
    let firstLetter = swapArray[index][0];
    let arrayLength = swapArray[index].length - 1;
    let lastLetter = swapArray[index][arrayLength];
    if (swapArray[index].length === 1) {
      finalArray[index] = element;
    } else {
      finalArray[index] = lastLetter +
                          swapArray[index].split('').slice(1, -1).join('') +
                          firstLetter;
    }
  });
  console.log(finalArray.join(' '));
}

swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"