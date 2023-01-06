function digitList(number) {
  let newArray = number.toString().split('');
  newArray.forEach((element, index) => {
    newArray[index] = +element;
  });
  console.log(newArray);
}


digitList(12345);       // [1, 2, 3, 4, 5]
digitList(7);           // [7]
digitList(375290);      // [3, 7, 5, 2, 9, 0]
digitList(444);         // [4, 4, 4]