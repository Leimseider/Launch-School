let numbers = [1, 2, 3, 4]; // true
let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false
function testArray(test) {
  if (Array.isArray(test) === true) {
    console.log(true);
  } else {
    console.log(false);
  }
}
testArray(numbers);
testArray(table);

// Second more concise test

function alternativeTest(test) {
  console.log(Array.isArray(test) ? true : false)
}
alternativeTest(numbers);
alternativeTest(table);

//Third most concise test
console.log(Array.isArray(numbers));
console.log(Array.isArray(table));