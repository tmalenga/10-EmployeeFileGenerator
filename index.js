// To import external modules required
const fs = require('fs');
const inquirer = require('inquirer');
// To import classes required
const Employee = require('./employee_lib/Employee');
const Engineer = require('./employee_lib/Engineer');
const Intern = require('./employee_lib/Intern');
const Manager = require('./employee_lib/Manager');
const generateTeam = require("./src/template");

//Array to store team member objects
const teamMember = [];

async function init() {
   
    const addMember = await inquirer
      .prompt([
        {
          name:'userInput',
          type: 'list',
          choices: ['Manager', 'Engineer', 'Intern', 'Create Team'],
          message: "Select what team member you would like to add or whether you would like to create the team:"
        }
      ])
  
      if (addMember.userInput === 'Manager') {
        //return createManager()
        const managerAns = await inquirer.prompt([
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
          type: "input",
          message: "What is your office number",
          name: "officeNumber",
        },

        {
          name:'nextStep',
          type: 'list',
          choices: ['Add Team Member', 'Create Team'],
          message: "Select what team member you would like to do next:"
        },
      ])     
      const newManager = new Manager(managerAns.id, managerAns.name, managerAns.email, addMember.userInput, managerAns.officeNumber);
      teamMember.push(newManager);

      if (managerAns.nextStep == 'Add Team Member'){
        init()
      }else{
        createTeam()
      }
        
      }
      else if(addMember.userInput === 'Engineer'){
        const engineerAns = await inquirer.prompt([
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
          type: "input",
          message: "What is your github profile",
          name: "github",
        },

        {
          name:'nextStep',
          type: 'list',
          choices: ['Add Team Member', 'Create Team'],
          message: "Select what team member you would like to do next:"
        },

      ])
      const newEngineer = new Engineer(engineerAns.id, engineerAns.name, engineerAns.email, addMember.userInput, engineerAns.github);
      teamMember.push(newEngineer);
      if (engineerAns.nextStep === 'Add Team Member'){
        init()
      }else{
        createTeam()
      }

    }
    else if(addMember.userInput === 'Intern'){
      const internAns = await inquirer.prompt([
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
        type: "input",
        message: "What is school did you attend",
        name: "school",
      },

      {
        name:'nextStep',
        type: 'list',
        choices: ['Add Team Member', 'Create Team'],
        message: "Select what team member you would like to do next:"
      },

    ])
    const newIntern = new Intern(internAns.id, internAns.name, internAns.email, addMember.userInput, internAns.school);
    teamMember.push(newIntern);
    if (internAns.nextStep === 'Add Team Member'){
      init()
    }else{
      createTeam()
    }

  } 
} 
  init();

  function createTeam () {
    console.log(teamMember);
    fs.writeFileSync(
      "./index.html", generateTeam(teamMember));
    }





// }

// const managerQuestions = [
//     {
//         type: "input",
//         message: "Enter office number:  ",
//         name: "officeNumber"

//     }
// ]

// //Function to run app
// function init(){
//     questions();
//     //inquirer.prompt(questions)
//     .then(function(data){
//         console.log(data.role);
//         if (data.role == "Manager"){
//             // inquirer.prompt(managerQuestions)
//             // .then(function(resp){
//             //     console.log(resp.officeNumber);
//             // })
//             createManager(data);           
                                
//             }
        
//         } )
        
//         // create function to call questions for ea employee role 
//         // create Team array and upend objects into team array
//         // Use team array to create HTML - I think!!!!
        
//     }
            

// function createManager(data){
//     //let officeNum = inquirer.prompt(managerQuestions)
//     //let newManager = new Manager(data.id, data.name, data.email, data.role, officeNum);      
//     //console.log(officeNumber)
//     inquirer.prompt(managerQuestions)
//     .then(function(resp){        
//         let newManager = new Manager(data.id, data.name, data.email, data.role, resp.officeNumber); 
//         //console.log(newManager);
//         teamMember.push(newManager);
//         //console.log(teamMember);
//         return teamMember;
//     })   
// }

// async function makeTeam(){
//     fs.writeFile('./dist/index.html', generateTeam(teamMember));
// }

// // calling the app
// init();
// //makeTeam()