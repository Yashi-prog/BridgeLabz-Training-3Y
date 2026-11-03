"use strict";

const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

try {
    for (let employee of employees) {
        // Validate required properties
        if (
            !employee ||
            employee.name === undefined ||
            employee.salary === undefined ||
            employee.years === undefined
        ) {
            throw new Error("Employee data is missing a required property.");
        }

        // Convert strings to numbers
        const salary = Number(employee.salary);
        const years = Number(employee.years);

        if (Number.isNaN(salary) || Number.isNaN(years)) {
            throw new Error("Salary or years is not a valid number.");
        }

        // Calculate bonus
        let bonus;

        if (years > 3) {
            bonus = salary * 0.10;
        } else {
            bonus = salary * 0.05;
        }

        const totalSalary = salary + bonus;

        console.log(`
Employee Name: ${employee.name}
Salary: ₹${salary}
Experience: ${years} years
Bonus: ₹${bonus}
Total Salary: ₹${totalSalary}
-------------------------
`);
    }
} catch (error) {
    console.log("Error:", error.message);
}