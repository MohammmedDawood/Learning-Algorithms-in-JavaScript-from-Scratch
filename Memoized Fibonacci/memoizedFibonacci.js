function memoizedFibonacci(index, cache) {
  /* 
    index: index of number in Fibonacci sequence
    cache: an array used as memory to save the previous result and also helps us to check if the position is into it or not.
    has a time complexity of O(n) instead of exponential time complexity.
    */
  cache = cache || [];

  if (cache[index]) {
    // base case
    return cache[index];
  } else {
    if (index < 3) {
      return 1;
    } else {
      cache[index] =
        memoizedFibonacci(index - 1, cache) +
        memoizedFibonacci(index - 2, cache);
    }
    return cache[index];
  }
}
console.log(
  memoizedFibonacci(20), //6765
  memoizedFibonacci(40), //102334155
  memoizedFibonacci(100) //354224848179262000000
);
