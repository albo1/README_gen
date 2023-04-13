// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "Creative Commons Zero v1.0 Universal":
      https://img.shields.io/badge/license-Creative%20Commons%20Zero%20v1.0%20Universal-yellow
      break;
    case "Apache 2.0":
      https://img.shields.io/badge/License-Apache_2.0-blue.svg
      break;
    case "MIT":
      https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT
      break;
    case "Mozilla Public 2.0":
      https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0
      break;
    case "None":
      https://img.shields.io/badge/license-None-lightgrey
      break;
  }
}

//call renderLicenceBadge somewhere on the page but its 11:52pm


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateREADME(data) {
  return `
  # ${data.title}

  ## Description
    ${data.description}

  ## Table of Contents
    ${data.ToC}
    - [Installation](#installation)

  ## Insallation
    ${data.installation}

  ## Usage
    ${data.usage}

  ## Contributors
    ${data.contributions}

  ## License
    ${data.license}

  ## Contact
  My Github profile is: ${data.question1}

  If your have any questions reach out to me at: ${data.question2}

   ## Tests
    ${data.tests}
`;
}

module.exports = generateREADME;
