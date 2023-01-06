function isColorValid(color) {
  if (color === "blue" || color === "green") {
    return true;
  } else {
    return false;
  }
}

function isColorValid2(color) {
  return color === ("blue" || "green");
}
console.log(isColorValid2('blue'));

const isColorValid3 = color => console.log(color === ("blue" || "green"));
isColorValid3('red');