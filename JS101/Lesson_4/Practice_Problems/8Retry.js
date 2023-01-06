let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
let obj = {};
// Method 1
flintstones.forEach((element, index) => {
  obj[element] = index;
});
console.log(obj);
//Method 2
flintstones.forEach((element) => {
  obj[element] = flintstones.indexOf(element);
});
console.log(obj);

