/* 
Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the 
adjacent elements if they are in wrong order.
*/
function bubbleSort(array) {
  for (let i = array.length; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

// testing
console.log(
  bubbleSort([5, 3, 8, 2, 1, 4]), //[ 1, 2, 3, 4, 5, 8 ]
  bubbleSort([-5, 3, -8, 2, -1, 4]) //[ 1, 2, 3, 4, 5, 8 ]
);
