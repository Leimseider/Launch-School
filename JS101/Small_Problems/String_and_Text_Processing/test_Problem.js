let a = 2;

function change(letter) {
  letter += 5;
  console.log(letter);
  console.log(a);
}
change(a);
console.log(a);

function change2(a) {
  a += 5;
  console.log(a);
}
change2(a);
console.log(a);

function change3(letter) {
  a += 5;
  console.log(a);
}

change3(a);
console.log(a);