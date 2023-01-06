let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
let object = {};
/* iterate through flintstones
each element needs to be added to an object as a key;
then each key needs to be assigned the value of its index
*/

for (let idx = 0; idx < flintstones.length; idx++) {
  object[flintstones[idx]] = idx;
}
console.log(object);