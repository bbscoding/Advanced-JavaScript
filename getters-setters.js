// Using getters and setters in objects

const car = {
    doors: 2,
    seats: "vinyl",

    // Getter method
    get seatMaterial() {
        return this.seats;
    },

    // Setter method
    set seatMaterial(material) {
        this.seats = material;
    }
};

// Create a new object that inherits from car
const luxuryCar = {};
Object.setPrototypeOf(luxuryCar, car);

// Using setter to change property
luxuryCar.seatMaterial = "leather";

console.log(luxuryCar);       // { seats: "leather" }
console.log(luxuryCar.doors); // inherited from car
console.log(car);

// Walking up the prototype chain
console.log(luxuryCar.valueOf());

// Getting keys
console.log(Object.keys(luxuryCar)); // only own properties

// Looping over keys (only own)
Object.keys(luxuryCar).forEach(key => {
    console.log(key);
});

// for...in includes inherited properties as well
for (let key in luxuryCar) {
    console.log(key);
}
