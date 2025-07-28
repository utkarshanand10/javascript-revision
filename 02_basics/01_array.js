const myArray = [1, 2, 3, 4, 5];
console.log(myArray[0]); // Accessing the first element

const myHeros = ["shktiman", "batman", "superman"];
console.log(myHeros[1]); // Accessing the second element

//Array Methods

myArray.push(6); // Adds 6 to the end of the array
console.log(myArray);
myArray.pop(); // Removes the last element (6)

console.log(myArray).includes(3); // Checks if 3 is in the array
console.log(myArray.indexOf(3)); // Returns the index of 3 (2)

const newArr = myArray.join();

//slice and splice

console.log("A", myArray);

const my1 = myArray.slice(1, 3); // Returns a new array from index 1 to 2
comsole.log(my1);
console.log("B", my1);
const my2 = myArray.splice(1, 3); // Removes elements from index 1 to 3 and modifies the original array
console.log("C", myArray);
console.log(my2);
