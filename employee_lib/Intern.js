const Employee = require("./Employee");

class Intern extends Employee{
    constructor(id, name, email, role, school) {
        super(id, name, email);
        this.school = school;
        this.role = "Intern";
    }

    getSchool(){
        return this.school;
    }

}
module.exports = Intern;