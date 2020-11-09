const inquirer = require('inquirer');
const Manager = require('../lib/Manager');
const Intern = require('../lib/Intern');
const Engineer = require('../lib/Engineer');
const Employee = require('./lib/Employee');

//create an empty array for employees
const employeeArr = [];


//create a function for adding a new employee
function newEmployee() {
    //use inquirer to give prompts for employee information
    inquirer
        .pronpt([
            {
                type: input,
                name: 'name',
                message: "Enter new employees name"
            },
            {
                type: input,
                name: 'id',
                message: 'Please enter an ID number for this employee'

            },
            {
                type: choice,
                name: 'role',
                message: "Please chose the employee's role",
                choices: ['Manager', 'Engineer', 'Intern']
            },
            {
                type: input,
                name: 'email',
                message: 'Enter employees email'
            }
            ])
    //create a function to determine the role based on user input and then cycle through appropriate questions
    .then(function(name, id, role, email){
        let roleInfo = '';
        //include a conditional for role information
        if(role === 'Manager'){
            //assign office number 
            roleInfo = "Office number"
            //engineers need github username
        } else if (role === 'Engineer'){
            roleInfo = "Github"
        } else {
            //interns need school information
            roleInfo = 'School'
        }
        

        })
    //create a function for an option if user wants to add another employee
    
}

