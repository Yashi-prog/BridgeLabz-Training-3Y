
function Person(name) {
    this.name = name;
}

Person.prototype.showPerson = function() {
    console.log("Name: " + this.name);
};


function Faculty(department) {
    this.department = department;
}

Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;

Faculty.prototype.showFaculty = function() {
    console.log("Department: " + this.department);
};


function Professor(subject) {
    this.subject = subject;
}

Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.showProfessor = function() {
    console.log("Subject: " + this.subject);
};


// Create Professor object
const p1 = new Professor("JavaScript");

// Set inherited Person and Faculty properties
p1.name = "Yashi";
p1.department = "Computer Science";

// Call all three methods
p1.showPerson();
p1.showFaculty();
p1.showProfessor();
