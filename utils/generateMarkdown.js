// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
      break;
    case 'GNU GPLv3':
      return "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
      break;
    case 'Apache-2.0':
      return "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)";
      break;
    case 'Creative Commons':
      return "![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)";
      break;
    case 'BSD 3-Clause License':
      return "![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)";
      break;
    default:
      return "";
  }

};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return "[License: MIT](https://opensource.org/licenses/MIT)";
      break;
    case "GNU GPLv3":
      return "[License: GPL v3](https://www.gnu.org/licenses/gpl-3.0)";
      break;
    case "Apache-2.0":
      return "[License: Apache-2.0](https://opensource.org/licenses/Apache-2.0)";
      break;
    case "Creative Commons":
      return "[License: CC0-1.0](http://creativecommons.org/publicdomain/zero/1.0/)";
      break;
    case "BSD 3-Clause License":
      return "[License: BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause)";
      break;
    default:
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license != '') {
    return `## License`;
  } else return ``;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  const {
    projectName,
    description,
    install,
    usage,
    contribution,
    tests,
    license,
    github,
    email,
  } = response;

  const licenseBadge = renderLicenseBadge(license);
  const licenseLink = renderLicenseLink(license);
  const licenseRender = renderLicenseSection(license);

  return `# ${projectName}

${licenseBadge}

## Description

${description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${install}

## Usage

${usage}

## How to Contribute

${contribution}

${licenseRender}

${licenseLink}

## Tests

${tests}

## Questions

- [Github Link](${github})
- [Email: ${email}](mailto:${email})
`;
}

module.exports = generateMarkdown;
