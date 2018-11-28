//object destructure
const employee = {
    id : 1,
    name : 'Ankit',
    salary: 'little'
};

var {id, name, salary} = employee;

console.log(`${id} ${name} ${salary}`);