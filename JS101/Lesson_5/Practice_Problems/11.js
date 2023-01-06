let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

console.log(arr.map((element, index) => {
  let emptyObj = {};
  for (let i = 0; i < Object.keys(arr[index]).length; i++) {
    emptyObj[Object.keys(element)[i]] = Object.values(element)[i] + 1;
  }
  return emptyObj;
}));
console.log(arr);