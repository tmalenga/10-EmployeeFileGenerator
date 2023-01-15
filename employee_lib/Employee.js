class Employee{
    constructor(id, name, email){
        this.id = id;
        this.name = name;
        this.email = email;   
        this.role = "Employee";     
    }

    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getRole(){
        return this.role;
    }
}

// const employee_1 = new Employee(100, "Becky", "beack@re")
// console.log(employee_1)

module.exports = Employee