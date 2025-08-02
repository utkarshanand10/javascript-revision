// for loop

for (let i = 0; i < 6; i++) {
  const element = i;
  if (element == 5) {
    console.log("Reached 5, breaking the loop");
  }
  console.log(i);
}

for (let i = 0; i < 6; i++) {
  for (let j = 0; j < 10; j++) {
    if (j == 5) {
      console.log("Reached 5, breaking the inner loop");
      break;
    }
    console.log(`i: ${i}, j: ${j}`);
  }
}

// while loop
// let j = 0;
// while (j < 5) {
//   console.log(j);
//   j++;
// }
