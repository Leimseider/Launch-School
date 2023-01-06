

function wordSizes(string) {
  let arr = string.replace(/[^a-z0-9 ]/gi, '').split(' ');
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


wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
wordSizes("What's up doc?");                              // { "2": 1, "3": 1, "5": 1 }
wordSizes('');                                            // {}