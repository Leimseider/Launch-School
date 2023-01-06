let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

console.log(arr.map(element => {
  let newArray = element.filter(number => number % 3 === 0);
  return newArray;
})
);