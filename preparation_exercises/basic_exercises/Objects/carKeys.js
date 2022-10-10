let vehicle = {
  manufacturer: 'Tesla',
  model: 'Model X',
  year: 2015,
  range: 295,
  seats: 7
};
let carArray = []
for (let detail in vehicle) {
    carArray.push(detail);
}
console.log(carArray)