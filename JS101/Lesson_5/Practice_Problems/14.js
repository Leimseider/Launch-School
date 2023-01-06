let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

//[["Red", "Green"], "MEDIUM", ["Red", "Green"], ["Orange"], "LARGE"]
/*Given the following data structure write some code to return an array
containing the colors of the fruits and the sizes of the vegetables.
The sizes should be uppercase, and the colors should be capitalized. */

let newArray = [];

for (let element in obj) {
  if (obj[element].type === 'fruit') {
    let localArray = [];
    for (let i = 0; i < obj[element].colors.length; i++) {
      localArray.push(obj[element].colors[i][0].toUpperCase() +
      obj[element].colors[i].split('').slice(1).join(''));
    }
    newArray.push(localArray);
  } else {
    newArray.push(obj[element].size.toUpperCase());
  }
}
console.log(newArray);
