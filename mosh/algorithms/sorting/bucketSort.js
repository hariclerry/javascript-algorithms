// Bucket sort using two types of sort
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

console.log("bucketSort-----", bucketSort(arrElementTest, 3))