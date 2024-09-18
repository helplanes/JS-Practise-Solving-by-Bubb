/* Problem 4:-
-------------------------
Write a JavaScript program to get the current date.
Expected Output:
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy 
*/

const getDate = (date = new Date())=> {
    const days = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${days}/${month}/${year}`;
}

console.log(getDate());