// creates the team
const generateTeam = team => {

    // creates the manager html
    const generateManager = manager => {
        return `
        <div class="card col-md-3 employee-card p-0 shadow">
        <div class="card-header bg-primary text-light">
            <h2 class="card-title">${manager.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i> ${manager.getRole()}</h3>
        </div>
        <div class="card-body bg-body-tertiary">
            <ul class="list-group">
                <li class="list-group-item">ID: ${manager.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>
        `;
    };

    // creates the html for engineers
    const generateEngineer = engineer => {
        return `
        <div class="card col-md-3 employee-card p-0 shadow">
    <div class="card-header bg-primary text-light">
        <h2 class="card-title">${engineer.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-glasses mr-2"></i> ${engineer.getRole()}</h3>
    </div>
    <div class="card-body bg-body-tertiary">
        <ul class="list-group">
            <li class="list-group-item">ID: ${engineer.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
        </ul>
    </div>
</div>
        `;
    };

    // creates the html for interns
    const generateIntern = intern => {
        return `
        <div class="card col-md-3 employee-card p-0 shadow">
    <div class="card-header bg-primary text-light">
        <h2 class="card-title">${intern.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i> ${intern.getRole()}</h3>
    </div>
    <div class="card-body bg-body-tertiary">
        <ul class="list-group">
            <li class="list-group-item">ID: ${intern.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
            <li class="list-group-item">School: ${intern.getSchool()}</li>
        </ul>
    </div>
</div>
        `;
    };

    const html = [];

    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );
    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
    );

    return html.join("");

}

// exports function to generate entire page
export function render(team) {

    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Bungee&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>

<body>
    <div class="container-fluid py-5 mb-5 bg-danger rounded-bottom-3">
        <div class="row">
            <div class="col-12 my-3 team-heading">
                <h1 class="text-center">MY TEAM</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row column-gap-5 row-gap-5 justify-content-center">            
            ${generateTeam(team)}            
        </div>
    </div>
</body>
</html>
    `;
};

export function style() {
    return `
    .team-heading {
        font-family: "Bungee", sans-serif;
        font-weight: 400;
        font-style: normal;    
    }
    
    .team-heading h1 {
        font-size: 64px;        
        background-image: linear-gradient(90deg, #F8CDDA, #77A1D3, #1D2B64, #77A1D3, #F8CDDA);
        background-size: 200% auto;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        color: transparent;
        animation: move 10s linear infinite;
    }
    
    @keyframes move {
        0% {background-position: 0 50%}         
        50% {background-position: 100% 50%}
        100% {background-position: 200% 50%} 
    }
    `
}