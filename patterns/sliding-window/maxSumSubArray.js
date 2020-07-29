function maxSubarraySum(arr, num) {
  // add whatever parameters you deem necessary - good luck!
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    for (let j = 0; j < num; j++) {
        maxSum += arr[j];
    }
    tempSum = maxSum;

    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);

    }
    return maxSum
}

maxSubarraySum([100, 600, 300, 500, 150, 400, 700], 2)
