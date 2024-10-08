//  Primitive //stored in stack

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt
// JavaScript is a dynamically-typed language. 

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123') //create unique and immutable values
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n

// Null => typeof = object
// undefined => typeof = undefined


// Reference (Non primitive) //stored in heap

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

let nameOne ="anan"
let anotherName = nameOne;
nameOne = "rehmat";
console.log(nameOne); //rehmat
console.log(anotherName); //anan


// https://262.ecma-international.org/5.1/#sec-11.4.3