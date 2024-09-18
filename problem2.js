/* Problem 2:-
-----------------
Write a program to get the extension of a file name
*/
const getExtension = (str) => str.slice(str.lastIndexOf('.'));

console.log(getExtension('helplanes.mp3'));
