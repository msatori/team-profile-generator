


    const generateManager = managerInfo => {
        return `
      <div class="card" width: "18rem;">
            <div classs="card-header">
              <h3 class=" text-center text-dark">${managerInfo.getName()}</h3>
              </div>
              <div class="card-body">
              <h4 class="text-light">${managerInfo.getRole()}</h3>  
              <ul class=list-group list-group-flush">
                <li class="list-group-item"> ID: ${managerInfo.getId()}</li>
                <li class="list-group-item"> Email:${managerInfo.getEmail()}<a href="mailto:${managerInfo.getEmail()}</li>
                <li class="list-group-item"> Office Number: ${managerInfo.getOfficeNum()}</li>
              </ul>
            </div>
            </div>
          `;

    }
    const generateEngineer = engineerInfo => {
        return `
        <div class="card" width: "18rem;">
        <div classs="card-header">
          <h3 class=" text-center text-dark">${engineerInfo.getName()}</h3>
          </div>
          <div class="card-body">
          <h4 class="text-light">${engineerInfo.getRole()}</h3>  
          <ul class=list-group list-group-flush">
            <li class="list-group-item"> ID: ${engineerInfo.getId()}</li>
            <li class="list-group-item"> Email: ${engineerInfo.getEmail()} <a href="mailto:${engineerInfo.getEmail()}"></li>
            <li class="list-group-item"> Github Username: ${engineerInfo.getGithub()}</li>
          </ul>
        </div>
        </div>
          `;

    }
    const generateIntern = internInfo => {
      return `
      <div class="card" width: "18rem;">
      <div classs="card-header">
        <h3 class=" text-center text-dark">${internInfo.getName()}</h3>
        </div>
        <div class="card-body">
        <h4 class="text-light"><i class="fas fa-coffee"></i>${internInfo.getRole()}</h3>  
        <ul class=list-group list-group-flush">
          <li class="list-group-item"> ID: ${internInfo.getId()}</li>
          <li class="list-group-item"> Email: ${internInfo.getEmail()} <a href="mailto:${internInfo.getEmail()}></li>
          <li class="list-group-item"> School: ${internInfo.getSchool()}</li>
        </ul>
      </div>
      </div>
        `;

  }
  
 const generateHtml = (employeeArr) => {
  let htmlBlock = ` 
  <!DOCTYPE html>
  <html lang="en">

      <head>
          <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
                  <meta http-equiv="X-UA-Compatible" content="ie=edge">
                      <title>Project Team</title>
                      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
                      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
                          <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
                              <link rel="stylesheet" href="style.css">
      </head>
                      <header><h2 class="text-dark bg-success text-center">Your Team</h2></header>
                              <body>
                                  <main class="container-fluid">
                                  <div class="card-deck">
                                  `
                                  

  for (i = 0; i < employeeArr.length; i++) {
    if (employeeArr[i].getRole() === "Manager") {
      let managerHtml = generateManager(employeeArr[i]);
      htmlBlock += managerHtml;
    }
    if (employeeArr[i].getRole() === "Engineer") {
      let engineerHtml = generateEngineer(employeeArr[i]);
      htmlBlock += engineerHtml;
    } 
    if (employeeArr[i].getRole() === "Intern") {
      let internHtml = generateIntern(employeeArr[i]);
      htmlBlock += internHtml;
    }
  }
  htmlBlock += `
  </div>
    </main>
    <footer>
        <h3 class="text-dark bg-primary">&copy; ${new Date().getFullYear()}</h3>
    </footer>
  </body>
  </html>
  `
    return htmlBlock
};

module.exports = generateHtml;