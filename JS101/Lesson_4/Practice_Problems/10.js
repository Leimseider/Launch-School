let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};
// my method
let minimumAge = 0;
let agesArray = Object.values(ages);
for (let i = 0; i < agesArray.length; i++) {
  if (minimumAge === 0) {
    minimumAge = agesArray[i];
  } else if (agesArray[i] < minimumAge) {
    minimumAge = agesArray[i];
  }
}
console.log(minimumAge);
// solution method
console.log(Math.min(...agesArray)); // => 10