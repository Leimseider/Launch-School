let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};
let vowels = 'aeiou';

let splitArray = Object.values(obj);

splitArray.forEach((element) => {
  element.forEach((element) => {
    element.split('').forEach((element) => {
      if (vowels.includes(element)) {
        console.log(element);
      }
    });
  });
});