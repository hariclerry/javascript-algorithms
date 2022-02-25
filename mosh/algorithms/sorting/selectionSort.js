// selection sort

const arrElemets = [8, 2, 4, 1, 3]
const selectionSort = (elements) => {
    for (let i = 0; i < elements.length; i++) {
        let smallest = i;
        for (let j = i; j < elements.length; j++) {
            if (elements[j] < elements[smallest]) {
                smallest = j;
            }
        }
        [elements[smallest], elements[i]] = [elements[i], elements[smallest]];
    }
    return elements;
}

console.log("selectionSort", selectionSort(arrElemets))

