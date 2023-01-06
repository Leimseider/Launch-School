let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

function compareNumbers(a, b) {
  return b - a;
}

console.log(arr.map(element => {
  if (typeof element[0] === 'string') {
    return element.slice().sort().reverse();
  } else {
    return element.slice().sort(compareNumbers);
  }
})
);
