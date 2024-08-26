let score = "33";
console.log(typeof score);
let scoreNumber = Number(score);
console.log(typeof scoreNumber);

// "33" =>33
// "33abc" => NaN
// true =>1; false=>0

let isLoggedIn = 1; 
let booleanIsLoggedIn = Boolean(isLoggedIn); // "" => false ; "someText" =>true

console.log(booleanIsLoggedIn);