"use strict";

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

let validNumbers = [];
let invalidNumbers = [];

for (let value of apiData) {
    // Convert value into Number, Boolean and String
    let numberValue = Number(value);
    let booleanValue = Boolean(value);
    let stringValue = String(value);

    console.log("\nOriginal Value:", stringValue);
    console.log("Number Form:", numberValue);
    console.log("Boolean Form:", booleanValue);
    console.log("String Form:", stringValue);

    // Empty string or whitespace should not count as a valid number
    if (
        value === null ||
        value === undefined ||
        String(value).trim() === "" ||
        Number.isNaN(numberValue) ||
        (typeof value === "string" && value.trim() === "NaN") ||
        (typeof value === "string" && value.includes("px"))
    ) {
        invalidNumbers.push(value);
        console.log("Status: Invalid Number");
    } else {
        validNumbers.push(numberValue);
        console.log("Status: Valid Number");
    }
}

console.log("\n--- Final Report ---");
console.log("Valid Numeric Data:", validNumbers);
console.log("Invalid Data:", invalidNumbers);
console.log("Valid Count:", validNumbers.length);
console.log("Invalid Count:", invalidNumbers.length);