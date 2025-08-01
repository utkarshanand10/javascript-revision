function sayMyName() {
  console.log("U");
  console.log("T");
  console.log("K");
}

// sayMyName();

// function addTwoNumbers(number1, number2) {
//   console.log(number1 + number2);
// }
function addTwoNumbers(number1, number2) {
  let result = number1 + number2;
  return result; // by returning the result the result is stored in a variable
}

const result = addTwoNumbers(5, 10);
// console.log("result:", result);

function loginUserMessage(username = "ram") {
  return `${username} has logged in successfully!`;
}
// loginUserMessage("Utkarsh");

// console.log(loginUserMessage("Utkarsh"));

//--------------------------------------------------------------------------------

function calculateCarPrice(...num1) {
  return num1;
}

console.log(calculateCarPrice(1000, 2000, 3000));

const user = {
  username: "Utkarsh",
  age: 25,
  email: "utkarsh@example.com",
};

function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.age}`
  );
}
// handleObject(user);

handleObject({
  username: "sam",
  age: 30,
});

const myNewArray = [200, 400, 600, 100];

function returnSecondValue(getArray) {
  return getArray[1];
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100, 200, 300, 400])); // This will return the second value of the new array
