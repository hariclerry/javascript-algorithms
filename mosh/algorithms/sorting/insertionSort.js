const insertionArr = [8, 2, 4, 1, 3]

const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1
        // console.log("arr[i]jjjjjj------", j)
        while (j >= 0 && arr[j] > current) {
            // console.log("arr[i]------", arr[j])
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = current;
    }
    return arr;
}

console.log("insertionSort", insertionSort(insertionArr))