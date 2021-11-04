/* 
In mathematics, the Fibonacci numbers, 
commonly denoted Fₙ, form a sequence, 
called the Fibonacci sequence,
such that each number is the sum of the two preceding ones, 
starting from 0 and 1. That is, and for n > 1. 
The sequence starts: 1, 1, 2, 3, 5, 8, 13, 21, 34,....
time complexity O(n^2) which is not so good and also crashes when the number is 50 or more.
*/

function fibonacci(position) {
  if (position < 3) {
    // base case
    return 1;
  } else {
    return fibonacci(position - 1) + fibonacci(position - 2);
  }
}

console.log(fibonacci(50));
