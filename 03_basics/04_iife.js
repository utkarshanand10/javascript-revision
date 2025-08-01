// Immediately Invoked Function Expression (IIFE)
(function user() {
  console.log(`DB CONNECTED`);
});
user();

() => {
  console.log(`DB CONNECTED TWO`);
};
