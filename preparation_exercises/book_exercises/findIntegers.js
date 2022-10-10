let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
function findIntegers(array) {
             let result = array.filter(value => Number.isInteger(value));
        console.log(result)
        }
        
let integers = findIntegers(things);
console.log(integers);
 