// Without recursion
const fibonacci = (n, array = [0, 1]) => {

    while (n > 2) {
        const [nextToLast, last] = array.slice(-2)
        array.push(nextToLast + last);
        n -= 1
    }
    return array
}

// console.log("hereeeeee---", fibonacci(12))

// With recursion
const fib = (n, array = [0, 1]) => {

    if (n <= 2) {
        return array
    }
    const [nextToLast, last] = array.slice(-2)
    return fib(n - 1, [...array, nextToLast + last]);

}

// console.log("hereeeeee---", fib(12))

// get nth fib

const arr = [
    1, 1, 2, 3,
    5, 8, 13, 21, 34,
    55, 89
]
//position of fibonacci with recursion
const fibOfN = (pos) => {

    if (pos >= 3) {
        return fibOfN(pos - 1) + fibOfN(pos - 2);
    } else {
        return 1;
    }
}
// console.log("hereeeeeefiboooo---", fibOfN(4))

//position of fibonacci without recursion
const fibOfN2 = (pos) => {

    if (pos <= 1) return pos;
    const seq = [0, 1]

    for (let i = 2; i <= pos; i++) {
        const [nextToLast, last] = seq.slice(-2);
        seq.push(nextToLast + last);

    }

    return seq[pos];
}

// bublle sort
const arrElements = [8, 2, 4, 1, 3]
// const arr2 = [1, 2, 3, 4, 8]

const bubbleSort = (element) => {
    let isSorted;
    for (let i = 0; i < element.length; i++) {
        isSorted = true
        for (let j = 1; j < element.length - i; j++) {
            if (element[j] < element[j - 1]) {
                [element[j], element[j - 1]] = [element[j], element[j - 1]]
                isSorted = false;
            }
        }
        if (isSorted) break;
    }
}
// console.log("bubbleSort", bubbleSort(arrElemets))

// merge sort
const mergeArray = (left, right) => {
    let sortedArray = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            sortedArray.push(left.shift());
        } else {
            sortedArray.push(right.shift());
        }
    }
    return [...sortedArray, ...left, ...right];
}
const mergeSort = (arr) => {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return mergeArray(left, right)
}

// console.log("quickSort", quickSort(arrElements))
const arrElementTest = [8, 2, 4, 1, 3, 3]
const bucketSort = (arr, numberOfBuckets) => {
    let bucketArr = new Array(numberOfBuckets);

    for (let i = 0; i < numberOfBuckets; i++) {
        bucketArr[i] = [];
    }

    for (let i = 0; i < arr.length; i++) {
        let bucket = Math.floor(arr[i] / numberOfBuckets);
        if (bucketArr.indexOf(bucketArr[bucket]) === bucket) {
            bucketArr[bucket].push(arr[i]);
        }
    }

    let index = 0;
    for (let i = 0; i < bucketArr.length; i++) {
        bucketArr[i].sort(function (a, b) { return a - b; });
        for (let j = 0; j < bucketArr[i].length; j++) {
            arr[index++] = bucketArr[i][j];
        }
    }

    return arr;
}

// console.log("bucketSort-----", bucketSort(arrElementTest, 3))
const arrElementTest2 = [1, 5, 7, 8, 9]

const binarySearchRecursive = (arr, target) => {
    return binarySearchRecursiveHelper(arr, target, 0, arr.length - 1)
}

const binarySearchIterative = (arr, target) => {
    let left = 0, right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target)
            return mid;
        if (target < arr[mid])
            right = mid - 1
        else
            left = mid + 1
    }
    return -1;
}

console.log("binarySearchRecursive-----", binarySearchIterative(arrElementTest2, 10))