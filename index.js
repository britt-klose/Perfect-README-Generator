
const inquirer = require('inquirer');
const fs = require('fs');
 
const generateMarkdown = require ("./utils/generateMarkdown")

//Function READme
//const generateReadMe=(promptData) =>;

//Function inquirer
const promptUser = () => {
    return(
     inquirer
         .prompt([
             {
                 // WHEN I enter my project title
                // THEN this is displayed as the title of the README
                 type: 'input',
                 message: 'What is the name of your project?',
                 name: 'title',
             },
             {
         // WHEN I am prompted for information about my application repository
        // THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
                 type: 'input',
                 message: 'Write a description of your project (what, why, & how).',
                 name: 'description',
             },
             {
        //steps needed to install project
                 type: 'input',
                 message: 'What are the installation intructions?',
                 name: 'installation',
             },
             {
        //Give instructions and examples(screenshots) for use
        //https://watch.screencastify.com/v/wCYm01U5B0sQ8wbZkDPf
        //![alt text](media/2022-02-03.png)
                 type: 'input',
                 message: 'What is the usage information?',
                 name: 'usage',
             },
             {
        //instructions for how others can contribute
        //[Contributor Covenant](https://www.contributor-covenant.org/)
                 type: 'input',
                 message: 'What are the contribution guidelines?',
                 name: 'contributing',
             },
             {
                type: 'input',
                message: 'Input how to run tests.',
                name: 'tests',
            },
        // WHEN I choose a license for my application from a list of options
        // THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

            {   type: 'list',
                message: 'Choose a license for your application',
                name: 'license',
                choices:['none', 'MIT', 'Apache', 'Boost', 'BSD', 'Mozilla', 'Perl', 'Sil','Eclipse', 'CC0', 'GNU']

            },
        // WHEN I enter my GitHub username
        // THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

            {
                type: 'input',
                message: 'Enter your GitHub username.',
                name: 'username',
            },

        // WHEN I enter my email address
        // THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
            {
                type: 'input',
                message: 'Enter your email address.',
                name: 'email',
            }
 
         ])
    )};
 promptUser()
   .then((promptData) => {
     console.log(promptData);
 
     // It's done after I have written those responses to a file.
     fs.writeFile('README.md', generateMarkdown(promptData),
         err => {
             if (err) {
                 console.log(err);
             }
             console.log('Sucess! Your Readme is ready!')
         })
 })
 
