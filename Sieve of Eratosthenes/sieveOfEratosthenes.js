/* 
In mathematics, the sieve of Eratosthenes is an ancient algorithm for finding all prime numbers up to any given limit.
*/
function sieveOfEratosthenes(n) {
  //assume all numbers are prime
  let primes = [];
  for (let i = 0; i <= n; i++) {
    primes[i] = true;
  }
  // change to false if not prime
  primes[0] = false;
  primes[1] = false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    for (let j = 2; j * i <= n; j++) {
      primes[i * j] = false;
    }
  }

  let result = [];
  for (let i = 0; i < primes.length; i++) {
    if (primes[i]) {
      result.push(i);
    }
  }
  return result;
}

//testing
console.log(
  sieveOfEratosthenes(10), //[ 2, 3, 5, 7 ]
  sieveOfEratosthenes(20) //[ 2,  3,  5,  7,11, 13, 17, 19]
);
