let currentSalary = 30000;
let incrementRate = 10;

let salaryDetails = [];

for (let year = 1; year <= 5; year++) {

    currentSalary += currentSalary * incrementRate / 100;

    currentSalary = Math.round(currentSalary);

    salaryDetails.push({
        Year: year,
        Salary: currentSalary
    });
}

console.table(salaryDetails);
