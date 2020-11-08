const Intern = require('../lib/Intern');
const Employee = require('../lib/Employee');



test('can retreive role with getRole()', () => {
    const intern = new Intern ('Stick', 'northwestern');
    const val = 'Intern';
    expect(intern.getRole()).toBe(val)
});

test('Can check for interns school using getSchool()', () => {
    const intern = new Intern ('Stick', 'northwestern');
    expect(intern.getSchool()).toBe('northwestern')
});