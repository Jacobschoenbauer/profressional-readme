// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is your user name?",
    name: "username",
  },
  {
    type: "input",
    message: '"What languages do you know?"?',
    name: "language",
  },
  {
    type: "input",
    message: 'What is your preferred method of communication?"',
    name: "communication",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.appendFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("Success!")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((response) => {
const markDown = generateMarkdown(response)
    writeToFile("genReadMe.md", markDown);
  });
}

// Function call to initialize app
init();
