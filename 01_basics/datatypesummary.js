// Primitive Data Types
let num = 5;
let Boolean = true;
let str = "Hello";
let isTrue = true;
let isFalse = false;
let und;
let nul = null;

console.log(typeof Boolean);
console.log(typeof num);
console.log(typeof str);
console.log(typeof isTrue);
console.log(typeof isFalse);
console.log(typeof und);
console.log(typeof nul);

const score = 100;
const storeValue = 100.3;

const isLoggedIn = true;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id == anotherId);

const bigNUmber = BigInt(1234567890123456789012345678901234567890);

const heros = ["nagraj", "shaktimaan", "doga", "bhavesh joshi"];

console.log(typeof heros);

// Reference Data Types(Non-Primitive Data Types)
// Array, Object, Function, Date, RegExp, Map, Set

// ----------------------------------------------------------------

// Stack (Primitive Data Types), Heap(Non-Primitive Data Types)

let user = "Utkarsh";

let user2 = user;
user2 = "Utkarsh Anand";

console.log(user);
console.log(user2);

let userOne = {
  email: "user@gmail.com",
  userId: 1234,
};

let userTwo = userOne;
