const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, role, school) {
        super(name, id, role, school);

        this.school = school;
    }
    //return an object w/ manager properties
    getRole() {
        return ("Intern");
    }

    getSchool() {
        return this.school;
    }
    
}

module.exports = Intern;