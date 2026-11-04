"use strict";

class Employee {

    constructor(id, name, department, salary) {

        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }

    getAnnualSalary() {

        return this.salary * 12;
    }

    applyBonus(percent) {

        this.salary = this.salary + (this.salary * percent / 100);
    }
}
const employee1 = new Employee(1, "Yashi", "IT", 30000);

const employee2 = new Employee(2, "Rahul", "HR", 25000);

const employee3 = new Employee(3, "Priya", "Finance", 40000);

const employee4 = new Employee(4, "Aman", "Marketing", 35000);

const employee5 = new Employee(5, "Riya", "IT", 45000);

const employees = [
    employee1,
    employee2,
    employee3,
    employee4,
    employee5
];


employee1.applyBonus(10);


employees.forEach(employee => {

    console.log(`Employee ID: ${employee.id}`);

    console.log(`Name: ${employee.name}`);

    console.log(`Department: ${employee.department}`);

    console.log(`Monthly Salary: ₹${employee.salary}`);

    console.log(`Annual Salary: ₹${employee.getAnnualSalary()}`);

    console.log("-----------------------------");
});

const totalAnnualPayout = employees.reduce(
    (total, employee) => {

        return total + employee.getAnnualSalary();

    },
    0
);

console.log(
    `Total Annual Payout: ₹${totalAnnualPayout}`
);