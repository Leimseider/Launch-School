let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];

let obj = {};

for (let idx = 0; idx < arr.length; idx++) {
  obj[arr[idx][0]] = arr[idx][1];
}

console.log(obj);

// expected value of object
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }