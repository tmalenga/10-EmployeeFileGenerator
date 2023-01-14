const Employee = require('../employee_lib/Employee');

// describe("EmployeeParentClass", () => {
//     describe("initialization", () => {
//         it("Creates an instance of the Employee object", () =>{
//             const newEmployee = new Employee(100, "Becky", "beacky@employee.com");

//             expect(newEmployee.id).toEqual(100);
//             expect(newEmployee.name).toBe("Becky"); 
//         })
//     })
// })

const newEmployee = new Employee(100, "Joe", "joe@employee.com");

test("Creates a new Employee object", () =>{
    // const newEmployee = new Employee(100, "Joe", "joe@employee.com");
    expect(newEmployee.id).toEqual(100);
    expect(newEmployee.name).toBe("Joe");
    expect(newEmployee.email).toBe("joe@employee.com") 
})

test("returns the id of the employee", () =>{
    // const newEmployee = new Employee(100, "Joe", "joe@employee.com");
    expect(newEmployee.getId()).toEqual(100);

})

test("returns the name of the employee", () =>{
    // const newEmployee = new Employee(100, "Joe", "joe@employee.com");
    expect(newEmployee.getName()).toBe("Joe");

})

test("returns the name of the email", () =>{
    // const newEmployee = new Employee(100, "Joe", "joe@employee.com");
    expect(newEmployee.getEmail()).toBe("joe@employee.com");

})