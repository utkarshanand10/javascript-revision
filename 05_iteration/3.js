// for of

// ["", "" ,""]
// [{},{},{}]

const arr = ["a", "b", "c"];

for (const element of arr) {
  //   console.log(element);
}

const grettings = "hello world";
for (const greet of grettings) {
  //   console.log(greet);
}

//Maps

const map = new Map();
map.set("IN", "India");
map.set("US", "United States");
map.set("UK", "United Kingdom");
map.set("CA", "Canada");

map.keys();
map.values();

// console.log(map);

for (const [key, value] of map) {
  console.log(key, "-", value);
}

const myObject = {
  game1: "NFS",
  game2: "FIFA",
  game3: "PUBG",
};

for (const [key, value] of Object.entries(myObject)) {
  console.log(key, "-", value);
}
