function diagonalDifference(arr) {
  let primarySum = 0;
  let secondarySum = 0;
  const len = arr.length;

  for (let i = 0; i < len; i++) {
    // console.log("iiiiiii",i);
    let dArr = arr[i];
    for (let j = 0; j < dArr.length; j++) {
      //   console.log("jjjj", i);
      if (i === j) {
        primarySum += arr[i][j];
      }
      console.log("jjjj", i + j);
      if (i + j === len - 1) {
        secondarySum += arr[i][j];
      }
    }
  }

  return Math.abs(primarySum - secondarySum);
}

console.log(
  diagonalDifference([
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
  ])
);
