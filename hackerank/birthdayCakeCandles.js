function stairCase(candles) {
  if (candles.length === 0) {
    return 0;
  }
  candles = candles.sort((a, b) => a - b);
//   console.log(candles);
  let j = candles.length - 1; // 13-1=12
  let count = 0;
  for (let i = 0; i < candles.length; i++) {
    let start = i;
    if (candles[start] === candles[j]) {
      count++;
    }
  }

  return count;
}

console.log(stairCase([3, 2, 3, 8, 5, 8, 5, 2, 5, 2, 1, 1, 1]));

function birthdayCakeCandles(ar) {
  const max = Math.max(...ar);
  let frequency = 0;
  for (let i = 0; i < ar.length; i++) {
    if (ar[i] === max) {
      frequency++;
    }
  }
  return frequency;
}
