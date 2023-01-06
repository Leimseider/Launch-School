function triangle(number) {
  let spaceCounter = number - 1;
  let starCounter = 1;
  let space = ' ';
  let star = '*';
  for (let i = 0; i < number; i++) {
    console.log(`${space.repeat(spaceCounter)}${star.repeat(starCounter)}`);
    spaceCounter--;
    starCounter++;
  }
}

triangle(5);