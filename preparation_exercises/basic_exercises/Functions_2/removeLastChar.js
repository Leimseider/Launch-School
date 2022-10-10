function removeLastChar(string) {
    let array = string.split('');
    array.pop();
    console.log(array.join(''));
}


removeLastChar('ciao!'); // 'ciao'
removeLastChar('hello'); // 'hell'