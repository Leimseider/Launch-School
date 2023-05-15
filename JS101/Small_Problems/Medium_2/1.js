const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

function letterPercentages(string) {
  let outputObject = {
    lowercase: 0,
    uppercase: 0,
    neither: 0,
  };
  string.split('').forEach(element => {
    if (!ALPHABET.includes(element) &&
        !ALPHABET.toUpperCase().includes(element)) {
      outputObject.neither += 1;

    } else {
      if (element.toLowerCase() === element) outputObject.lowercase += 1;
      if (element.toUpperCase() === element) outputObject.uppercase += 1;
    }
  });
  console.log(convertToPercentages(outputObject));
}

function convertToPercentages(object) {
  let totalCharacters = object['lowercase'] + object['uppercase'] + object['neither'];
  object.lowercase =
    String(((object.lowercase / totalCharacters * 100)).toFixed(2));
  object.uppercase =
    String(((object.uppercase / totalCharacters * 100).toFixed(2)));
  object.neither =
    String(((object.neither / totalCharacters * 100).toFixed(2)));
  return object;
}


letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }