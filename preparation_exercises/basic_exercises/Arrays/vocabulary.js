let vocabulary = [
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  ['excited', 'eager', 'enthused', 'animated']
];

function logWords(array) {
    for (let i = 0; i < array[0].length; i++) {
        console.log(array[0][i])
    }
    for (let i = 0; i < array[1].length; i++) {
        console.log(array[1][i])
    }
    for (let i = 0; i < array[2].length; i++) {
        console.log(array[2][i])
    }
}
logWords(vocabulary);