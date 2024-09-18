/* Write a JavaScript program to check two numbers and return true 
if one of the number is 100 or if the sum
of the two numbers is 100 */

const numberIs100 = (a, b) => a === 100 || b === 100 || (a+b) === 100;

console.log(numberIs100(100,0));
console.log(numberIs100(0, 100));
// to check if either of the numbers is 100.

console.log(numberIs100(50, 50));
console.log(numberIs100(40, 60));