class Queue {
    constructor() {
        this.data = [];
    }

    // add to queue using array push method

    enqueue = (value) => {
        if (!value) return "Invalid";
        this.data.push(value);
        return this;
    }
    // remove from queue using array unshift method
    dequeue = () => {
        if (!this.data.length) return "No item in queue";
        this.data.shift();
        return this;
    }

    reverse = () => {
        const queue = [];

        for (let i = this.data.length - 1; i >= 0; i--) {
            queue.push(this.data[i])
        }
        return queue;
    }

    priorityQueue = (value) => {
        const data = this.data.sort((a, b) => a - b)
        const len = data.length;

        if (!data.len || value > data[len - 1]) {
            data.push(value);
        }
        // [ 5, 8, 10, 20 ]
        for (let i = data.length - 1; i >= 0; i--) {
            if (data[i] > value) {
                data[i + 1] = data[i]
                data[i] = value;
            }

        }
        return data
    }

    priorityQueue2 = (value) => {
        const data = this.data.sort((a, b) => a - b)
        let i;
        for (i = data.length - 1; i >= 0; i--) {
            if (data[i] > value) {
                data[i + 1] = data[i]
            } else break;
        }
        data[i + 1] = value;
        return data
    }

    // 1- Given an integer K and a queue of integers, write code to reverse the order of the first K elements of the queue.
    // Input: Q = [10, 20, 30, 40, 50], K = 3Output: Q = [30, 20, 10, 40, 50]Solution: QueueReverser.reverse()

    reverseFirstK = k => {
        const arr = [...this.data]
        for (let i = 0; i < Math.floor(k / 2); i++) {
            var temp = arr[i];
            arr[i] = arr[k - 1 - i];
            arr[k - 1 - i] = temp;
        }
        return arr
    }
}

const queue = new Queue();

const add1 = queue.enqueue(20);
const add2 = queue.enqueue(5);
const add3 = queue.enqueue(10);
const add4 = queue.enqueue(15);
const add5 = queue.enqueue(30);
const reverseFirstK = queue.reverseFirstK(4)

// const reverse = queue.reverse();
// const priority = queue.priorityQueue(19);
// const remove2 = queue.dequeue();

console.log("queueeeeee-----", reverseFirstK)