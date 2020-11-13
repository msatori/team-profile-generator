const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const Employee = require('./lib/Employee');
const generatePage = require('./src/page-template');
const fs = require('fs');

//create an empty array for employees
const employeeArr = [];
const employeeIdArr = [];

//create a function for building a team, then create seperate questions for each team member 
//think about html output - keep every team member grouped properly
const newManager = () => {
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
        .then(answers => {
            const managerInfo = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.officeNum);
            employeeArr.push(managerInfo);
            newEngineer();
        })
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

        .then(answers => {
            const engineerInfo = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.github);
            employeeArr.push(engineerInfo)
            checkMoreMembers();
        })
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
        .then(answers => {
            const internInfo = new Intern(answers.internName, answers.internId, answers.internEmail, answers.school);
            employeeArr.push(internInfo)
            checkMoreMembers();
        })
}
//create a function for an option if user wants to add another employee
const checkMoreMembers = (addData) => {
    inquirer.prompt([
        {
            type: 'confirm',
            name: 'confirmAdd',
            message: "Would you like to add another team member?"
        }
    ]).then(answers => {
        console.log(answers.confirmAdd);
        if (answers.confirmAdd) {
          inquirer.prompt([
                {
                    type: 'list',
                    name: "roleChoice",
                    message: 'What role will this member have?',
                    choices: ['Engineer', 'Intern']

                }
            ])
                .then(answers => {
                    if (answers.roleChoice === 'Engineer') {
                       newEngineer();
                    } else if (answers.roleChoice === 'Intern') {
                       newIntern();
                    }
                })
        } else {
            initHTML();
        }
    })
};

const initHTML = () => {
        const pageHTML = generatePage(employeeArr);

        fs.writeFile('./index.html', pageHTML, err => {
            if (err) throw new Error(err);

            console.log('Your team has been generated! Check out index.html to see your website.')
        })
    };
    newManager()



