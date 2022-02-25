class Heap {
    constructor() {
        this.array = [];
        this.size = 0;
    }

    // Insert and bubble up
    insert(value) {
        this.array[this.size] = value;
        this.size++

        let index = this.size - 1;

        while ((index > 0) && this.array[index] > this.array[this.parent(index)]) {
            this.swap(index, this.parent(index));
            index = this.parent(index);
        }
    }

    parent(index) {
        return Math.floor((index - 1) / 2)
    }
    swap(first, second) {
        let temp = this.array[first];
        this.array[first] = this.array[second];
        this.array[second] = temp;

    }

    //Remove root node only(heap removes root node only)
    // Javascript program for implement deletion in Heaps

}

const heap = new Heap();

heap.insert(10);
heap.insert(5);
heap.insert(17);
heap.insert(4);
heap.insert(22);

heap.remove()
console.log("heap----------", heap.array)