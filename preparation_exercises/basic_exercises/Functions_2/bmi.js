function calculateBMI(height, weight) {
let bmi = weight/ height**2;
let bmiAdjusted = (bmi * 10000);
console.log(bmiAdjusted.toFixed(2));
}

calculateBMI(157.5, 61.7); // "24.69"