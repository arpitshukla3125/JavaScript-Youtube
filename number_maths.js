const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString());
// console.log(balance.toFixed(2));

const otherNumber = 11223.3255232
// console.log(otherNumber.toPrecision(6))

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// ++++++++++++++maths++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-45));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.3));
// console.log(Math.floor(2.8));
// console.log(Math.min(2,3,5,1));
// console.log(Math.max(2,5,66,5,4));

console.log(Math.random());
console.log((Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);