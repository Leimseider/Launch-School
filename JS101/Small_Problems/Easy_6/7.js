function swapName(string) {
  console.log(string.split(' ').reverse().join(', '));
}

function swapNameFurther(string) {
  let lastName = string.split(' ')[string.split(' ').length - 1];
  console.log(lastName + ', ' + string.split(' ').slice(0, -1).join(' '));
}
swapName('Joe Roberts');    // "Roberts, Joe"
swapNameFurther('Karl Oskar Henriksson Ragvals');    // "Ragvals, Karl Oskar Henriksson"