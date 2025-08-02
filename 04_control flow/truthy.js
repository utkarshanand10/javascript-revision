const userEmail = [];

if (userEmail) {
  console.log("Got user email");
} else {
  console.log("Don't have user email");
}
// falsy values
// undefined, null, 0, NaN, "", false,-0,BigInt 0n
// truthy values
// "0", " ", [], {}, true, -1, 1, "false",

// if(userEmail.length ===0 ){
// console.log("Object is empty")
// }

// const emptyObject = {};

// if (Object.keys(emptyObj).length === 0) {
//   console.log("Object is empty");
// }

// Nullish Coalescing Operator (??): null undefined

// let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 10;

val1 = null ?? 10 ?? 20; // if null then 10, else 20

console.log(val1);

// Terniary Operator

// condition ? expressionIfTrue : expressionIfFalse

const iceTeaPrice = 100;
iceTeaPrice >= 100 ? console.log("Expensive") : console.log("Cheap");
