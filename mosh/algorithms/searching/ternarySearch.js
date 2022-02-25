
function ternarySearch(array, target, left, right) {
    if (left > right)
        return -1;

    const partitionSize = Math.floor((right - left) / 3);
    const mid1 = left + partitionSize;
    const mid2 = right - partitionSize;

    if (array[mid1] == target)
        return mid1;

    if (array[mid2] == target)
        return mid2;

    if (target < array[mid1])
        return ternarySearch(array, target, left, mid1 - 1);

    if (target > array[mid2])
        return ternarySearch(array, target, mid2 + 1, right);

    return ternarySearch(array, target, mid1 + 1, mid2 - 1);
}