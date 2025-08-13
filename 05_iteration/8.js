//array reduce

const array = [1, 2, 3];

const initialValue = 0;

// const sum = array.reduce(function (accumulator, currentValue) {
//   console.log(`accumulator: ${accumulator} and currentvalue ${currentValue}`);
//   return accumulator + currentValue;
// }, initialValue);

const sum = array.reduce((acc, curr) => acc + arr, 0);

console.log(sum);
