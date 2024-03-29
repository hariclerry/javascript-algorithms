// countUniqueValues
// Implement a function called countUniqueValues,
// which accepts a sorted array, and counts the unique values in the array.
// There can be negative numbers in the array, but it will always be sorted.

// Solution 2
function countUniqueValues(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    let next = i + 1;
    if (arr[i] !== arr[next]) {
      count++;
    }
  }
  return count;

}

countUniqueValues([1, 1, 1, 1, 1, 2, 2, 4]) // 2

// Solution 2

function countUniqueValues2(arr) {
  if (arr.length === 0) return 0;
  var i = 0;
  for (var j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}
countUniqueValues2([1, 2, 2, 5, 7, 7, 99]);

// Set solution
function countUniqueValues(arr) {
  let result = new Set(arr);
  console.log("settttt", result.size);
}

console.log(countUniqueValues([1, 4, 3, 4, -6, 2]));

function countUniqueValues(arr) {

  if (arr.length < 0) return false;
  // const valueSet = new Set(arr);

  // return valueSet.size;


  const valueMap = new Map();

  for (let item of arr) {
    let val = valueMap.get(item);
    // let c = arr[item]
    // console.log("hereeee----", val)
    if (val) {
      val++
      valueMap.set(item, val);
    } else {
      valueMap.set(item, 1);
    }
  }

  return valueMap.size;

}