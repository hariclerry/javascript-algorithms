const arrElementTest = [8, 2, 4, 1, 3]
const countSort = (arr) => {
    const max = Math.max(...arr);
    let countArr = new Array(max + 1).fill(0);
    // let t;
    for (let item in arr) {
        // t = arr[item];
        // countArr[t]++;
        countArr[arr[item]]++;
    }

    let k = 0;
    for (let i = 0; i < countArr.length; i++) {
        for (let j = 0; j < countArr[i]; j++) {
            arr[k] = i
            k++;

        }
        return arr;
    }
}

console.log("countSort-----", countSort(arrElementTest))