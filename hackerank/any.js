function viralAdvertising(n) {
  let totalLikes = 0;
  let shared = 5;
  let liked = 0;

  for (var i = 0; i < n; i++) {
    liked = Math.floor(shared / 2);
    totalLikes += liked;
    shared = liked * 3;
  }

  return totalLikes;
}
console.log(viralAdvertising(5));

function sockMerchant(n, ar) {
  // Write your code here
  if (n < 1 || n !== ar.length) {
    return 0;
  }

  let numOfPairs = 0;
  let obj = {};

  for (let sock of ar) {
    obj[sock] = obj[sock] ? obj[sock] + 1 : 1;
  }

  for (let item in obj) {
    let pair = Math.floor(obj[item] / 2)
    numOfPairs = numOfPairs + pair;
  }

  return numOfPairs;
}
console.log("called---", sockMerchant(11, [10, 3, 7, 5, 2, 2, 3, 5, 5, 10, 5]))

