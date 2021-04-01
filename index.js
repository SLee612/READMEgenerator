const inquirer = require('inquirer');
const fs = require('fs');

const generateRM = (answers) =>

`# **${answers.name}**

## Description
${answers.motivation}

## Table of Contents
I. [Installation](#Installation)

II. ["Usage"](#Usage)

III. [License](#License)

IV. [Contributing]("#Contributing")

V. [Tests](#Tests)

VI. [Questions](#Questions)

***

## I. "Installation"
${answers.installation}

## II. Usage
${answers.usage}

## III. License
[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)
Copyright 2021 ${answers.license} 

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), 
to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, 
and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, 
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## IV. Contributing
${answers.contributing}

## V. Tests
${answers.tests}

## VI. Questions
github.com/${answers.questions}`



inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Project Title-',
    },
    {
      type: 'input',
      name: 'motivation',
      message: 'Provide a brief description of your project-',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Installation instructions-',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Usage information-',
    },
    {
        type: 'input',
        name: 'license',
        message: 'Your Full Name-',
      },
    {
      type: 'input',
      name: 'contribution',
      message: 'Contribution guidelines?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Test Instructions-',
      },
      {
        type: 'input',
        name: 'questions',
        message: 'GitHub Username-',
      },
  ])
  .then((answers) => {
    const rmPageContent = generateRM(answers);

    fs.writeFile('README.md', rmPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });
