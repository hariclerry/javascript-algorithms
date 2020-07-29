function averagePair(arr, averageNum) {
  // add whatever parameters you deem necessary - good luck!
    if (arr.length === 0) return false;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length; j++) {
            if ((arr[i] + arr[j]) / 2 === averageNum) {
                return true;
            }
        }
    }

    return false;

}

// console.log(averagePair([1, 2, 3], 2.5));


// Efficient solution

function averagePair2(arr, num){
  let start = 0
  let end = arr.length-1;
    while (start < end) {
    let avg = (arr[start]+arr[end]) / 2 
    if(avg === num) return true;
    else if(avg < num) start++
    else end--
  }
  return false;
}
console.log(averagePair2([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));