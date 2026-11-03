"use strict";

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

let validTransactions = [];
let invalidTransactions = [];

for (let transaction of transactions) {
    try {
        
        if (transaction === null) {
            throw new TypeError("Null transaction entry");
        }

        if (transaction.id === undefined) {
            throw new Error("Missing transaction ID");
        }

        if (transaction.amount === undefined) {
            throw new Error("Missing transaction amount");
        }
        if (transaction.amount < 0) {
            throw new RangeError("Negative transaction amount");
        }

        validTransactions.push(transaction);
        console.log("Valid Transaction:", transaction);

    } catch (error) {
        invalidTransactions.push({
            transaction: transaction,
            errorType: error.name,
            message: error.message
        });

        console.log("Invalid Transaction:", error.message);
    }
}

console.log("\n--- Transaction Report ---");
console.log("Valid Transactions:", validTransactions);
console.log("Invalid Transactions:", invalidTransactions);
console.log("Successful Count:", validTransactions.length);
console.log("Failed Count:", invalidTransactions.length);