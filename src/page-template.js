


    const generateManager = managerInfo => {
        return `
      <section class="my-3" id="portfolio">
        <h2 class="text-dark bg-primary p-2 display-inline-block">Work</h2>
        <div class="flex-row justify-space-between">
            <div class="col-12 mb-2 bg-dark text-light p-3">
              <h3 class="portfolio-item-title text-light">${managerInfo.getName()}</h3>
              <h4 class="portfolio-item-title text-light">${managerInfo.getRole()}</h3>  
              <ul>
                <li> ID: ${managerInfo.getId()}</li>
                <li> Email: <a href="mailto:${managerInfo.getEmail()}>${managerInfo.getEmail()}</li>
                <li> Office Number: ${managerInfo.getOfficeNum()}</li>
              </ul>
            </div>
          `;

    }
    const generateEngineer = engineerInfo => {
        return `
      <section class="my-3" id="portfolio">
        <h2 class="text-dark bg-primary p-2 display-inline-block">Work</h2>
        <div class="flex-row justify-space-between">
            <div class="col-12 mb-2 bg-dark text-light p-3">
              <h3 class="portfolio-item-title text-light">${engineerInfo.getName()}</h3>
              <h4 class="portfolio-item-title text-light">${engineerInfo.getRole()}</h3>  
              <ul>
                <li> ID: ${engineerInfo.getId()}</li>
                <li> Email: <a href="mailto:${engineerInfo.getEmail()}>${engineerInfo.getEmail()}</li>
                <li> GitHub: <a href= "${engineerInfo.getGithub()}" target="_blank"></li>
              </ul>
            </div>
          `;

    }
    const generateIntern = internInfo => {
      return `
    <section class="my-3" id="portfolio">
      <h2 class="text-dark bg-primary p-2 display-inline-block">Work</h2>
      <div class="flex-row justify-space-between">
          <div class="col-12 mb-2 bg-dark text-light p-3">
            <h3 class="portfolio-item-title text-light">${internInfo.getName()}</h3>
            <h4 class="portfolio-item-title text-light">${internInfo.getRole()}</h3>  
            <ul>
              <li> ID: ${internInfo.getId()}</li>
              <li> Email: <a href="mailto:${internInfo.getEmail()}>${internInfo.getEmail()}</li>
              <li> School: ${internInfo.getSchool()}</li>
            </ul>
          </div>
        `;

  }
  
 const generateHtml = (employeeArr) => {
  let htmlBlock = ` < !DOCTYPE html >
  <html lang="en">

      <head>
          <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
                  <meta http-equiv="X-UA-Compatible" content="ie=edge">
                      <title>Project Team</title>
                      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
                          <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
                              <link rel="stylesheet" href="style.css">
</head>

                              <body>
                                  <main class="container my-5">`

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
    </main>
    <footer class="container text-center py-3">
        <h3 class="text-dark">&copy; ${new Date().getFullYear()}</h3>
    </footer>
  </body>
  </html>
  `
    return htmlBlock
};

module.exports = generateHtml;