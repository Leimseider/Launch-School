function removeVowels(array) {
  let vowels = "aeiouAEIOU";
  let newArray = [];
  array.forEach(element => {
    let stringToPush = '';
    let individualLetters = element.split('');
    individualLetters.forEach(letter => {
      if (!vowels.includes(letter)) stringToPush += letter;
    });
    newArray.push(stringToPush);
  });
  console.log(newArray);
}


removeVowels(['abcdefghijklmnopqrstuvwxyz']);         // ["bcdfghjklmnpqrstvwxyz"]
removeVowels(['green', 'YELLOW', 'black', 'white']);  // ["grn", "YLLW", "blck", "wht"]
removeVowels(['ABC', 'AEIOU', 'XYZ']);                // ["BC", "", "XYZ"]