// You will be given an array of integers and a target value. Determine the number of pairs of array elements that have 
//a difference equal to a target value.

function pairs2(k, arr) {
  let count = 0;
  arr = arr.sort();
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] - arr[j] === k) {
        count++;
      }
    }
  }
  return count;
}

// console.log(pairs(2, [1, 5, 3, 4, 2]));


 
function pairs(k, arr) {
  arr = arr.sort();
  let count = 0;
  let start = 0;
  let end = 1;
  console.log("count", arr);
  while (end < arr.length) {
    let diff = arr[end] - arr[start];
    // console.log("diff", Math.abs(diff));
    if (diff === k) {
      count++;
      end++;
    } else if (diff > k) {
      start++;
    } else if (diff < k) {
      end++;
    }
  }

  return count;
}

console.log(pairs(2, [1, 5, 3, 4, 2]));


function pairs(k, arr) {
  const set = new Set(arr);
  return arr.reduce(
    (accumulator, val) => (set.has(val - k) ? accumulator + 1 : accumulator),
    0
  );
}