function fizzBuzz(num) {
  for (let i = 1; i <= num; i++) {
    // if i is devisable with no remainders on 3 and 5, then it's devisable by 15
    if (i % 15 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(20);
