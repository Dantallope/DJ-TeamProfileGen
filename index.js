const inquirer = require('inquirer');
const fs = require('fs');


inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message:'what is your name'
        }
    ])