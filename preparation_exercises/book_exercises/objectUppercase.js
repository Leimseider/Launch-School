let obj = {
  b: 2,
  a: 1,
  c: 3,
};
let objKeys = Object.keys(obj);
const upperCaseKeys = objKeys.map(keys => keys.toUpperCase());
console.log(upperCaseKeys)
