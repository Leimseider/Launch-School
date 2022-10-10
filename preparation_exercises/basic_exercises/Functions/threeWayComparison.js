function compareByLength(firstArray, secondArray) {
    if (firstArray.length < secondArray.length) {
        console.log(-1);
    }
    else if (firstArray.length === secondArray.length) {
        console.log(0);
    } else {
        console.log(1)
        }
    }
compareByLength('patience', 'perseverance'); // -1
compareByLength('strength', 'dignity');      //  1
compareByLength('humor', 'grace');           //  0