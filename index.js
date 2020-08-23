const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown")

inquirer.prompt([
    {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
    },
    {
    type: "input",
    name: "description",
    message: "Describe your project.",
    },
    {
    type: "input",
    name: "installation",
    message: "Tell me how to install it.",
    },
    {
    type: "input",
    name: "usage",
    message: "How do I use this app?",
    },
    {
    type: "input",
    name: "license",
    message: "What licenses are used?",
    },
    {
    type: "input",
    name: "contributions",
    message: "Who contributed to the project?",
    },
    {
    type: "input",
    name: "tests",
    message: "What tests were used?",
    },
    {
    type: "input",
    name: "profile",
    message: "Link your GitHub profile",
    }
  
]).then(function(data){
    generateMarkdown(data);
})