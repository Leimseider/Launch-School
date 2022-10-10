function isBlank(string) {
    if (string.trim().length === 0) {
       console.log('True.')
    } else {
        console.log('False.')
    }
}

isBlank('mars'); // false
isBlank('  ');   // true
isBlank('');     // true