// Write a function called same, which accepts two arrays.The function should return true if every 
// value in the array has it's corresponding value squared in the second array. 
// The frequency of values must be the same. 

//Naive solution O(n^2)

function same1(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    // console.log(arr2);
    arr2.splice(correctIndex, 1);
  }
  return true;
}

// same1([1, 2, 3, 2], [9, 1, 4, 4]);


// Efficient solution O(n)

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
    for (let val of arr1) {
      console.log(" valllllue", val, frequencyCounter1[val]);
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  console.log(frequencyCounter1);
  console.log(frequencyCounter2);
    for (let key in frequencyCounter1) {
        // console.log('keyssss', key)
        //  console.log("valuess", frequencyCounter1[key]);
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
        console.log("frequencyCounter2", frequencyCounter2[key ** 2]);
        console.log("frequencyCounter1", frequencyCounter1[key]);
        //  console.log(key);
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

same([1, 5, 3, 2, 5], [9, 1, 25, 4, 25]);