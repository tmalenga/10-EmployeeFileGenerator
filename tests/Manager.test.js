const Manager = require('../employee_lib/Manager');
const newEmployee = new Manager(101, "Bee", "bee@employee.com", "Manager" ,5555555);

test("Creates a new Intern object", () =>{
    expect(newEmployee.id).toEqual(101);
    expect(newEmployee.name).toBe("Bee");
    expect(newEmployee.email).toBe("bee@employee.com")
    expect(newEmployee.officeNumber).toEqual(5555555)  
})

test("returns the id of the employee", () =>{
    expect(newEmployee.getId()).toEqual(101);

})

test("returns the name of the employee", () =>{
    expect(newEmployee.getName()).toBe("Bee");

})

test("returns the name of the email", () =>{    
    expect(newEmployee.getEmail()).toBe("bee@employee.com");

})

test("returns the role of Manager", () =>{
    expect(newEmployee.getRole()).toBe("Manager");

})

test("returns the phone number", () =>{
    expect(newEmployee.getOfficeNumber()).toEqual(5555555);

})