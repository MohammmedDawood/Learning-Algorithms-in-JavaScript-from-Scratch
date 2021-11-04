/* 
Recurseve function that returns factorial of a number.
factorial(!) is 4! = 4 * 3 * 2 * 1 = 24 and 3! =  3 * 2 * 1 = 6 
*/
function factorial(num) {
  if (num === 1) {
    //base case
    return num;
  } else {
    //recursive case
    return num * factorial(num - 1);
  }
}

console.log(factorial(4)); // 24
console.log(factorial(3)); // 6
