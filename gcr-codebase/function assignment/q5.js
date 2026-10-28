
function Person(name) {
    this.name = name;
}

// Person prototype method
Person.prototype.showName = function() {
    console.log("Name: " + this.name);
};

function Student(name, branch) {
    Person.call(this, name);
    this.branch = branch;
}

// Inherit Person prototype
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

// Student prototype method
Student.prototype.showBranch = function() {
    console.log("Branch: " + this.branch);
};

// Create student object
const student1 = new Student("Yashi", "CSE");

// Call both methods
student1.showName();
student1.showBranch();
