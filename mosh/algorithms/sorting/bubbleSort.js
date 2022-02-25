// bubble sort
// UNOPTIMIZED VERSION OF BUBBLE SORT
const arr = [8, 2, 4, 1, 3]

const bubbleSort = (array) => {
    const len = array.length
    if (len < 0) return;

    for (let i = 0; i < len; i++) {
        for (let j = 1; j < len; j++) {
            if (array[j] < array[j - 1]) {
                let temp = array[j]
                array[j] = array[j - 1]
                array[j - 1] = temp
            }
        }
    }

    return array
}

// console.log(bubbleSort(arr))

// Refactored code
// OPTIMIZED VERSION OF BUBBLE SORT

const bubbleSort2 = (array) => {
    const len = array.length
    if (len < 0) return;
    let isSorted;
    for (let i = 0; i < len; i++) {
        isSorted = true
        for (let j = 1; j < len - i; j++) {
            if (array[j] < array[j - 1]) {
                swap(array, j, j - 1);
                isSorted = false
            }
        }
        if (isSorted) break;
    }

    return array
}

const swap = (array, index1, index2) => {
    //ES 6
    // [array[index1], array[index2]] = [array[index2], array[index1]];
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
}

console.log(bubbleSort2(arr))