let flintstones = ["Fred", "Wilma"];
let newFlintstones = ['Barney', 'Betty', 'Bambam', 'Pebbles'];
console.log(flintstones.concat(newFlintstones));

flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);
flintstones = [].concat(...flintstones);
console.log(flintstones);