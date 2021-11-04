/* 
In computer science, merge sort is an efficient,
 general-purpose, and 
 comparison-based sorting algorithm.
*/
function mergeSort(arr) {
  /* 
    take in a single, unsorted array as a parameter 
    split the array intwo two halves
    */
  if (arr.length < 2) {
    return arr;
  }
  let middleIndex = Math.floor(arr.length / 2);
  let firstHalf = arr.slice(0, middleIndex);
  let secondHalf = arr.slice(middleIndex);
  return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}
function merge(array1, array2) {
  /* 
    take in two sorted arrays as paramters
    merges those sorted arrays into one sorted array
    return one sorted array
    */
  let result = [];
  while (array1.length && array2.length) {
    let minElement;
    if (array1[0] < array2[0]) {
      minElement = array1.shift();
    } else {
      minElement = array2.shift();
    }
    result.push(minElement);
  }

  if (array1.length) {
    result = result.concat(array1);
  } else {
    result = result.concat(array2);
  }
  return result;
}

// testing
console.log(
  mergeSort([4, 2, 3, 1]), //[ 1, 2, 3, 4 ]
  mergeSort([6000, 34, 203, 3, 746, 200, 984, 198, 764, 1, 9, 1]), //[1, 1, 3, 9, 34, 198, 200, 203, 746, 764, 984, 6000 ]
  mergeSort([100, -20, 40, -30, 16, -100, -101]) //[ -101, -100, -30, -20,   16,  40, 100 ]
);
