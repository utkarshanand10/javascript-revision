let a = 10; // let and const are block-scoped, var is function-scoped
const b = 20;
var c = 30;

if (true) {
  let a = 100;
  const b = 200;
  //   console.log(a);
}
array = [1, 2, 3, 4, 5];
for (let i = 0; i < array.length; i++) {
  const element = array[i];
}

// console.log(a);
// console.log(b);
// console.log(c);

//-------------------------------------------------------------

function one() {
  const username = "Utkarsh";

  function two() {
    const age = 25;
    console.log(username, age);
  }
  console.log("hello");
  two();
}

one();

if (true) {
  const username = "utkarsh";
  if (username === "utkarsh") {
    const website = "youtube";
  }
  console.log(username);
}
// console.log(username);

//-------INTRESTING PART-----------------

function addone(num) {
  return num + 1;
}

addone(10);
