function getMean(array) {
  /* 
     the result of summition divided by the number of elements.
    */
  let sum = 0;
  array.forEach((num) => {
    sum += num;
  });
  var mean = sum / array.length;
  return mean;
}
function getMedian(array) {
  /* 
    get the mmiddle elment of a sorted array if odd,
    if even get the mean of the two middle elments of the sorted array.
    */
  array.sort(function (a, b) {
    return a - b;
  });
  let median;
  if (array.length % 2 !== 0) {
    // odd number
    median = array[Math.floor(array.length / 2)];
  } else {
    // even number
    let med1 = array[array.length / 2 - 1];
    let med2 = array[array.length / 2];
    median = (med1 + med2) / 2;
  }
  return median;
}
function getMode(array) {
  /* 
    get the number repeted the most
    */
  let modeObj = {};

  array.forEach((num) => {
    if (!modeObj[num]) {
      modeObj[num] = 0;
    }
    modeObj[num]++;
  });

  let maxFrequency = 0;
  let modes = [];
  for (const num in modeObj) {
    if (modeObj[num] > maxFrequency) {
      modes = [num];
      maxFrequency = modeObj[num];
    } else if (modeObj[num] === maxFrequency) {
      modes.push(num);
    }
  }
  if (modes.length === Object.keys(modeObj).length) {
    modes = [];
  }
  return modes;
}

function meanMedianMode(array) {
  /*  
   cal other 3 functions
  return obj which has mean, median, mode on it 
  */
  return {
    mean: getMean(array),
    median: getMedian(array),
    mode: getMode(array),
  };
}

console.log(
  meanMedianMode([1, 2, 3, 4, 5, 4, 6, 1]), // output: { mean: 3.25, median: 3.5, mode: [ '1', '4' ] }
  "\n",
  meanMedianMode([9, 10, 23, 10, 23, 9]) // output: { mean: 14, median: 10, mode: [] }
);
