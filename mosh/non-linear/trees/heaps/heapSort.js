class Heap {
    constructor() {
        this.array = [];
        this.size = [];

    }
    parent = (index) => {
        return Math.floor((index - 1) / 2)
    }
    insert = (value) => {
        this.array[this.size++] = value;
        // size++
        // initialise index after increment
        var index = this.size - 1;
        while (index > 0 && this.array[index] > this.array[this.parent(index)]) {
            // swap
            const temp = this.array[index];
            this.array[index] = this.array[this.parent(index)];
            this.array[this.parent(index)] = temp;

            // reset parent index
            index = this.parent(index)
        }
        return this.array;

    }

    remove = () => {
        if (this.array.length === 0) return null;
        // this.array.shift()

        const root = this.array[0];

        let removeItem = this.array.shift()
        removeItem = this.array[this.array.length - 1];

        this.size--;
        let index = 0;
        let leftIndex = index * 2 + 1;
        let rightIndex = index * 2 + 2;

        while (index <= this.size && this.array[index] < this.array[leftIndex] && this.array[index] < this.array[rightIndex]) {
            // check for larger child befor swap;
            console.log('called---')
            let checkLargerChild = this.array[leftIndex] > this.array[rightIndex] ? this.array[leftIndex] : this.array[rightIndex]

            //swap
            const temp = this.array[index];
            this.array[index] = this.array[checkLargerChild];
            this.array[checkLargerChild] = temp;

            // reset index

            index = checkLargerChild

        }
        // console.log('root---', root)
        return root;
    }

}

const heap = new Heap();

heap.insert(10);
heap.insert(5);
heap.insert(17);
heap.insert(4);
heap.insert(22);

// heap.remove()
// heap.remove()
// heap.remove()
// heap.remove()
// heap.remove()
// heap.remove()


// console.log('heap: ', heap.remove());

const arr1 = [5, 3, 10, 1, 4, 2]
const heapSort = (arr) => {
    // new heap object

    let sorted = [];
    const heap = new Heap();

    for (let i = 0; i < arr.length; i++) {
        heap.insert(arr[i]);
    }

    // for (let i = 0; i < arr.length; i++) {
    //     console.log('heapsort:', arr[i])
    // }
    // arr.map(a => sorted.push(heap.remove()))
    return arr;
}

// const heapy = heapSort()

console.log('heapsort:', heapSort(arr1))