// --- Example 1: Basic currying with nested functions ---
const buildSandwich = (ingredient1) => {
    return (ingredient2) => {
        return (ingredient3) => {
            return `${ingredient1}, ${ingredient2}, ${ingredient3}`;
        };
    };
};

const newSandwich = buildSandwich("Ham")("Lettuce")("Tomato");
console.log(newSandwich); // "Ham, Lettuce, Tomato"


// --- Example 2: Refactored version (cleaner) ---
const buildSandw = ingred1 => ingred2 => ingred3 => `${ingred1}, ${ingred2}, ${ingred3}`;
const mySandw = buildSandw("Bread")("Turkey")("Cheese");
console.log(mySandw); // "Bread, Turkey, Cheese"


// --- Example 3: Regular vs Curried function ---
const multiply = (x, y) => x * y;
const curriedMultiply = x => y => x * y;

console.log(multiply(2, 3));       // 6
console.log(curriedMultiply(2));   // function waiting for y
console.log(curriedMultiply(2)(3)); // 6


// --- Example 4: Partial application ---
const timesTen = curriedMultiply(10);
console.log(timesTen(8)); // 80


// --- Example 5: DOM manipulation with currying ---
const updateElemText = id => content => document.querySelector(`#${id}`).textContent = content;

const updateHeaderText = updateElemText('header');
updateHeaderText("Hello Batu!"); // updates header element text


// --- Example 6: Function composition with currying ---
const addCustomer = fn => (...args) => {
    console.log("Saving customer info...");
    return fn(...args);
};

const processOrder = fn => (...args) => {
    console.log(`Processing order #${args[0]}`);
    return fn(...args);
};

let completeOrder = (...args) => {
    console.log(`Order #${[...args].toString()} completed.`);
};

// Wrapping functions
completeOrder = processOrder(completeOrder);
completeOrder = addCustomer(completeOrder);

completeOrder("1000");


// --- Example 7: Generic curry function ---
const curry = (fn) => {
    return function curried(...args) {
        if (fn.length !== args.length) {
            return curried.bind(null, ...args); // returns a new function with pre-filled args
        }
        return fn(...args);
    };
};

const total = (x, y, z) => x + y + z;
const curriedTotal = curry(total);

console.log(curriedTotal(10)(20)(30)); // 60
