const Employee = require('../lib/Employee');


test('Creates an Employee Object', () => {
    const employee = new Employee('Gob', 5, 'dskjfbskdjfb');

    expect(employee.name).toBe('Gob');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String))
});