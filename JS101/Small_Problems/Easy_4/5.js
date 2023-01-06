/* eslint-disable indent */
function isRealPalindrome(string) {
  let stringArray = string.split(' ')
                          .join('')
                          .split(',')
                          .join('')
                          .split("'")
                          .join('')
                          .toLowerCase()
                          .split('')
                          .reverse()
                          .join('');
  let reversedString = stringArray.split('').reverse().join('')
  reversedString === stringArray ? console.log(true) : console.log(false);
  console.log(stringArray);
}

isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false