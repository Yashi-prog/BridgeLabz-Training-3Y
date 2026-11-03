"use strict";

const operations = ["add", "divide", "power", "root", "subtract"];

const num1 = 25;
const num2 = 0;

// Select an operation here
const selectedOperation = "divide";

class InvalidOperationError extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidOperationError";
    }
}

class CalculationError extends Error {
    constructor(message) {
        super(message);
        this.name = "CalculationError";
    }
}

try {
    let result;

    switch (selectedOperation) {
        case "add":
            result = num1 + num2;
            break;

        case "divide":
            if (num2 === 0) {
                throw new CalculationError("Cannot divide by zero");
            }
            result = num1 / num2;
            break;

        case "power":
            result = Math.pow(num1, num2);
            break;

        case "root":
            if (num1 < 0) {
                throw new CalculationError("Cannot find square root of a negative number");
            }
            result = Math.sqrt(num1);
            break;

        case "subtract":
            result = num1 - num2;
            break;

        default:
            throw new InvalidOperationError(
                "Operation is not recognized: " + selectedOperation
            );
    }

    console.log(`
--- Calculator Summary ---
Operation: ${selectedOperation}
Number 1: ${num1}
Number 2: ${num2}
Result: ${result}
`);

} catch (error) {
    console.log("Error Type:", error.name);
    console.log("Error Message:", error.message);
}