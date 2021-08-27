const inquirer = require("inquirer");
const fs = require("fs");
const uuid = require("./helpers/uuid");
//creates a team array to create cards from

const teamArray = [];
let spec;
const Manager = require("./lib/manager");
const intern = require("./lib/intern");
const engineer = require("./lib/engineer");
const employee = require("./lib/employee");
//initial questions (employee) and desides what type of employee you are
let innerHTML = "";

// function renderMarkdown() {

// }

function generateMarkdown() {
  teamArray.map((mapData) => {
    mapData.getRole() === "Manager"
      ? (spec = `Office Number: ${mapData.getOfficeNumber()}`)
      : mapData.getRole() === "Engineer"
      ? (spec = `GitHub: ${mapData.getGithub()}`)
      : mapData.getRole() === "Intern"
      ? (spec = `School: ${mapData.getSchool()}`)
      : console.log("error");
    console.log(mapData.getRole());
    innerHTML += `<div class="card">
        <div class="card-body">
          <h5 class="card-title">${mapData.getName()}</h5>
          <h5 class="card-title">${mapData.getRole()}</h5>
          <p class="card-text">${mapData.getEmail()}</p>
          <p class="card-text">
            <small class="text-muted"> ${spec}</small>
          </p>
        </div>
      </div>`;
  });
  fs.writeToFile("index.html", innerHTML);
}

initQuestions = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "empType",
        message: "which type of employee would you like to create?",
        choices: ["Manager", "Engineer", "Intern"],
      },
    ])
    .then((response) =>
      response.empType === "Manager"
        ? addManager()
        : response.empType === "Engineer"
        ? addEngineer()
        : response.empType === "Intern"
        ? addIntern()
        : console.log("error")
    );
};

//addMananger and where to go next
function addManager() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: "what is your name?",
      },
      {
        type: "number",
        name: "managerId",
        message: "we will create you an id",
      },
      {
        type: "input",
        name: "managerEmail",
        message: "what is yout email?",
      },
      {
        type: "number",
        name: "managerOffice",
        message: "what is your office number?",
      },
      {
        type: "list",
        name: "nextMember",
        message: "which type of team member would you like to add next?",
        choices: [
          "Manager",
          "Engineer",
          "Intern",
          "I do not want to add anymore team members",
        ],
      },
    ])
    .then((response) => {
      const newManager = new Manager(
        response.managerName,
        response.managerId,
        response.managerEmail,
        response.managerOffice
      );

      teamArray.push(newManager);

      response.nextMember === "Manager"
        ? addManager()
        : response.nextMember === "Engineer"
        ? addEngineer()
        : response.nextMember === "Intern"
        ? addIntern()
        : response.nextMember === "I do not want to add anymore team members"
        ? generateMarkdown()
        : console.log("error");
    });
}
//addEngineer and where to go next
function addEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "engineerName",
        message: "what is your name?",
      },
      {
        type: "number",
        name: "engineerId",
        message: "what is your id",
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "what is yout email?",
      },
      {
        type: "input",
        name: "engineerGit",
        message: "what is your Github Username?",
      },
      {
        type: "list",
        name: "nextMember",
        message: "which type of team member would you like to add next?",
        choices: [
          "Manager",
          "Engineer",
          "Intern",
          "I do not want to add anymore team members",
        ],
      },
    ])
    .then((response) => {
      const newEngineer = new engineer(
        response.engineerName,
        response.engineerId,
        response.engineerEmail,
        response.engineerGit
      );
      teamArray.push(newEngineer);
      response.nextMember === "Manager"
        ? addManager()
        : response.nextMember === "Engineer"
        ? addEngineer()
        : response.nextMember === "Intern"
        ? addIntern()
        : response.nextMember === "I do not want to add anymore team members"
        ? generateMarkdown()
        : console.log("error");
    });
}
//addIntern and where to go next
function addIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "internName",
        message: "what is your name?",
      },
      {
        type: "number",
        name: "internId",
        message: "we will create you an id",
      },
      {
        type: "input",
        name: "internEmail",
        message: "what is yout email?",
      },
      {
        type: "input",
        name: "internSchool",
        message: "what school are you attending?",
      },
      {
        type: "list",
        name: "nextMember",
        message: "which type of team member would you like to add next?",
        choices: [
          "Manager",
          "Engineer",
          "Intern",
          "I do not want to add anymore team members",
        ],
      },
    ])
    .then((response) => {
      const newIntern = new intern(
        response.internName,
        response.internId,
        response.internEmail,
        response.internSchool
      );
      teamArray.push(newIntern);

      response.nextMember === "Manager"
        ? addManager()
        : response.nextMember === "Engineer"
        ? addEngineer()
        : response.nextMember === "Intern"
        ? addIntern()
        : response.nextMember === "I do not want to add anymore team members"
        ? generateMarkdown()
        : console.log("error");
    });
}
//start the app
initQuestions();
// inquirer.prompt();
