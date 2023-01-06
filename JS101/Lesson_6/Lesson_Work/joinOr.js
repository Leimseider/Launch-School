function joinOr(array, splitter = ', ', word = 'or') {
  if (array.length > 1) {
    console.log(array.slice(0, -1)
                     .join(splitter) +
                     splitter +
                     word +
                     ' ' +
                     array.slice(-1) +
                     '.');
  } else if (array.length === 1) {
    console.log(array + '.');
  } else {
    console.log('');
  }
}


joinOr([1, 2, 3]);               // => "1, 2, or 3"
joinOr([1, 2, 3], '; ');         // => "1; 2; or 3"
joinOr([1, 2, 3], ', ', 'and');  // => "1, 2, and 3"
joinOr([]);                      // => ""
joinOr([5]);                     // => "5"
joinOr([1, 2]);                  // => "1 or 2"