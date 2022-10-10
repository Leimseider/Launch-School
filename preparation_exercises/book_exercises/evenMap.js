let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(array) {
   let newArray = array.map((x) => x.length);
   let result = newArray.filter((x) => x % 2 === 1);
   return result;
}
        
console.log(oddLengths(arr)); // => [1, 5, 3]