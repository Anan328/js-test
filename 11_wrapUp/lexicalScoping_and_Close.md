
# Lexical Scoping and Closure

## Lexical Scoping
- Lexical scoping means that the scope of variables is determined by where they are written in the code, not where they are executed.
- Inner functions can access variables defined in their outer function’s scope.

### Example:
```javascript
function outer() {
    const outerVariable = 'I am from the outer scope';
    
    function inner() {
        console.log(outerVariable); // Lexical scoping allows access to outerVariable
    }
    
    inner();
}
outer(); // Output: I am from the outer scope
```

## Closure
- A closure occurs when a function "remembers" the variables from its outer scope, even after that outer function has finished executing.

### Example:
```javascript
function outer() {
    const outerVariable = 'I am a closure';
    
    return function inner() {
        console.log(outerVariable); // Closure allows access to outerVariable
    }
}

const myClosure = outer(); // outer() finishes execution here
myClosure(); // Output: I am a closure
```

## Key Differences:
- **Lexical Scoping**: Determines how variable access works based on where functions are defined.
- **Closure**: Allows a function to retain access to variables in its lexical scope, even after the outer function has executed.
