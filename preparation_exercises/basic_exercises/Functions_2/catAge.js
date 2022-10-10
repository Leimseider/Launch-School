
 
function catAge(number) {
    let age = number;
    let finalAge = 0;
     while (age > 2) {
         age--; 
        finalAge += 4;
      }
    if (age === 2) {
        finalAge +=  9;
        age--;
    }
    if (age === 1) {
        finalAge += 15;
        } 
    console.log(finalAge);
}

catAge(0); // 0
catAge(1); // 15
catAge(2); // 24
catAge(3); // 28
catAge(4); // 32