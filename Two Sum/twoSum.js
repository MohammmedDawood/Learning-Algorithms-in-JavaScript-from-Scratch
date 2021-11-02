/* 
Two Sum Give all possible combination
 to the sum with an output of 
two pairs element together with
 the summation of the sum element.
*/

function twoSum(numArray, sum) {
  let pairs = [];
  let hashtable = [];

  for (let i = 0; i < numArray.length; i++) {
    let currNum = numArray[i];
    var counterpart = sum - currNum;
    if (hashtable.indexOf(counterpart) !== -1) {
      pairs.push([currNum, counterpart]);
    }
    hashtable.push(currNum);
  }
  return pairs;
}

console.log(
  twoSum([1, 6, 4, 5, 3, 3], 7), // output:[ [ 6, 1 ], [ 3, 4 ], [ 3, 4 ] ]
  "\n",
  twoSum([40, 11, 19, 17, -12], 28) // output:[ [ 6, 1 ], [ 3, 4 ], [ 3, 4 ] ]
);
