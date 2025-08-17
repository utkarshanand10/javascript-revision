//array reduce

const array = [1, 2, 3];

const initialValue = 0;

// const sum = array.reduce(function (accumulator, currentValue) {
//   console.log(`accumulator: ${accumulator} and currentvalue ${currentValue}`);
//   return accumulator + currentValue;
// }, initialValue);
// const sum = array.reduce((acc, curr) => acc + arr, 0);
// console.log(sum);

const shoppingCart = [
  {
    itemName: "js course",
    price: 299,
  },
  {
    itemName: "python course",
    price: 400,
  },
  {
    itemName: "java course",
    price: 700,
  },
];

const pricetopay = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(pricetopay);
