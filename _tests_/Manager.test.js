const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');


test('creates a manager object', () => {
    const manager = new Manager('Stick', 3, 'bob@bob', '55');
    

    expect(manager.name).toBe('stick');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
});