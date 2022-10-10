function evenOrOdd(number) {
   if (!Number.isInteger(number)) {
    console.log('Sorry, the value you passed is not an integer.');
    return;
  }
    if (number % 2 === 0) {
        console.log(`${number} is an even number!`)
    }   else {
        console.log(`${number} is an odd number!`)
    } 
    }
evenOrOdd(6)