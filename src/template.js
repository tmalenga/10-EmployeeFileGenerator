// create the team
const generateTeam = (team) => {
    // create the manager html
    const generateManager = (manager) => {
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
      </div>
          `;
    };

// create the html for engineers
    const generateEngineer = (engineer) => {
      return `
        <div class="card employee">
        <div class="card-header">
            <h2 class="card-title">${engineer.getName()}</h2>
            <h3 class="card-title">${engineer.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-items">
            <li class="list-items">ID: ${engineer.getId()}</li>
            <li class="list-items">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
            <li class="list-items">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
        </ul>
        </div>
    </div>
        `;
  };

    // create the html for interns
    const generateIntern = (intern) => {
        return `
            <div class="card employee">
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
     </div>
            `;
      };

  