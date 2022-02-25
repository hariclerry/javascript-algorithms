// import HeapMosh from './heap-mosh';
const HeapMosh = require('./heap-mosh')

class MaxHeap extends HeapMosh {

    heapify(array) {

        var lastParentIndex = Math.floor(array.length / 2 - 1);

        // for (var i = 0; i < array.length; i++) {
        //     console.log("hereeeeloop")
        //     this.heapifyHelper(array, i);
        // }


        // optimised for loop
        for (var i = lastParentIndex; i >= 0; i--) {
            // console.log("hereeeeloop", i)
            this.heapifyHelper(array, i);
        }
    }

    heapifyHelper(array, index) {
        var largerIndex = index;

        var leftIndex = index * 2 + 1;
        if (leftIndex < array.length &&
            array[leftIndex] > array[largerIndex])
            largerIndex = leftIndex;

        var rightIndex = index * 2 + 2;
        if (rightIndex < array.length &&
            array[rightIndex] > array[largerIndex])
            largerIndex = rightIndex;

        if (index == largerIndex)
            return;

        this.swap(array, index, largerIndex);
        this.heapifyHelper(array, largerIndex);
    }

    swap(array, first, second) {
        var temp = array[first];
        array[first] = array[second];
        array[second] = temp;
    }

    getKthLargest(array = [], k) {
        if (k < 1 || k > array.length)
            return "Invalid K";
        for (var number in array) {
            this.insert(number);
        }

        for (var i = 0; i < k - 1; i++)
            this.remove();

        return this.max();
    }
}

const heap = new MaxHeap();
const array = [10, 5, 17, 4, 22]
const array1 = [5, 3, 8, 4, 1, 2, 20, 10]
// heap.heapify(array1)

console.log("heap-------", heap.getKthLargest(array, 1))