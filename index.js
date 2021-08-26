const inquirer = require("inquirer");
const fs = require("fs");
const uuid = require("./helpers/uuid");

const managerArray = [];
const engineerArray = [];
const internArray = [];

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

function addManager() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: "what is your name?",
      },
      {
        type: "input",
        name: "managerId",
        message: "we will create you an id",
      },
      {
        type: "input",
        name: "managerEmail",
        message: "what is yout email?",
      },
      {
        type: "input",
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
      const newManager = new manager(
        response.managerName,
        response.managerId,
        response.managerEmail,
        response.managerOffice
      );
      managerArray.push(newManager);
      console.log(managerArray);
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

function addEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "engineerName",
        message: "what is your name?",
      },
      {
        type: "input",
        name: "engineerId",
        message: "we will create you an id",
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
      const newEngineer = response;
      engineerArray.push(newEngineer);

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

function addIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "internName",
        message: "what is your name?",
      },
      {
        type: "input",
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
      const newIntern = response;
      internArray.push(newIntern);

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

initQuestions();
// inquirer.prompt();
