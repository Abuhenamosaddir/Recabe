const people = [1,2,4,56,6,33,6]
const player = [{},{},{}];
const employees = [
    {name: 'Kamak', Des: 'Developer', Salary: 23000},
    {name: 'Malak', Des: 'Dev', Salary: 232233}
]
employees[0].name = 'lamal'  //for name change
console.log(employees) //for showing whole array
console.log(employees[0].Salary) //for showing just one thing
for (const employee of employees){
    console.log(employee.Salary, employee.Des); //shpwing multiple array

}

//for showing info with array
for (const emp of employees){
    const person = emp;
    const personInfo = person.name +':' + person.Salary;
    console.log(personInfo)
}