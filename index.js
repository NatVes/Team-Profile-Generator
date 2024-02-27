import Manager from "./lib/Manager.js";
import Engineer from "./lib/Engineer.js";
import Intern from "./lib/Intern.js";
import inquirer from "inquirer";
import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";

const fileURL = fileURLToPath(import.meta.url);
const __dirname = path.dirname(fileURL);

const OUTPUT_DIR = path.resolve(__dirname, "output");
const htmlPath = path.join(OUTPUT_DIR, "team.html");
const stylePath = path.join(OUTPUT_DIR, "style.css");

import { render, style } from "./src/page-template.js";


// TODO: Write Code to gather information about the development team members, and render the HTML file.

// arrays of questions for user
const managerQuestions = [
    {
        type: 'input',
        name: 'managerName',
        message: `What is the team manager's name?`,        
        validate: function(name) {

            let valid =/^[a-zA-Z\s]+$/.test(name);

            if (valid) {                
                return true;
            } else {
                console.log("  Please enter a valid name")
                return false;
            }
        },
    },
    {
        type: 'input',
        name: 'managerID',
        message: `What is the team manager's ID?`,
        validate: function(id) {

            let valid =/^(?=.*\d)[a-zA-Z\d]*$/.test(id);

            if (valid) {                
                return true;
            } else {
                console.log("  Please enter a valid ID")
                return false;
            }
        },
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: `What is the team manager's email address?`,
        validate: function(email) {

            let valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

            if (valid) {                
                return true;
            } else {
                console.log("  Please enter a valid email address")
                return false;
            }
        },
    },
    {
        type: 'input',
        name: 'managerOfficeNumber',
        message: `What is the team manager's office number?`,
        validate: function(number) {

            let valid =/^(?=.*\d)[a-zA-Z\d]*$/.test(number);

            if (valid) {                
                return true;
            } else {
                console.log("  Please enter a valid office number")
                return false;
            }
        },
    },
]

const options = [
    {
        type: 'list',
        name: 'option',
        message: 'Which employee should be added next?',
        choices: ['Add an engineer', 'Add an intern', 'Finish building the team'],        
    },
]

const engineerQuestions = [
    {
        type: 'input',
        name: 'engineerName',
        message: `What is the engineer's name?`,
        validate: function(name) {

            let valid =/^[a-zA-Z\s]+$/.test(name);

            if (valid) {                
                return true;
            } else {
                console.log("  Please enter a valid name")
                return false;
            }
        },
    },
    {
        type: 'input',
        name: 'engineerID',
        message: `What is the engineer's ID?`,
        validate: function(id) {

            let valid =/^(?=.*\d)[a-zA-Z\d]*$/.test(id);

            if (valid) {                
                return true;
            } else {
                console.log("  Please enter a valid ID")
                return false;
            }
        },
    },
    {
        type: 'input',
        name: 'engineerEmail',
        message: `What is the engineer's email address?`,
        validate: function(email) {

            let valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

            if (valid) {                
                return true;
            } else {
                console.log("  Please enter a valid email address")
                return false;
            }
        },
    },
    {
        type: 'input',
        name: 'engineerGitHub',
        message: `What is the engineer's GitHub username?`,
        validate: function(github) {

            let valid =/^[a-zA-Z\d](?:[a-zA-Z\d]|-(?=[a-zA-Z\d]))*$/.test(github);

            if (valid) {                
                return true;
            } else {
                console.log("  Please enter a valid GitHub username")
                return false;
            }
        },
    },
]

const internQuestions = [
    {
        type: 'input',
        name: 'internName',
        message: `What is the intern's name?`,
        validate: function(name) {

            let valid =/^[a-zA-Z\s]+$/.test(name);

            if (valid) {                
                return true;
            } else {
                console.log("  Please enter a valid name")
                return false;
            }
        },
    },
    {
        type: 'input',
        name: 'internID',
        message: `What is the intern's ID?`,
        validate: function(id) {

            let valid =/^(?=.*\d)[a-zA-Z\d]*$/.test(id);

            if (valid) {                
                return true;
            } else {
                console.log("  Please enter a valid ID")
                return false;
            }
        },
    },
    {
        type: 'input',
        name: 'internEmail',
        message: `What is the intern's email address?`,
        validate: function(email) {

            let valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

            if (valid) {                
                return true;
            } else {
                console.log("  Please enter a valid email address")
                return false;
            }
        },
    },
    {
        type: 'input',
        name: 'internSchool',
        message: `What is the intern's school?`,
        validate: function(school) {

            let valid =/^[a-zA-Z0-9\s]+$/.test(school);

            if (valid) {                
                return true;
            } else {
                console.log("  Please enter a valid school name")
                return false;
            }
        },
    },
]

const team = [];

async function managerQA() {
    const answers = await inquirer.prompt(managerQuestions);
    let manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerOfficeNumber);
    team.push(manager);        
}

async function engineerQA() {
    const answers = await inquirer.prompt(engineerQuestions);
    let engineer = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineerGitHub);
    team.push(engineer);        
}

async function internQA() {
    const answers = await inquirer.prompt(internQuestions);
    let intern = new Intern(answers.internName, answers.internID, answers.internEmail, answers.internSchool);
    team.push(intern);        
}

async function optionsQA() {
    const answers = await inquirer.prompt(options);
    switch (answers.option) {
        case 'Add an engineer':
            await engineerQA();       
            break;             
        case 'Add an intern':
            await internQA();       
            break;            
        case 'Finish building the team':
            return;
    }  
    await optionsQA();          
}

function writeToFile(data) {  
    const dir = "./output";
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }  
    fs.writeFile(htmlPath, render(data), (error) =>
        error ? console.error('Error writing HTML file: ', error) : console.log('HTML file generated successfully')
    )
    fs.writeFile(stylePath, style(), (error) =>
        error ? console.error('Error writing CSS file: ', error) : console.log('CSS file generated successfully')
    )     
}

async function init() {
    await managerQA();
    await optionsQA();
    writeToFile(team);    
}

init();

