let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];

// Your code.

// logs:
// paprika
// tofu
// garlic
// quinoa
// carrots
// broccoli
// hummus

function checkOffList(array) {
    for (let i = 1; i <= array.length;) {
        console.log(array.shift());
    }
    
}
checkOffList(groceryList);
console.log(groceryList); // []