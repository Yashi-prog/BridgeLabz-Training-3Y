"use strict";

// Load profile
function loadProfile() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (Math.random() > 0.3) {

                resolve("Profile Loaded");

            } else {

                reject("Profile Failed");
            }

        }, 2000);
    });
}

// Load posts
function loadPosts() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (Math.random() > 0.3) {

                resolve("Posts Loaded");

            } else {

                reject("Posts Failed");
            }

        }, 1500);
    });
}

// Load messages
function loadMessages() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (Math.random() > 0.3) {

                resolve("Messages Loaded");

            } else {

                reject("Messages Failed");
            }

        }, 1000);
    });
}

// Async function
async function loadDashboard() {

    // Record start time
    const startTime = Date.now();

    // Execute all Promises concurrently
    const results = await Promise.allSettled([

        loadProfile(),

        loadPosts(),

        loadMessages()

    ]);

    console.log("Dashboard Results:");

    // Display success and failure
    results.forEach((result, index) => {

        const modules = [
            "Profile",
            "Posts",
            "Messages"
        ];

        if (result.status === "fulfilled") {

            console.log(
                `${modules[index]}: Success - ${result.value}`
            );

        } else {

            console.log(
                `${modules[index]}: Failed - ${result.reason}`
            );
        }
    });

    // Calculate total time
    const endTime = Date.now();

    const totalTime = endTime - startTime;

    console.log(`Total Time: ${totalTime} ms`);
}

// Execute
loadDashboard();