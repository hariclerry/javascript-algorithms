var twoSum = function (nums, target) {
  if (nums.length <= 0) {
    return [];
  }
  let arr = [];
  let lens = nums.length
  for (let i = 0; i < lens; i++) {
    for (let j = i + 1; j < lens; j++) {
      if ((nums[i] + nums[j]) === target) {
        arr.push(i, j)
      }
    }
  }

  return arr;
};

console.log(twoSum([3, 2, 4], 6))