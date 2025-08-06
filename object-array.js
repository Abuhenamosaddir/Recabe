const people = [1,2,4,56,6,33,6]
const player = [{},{},{}];
const employees = [
    {name: 'Kamak', Des: 'Developer', Salary: 23000},
    {name: 'Malak', Des: 'Dev', Salary: 232233}
]
employees[0].name = 'lamal'
console.log(employees)
console.log(employees[0].Salary)
for (const employee of employees){
    console.log(employee.Salary, employee.Des);

}

for (const emp of employees){
    const person = emp;
    const personInfo = person.name +':' + person.Salary;
    console.log(personInfo)
}