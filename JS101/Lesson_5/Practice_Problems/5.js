let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

//method 1
function addAges1(object) {
  let objectLength = Object.keys(munsters).length;
  let keysOnly = Object.values(munsters);
  let agesArray = [];
  for (let i = 0; i < objectLength; i++) {
    if (keysOnly[i].gender === 'male') {
      agesArray.push(keysOnly[i].age);
    }
  }
  console.log((agesArray).reduce((accumulator, currentValue) =>
    accumulator + currentValue));
}
addAges1(munsters);

//method 2 with map and filter
function addAges2(object) {
  let objectLength = Object.keys(munsters).length;
  let keysOnly = Object.values(munsters);
  let agesArray = keysOnly.map((element) => {
    if (element.gender === 'male') {
      return element.age;
    }
  }).filter(element => element !== undefined);
  console.log((agesArray).reduce((accumulator, currentValue) =>
    accumulator + currentValue));
}
addAges2(munsters);
