class Vehicle {
    // this is where data is inititalised in the class
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    // this is a method to output information about the car
    Information() {
        console.log(`Make: ${this.make}. `);
        console.log(`Model: ${this.model}.`);
        console.log(`year: ${this.year}`);

    }
}

//adding to varible, passing arguments
let myVehicle = new Vehicle('VW', 'Golf', 2022);
//calling method information 
myVehicle.Information();

//class that extends from vehicle
class Car extends Vehicle {
    // this is where data is inititalised in the class

    constructor(make, model, year, doors) {
        //access from the parent 
        super(make, model, year)
        this.doors = doors;
    }
    //creating method that inherits 
    Information() {
        super.Information();
        console.log(`Doors:${this.doors}.`)
    }
}

//Assign to varible and pass arguments
let myCar = new Car('VW', 'Golf', 2010, 5)
//Call Method
myCar.Information();



