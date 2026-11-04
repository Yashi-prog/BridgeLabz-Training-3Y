"use strict";

// Step 1: Boil water
function boilWater() {
    return new Promise((resolve, reject) => {

        console.log("Boiling water...");

        setTimeout(() => {

            // Simulate random failure
            if (Math.random() > 0.2) {
                resolve("Water boiled successfully!");
            } else {
                reject("Failed to boil water.");
            }

        }, 1500);
    });
}

// Step 2: Brew coffee
function brewCoffee() {
    return new Promise((resolve, reject) => {

        console.log("Brewing coffee...");

        setTimeout(() => {

            if (Math.random() > 0.2) {
                resolve("Coffee brewed successfully!");
            } else {
                reject("Failed to brew coffee.");
            }

        }, 1500);
    });
}

// Step 3: Pour coffee
function pourCoffee() {
    return new Promise((resolve, reject) => {

        console.log("Pouring coffee into the cup...");

        setTimeout(() => {

            if (Math.random() > 0.2) {
                resolve("Coffee poured successfully!");
            } else {
                reject("Failed to pour coffee.");
            }

        }, 1500);
    });
}

// Promise chaining
boilWater()
    .then(result => {

        console.log(result);

        return brewCoffee();
    })
    .then(result => {

        console.log(result);

        return pourCoffee();
    })
    .then(result => {

        console.log(result);

        console.log("Coffee ready for the team!");
    })
    .catch(error => {

        console.log("Coffee preparation failed:", error);
    });