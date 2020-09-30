//Iterative solution
function factorialIterative(num) {
  let total = 1;
  for (let i = num; i > 1; i--) {
    total *= i;
  }
  return total;
}

// console.log(factorialIterative(3));

//Factorial Solution 
function factorialRecursive(num) {
    if (num === 1) return 1;
console.log("nummmmm", num)
    return num * factorialRecursive(num - 1);
}

console.log(factorialRecursive(3));
