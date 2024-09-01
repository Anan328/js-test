// Immediately Invoked Function Expressions (IIFE)
// Useful for creating a local scope to avoid polluting the global namespace #imp
// IIFE is a function that runs as soon as it is defined.
// Syntax: The function is enclosed in parentheses () to treat it as an expression, followed by another () to invoke it.

(function chai(){
    //named IIFE
    console.log('connected to database 1');
    
})(); // ; is necessary here

( (name)=> {
    console.log(`connected to database 2, ${name}`);
} )('anaan');
