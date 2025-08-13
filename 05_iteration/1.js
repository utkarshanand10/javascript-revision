// for loop

// for (let i = 0; i < 6; i++) {
//   const element = i;
//   if (element == 5) {
//     console.log("Reached 5, breaking the loop");
//   }
//   console.log(i);
// }

// for (let i = 0; i < 10; i++) {
//   console.log(`Outer loop i: ${i}`);
//   for (let j = 0; j < 10; j++) {
//     if (j == 5) {
//       //   console.log(`Inner loop j: ${j}, breaking the inner loop ${i}`);
//       console.log(i + "*" + j + "=" + i * j);
//     }
//   }
// }

// let myArray = ["flash", "batman", "superman", "spiderman"];
// console.log(myArray.length);
// for (let index = 0; index < myArray.length; index++) {
//   const element = myArray[index];
//   console.log(element);
// }

// while loop
// let j = 0;
// while (j < 5) {
//   console.log(j);
//   j++;
// }

for (let i = 1; i <= 10; i++) {
  if (i == 5) {
    console.log("Reached 5, breaking the loop");
    continue;
  }
  console.log(`value of i is: ${i}`);
}
