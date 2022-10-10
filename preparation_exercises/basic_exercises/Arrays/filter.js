function counter(array) {
    let count = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 100) {
            count++
        }
    } 
    console.log(count)
}

let scores = [96, 47, 113, 89, 100, 102];
console.log(counter(scores));