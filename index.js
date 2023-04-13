const inquirer = require("inquirer");
const fs = require("fs");
const generateREADME = require("./utils/generateMarkdown")

inquirer
    .prompt([
        {
            type: "input",
            name: "title",
            message: "What is the project title?"
        },
        {
            type: "input",
            name: "description",
            message: "Description?"
        },
        {
            type: "input",
            name: "ToC",
            message: "Table of Contents:",
        },
        {
            type: "input",
            name: "installation",
            message: "Installation",
        },
        {
            type: "input",
            name: "usage",
            message: "Usage?",
        },
        {
            type: "input",
            name: "license",
            message: "Licenses",
        },
        {
            
        }

    ])






















// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();