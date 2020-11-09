

const generateMembers = members => {
    const generateManager = manager => {
        return `
      <section class="my-3" id="portfolio">
        <h2 class="text-dark bg-primary p-2 display-inline-block">Work</h2>
        <div class="flex-row justify-space-between">
            <div class="col-12 mb-2 bg-dark text-light p-3">
              <h3 class="portfolio-item-title text-light">${manager.getName()}</h3>
              <h4 class="portfolio-item-title text-light">${manager.getRole()}</h3>  
              <ul>
                <li> ID: ${manager.getId()}</li>
                <li> Email: <a href="mailto:${manager.getEmail()}>${manager.getEmail()}</li>
                <li> Office Number: ${manager.getOfficeNum()}</li>
              </ul>
            </div>
          `;

    }
    const generateEngineer = engineer => {
        return `
      <section class="my-3" id="portfolio">
        <h2 class="text-dark bg-primary p-2 display-inline-block">Work</h2>
        <div class="flex-row justify-space-between">
            <div class="col-12 mb-2 bg-dark text-light p-3">
              <h3 class="portfolio-item-title text-light">${engineer.getName()}</h3>
              <h4 class="portfolio-item-title text-light">${manager.getRole()}</h3>  
              <ul>
                <li> ID: ${engineer.getId()}</li>
                <li> Email: <a href="mailto:${engineer.getEmail()}>${engineer.getEmail()}</li>
                <li> GitHub: <a href= "${engineer.getGithub()}" target="_blank</li>
              </ul>
            </div>
          `;

    }
};
module.exports = templateData => {
    // destructure page data by section
    const { projects, about, ...header } = templateData;

    return `
    < !DOCTYPE html >
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
                                        <header>
                                            <div class="container flex-row justify-space-between align-center py-3">
                                                <h1 class="page-title text-secondary bg-dark py-2 px-3">${header.name}</h1>
                                                <nav class="flex-row">
                                                    <a class="ml-2 my-1 px-2 py-1 bg-secondary text-dark" href="https://github.com/${header.github
        }">GitHub</a>
                                                </nav>
                                            </div>
                                        </header>
                                        <main class="container my-5">
                                            ${generateProjects(projects)}
            ${generateAbout(about)}
                                        </main>
                                        <footer class="container text-center py-3">
                                            <h3 class="text-dark">&copy; ${new Date().getFullYear()} by ${header.name}</h3>
                                        </footer>
                                    </body>
    </html>
    `;
};