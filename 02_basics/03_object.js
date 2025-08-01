const mySym = Symbol("mykey1");

const obj = {
  name: "John",
  [mySym]: "mykey1",
  age: 30,
  email: "utkarshanand133@gmail.com",
  isLoggedIn: true,
  lastLoginDays: ["Mon", "Tue", "Wed"],
};

console.log(obj);
console.log(obj.name);
console.log(obj[mysim]); // Accessing property using string key

console.log(obj.lastLoginDays); // Accessing property using variable key

obj.email = "utkarsh@gmail.com";
// Object.freeze(obj); // Freezes the object, preventing further modifications
obj.email = "newemail@gmail.com"; // This will not change the email
console.log(obj);

obj.greeting = function () {
  console.log("Hello, " + this.name);
};

console.log(obj.greeting);
