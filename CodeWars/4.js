function solution(input, markers) {
  input = input.split('\n');
  let finalString = '';
  input.forEach((element, index) => {
    if (index > 0) finalString += '/n';
    for (let idx = 0; idx < element.length; idx++) {
      if (markers.includes(element[idx])) {
        break;
      }
      finalString += element[idx];
    }
  });
  return finalString.trimEnd();
}

//var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// result should == "apples, pears\ngrapes\nbananas"