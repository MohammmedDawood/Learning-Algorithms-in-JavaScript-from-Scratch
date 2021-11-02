/* 
reverse elements of the same array without using array manipulation or methods
 by using Temporary variable only.
*/

function reverseArrayInPlace(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    let tempVar = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = tempVar;
  }
  return arr;
}

// test
console.log(
  reverseArrayInPlace([1, 2, 3, 4, 5, 6]), // output:[ 6, 5, 4, 3, 2, 1 ]
  "\n",
  reverseArrayInPlace([1, 2, 3, 4, 5, 6, 7]) // output:[7, 6, 5, 4, 3, 2, 1 ]
);
