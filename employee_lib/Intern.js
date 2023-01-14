const Employee = require("./Employee");

class Intern extends Employee{
    constructor(id, name, email, role, school) {
        super(id, name, email);
        this.role = "Intern";
        this.school = school;        
    }

    getSchool(){
        return this.school;
    }

}
module.exports = Intern;