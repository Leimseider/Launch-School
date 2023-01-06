function interleave(array1, array2) {
  let newArray = [];
  let idx = 0;
  array1.forEach(element => {
    newArray.push(element);
    newArray.push(array2[idx]);
    idx++;
  });
  console.log(newArray);
}



interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]