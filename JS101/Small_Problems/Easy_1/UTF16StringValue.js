function utf16Value(string) {
 let summedValue = 0;
 for (let i = 0; i < string.length; i++) {
   summedValue += string.charCodeAt(i);
 }
 console.log(summedValue);
}

utf16Value('Four score');         // 984
utf16Value('Launch School');      // 1251
utf16Value('a');                  // 97
utf16Value('');                   // 0