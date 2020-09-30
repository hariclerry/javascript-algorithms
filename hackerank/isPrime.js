function showPrime(limit) {
  for (let number = 2; number < limit; number++) {
    //   console.log('number', number);
    if (isPrime(number)) {
      //console.log(number);
    }
  }
}
showPrime(20);

function isPrime(number) {
  for (let factor = 2; factor < number; factor++) {
    // console.log('factor', factor);
    if (number % factor === 0) {
      return false;
    }
  }
  return true;
}

// function diagonalDifference(arr) {
//   // add whatever parameters you deem necessary - good luck!
//   let diff = 0;
//   let sum1 = arr[0][0] + arr[1][1] + arr[2][2];
//   let sum2 = arr[0][2] + arr[1][1] + arr[2][0];
//   diff = sum1 - sum2
//   return Math.abs(diff);

  
// }

function diagonalDifference(arr) {
  // add whatever parameters you deem necessary - good luck!
  let diff = 0;
  let sum1 = arr[0][0] + arr[1][1] + arr[2][2];
  let sum2 = arr[0][2] + arr[1][1] + arr[2][0];
  diff = sum1 - sum2;
  return Math.abs(diff);
}

console.log(
  diagonalDifference([
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12],
  ])
); // ['Car','Taco','Banana']

