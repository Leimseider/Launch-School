let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
  'motorcycle', 'motorcycle', 'car', 'truck'];
let counterArray = [];
function countOccurrences(array) {
  for (let i = 0; i < array.length; i++) {
    if (counterArray.includes(array[i])) {
      continue;
    }
    let counter = 1;
    counterArray.push(array[i]);
    for (let i2 = (i + 1); i2 < array.length; i2++) {
      if (array[i2] === array[i]) {
        counter++;
      }
    }
    console.log(`${array[i]} => ${counter}`);
  }
}

countOccurrences(vehicles);

/* console output -- your output sequence may be different
car => 4
truck => 3
SUV => 1
motorcycle => 2 */