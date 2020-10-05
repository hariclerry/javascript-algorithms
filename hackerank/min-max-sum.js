// Given five positive integers, find the minimum and maximum values that can
// be calculated by summing exactly four of the five integers.Then print the respective minimum and maximum values as
// a single line of two space - separated long integers.

function miniMaxSum(arr) {
  if (arr.length === 0 || arr.length < 5) {
    return 0;
  }
  let sortedArr = arr.sort((a, b) => a - b);
  let maxSum = 0;
  let minSum = 0;
  let fixed = 4;
  let tempMax = 0;
  let tempMin = 0;

  for (let i = 0; i < fixed; i++) {
    maxSum += sortedArr[i];
    minSum += sortedArr[i];
  }

  tempMax = maxSum;
  tempMin = minSum;
  for (let i = fixed; i < sortedArr.length; i++) {
    tempMax = tempMax - sortedArr[i - fixed] + sortedArr[i];
    tempMin = tempMin - sortedArr[i - fixed] + sortedArr[i];
    maxSum = Math.max(maxSum, tempMax);
    minSum = Math.min(minSum, tempMin);
  }

  console.log(minSum, maxSum);
}

console.log(miniMaxSum([7, 69, 2, 221, 8974]));


// solution 2
function miniMaxSum2(arr) {
    if (arr.length === 0 || arr.length < 5) {
        return 0;
    }
    arr.sort((a, b) => a - b);
    console.log(
        String(arr.slice(0, 4).reduce((a, b) => a + b)) +
        " " +
        String(arr.slice(1, 5).reduce((a, b) => a + b))
    );
}

function miniMaxSum(arr) {
  /*
   * Write your code here.
   */
  let min = +Infinity,
    max = -Infinity,
    sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (arr[i] < min) min = arr[i];
    if (arr[i] > max) max = arr[i];
  }
  console.log(sum - max, sum - min);
}
