// Immediately Invoked Function Expressions (IIFE)
// Useful for creating a local scope to avoid polluting the global namespace #imp
// IIFE is a function that runs as soon as it is defined.
// Syntax: The function is enclosed in parentheses () to treat it as an expression, followed by another () to invoke it.

// ******************  more to know ******************

// IIFE (Immediately Invoked Function Expression)
// - Creates a local scope immediately, preventing global scope pollution.
// - Before ES6, `var` declarations leaked into the global scope, causing potential conflicts.
// - IIFE helps encapsulate variables, making them local to the function and not affecting the global scope.
// 
// With the introduction of ES6:
// - `let` and `const` provide block-level scope, reducing the need for IIFE in many cases.
// - IIFE is still useful for encapsulation and protecting variables in complex scenarios.


(function chai(){
    //named IIFE
    console.log('connected to database 1');
    
})(); // ; is necessary here

( (name)=> {
    console.log(`connected to database 2, ${name}`);
} )('anaan');
