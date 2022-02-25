function exponentialSearch(array, target) {
    let bound = 1;
    while (bound < array.length &&
        array[bound] < target)
        bound *= 2;
    const left = Math.floor(bound / 2);
    const right = Math.min(bound, array.length - 1);
    return binarySearchRec(array, target, left, right);
}
