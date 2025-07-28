let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toJSON());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());

let myCreatedDate = new Date("2023-10-01");
// console.log(myCreatedDate.toDateString());

let myTimestamp = Date.now();
// console.log(myTimestamp);
// console.log(myCreatedDate.getTime());
console.log(Date.now() - myCreatedDate.getTime());

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

newDate.toLocaleString("en-IN", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
});
