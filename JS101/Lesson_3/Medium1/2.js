//My first solution

let munstersDescription = "The Munsters are creepy and spooky.";
let splitArray = munstersDescription.split('');
let swappedArray = []
let i = 0
  while (i < splitArray.length) {
    if (splitArray[i].toUpperCase() === splitArray[i]) {
      swappedArray.push(splitArray[i].toLowerCase());
    } else {
      swappedArray.push(splitArray[i].toUpperCase());
    }
    i++;
  }
console.log(swappedArray.join(''));

//Concise solution
console.log(munstersDescription.split('').map(function(letter) {
  if (letter.toUpperCase() === letter) {
    return letter.toLowerCase();
    } else {
    return letter.toUpperCase();
    }
  }).join(''));
