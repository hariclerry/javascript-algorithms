function jumpSearch(array, target) {
    const blockSize = Math.sqrt(array.length);
    const start = 0;
    const next = blockSize;

    while (start < array.length &&
        array[next - 1] < target) {
        start = next;
        next += blockSize;
        if (next > array.length)
            next = array.length;
    }

    for (let i = start; i < next; i++)
        if (array[i] == target)
            return i;

    return -1;
}
