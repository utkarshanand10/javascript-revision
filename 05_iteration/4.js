const myObject = {
  js: "JavaScript",
  py: "Python",
  rb: "Ruby",
  java: "Java",
};

for (const key in myObject) {
  //   console.log(key, "-", myObject[key]);
}

const programmingLanguages = ["JavaScript", "Python", "Ruby", "Java"];

for (const key in programmingLanguages) {
  console.log(key, "-", programmingLanguages[key]);
}
