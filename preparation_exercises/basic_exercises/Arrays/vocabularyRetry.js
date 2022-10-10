let vocabulary = [
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  ['excited', 'eager', 'enthused', 'animated']
];

function logWords(array) {
    for (let i = 0; i < array.length; i ++) {
        let subArray = array[i] ;
        
        for (let j = 0; j < subArray.length; j++) {
            console.log(subArray[j]);
        }
    }
}
logWords(vocabulary);