const Mheros = ["spiderman", "thor", "blackpanther"];
const Dheros = ["batman", "superman", "flash"];

// Mheros.push(Dheros);

// console.log(Mheros); // Displays the modified Mheros array with Dheros added

// Mheros.concat(Dheros);
// console.log(Mheros); // Displays the Mheros array after concatenation

const allHeros = Mheros.concat(Dheros);
console.log(allHeros); // Displays the new array containing all heroes from both arrays

const allheros = [...Mheros, ...Dheros];
console.log(allheros); // Displays the new array using spread operator

const anotherArray = [1, 2, 3, [4, 5], 6, [[7, 8], 4, 2, 1]];

const realArray = anotherArray.flat(Infinity); // Flattens the array to a depth of 2
console.log(realArray);
