"use strict";

// Create a function to simulate asynchronous steps
function deliveryStep(stepName, successMessage) {

    return new Promise((resolve, reject) => {

        // Random delay between 1 and 2 seconds
        const delay = Math.floor(Math.random() * 1000) + 1000;

        setTimeout(() => {

            // Simulate random failure
            const success = Math.random() > 0.2;

            if (success) {

                console.log(successMessage);

                resolve(stepName + " completed");

            } else {

                reject(stepName + " failed");
            }

        }, delay);
    });
}

// Step 1: Take Order
function takeOrder() {

    return deliveryStep(
        "takeOrder",
        "Step 1: Order taken"
    );
}

// Step 2: Prepare Food
function prepare() {

    return deliveryStep(
        "prepare",
        "Step 2: Food prepared"
    );
}

// Step 3: Pack Food
function pack() {

    return deliveryStep(
        "pack",
        "Step 3: Package ready"
    );
}

// Step 4: Dispatch Food
function dispatch() {

    return deliveryStep(
        "dispatch",
        "Step 4: Out for delivery"
    );
}

// Step 5: Deliver Food
function deliver() {

    return deliveryStep(
        "deliver",
        "Delivery completed!"
    );
}

// Run the complete pipeline
async function runPipeline() {

    console.log("Start Pipeline");

    try {

        // Each await waits for the previous step
        await takeOrder();

        await prepare();

        await pack();

        await dispatch();

        await deliver();

    } catch (error) {

        // If any step fails, control comes here
        console.log("Pipeline failed!");

        console.log("Error:", error);
    }
}

// Start pipeline
runPipeline();