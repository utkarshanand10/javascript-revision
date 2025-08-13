// forEach and filter mehod

// const heros = ["nagraj", "shaktiman", "doga", "raja hindustani", "krrish"];

// const value = heros.forEach((item) => {
//   console.log(item);
//   return item;
// });

// console.log(value);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter((num) => {
//   return num > 4; // if we use {} then we need to use return or if we dont use then we can write  num > 4 directly
// });

const newNums = [];

myNums.forEach((num) => {
  if (num > 4) {
    newNums.push(num);
  }
});

console.log(newNums);
