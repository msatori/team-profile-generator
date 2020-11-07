const Manager = require('..lib/Manager');
const Employee = require('../lib/Employee');


test('creates a player object', () => {
    const manager = new manager('Stick', 3, 'bob@bob', '55');
    const officeNum = 1

    expect(manager.name).toBe('stick');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    
})