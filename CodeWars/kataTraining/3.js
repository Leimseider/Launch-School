snail = function(array) {
  let finalArray = [];
  for (let idx = 0; idx < array[0].length; idx++) {
    finalArray.push(array[0][idx]);
  }
  for (let idx = 1; idx < array.length; idx++) {
    let finalElement = array[idx].length - 1;
    finalArray.push(array[idx][finalElement]);
  }
  for (let idx = array.length - 2; idx >= 0; idx--) {
    let lastArray = array.length - 1;
    finalArray.push(array[lastArray][idx]);
  }
  for (let idx = array.length - 2; idx > 0; idx--) {
    finalArray.push(array[idx][0]);
  }
  console.log(finalArray);
};


let array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array); //#=> [1,2,3,6,9,8,7,4,5]