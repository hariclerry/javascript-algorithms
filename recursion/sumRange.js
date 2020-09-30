// Recursive solution
function sumRangeRecursive(num) {
    if (num === 1) return 1;
    console.log("nummmm", num)
    return num + sumRange(num - 1);
}
// First call; 4 + sumRange(3)
//second call; 3 + sumRange(2)
//Third call; 2 + sumRange(1)
//fourth call; returns 1
// console.log(sumRangeRecursive(4));

//Iterative solution
function sumRangeIterative(num) {
    let sum = 0;
//   if (num === 1) return 1;
    for (let i = 0; i <= num; i++) {
        sum += i;
    }
    return sum;
}

console.log(sumRangeIterative(4));

