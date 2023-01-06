function stringy(number) {
  let array = [];
  for (let i = 0; i < number; i++) {
    if (array[i - 1] === undefined) {
      array.push('1');
    } 
      else if (array[i - 1] === '1') {
      array.push('0')
    } else if (array[i - 1] === '0') {
      array.push('1')
    }
   }
   console.log(array.join(''));
  }
  
  stringy(6);    // "101010"
  stringy(9);    // "101010101"
  stringy(4);    // "1010"
  stringy(7);    // "1010101"