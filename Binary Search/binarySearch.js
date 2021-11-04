/* 
In computer science, 
binary search, 
also known as half-interval search, 
logarithmic search, or binary chop, 
is a search algorithm that finds the position of a 
target value within a sorted array.
O(log n) run time.
*/
function binarySearch(numArray, key) {
  let middleIndex = Math.floor(numArray.length / 2);
  let middleElement = numArray[middleIndex];

  if (middleElement === key) {
    //base case
    return true;
  } else if (middleElement < key && numArray.length > 1) {
    // 1st recursive case remove left part from the numArray
    return binarySearch(numArray.splice(middleIndex, numArray.length), key);
  } else if (middleElement > key && numArray.length > 1) {
    // 2nd recursive case remove right part from the numArray
    return binarySearch(numArray.splice(0, middleIndex), key);
  } else {
    // 3nd when doesn't exist
    return false;
  }
}
console.log(binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 56)); //true
console.log(binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 5)); //true
console.log(binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 150)); //false
