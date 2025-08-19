// Prototype Inheritance in JavaScript

const person = {
    alive: true
};

const musician = {
    plays: true
};

// Old way (deprecated):
// musician.__proto__ = person

// Modern way:
Object.setPrototypeOf(musician, person);

// Check prototype relationships
console.log(Object.getPrototypeOf(musician)); // { alive: true }
console.log(musician.__proto__);              // Same result
console.log(Object.getPrototypeOf(musician) === musician.__proto__); // true

// Another object inheriting from musician
const guitarist = {
    strings: 6,
    __proto__: musician
};

console.log(guitarist.alive);  // inherited from person
console.log(guitarist.plays);  // inherited from musician
console.log(guitarist.strings); // own property
console.log(guitarist);

// Rules of prototype inheritance:
// - No circular references allowed
// - __proto__ must be an object or null
// - An object can only directly inherit from ONE object
