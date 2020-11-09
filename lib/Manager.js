const Employee = require("./Employee");


class Manager extends Employee {
    constructor(name, email, officeNumber) {
        super(name, email, officeNumber);

        this.officeNumber = officeNumber;
    }
    getName() {
        return this.name
    }
    //return an object w/ manager properties
    getRole() {
        return ("Manager");
    }

    getOfficeNum() {
        return this.officeNumber;
    }
    
}

//getname, getrole, get id
module.exports = Manager;