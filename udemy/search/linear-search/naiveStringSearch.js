function naiveSearch(long, short) {
  var count = 0;
  for (var i = 0; i < long.length; i++) {
    for (var j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) break;
      if (j === short.length - 1) count++;
    }
  }
  return count;
}

naiveSearch("lorie loled", "lol");


const sumOfPair = (arr1, arr2, target) => {
  let num = 0;

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; i < arr2.length; j++) {

    }
  }
}

sumOfPair([8, 5, 6, 3], [2, 6, 2, 1,], 3);