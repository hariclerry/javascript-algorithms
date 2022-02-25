reverseFirstK = (arr, k) => {
    // const arr = [...array]
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        var temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr
}