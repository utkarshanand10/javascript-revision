const coading = ["js", "ruby", "py", "java"];

// coading.forEach(function (item){
//     console.log(item);
// });

// coading.forEach( (item) =>{
//    console.log(item);
// })

// function print(item) {
//   console.log(item);
// }

// coading.forEach(print);

coading.forEach((item, index, arr) => {
  console.log(item, index, arr);
});

const myCoading = [
  {
    language: "javascript",
    file: "js",
  },
  {
    language: "python",
    file: "py",
  },
  {
    language: "ruby",
    file: "rb",
  },
  {
    language: "java",
    file: "java",
  },
];

myCoading.forEach((item, index, arr) => {
  console.log(item.language, index, arr);
});
