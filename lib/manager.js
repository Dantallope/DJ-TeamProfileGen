const Employee = require('./employee')

class Manager {
    constructor(name,id,email,officenumber){
        super(name,id,email)
        this.officenumber = officenumber
        
    }

}
const manager = new Manager
manager.getName();