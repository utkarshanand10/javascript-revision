const score = 100;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2)); // converts to string with 2 decimal places

const otherNum = 34.56789;
console.log(otherNum.toPrecision(3)); // gives precise value 34.6 you get 3 digit

const hundreds = 1000000;
console.log(hundreds.toLocaleString("en-IN")); // 10,00,000 convert to indian format

//--------------------------------------------------------

console.log(Math);
console.log(Math.abs(-4)); // absolute value removes negative sign
console.log(Math.round(4.3)); // rounds to nearest integer
console.log(Math.ceil(4.3)); // rounds up
console.log(Math.floor(4.7)); // rounds down
console.log(Math.min(4, 7, 9, 1, 2)); // minimum value
console.log(Math.max(4, 7, 9, 1, 2)); // maximum value
console.log(Math.random()); // random number between 0 and 1
console.log(Math.random() * 10); // random number between 0 and 10

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
