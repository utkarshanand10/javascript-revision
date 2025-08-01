//if

// const isUserLoggedIn = true;
// const temperature = 41;

// if (2 == "2") {
//   console.log("executed");
// }
// if (temperatrue < 50) {
//   console.log("less than 50");
// } else {
//   console.log("temperature is greater than 50");
// }

// console.log("ecexcuted")

// const score = 200;

// if (score > 100) {
//   const power = "fly";
//   console.log(`You have ${power}`);
// }
// console.log(`You havae ${power}`);

// const balance = 1000;
// if (balance > 500) console.log("test"), console.log("test2");

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard && 2 == 2) {
  console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
  console.log("User logged in");
}
