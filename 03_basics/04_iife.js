// Immediately Invoked Function Expression (IIFE)
(function user() {
    //named iife user
  console.log(`DB CONNECTED`);
});
user();

((name)  => {
    //unnamed iife
    console.log(`DB CONNECTED TWO ${name}`)
}) ("Utkarsh")

