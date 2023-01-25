const inquirer = require('inquirer');
class Employee {
  constructor(name, id, email) {
    this.name = name
    this.id = id
    this.email = email
  }
  getName() {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'name',
          message: 'What is the employees name?',
        },
      ])
      getId();
  }
  getId() {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'id',
          message: 'What is the employees ID number?'
        }
      ])
  }
  getEmail() { inquirer
    .prompt([
      {
        type: 'input',
        name: 'email',
        message: 'What is the employees email address?'
      }
    ]).then.getRole();
  }
  getRole() {
    inquirer
    .prompt([
      {
        type: 'input',
        name: 'role',
        message: 'What is the employees role?'
      }
    ])
  }
}
module.exports = Employee;