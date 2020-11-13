const Employee = require("./Employee");


class Manager extends Employee {
    constructor(name, id,  email, officeNumber) {
        super(name, id, email, officeNumber);

        this.officeNumber = officeNumber;
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