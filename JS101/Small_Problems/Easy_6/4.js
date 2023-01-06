function centerOf(string) {
  let halfLength = Math.floor(string.length / 2);
  if (string.length % 2 === 0) {
    console.log(string[halfLength - 1] + string[halfLength]);
  } else {
    console.log(string[halfLength]);
  }
}

centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"