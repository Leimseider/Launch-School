let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};
let nestedPerson = []
for (let property in person) {
    nestedPerson.push([`${property}, ${person[property]}`]);
}
console.log(nestedPerson);
// Expected output:
// [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]]