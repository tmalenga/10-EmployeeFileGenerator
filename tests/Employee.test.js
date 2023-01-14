//const {test, expect} = require('@jest/globals');
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

test("Creates a new Employee object", () =>{
    const newEmployee = new Employee(100, "Joe", "joe@employee.com");
    expect(newEmployee.id).toEqual(100);
    expect(newEmployee.name).toBe("Joe");
    expect(newEmployee.email).toBe("joe@employee.com") 
})