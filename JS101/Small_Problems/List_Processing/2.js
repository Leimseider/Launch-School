/* eslint-disable max-len */
/* eslint-disable indent */
//zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, 
//fourteen, fifteen, sixteen, seventeen, eighteen, nineteen
let numbersAsWords = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven',
                      'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen',
                      'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

function alphabeticNumberSort(array) {
  let finalArray = array.slice().sort((a, b) => (numbersAsWords[a] > numbersAsWords[b] ? 1 : -1));
  console.log(finalArray);
  console.log(array);
}


//obj.sort((a,b) => (a.id > b.id) ? 1 : -1)
// for each element in the array (numbers)
//

alphabeticNumberSort(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]