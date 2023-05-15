function getRandomAge(minNumber, maxNumber) {
  let randomAge = Math.ceil(Math.random() * (maxNumber - minNumber) + minNumber);
  console.log(`Teddy is ${randomAge} years old!`);
}

getRandomAge(20, 121);
//Teddy is 69 years old!