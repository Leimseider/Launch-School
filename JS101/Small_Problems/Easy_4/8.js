function wordSizes(string) {
  let arr = string.split(' ');
  let finalObject = {};
  arr.forEach(element => {
    let word = element.length;
    if (word === 0) {
      return;
    }
    if (finalObject[word]) {
      finalObject[word] += 1;
    } else {
      finalObject[word] = 1;
    }
  });
  console.log(finalObject);
}


wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}