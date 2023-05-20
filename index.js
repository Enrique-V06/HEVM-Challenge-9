// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs');
const { title } = require('process');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your Github username:',
    },
    {
        type: 'list',
        message: 'What type of license are you using?',
        name: 'license',
        choices:['ISC', 'MIT', 'Apache', 'mpl'],
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a description:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please enter installation instructions:',
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Please enter the names of any constributors:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter usage instructions:',
    },
    {
        type: 'input',
        name: 'guidelines',
        message: 'Please enter guidelines for the application:',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please enter any test instructions:',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // console.log(data)
    let license = data.license
    console.log(license)
    function Badge(license){
    const badges = {
        ISC: '[![License](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
        MIT: '[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)',
        Apache : '[![License](https://img.shields.io/badge/License-apache-2.0-blue.svg)](https://opensource.org/licenses/apache-2.0)',
        mpl : '[![License](https://img.shields.io/badge/License-mpl-2.0-blue.svg)](https://opensource.org/licenses/mpl-2.0)',
    }
    return badges[license]
    }

    
    const generateREADME = ({title, email, github, license, description, installation, contributors, guidelines, test, instructions}) => 
    `# ${title}
    ${Badge(license)}
    ## Table of Contents 
    
    - [!Description](#Description)
    - [!Installation](#Installation)
    - [!Usage](#Usage)
    - [!Credits](#Credits)
    - [!License](#License)
    - [!Tests](#Tests)
    - [!Contact](#Contact)
    
    ## Description

    ${description}

    ## Installation

    ${installation}
    
    ## Usage
    
    ${instructions}

    ## Guidelines

    ${guidelines}
    
    ## Credits
    
    ${contributors}
    
    ## License
    
    ${license}
        
    ## Tests
    
    ${test}

    ## Contact

    Email: ${email}
    Github: ${github}
    `;

    fs.writeFile(fileName, generateREADME(data), (err) => 
    err ? console.log(err) : console.log('README file created!'));
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            const title = `${data.title.toLowerCase().split(' ').join('')}_README.md`
            // console.log(title)
            writeToFile(title, data)
        })
}

// Function call to initialize app
init();
