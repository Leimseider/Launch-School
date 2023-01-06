
/* 
  Iterate through the object
    create new array, equal to the keys of the object we're checking
    push to array (fruitArray[i]: list.(fruitArray[i]))

*/
let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

function selectFruit(list) {
  let fruitArray = Object.keys(list);
  let fruitObject = {};
  for (let counter = 0; counter < fruitArray.length; counter++) {
    let counterKey = fruitArray[counter];
    let counterValue = list[counterKey];

    if (list[counterKey] === 'Fruit') {
      fruitObject[counterKey] = counterValue;
    }
  }
  console.log(fruitObject);
}
selectFruit(produce); // => { apple: 'Fruit', pear: 'Fruit' }