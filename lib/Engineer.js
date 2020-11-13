const Employee = require("./Employee");


class Engineer extends Employee {
    constructor(name, id, role, github) {
        super(name, id, role, github,);

        this.github = github;
    }
    //return an object w/ manager properties
    getRole() {
        return ("Engineer");
    }

    getGithub() {
        return this.github;
    }
    
}

//getname, getrole, get id
module.exports = Engineer;