// Object Constructor Functions

function Animal(species) {
    this.species = species;
    this.eats = true;
}

// Adding method to prototype
Animal.prototype.walks = function () {
    return `A ${this.species} is walking.`;
};

// Create instance
const Bear = new Animal("bear");

console.log(Bear.species); // "bear"
console.log(Bear.walks()); // "A bear is walking."

// The prototype property is where shared methods live
console.log(Bear.__proto__);                 // points to Animal.prototype
console.log(Bear.__proto__ === Animal.prototype); // true
