function signedIntegerToString(integer) {
 return (integer > 0 ? `+${integer}` : `${integer}`);
};

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");