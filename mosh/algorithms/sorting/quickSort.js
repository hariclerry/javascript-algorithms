// Quick sort
const quickSort = (arr) => {
    quickSortHelper(arr, 0, arr.length - 1)

    return arr;
};

const pivot = (arr, start, end) => {
    const swap = (list, a, b) => [list[a], list[b]] = [list[b], list[a]];

    let pivot = arr[end],
        pointer = start - 1;

    for (let i = start; i <= end; i++) {
        if (arr[i] <= pivot) {
            pointer++;
            swap(arr, pointer, i);
        }
    };
    // swap(arr, start, pointer);

    return pointer;
}

const quickSortHelper = (arr, start, end) => {
    let pivotIndex = pivot(arr, start, end);

    if (start >= end) return arr;
    quickSortHelper(arr, start, pivotIndex - 1);
    quickSortHelper(arr, pivotIndex + 1, end);

    // return arr;
};

console.log("quickSort", quickSort(arrElements))

// Quick sort short

const quickSort = (originalList) => {
    const list = [...originalList]

    if (list.length < 2) {
        return list
    }

    const pivot = list[0]

    const smaller = list.filter((item) => item < pivot)
    const bigger = list.filter((item) => item > pivot)

    return [...quickSort(smaller), pivot, ...quickSort(bigger)]
}