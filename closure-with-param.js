/**
 * Example: Closure with IIFE and Parameter
 * ----------------------------------------
 * Closure can also store and manipulate values passed as parameters.
 * This example simulates a credit system.
 */

const credits = ((num) => {
    let credits = num;
    console.log(`Initial credits: ${credits}`);

    return () => {
        credits -= 1;
        if (credits > 0) {
            console.log(`Playing game, remaining ${credits} credit(s)`);
        } else {
            console.log("Not enough credits");
        }
    }
})(3); // Initial credits set to 3

// Usage
credits();
credits();
credits();
credits();
