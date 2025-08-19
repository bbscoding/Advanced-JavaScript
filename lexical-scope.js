/**
 * Example: Lexical Scope and Closures in JavaScript
 * ------------------------------------------------
 * Lexical Scope: Determines how variable names are resolved in nested functions.
 * Closure: A function that "remembers" variables from its lexical scope even after the scope is closed.
 */

// Global scope
let x = 1;

const parentFunction = () => {
    // Local scope
    let myValue = 2;
    console.log("Parent scope values:", x, myValue);

    // Child function has access to parent's scope
    const childFunction = () => {
        console.log("Updated global x:", x += 5);
        console.log("Updated local myValue:", myValue += 1);
    }

    return childFunction; // Returning the closure
}

// parentFunction returns childFunction
const result = parentFunction();

console.log(result); // [Function: childFunction]

// Each call updates the variables inside closure
result(); 
result(); 
result(); 

console.log("Final x:", x);
// console.log(myValue); // ❌ Error: not defined (myValue is private to parentFunction)
