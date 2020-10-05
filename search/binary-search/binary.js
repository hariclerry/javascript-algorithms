// My solution
function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let middle = Math.floor((end + start) / 2);

    if (arr[middle] === target) {
      return middle;
    } else if (arr[middle] < target) {
      start = middle + 1;
    } else end = middle - 1;
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 5));


// Original Solution
function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]){
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    if(arr[middle] === elem){
        return middle;
    }
    return -1;
}

// Refactored Version
function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === elem ? middle : -1;
}

binarySearch([2,5,6,9,13,15,28,30], 103)