const colors = ['send', 'pend', 'kend', 'lend', 'mend']
 const reverse = [];

for (let i = 0; i < colors.length ; i++){
    console.log(colors[i]);
    reverse.unshift(colors[i]);
 }

  for (let i = colors.length-1; i>=0; i--){
    reverse.push(colors[i]);
 } 


 for (const num of colors){
    console.log(num);
    reverse.unshift(num);
}

 const numbers = [ 44, 55, 66, 77, 88]
 
//  //1st track
 const reverses = [];
 for (let i =0; i < numbers.length; i++){
    console.log(numbers[i]);
    reverses.unshift(numbers[i]);
 } 

 console.log(colors);
 colors.reverse();
 console.log(colors);



 ///reverse full santances

let sent = "I am hard working person";
 let reverseWords = sent.split(" ").reverse().join(" "); //when gap is _,_ double only sentance is 
console.log(reverseWords);

 let reverseSent = sent.split("").reverse( ).join("");   /////when gap is _ single all word by word reverse 
console.log(reverseSent);

//task-2

const numberss = [12, 98, 5, 41, 23, 78, 46];
for (let i = 0; i < numberss.length; i++){
if ( numberss[i] % 2 ===0) {
    console.log(numberss[i]);
}
}


///taask-3

// var number = ['Tom', 'Tim', 'Tin', 'Tik']
// var reverseFont = number.split("").join("");
// console.log(reverseFont);


//task-6

const students = [
  { name: "John", marks: 85 },
  { name: "Alice", marks: 90 }
];

students.forEach(student => {
  console.log(`${student.name} Score ${student.marks}`);
});

const exam_marks = [
    [1,2,4],
    [3,4,7],
    [5,6,9]
]
exam_marks[0][2] = 23
// exam_marks[0].pop() ///for deleted any number
// exam_marks[0].push(45)
console.log(exam_marks)