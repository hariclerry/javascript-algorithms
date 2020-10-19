//It's almost the Summer Sales!
//You work for a shop that wishes to give a discount of discount% to the most
//expensive item purchased by a given customer during the sales period.
//You are tasked by the shop owner to implement the function calculateTotalPrice(prices, discount)()
//which takes the list of prices of the products purchased by a customer and the percentage discount as parameters and returns the total purchase
//price as an integer(rounded down if the total is a float number).

function calculateTotalPrice(prices, discount) {
  prices = prices.sort();
  let maxPrice = prices[prices.length - 1];
  let total = 0;
  let discountedPrice = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] === maxPrice) {
      let discounted = prices[i] - (prices[i] * discount) / 100;
      discountedPrice += discounted;
    } else total += prices[i];
  }
  console.log("dis", discounted);
  return Math.floor(total + discounted);
}

// console.log(calculateTotalPrice([2, 6, 4, 6], 20));

// Write the body of the calc(array, n1, n2) function.
//array is an array of integers. The n1 and n2 parameters are integers defined by the relation 0
// <=n1 <=n2 < array.length.
//The calc function should return the sum of the integers of array whose index belongs to the [n1; n2]
//interval.

function calc(array, n1, n2) {
  let total = 0;
  let index = array.slice(n1, n2);
  for (let i = 0; i < index.length; i++) {
    total += array[i];
  }
  return total;
}

// console.log(calc([2, 6, 4, 5, 8], 2, 4));

//Solution 2
function calc(array, n1, n2) {
  let total = 0;
  for (let i = n1; i < n2; i++) {
    total += array[i];
  }
  return total;
}

// console.log(calc([2, 6, 4, 5, 8], 2, 4));

// Implement the findSmallestInterval (numbers) function which returns the smallest positive interval between
//two values of the numbers table.
//For example given the table [1 6 4 8 2] the smallest interval is 1 (difference between 2 and 1)

function findSmallestInterval(numbers) {
  numbers = numbers.sort((a, b) => a - b);

  let start = 0;
  let end = 1;
  let minVal = +Infinity;
  while (end < numbers.length) {
    let diff = numbers[end] - numbers[start];
    if (diff < minVal) {
      minVal = diff;
      start++;
    }
    end++;
  }

  return minVal;
}

console.log(findSmallestInterval([2, 9, 6, 12, 18]));
