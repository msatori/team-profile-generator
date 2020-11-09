const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const Employee = require('./lib/Employee');

//create an empty array for employees
const employeeArr = [];
const employeeIdArr = [];

//create a function for building a team, then create seperate questions for each team member 
//think about html output - keep every team member grouped properly
const newManager = employeeInfo => {
    console.log("Welcome to the Team Profile Generator! Let's build your team")
    //use inquirer to give prompts for employee information
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'managerName',
                message: "Enter the Team Manager's name",
                validate: managerNameInput => {
                    if (managerNameInput) {
                        return true;
                    } else {
                        console.log('Please enter a name!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: 'Enter employees email',
                validate: function (email) {

                    valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)

                    if (valid) {
                        return true;
                    } else {
                        console.log(".  Please enter a valid email")
                        return false;
                    }
                }

            },
            {
                type: 'input',
                name: 'managerId',
                message: 'Create an ID number for this member',
                validate: managerIdInput => {
                    if (managerIdInput > 99) {
                        return true;
                    } else {
                        console.log(' Id Must contain 3 digits! (cannot start with 0)');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'officeNum',
                message: 'Assign this manager an office number',
                validate: managerOffInput => {
                    if (managerOffInput) {
                        return true;
                    } else {
                        console.log('You must assign an office number');
                        return false;
                    }
                }
            }
        ])

};
//create a function for new engineers
const newEngineer = () => {
    //include a conditional for role information
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'engineerName',
                message: "Enter the Engineer's name",
                validate: engineerNameInput => {
                    if (engineerNameInput) {
                        return true;
                    } else {
                        console.log('Please enter a name!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: 'Enter employees email',
                validate: function (email) {

                    valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)

                    if (valid) {
                        return true;
                    } else {
                        console.log(".  Please enter a valid email")
                        return false;
                    }
                }

            },
            {
                type: 'input',
                name: 'engineerId',
                message: 'Create an ID number for this member',
                validate: engineerIdInput => {
                    if (engineerIdInput > 99) {
                        return true;
                    } else {
                        console.log(' Id Must contain 3 digits! (cannot start with 0)');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'github',
                message: "Enter the Engineer's Github username",
                validate: gitInput => {
                    if (gitInput) {
                        return true;
                    } else {
                        console.log(' Id Must contain 3 digits! (cannot start with 0)');
                        return false;
                    }
                }
            }
        ])


}
//create a function for new interns
const newIntern = () => {
    //include a conditional for role information
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'internName',
                message: "Enter the Intern's name",
                validate: internNameInput => {
                    if (internNameInput) {
                        return true;
                    } else {
                        console.log('Please enter a name!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'internEmail',
                message: 'Enter employees email',
                validate: function (email) {

                    valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)

                    if (valid) {
                        return true;
                    } else {
                        console.log(".  Please enter a valid email")
                        return false;
                    }
                }

            },
            {
                type: 'input',
                name: 'internId',
                message: 'Create an ID number for this member',
                validate: internIdInput => {
                    if (internIdInput > 99) {
                        return true;
                    } else {
                        console.log(' Id Must contain 3 digits! (cannot start with 0)');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'school',
                message: "Enter the Intern's school name",
                validate: schoolInput => {
                    if (schoolInput) {
                        return true;
                    } else {
                        console.log('You must enter a school name');
                        return false;
                    }
                }
            }
        ])

}
//create a function for an option if user wants to add another employee
const checkMoreMembers = (addData) => {
    inquirer.prompt([
        {
            type: 'confirm',
            name: 'confirmAdd',
            message: "Would you like to add another team member?"
        }
    ])
    if (addData.confirmAdd == 'yes' || 'y') {
        return inquirer.prompt([
            {
                type: 'list',
                name: "roleChoice",
                message: 'What role will this member have?',
                choices: ['Manager', 'Engineer', 'Intern']

            }
        ])
            .then(response => {
                if (response.roleChoice === 'Engineer') {
                    return newEngineer();
                } else if (addData === 'Intern') {
                    return newIntern();
                }
            })
    }
}
newManager()
    .then(newEngineer)
    .then(newIntern)
    .then(checkMoreMembers)