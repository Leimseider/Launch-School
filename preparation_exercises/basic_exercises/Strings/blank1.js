function isBlank(string) {
    if (string === '') {
       console.log('True.')
    } else {
        console.log('False.')
    }
}

isBlank('mars'); // false
isBlank('  ');   // false
isBlank('');     // true