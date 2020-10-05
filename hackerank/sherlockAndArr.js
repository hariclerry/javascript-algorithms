//Watson gives Sherlock an array of integers. His challenge is to find an element of the array such that
//the sum of all elements to the left is equal to the sum of all elements to the right.For instance,
//given the array arr= [5,6,8,11], 8 is between two subarrays that sum to 11.If your starting array is [1],
//that element satisfies the rule as left and right sum to 0.

function balancedSums(arr) {
  if (arr.length === 1) return "YES";
  let left = 0;
  let firstElement = arr[0];
  let right = arr.slice(1).reduce((acc, val) => acc + val);
  if (left === right) return "YES";
  for (let i = 1; i < arr.length; i++) {
    left += firstElement;
    firstElement = arr[i];
    right -= firstElement;

    if (left === right) return "YES";
  }

  return "NO";
}

// if (arr.length === 1) return "YES";
// if (arr.length === 2) return "NO";

// let sumLeft = arr[0];
// let sumRight = arr.slice(2).reduce((total, n) => total + n);

// if (sumLeft === sumRight) {
//   return "YES";
// }

// let yes = 0;

// for (let i = 2; i < arr.length - 1; i++) {
//   sumLeft = sumLeft + arr[i - 1];
//   sumRight = sumRight - arr[i];

//   if (sumLeft === sumRight) {
//     yes++;
//   }
// }

// return yes ? "YES" : "NO";

// let i,
//   j,
//   left = 0,
//   right = 0,
//   p = 0,
//   allsum = 0;
// let len = a.length;
// if (len === 1) return "YES";
// allsum = a.reduce((a, b) => {
//   return a + b;
// });
// for (i = 1; i < len - 1; i++) {
//   left = left + a[i - 1];
//   right = allsum - a[i] - left;
//   if (left === right) {
//     p = 1;
//     break;
//   }
// }
// if (p == 1) return "YES";
// firstElementse return "NO";
