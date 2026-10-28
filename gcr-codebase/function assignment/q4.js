
function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

// Adding method to prototype
Car.prototype.getDetails = function() {
    console.log("Brand: " + this.brand + ", Model: " + this.model);
};

// Creating two car objects
const car1 = new Car("Tata", "Nexon");
const car2 = new Car("Hyundai", "Creta");

// Calling the method
car1.getDetails();
car2.getDetails();
