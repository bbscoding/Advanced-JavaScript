/**
 * Example: IIFE (Immediately Invoked Function Expression)
 * -------------------------------------------------------
 * IIFE: A function that runs immediately after being defined.
 * Benefit: Keeps variables private and avoids polluting the global scope.
 */

const privateCounter = (() => {
    let count = 0; // Private variable
    console.log(`Initial value: ${count}`);

    return () => {
        count += 1;
        console.log(`Counter: ${count}`);
    }
})(); // Invoked immediately

// Usage
privateCounter();
privateCounter();
privateCounter();
// console.log(count); // ❌ Error: count is not accessible
