let name = "Utkarsh Anand";
let repCount = 13;

console.log(
  `Hello, my name is ${name} and I have repeated this ${repCount} times.`
);

const gameName = new String("Call of Duty");

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf("Duty"));

const newStr = gameName.substring(0, 4);
console.log(newStr);

const anotherstr = gameName.slice(-10, 4);
console.log(anotherstr);

const newstr1 = gameName.replace("Call", "Battle");

const newstr2 = "    utkarsh     ";
console.log(newstr2);
console.log(gameName.trim());
