const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');


test('Can check for an offic number with getOfficeNumber', () => {
    const manager = new Manager('Stick', 3, '55','bob@bob');
    expect(manager.getOfficeNum()).toBe('55')
});

test('can retreive role with getRole()', () => {
    const manager = new Manager('Stick', 3, 'bob@bob', '55');
    const val = 'Manager';
    expect(manager.getRole()).toBe(val)
});



//create test for office umber
//create test for role
//create test for 