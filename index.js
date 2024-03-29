const inquirer = require('inquirer');
const Employee = require("./lib/employee")
const fs = require('fs');

const temp = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Gen</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
</head>
<body>
    doodoo
</body>
</html>`

async function init() {
  let name = new Employee();
  name.getName()
  name.getId();
};

function writeToFile(){
  const fs = require('fs');
  fs.appendFile('./dist/index.html',`${temp}`,(err) => err ? console.error(err) : console.log('commit logged'))
}

// init();
writeToFile();