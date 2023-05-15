function fridayThe13ths(year) {
  let counter = 0;
  for (let idx = 0; idx < 12; idx++) {
    let testDate = new Date(year, idx, 13);
    if (testDate.getDay() === 5) counter++;
  }
  console.log(counter);
}

fridayThe13ths(1986);      // 1
fridayThe13ths(2015);      // 3
fridayThe13ths(2017);      // 2