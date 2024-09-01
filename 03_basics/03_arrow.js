const obj = {
    num: 5,
    
    // Regular function for comparison
    regularFunc: function() {
        console.log(this.num); // 'this' refers to 'obj', output: 5
    },
    
    // Arrow function
    arrowFunc: () => {
        console.log(this.num); // 'this' refers to the outer context (not 'obj').
        // In this case, 'this' is the global object (undefined in strict mode) or 'window' in browsers.
    }
};

obj.regularFunc(); // Output: 5, as 'this' refers to 'obj'
obj.arrowFunc(); // Output: undefined, as 'this' refers to the outer/global context

console.log(this); // {}

// function chai(){
//     let username = "hitesh"
//      console.log(this.username); // can't access username, only for objects
//  }

//  chai() //undefined

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username); // can't access username
// }

// const chai =  () => {
//     let username = "hitesh"
//     console.log(this); // can't access username
// }


// chai()

// $$$$$$$$$$$$$$$$ Arrow function $$$$$$$$$$$$$$$$

const arrow = (num1,num2)=>{
        return num1+num2
}

//console.log(arrow(5,4));

const add = (num1,num2)=> num1+num2; // implicit return

//console.log(add(3,5));

// const addTwo = (num1, num2) => ( num1 + num2 ) // implicit return, because we didn't use {} instead we used ()

const returnObj = () => ({name:'anan'}) // if we donot use () it will be undefined

console.log(returnObj()); // { name: 'anan' }

