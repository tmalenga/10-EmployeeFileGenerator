// To import external modules required
const fs = require('fs');
const inquirer = require('inquirer');
// To import classes required
const Employee = require('./employee_lib/Employee');
const Engineer = require('./employee_lib/Engineer');
const Intern = require('./employee_lib/Intern');
const Manager = require('./employee_lib/Manager');

//Array to ask "Parent/ Common questions"
const questions = 
[
    {       
      type: "input",
      message: "Employee ID:  ",
      name: "id",
    },

    {       
        type: "input",
        message: "Employee Name:  ",
        name: "name",
    },
    
    {       
        type: "input",
        message: "Email Address:  ",
        name: "email",
    }, 
    
    {       
        type: "list",
        message: "Employee Role:  ",
        choices: ["Manager", "Engineer", "Intern", "None"],
        name: "role",
    },

];

const managerQuestions = [
    {
        type: "input",
        message: "Enter office number:  ",
        name: "officeNumber"

    }
]

//Function to run app
function init(){
    inquirer.prompt(questions)
    .then(function(data){
        console.log(data.role);
        if (data.role == "Manager"){
            console.log("Yay")
            createManager()           
            }
        } )
        // create function to call questions for ea employee role 
        // create Team array and upend objects into team array
        // Use team array to create HTML - I think!!!!
    }
            

function createManager(){
    let officeNum = inquirer.prompt(managerQuestions)
    //let newManager = new Manager(data.id, data.name, data.email, data.role, officeNum);      
    //console.log(officeNumber)

}

// calling the app
init();
