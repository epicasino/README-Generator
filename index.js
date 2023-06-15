// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message:'What is the name of your project?',
    name: 'projectName',
  },
  {
    type: 'input',
    message:'Nice name! Next, give a brief description of your app.'
    name: 'projectDescription',
  },
  {
    type: 'input',
    message: 'What are the directions to install your application?',
    name: 'projectInstall',
  },
  {
    type: 'input',
    message: 'How about your project usage? How do you use your application?',
    name: 'projectUsage',
  },
  {
    type: 'input',
    message: 'Any guidelines for user contributions?',
    name: 'projectContribution',
  },
  {
    type: 'input',
    message: 'Any guidelines for testing your application?',
    name: 'projectTests',
  },
  {
    type: 'list'
    message: 'Finally, what license are you using for your application?',
    name: 'projectLicense',
    choices: ['MIT', 'GNU GPLv3', 'Apache 2.0']
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  
};

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
