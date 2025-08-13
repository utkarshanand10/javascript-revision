const user = {
  username: "Utkarsh",
  age: 25,

  welcomeMessage: function () {
    console.log(`${this.username} has logged in successfully!`);
    console.log(this);
  },
};

// user.welcomeMessage();
// user.username = "Sam";
// user.welcomeMessage();

// console.log(this);

// function one() {
//   let username = "Utkarsh";
//   console.log(this);
// }

// one();

const one = () => {
  let username = "Utkarsh";
  console.log(this.username);
};
// one();

// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };

// const addTwo = (num1, num2) => num1 + num2;
// const addTwo = (num1, num2) => (num1 + num2);

const addTwo = (num1, num2) => ({
  username: "Utkarsh",
});

console.log(addTwo(10, 20));

const myArray = [2,3,4,5,6]

// myArray.forEach(()=>{
    // 
// })
