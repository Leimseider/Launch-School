function multisum(integer) {
  let sumResult = 0;
  for (let i = 3; i <= integer; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sumResult += i;
    }
  } console.log(sumResult);
}
multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168