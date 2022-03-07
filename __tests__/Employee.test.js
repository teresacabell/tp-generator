const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Diana', 1, 'ladydi@gmail.com' );

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// test('get employee name', () => {
//     const employee = new Employee('Diana', 1, 'ladydi@gmai.com');

//     expect(employee.getName()).toEqual(expect.any(String));
// });

// test('get employee ID', () => {
//     const employee = new Employee('Diana', 1, 'ladydi@gmail.com');

//     expect(employee.getId()).toEqual(expect.any(Number));
// });

// test('get employee email', () => {
//     const employee = new Employee('Diana', 1, 'ladydi@gmail.com');
    
//     expect(employee.getEmail()).toEqual(expect.any(String));
// });

// test('gets employee role', () => {
//     const employee = new Employee('Diana', 1, 'ladydi@gmail.com');

//     expect(employee.getRole()).toEqual("Employee");
// })