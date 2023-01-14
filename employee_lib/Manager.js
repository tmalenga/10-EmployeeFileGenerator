const Employee = require("./Employee");

class Manager extends Employee{
    constructor(id, name, email, role, officeNumber) {
        super(id, name, email);
        this.role = role;
        this.officeNumber = officeNumber;
        
    }

    getOfficeNumber(){
        return this.officeNumber;
    }

}
module.exports = Manager;