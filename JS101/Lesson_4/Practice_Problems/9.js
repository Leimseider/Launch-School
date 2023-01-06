let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let totalAge = 0;
let ageArray = Object.values(ages).forEach(age => totalAge += age);
console.log(totalAge);