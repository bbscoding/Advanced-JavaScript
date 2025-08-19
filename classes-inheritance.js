// ES6 Class Inheritance

class Vehicle {
    constructor() {
        this.wheels = 4;
        this.motorized = true;
    }

    ready() {
        return "Ready to go!";
    }
}

class Motorcycle extends Vehicle {
    constructor() {
        super(); // call parent constructor
        this.wheels = 2; // override property
    }

    wheelie() {
        return "On one wheel now!";
    }
}

// Create a new Motorcycle
const myBike = new Motorcycle();
console.log(myBike);          // Motorcycle { wheels: 2, motorized: true }
console.log(myBike.wheels);   // 2
console.log(myBike.ready());  // "Ready to go!"
console.log(myBike.wheelie()); // "On one wheel now!"

// Create a Vehicle
const myTruck = new Vehicle();
console.log(myTruck);         // Vehicle { wheels: 4, motorized: true }
