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
            message: "Table of Contents?",
        },
        {
            type: "input",
            name: "installation",
            message: "Installation Process?",
        },
        {
            type: "input",
            name: "usage",
            message: "Usage?",
        },
        {
            type: "choices",
            name: "license",
            message: ["Creative Commons Zero v1.0 Universal", "Apache 2.0", "MIT", "Mozilla Public 2.0", "None"],
        },
        {
            type: "input",
            name: "contributions",
            message: "Contributions?",
        },
        {
            type: "input",
            name: "tests",
            message: "Run Tests?",
        },
        {
            type: "input",
            name: "question",
            message: "What is your Github deploy link?",
        }

    ])
    .then((data) => {
        let readMe = generateREADME(data)
        // console.log(generateREADME(data))

        fs.writeFile("README2.md", readMe, (err) =>
        err ? console.log(err) : console.log("success") 
        );
    })
























// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
