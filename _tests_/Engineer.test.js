const Engineer = require('../lib/Engineer');
const Employee = require('../lib/Employee');



test('can retreive role with getRole()', () => {
    const engineer = new Engineer ('Stick', 'persnickety', '55');
    const val = 'Engineer';
    expect(engineer.getRole()).toBe(val)
});

test('Can check for github username using getGithub()', () => {
    const engineer = new Engineer('Stick', 'persnickety', '55');
    expect(engineer.getGithub()).toBe('persnickety')
});