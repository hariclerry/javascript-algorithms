// Write a function called sumZero which accepts a sorted array of integers.
// The function should find the first pair where the sum is 0.
// Return an array that includes both values that
// sum to zero or undefined if a pair does not exist

// Naive solution
const sumZero = (arr) => {
    const arrPair = []
    for (let i = 0; i <= arr.length; i++) {
        for (let j = 1; j < arr.length; j++) {
            if ((arr[i] + arr[j]) === 0) {
                return [arr[i], arr[j]];
            }

        }
    }
}
console.log(sumZero([-3, -2, 1, 3, 4]))

//Solution 3
function sumZero1(arr) {
  // let sum = [];
  // let left = 0;
  // let right = arr.length - 1;
  for (let i = 0; i < arr.length; i++) {
    let left = i;
    let right = arr.length - 1;
    if (arr[left] + arr[right] === 0) {
      return [arr[i], arr[right]];
    }
    // return undefined
  }
}

console.log(sumZero1([1, 6, -2, 3, 4, -6]));

// Effiecient solution

function sumZeroo(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}