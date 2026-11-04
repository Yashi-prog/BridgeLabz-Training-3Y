"use strict";

// Submit order function
function submitOrder() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            // API fails 50% of the time
            const success = Math.random() > 0.5;

            if (success) {

                resolve("Order submitted successfully!");

            } else {

                reject("Order submission failed!");
            }

        }, 1000);
    });
}

// Process order with retry mechanism
async function processOrder() {

    // Maximum 3 attempts
    const maxAttempts = 3;

    for (let attempt = 1; attempt <= maxAttempts; attempt++) {

        try {

            // Wait for order submission
            const result = await submitOrder();

            console.log(`Attempt ${attempt}: Success`);

            console.log(result);

            // Stop after success
            return;

        } catch (error) {

            console.log(`Attempt ${attempt}: Failed`);

            console.log(error);
        }
    }

    // All attempts failed
    throw new Error("Order could not be processed");
}

// Execute processOrder
processOrder()
    .catch(error => {

        console.log("Final Error:", error.message);

    });