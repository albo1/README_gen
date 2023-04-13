// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

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
