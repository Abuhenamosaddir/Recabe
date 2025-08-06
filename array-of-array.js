const numbers = [22,4,43,55,335,55];
const run = [[],[],[]];
const exam_marks = [
    [4545,455,33,4,3],
    [34,53,342,242,4],
    [44,345,35353,3553,53]

]

console.log(numbers[2])
console.log(exam_marks[0][1]) //0 input er modde dekar janno
console.log(exam_marks[2][4])

const first_class = exam_marks[0]
console.log(first_class[2])

//marks change

exam_marks[0][2] = 244
exam_marks[0].pop() ///for deleted any number
exam_marks[0].push(8)
console.log(exam_marks)