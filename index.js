// index.js
const sum = require("./sum");
const multiply = require("./multiplication");
const subtract = require("./subtraction");
const divide = require("./division");
let sumA = 3;
let sumB = 5;
let sumResult = sum(sumA, sumB);
console.log(sumResult);

let mulA = 4;
let mulB = 6;
let mulResult = multiply(mulA, mulB);
console.log(mulResult);

let subA = 4;
let subB = 6;
let subResult = subtract(subA, subB);
console.log(subResult);

let divA = 4;
let divB = 6;
let divResult = divide(mulA, mulB);
console.log(divResult);
