function isPalindromicNumber(number) {
  let reverseNumber = +number.toString().split('').reverse().join('');
  console.log(number === reverseNumber);
}

isPalindromicNumber(34543);        // true
isPalindromicNumber(123210);       // false
isPalindromicNumber(22);           // true
isPalindromicNumber(5);            // true