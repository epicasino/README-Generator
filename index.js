// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message:'What is the name of your project?',
    name: 'projectName',
  },
  {
    type: 'editor',
    message:'Nice name! Next, give a brief description of your app.',
    name: 'description',
  },
  {
    type: 'input',
    message: 'What are the directions to install your application?',
    name: 'install',
  },
  {
    type: 'editor',
    message: 'How about your project usage? How do you use your application?',
    name: 'usage',
  },
  {
    type: 'input',
    message: 'Any guidelines for user contributions?',
    name: 'contribution',
  },
  {
    type: 'input',
    message: 'Any guidelines for testing your application?',
    name: 'tests',
  },
  {
    type: 'list',
    message: 'What license are you using for your application?',
    name: 'license',
    choices: ['MIT', 'GNU GPLv3', 'Apache-2.0', 'Creative Commons', 'BSD 3-Clause License']
  },
  {
    type: 'input',
    message: 'What is your GitHub profile link?',
    name: 'github',
  },
  {
    type: 'input',
    message: 'What is your email?',
    name: 'email',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, response) {
  let markDown = generateMarkdown(response);

  fs.writeFile(fileName, markDown, (err) => err ? console.log(err) : console.log('Success!'));
};

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then((response) => {
    console.log(response);
    writeToFile(`./responses/${response.projectName.split(" ").join("")}.md`, response)
  })
};

// Function call to initialize app
init();