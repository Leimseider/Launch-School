function isPalindrome(string) {
  let reversedArray = string.split('').reverse().join('');
  console.log(reversedArray === string);
}


isPalindrome('madam');               // true
isPalindrome('Madam');               // false (case matters)
isPalindrome("madam i'm adam");      // false (all characters matter)
isPalindrome('356653');              // true