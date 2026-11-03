"use strict";

const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

let cleanData = [];
let invalidData = [];

for (let i = 0; i < rawData.length; i++) {
    const lineNumber = i + 1;

    try {
        // Parse JSON string
        let parsedData = JSON.parse(rawData[i]);

        // Check required keys
        if (parsedData.user === undefined) {
            throw new Error("Missing user key");
        }

        if (parsedData.age === undefined) {
            throw new Error("Missing age key");
        }

        // Convert age into number
        parsedData.age = Number(parsedData.age);

        if (Number.isNaN(parsedData.age)) {
            throw new Error("Age is not a valid number");
        }

        cleanData.push(parsedData);

        console.log(`Line ${lineNumber}: Valid JSON`);

    } catch (error) {
        invalidData.push({
            line: lineNumber,
            message: error.message
        });

        console.log(`Line ${lineNumber}: Error - ${error.message}`);
    }
}

// Bonus: filter users under 18
let under18Users = cleanData.filter(user => user.age < 18);

console.log("\n--- JSON Audit Report ---");
console.log("Clean Data:", cleanData);
console.log("Invalid Data:", invalidData);
console.log("Under 18 Users:", under18Users);