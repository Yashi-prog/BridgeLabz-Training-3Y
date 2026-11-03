let expenses = [5000, 2000, 10000, 3000, 1500];
let totalExpense = 0;

for (let expense of expenses) {
    totalExpense += expense;
}

let averageExpense = totalExpense / expenses.length;

let tax = totalExpense * 0.10;

let finalAmount = totalExpense;
finalAmount += tax;
console.log("Total Expense: ₹" + totalExpense.toFixed(2));
console.log("Average Expense: ₹" + averageExpense.toFixed(2));
console.log("Tax Amount: ₹" + tax.toFixed(2));
console.log("Final Amount After Tax: ₹" + finalAmount.toFixed(2));
