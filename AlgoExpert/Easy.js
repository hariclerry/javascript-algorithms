// Two Sums number algo

//Naive solution (O(n^2) time, O(1) space)
function sumNum(n, target) {

    for (let i = 0; i < n.length; i++) {
        for (let j = i + 1; j < n.length; j++) {
            let sum = n[i] + n[j]
            if (sum === target) {
                return [n[i], n[j]];
            }
        }
    }

    return [];
};

// console.log(sumNum([0, -1, 3, 11, 5, 1], 10));

// Optimised solution (O(n) time, O(n) space)

function twoNumSum(n, target) {
    let nums = {};

    for (let i = 0; i < n.length; i++) {

        let potentialMatch = target - n[i];
        if (nums[potentialMatch]) {
            return [potentialMatch, n[i]];
        } else {
            nums[n[i]] = true;
        }
    }

    return [];
};

console.log(twoNumSum([0, -1, 3, 11, 5, 1], 10));

//Second optimised solution (0(nlog(n)), O(1) space) with sorted array
function optimised(arr, target) {
    // const results = [];
    arr.sort((a, b) => a - b);
    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        // console.log(arr[start], arr[end]);
        let currentSum = arr[start] + arr[end];
        if (currentSum === target) {
            return [arr[start], arr[end]]
        } else if (currentSum < target) {
            start++;
        }
        else {
            end--;
        }
    }

    return [];
}

console.log(optimised([0, -1, 3, 11, 5, 1], 10));

// is valid Subsequence array;

// time complexity O(n), space complexity O(1);
function isValidSubsequence(array, sequence) {
    // Write your code here.
    let arrIdx = 0;

    let seqIdx = 0;

    while (arrIdx < array.length && seqIdx < sequence.length) {
        if (array[arrIdx] === sequence[seqIdx]) {
            seqIdx++;
        }
        arrIdx++;
    }
    return seqIdx === sequence.length;
}

function isValidSubsequence2(array, sequence) {
    // Write your code here.
    for (let i = array.length - 1; i >= 0; i--) {
        if (array[i] === sequence[sequence.length - 1]) {
            sequence.pop();
        }
    }
    return !sequence.length;
}

console.log(isValidSubsequence([1, 2, 3, 4], [2, 4, 7]));

//optimised solution O(n(logn)) TC, O(n) Sc
function sortedSquaredArray(array) {
    // Write your code here.
    let results = [];
    for (let i = 0; i < array.length; i++) {
        let squared = array[i] ** 2;
        results.push(squared)
    }
    return results.sort((a, b) => a - b);
}
console.log(sortedSquaredArray([1, 2, 3, 4]));

//optimised solution O(n) TC, O(n) Sc
function sortedSquaredArray2(array) {
    // Write your code here.
    let results = [];
    let start = 0;
    let end = array.length - 1;
    let arrPointer = array.length - 1

    while (arrPointer >= 0) {
        let startNum = Math.abs(array[start])
        let endNum = Math.abs(array[end])

        if (startNum >= endNum) {
            results[arrPointer] = array[start] ** 2
            start++;
        } else {
            results[arrPointer] = array[end] ** 2
            end--;
        }

        arrPointer--;
    }
    return results;
}
console.log(sortedSquaredArray2([-5, 1, 2, 3, 4]));

//optimised solution O(n) TC, O(k) Sc
function tournamentWinner(competitions, results) {
    // Write your code here.
    let winnerObj = {};

    for (let i = 0; i < competitions.length; i++) {
        if (results[i] === 0) {
            if (winnerObj[competitions[i][1]]) {
                winnerObj[competitions[i][1]] = winnerObj[competitions[i][1]] + 3;
            } else {
                winnerObj[competitions[i][1]] = 3;
            }
        } else {
            if (winnerObj[competitions[i][0]]) {
                winnerObj[competitions[i][0]] = winnerObj[competitions[i][0]] + 3;
            } else {
                winnerObj[competitions[i][0]] = 3;
            }
        }
    }

    let winner = '';
    let count = 0;
    for (let team in winnerObj) {
        if (winnerObj[team] > count) {
            count = winnerObj[team];
            winner = team
        }
    }

    return winner;
}

// console.log(tournamentWinner([['html', 'c#'],
// ['python', 'c#'],
// ['python', 'html']
// ], [0, 0, 1]));

console.log(tournamentWinner([
    ["HTML", "Java"],
    ["Java", "Python"],
    ["Python", "HTML"],
    ["C#", "Python"],
    ["Java", "C#"],
    ["C#", "HTML"],
    ["SQL", "C#"],
    ["HTML", "SQL"],
    ["SQL", "Python"],
    ["SQL", "Java"]
], [0, 1, 1, 1, 0, 1, 0, 1, 1, 0]))