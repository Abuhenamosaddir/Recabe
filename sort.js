///for single number sorting
const numbers = [4, 5,1,9,6,2];
console.log(numbers);
numbers.sort();
console.log(numbers);



///for duble number sorting 
// Assending order
const number = [33,45,5,43,2,7,86,90];
console.log(number);
const sorted_number = number.sort(function(a,b){ return a-b})
 console.log(sorted_number)

// descending order
const sorted_number_desc = number.sort(function(a,b){ return b-a})
console.log(sorted_number_desc)