class HeapMosh {
    constructor() {
        this.items = [];
        this.size = 0
    }


    insert(value) {
        this.items[this.size++] = value;

        this.bubbleUp();
    }

    // helper method
    bubbleUp() {
        let index = this.size - 1;
        while (index > 0 && this.items[index] > this.items[this.parent(index)]) {
            this.swap(index, this.parent(index));
            index = this.parent(index);
        }
    }

    remove() {
        if (this.isEmpty()) return "Empty Heap"

        let root = this.items[0];
        this.items[0] = this.items[--this.size];

        this.bubbleDown();

        return root;
    }

    bubbleDown() {
        let index = 0;
        while (index <= this.size && !this.isValidParent(index)) {
            let largerChildIndex = this.largerChildIndex(index);
            this.swap(index, largerChildIndex);
            index = largerChildIndex;
        }
    }

    isEmpty() {
        return this.size == 0;
    }

    largerChildIndex(index) {
        if (!this.hasLeftChild(index))
            return index;

        if (!this.hasRightChild(index))
            return this.leftChildIndex(index);

        return (this.leftChild(index) > this.rightChild(index)) ?
            this.leftChildIndex(index) :
            this.rightChildIndex(index);
    }

    hasLeftChild(index) {
        return this.leftChildIndex(index) <= this.size;
    }

    hasRightChild(index) {
        return this.rightChildIndex(index) <= this.size;
    }

    isValidParent(index) {
        if (!this.hasLeftChild(index))
            return true;

        let isValid = this.items[index] >= this.leftChild(index);

        if (this.hasRightChild(index))
            isValid &= this.items[index] >= this.rightChild(index);

        return isValid;
    }

    rightChild(index) {
        return this.items[this.rightChildIndex(index)];
    }

    leftChild(index) {
        return this.items[this.leftChildIndex(index)];
    }

    leftChildIndex(index) {
        return index * 2 + 1;
    }

    rightChildIndex(index) {
        return index * 2 + 2;
    }

    isFull() {
        return this.size == this.items.length;
    }

    parent(index) {
        return Math.floor((index - 1) / 2);
    }

    swap(first, second) {
        let temp = this.items[first];
        this.items[first] = this.items[second];
        this.items[second] = temp;
    }

    max() {
        if (this.isEmpty())
            return "empty";

        return this.items[0];
    }

    //  isMaxHeap([] array) {
    //     return isMaxHeap(array, 0);
    // }

    //  isMaxHeap([] array,  index) {
    //     // All leaf nodes are valid
    //     let lastParentIndex = (array.length - 2) / 2;
    //     if (index > lastParentIndex)
    //         return true;

    //     let leftChildIndex = index * 2 + 1;
    //     let rightChildIndex = index * 2 + 2;

    //     let isValidParent =
    //         array[index] >= array[leftChildIndex] &&
    //         array[index] >= array[rightChildIndex];

    //     return isValidParent &&
    //         isMaxHeap(array, leftChildIndex) &&
    //         isMaxHeap(array, rightChildIndex);
    // }
}

module.exports = HeapMosh
const heap = new HeapMosh();

// heap.insert(10);
// heap.insert(5);
// heap.insert(17);
// heap.insert(4);
// heap.insert(22);

// heap.remove()

console.log("heap----------", heap)