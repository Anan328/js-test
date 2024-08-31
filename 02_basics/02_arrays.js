const marvel_heroes = ["thor","ironman", "spiderman"];
const dc_heroes = ["superman","flash", "batman"];

// marvel_heroes.push(dc_heroes); //pushes the whole array and not the elements
// console.log(marvel_heroes[3][0]);

const all_heroes = marvel_heroes.concat(dc_heroes);
// console.log(all_heroes);

const all_new_heroes = [...marvel_heroes,...dc_heroes]; //spread operator
// console.log(all_new_heroes);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
// console.log(another_array);

const real_another_array = another_array.flat(Infinity); // flatten nested arrays , Infinity flattens array to any depth
// console.log(real_another_array);

// console.log(Array.isArray(real_another_array)); //true
const x = "anan";
// console.log(Array.isArray(x)); //false
// console.log(Array.from(x)); //converts x to array

let score1 =100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3)); //we can also use 'from'



 




