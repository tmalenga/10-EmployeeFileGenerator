// To import external modules required
const fs = require('fs');
const inquirer = require('inquirer');
// To import classes required
const Employee = require('./employee_lib/Employee');
const Engineer = require('./employee_lib/Engineer');
const Intern = require('./employee_lib/Intern');
const Manager = require('./employee_lib/Manager');

//Array to store team member objects
const teamMembers = [];

// Node v10+ includes a promises module as an alternative to using callbacks with file system methods.
// const { writeFile } = require('fs').promises;

//Questions to prompt the user and generate the 
async function init() {   
    const addMember = await inquirer
      .prompt([
        {
          name:'userInput',
          type: 'list',
          choices: ['Manager', 'Engineer', 'Intern'],
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
      teamMembers.push(newManager);

      if (managerAns.nextStep == 'Add Team Member'){
        init()
      }else{
        createTeam(teamMembers)
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
      teamMembers.push(newEngineer);
      if (engineerAns.nextStep === 'Add Team Member'){
        init()
      }else{
        createTeam(teamMembers)
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
    teamMembers.push(newIntern);
    if (internAns.nextStep === 'Add Team Member'){
      init()
    }else{
      createTeam(teamMembers)
    }

  } 
}
 
  init();
 
const generateTeam = (team) => {
  const [engineers, managers, interns] = [getEngineers(team), getManagers(team), getInterns(team)];

  // const managersTemplateArray = managers.map(manager => managerHTML(manager));
  // const managersTemplate = managersTemplateArray.join('');

  const managersTemplate = managers.map(managerHTML).join('');
  const engineersTemplate = engineers.map(engineerHTML).join('');
  const internsTemplate = interns.map(internHTML).join('');
  //const teamHTML = [managersTemplate, engineersTemplate, internsTemplate].join();
 return `
      <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>Team</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" 
       integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
      <link rel="stylesheet" href="style.css">
      
  </head>
  <body>
    <div class="container-fluid">
        <div class="row" id="header">
            <div class="col-12 jumbotron mb-3 team-heading">
                <h1 class ="text-center">Team Portfolio</h1>
            </div>
        </div>
    </div>
    <div class="container">
      <div class="row">
      <div class="team-area col-12 d-flex justify-content-center">
       ${managersTemplate}              
      </div>
    </div>
    </div>
    <div class="container">
      <div class="row">
      <div class="team-area col-12 d-flex justify-content-center">
       ${engineersTemplate}              
      </div>
      </div>
    </div>
    <div class="container">
    <div class="row">
      <div class="team-area col-12 d-flex justify-content-center">
       ${internsTemplate}              
      </div>
      </div>
    </div>
  </body>
</html>
      `;
 };
  
  function createTeam (teamMembers) {
    fs.writeFileSync("index.html", generateTeam(teamMembers));
    }

function getManagers(teamMembers){  
  return teamMembers.filter(employee => {if (employee.getRole() === "Manager"){
    return true;
    
  }}) 

};

function getEngineers(teamMembers){
  return teamMembers.filter(employee => {if (employee.getRole() === "Engineer"){
    return true;
  }}) 

};

function getInterns(teamMembers){
  return teamMembers.filter(employee => {if (employee.getRole() === "Intern"){
    return true;
  }}) 

};

function managerHTML(manager){
  
  return ` 
  <div class="card employee">
  <div class="card-header">
      <h2 class="card-title">${manager.getName()}</h2>
      <h3 class="card-title">${manager.getRole()}</h3>
  </div>
  <div class="card-body">
      <ul class="list-items">
          <li class="list-items">ID: ${manager.getId()}</li>
          <li class="list-items">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
          <li class="list-items">Office number: ${manager.getOfficeNumber()}</li>
      </ul>
  </div>
</div>`;

}

function engineerHTML(engineer){
  
  return `<div class="card employee">
  <div class="card-header">
      <h2 class="card-title">${engineer.getName()}</h2>
      <h3 class="card-title">${engineer.getRole()}</h3>
  </div>
  <div class="card-body">
      <ul class="list-items">
          <li class="list-items">ID: ${engineer.getId()}</li>
          <li class="list-items">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
          <li class="list-items">Github: ${engineer.getGithub()}</li>
      </ul>
  </div>
</div>`;
}

function internHTML(intern){
  
  return `<div class="card employee">
  <div class="card-header">
      <h2 class="card-title">${intern.getName()}</h2>
      <h3 class="card-title">${intern.getRole()}</h3>
  </div>
  <div class="card-body">
      <ul class="list-items">
          <li class="list-items">ID: ${intern.getId()}</li>
          <li class="list-items">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
          <li class="list-items">School: ${intern.getSchool()}</li>
      </ul>
  </div>
</div>`;
}


