"use strict";

// Original callback-based function
function fetchBugs(callback) {

    setTimeout(() => {

        callback([
            "UI glitch",
            "API timeout",
            "Login failure"
        ]);

    }, 1000);
}

// Promise-based function
function getBugs() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            // Boolean to simulate random API failure
            const apiFailed = Math.random() < 0.3;

            if (apiFailed) {

                reject("API request failed!");

            } else {

                resolve([
                    "UI glitch",
                    "API timeout",
                    "Login failure"
                ]);
            }

        }, 1000);
    });
}

// Calling getBugs()
getBugs()
    .then(bugs => {

        console.log("Bug List:");

        // Display bugs in table format
        console.table(bugs);

    })
    .catch(error => {

        console.log("Error:", error);
    });