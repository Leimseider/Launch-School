function swapCase(string) {
  let swappedString = '';
  string.split('').forEach(element => {
    if (element === element.toUpperCase()) {
      swappedString += element.toLowerCase();
    } else {
      swappedString += element.toUpperCase();
    }
  });
  console.log(swappedString);
}


swapCase('CamelCase');              // "cAMELcASE"
swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"