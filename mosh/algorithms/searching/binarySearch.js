const arrElementTest2 = [1, 5, 7, 8, 9]

// Recursive
const binarySearchRecursive = (arr, target) => {
    return binarySearchRecursiveHelper(arr, target, 0, arr.length - 1)
}

const binarySearchRecursiveHelper = (arr, target, start, end) => {
    if (end < start)
        return -1
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target)
        return mid;
    if (target < arr[mid])
        return binarySearchRecursiveHelper(arr, target, start, mid - 1);
    return binarySearchRecursiveHelper(arr, target, mid + 1, end);
}

// Iterative
const binarySearchIterative = (arr, target) => {
    let left = 0, right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] === target)
            return mid;
        if (target < arr[mid])
            right = mid - 1
        else
            left = mid + 1
    }
    return -1;
}