
class Person {
    constructor(name) {
        this.name = name;
    }

    showName() {
        console.log("Name: " + this.name);
    }
}

class Student extends Person {
    constructor(name, branch) {
        super(name);
        this.branch = branch;
    }

    showBranch() {
        console.log("Branch: " + this.branch);
    }
}

// Create student object
const student1 = new Student("Yashi", "CSE");

// Call inherited and own methods
student1.showName();
student1.showBranch();
