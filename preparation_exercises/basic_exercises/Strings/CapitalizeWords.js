function capitalized(string) {
    let capitalizedWords = [];
    let words = string.split(' ');
        for (let i = 0; i < string.length; i++) {
            let word = words[i]
        capitalizedWords.push(word[0].toUpperCase() + word.slice(1));
        if (i === word.length) {
            console.log(capitalizedWords.join(' '))
        }
    }
}
capitalized('launch school tech & talk');