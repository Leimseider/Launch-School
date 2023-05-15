function sum(integer) {
  let total = 0;
  integer.toString().split('').forEach(element => {
    total += +element;
  });
  console.log(total);
}

sum(23);           // 5
sum(496);          // 19
sum(123456789);    // 45