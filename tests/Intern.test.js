const Engineer = require('../employee_lib/Intern');
const newEmployee = new Engineer(101, "Sara", "sara@employee.com", "Intern" ,"College of Knowledge");

test("Creates a new Intern object", () =>{
    expect(newEmployee.id).toEqual(101);
    expect(newEmployee.name).toBe("Sara");
    expect(newEmployee.email).toBe("sara@employee.com")
    expect(newEmployee.school).toBe("College of Knowledge")  
})

test("returns the id of the employee", () =>{
    expect(newEmployee.getId()).toEqual(101);

})

test("returns the name of the employee", () =>{
    expect(newEmployee.getName()).toBe("Sara");

})

test("returns the name of the email", () =>{    
    expect(newEmployee.getEmail()).toBe("sara@employee.com");

})

test("returns the role of engineer", () =>{
    expect(newEmployee.getRole()).toBe("Intern");

})

test("returns the github", () =>{
    expect(newEmployee.getSchool()).toBe("College of Knowledge");

})