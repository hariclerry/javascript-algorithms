class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedLists {
    constructor() {
        this.head = null;
        this.tail = this.head;
        this.length = 0;
    }
    // nodeList = new Node()
    // prepend = value => {
    //     const nodeList = new Node(value)
    //     nodeList.next = this.head;
    //     this.head = nodeList;
    //     // this.tail = nodeList;
    //     this.length++;

    // }
    // Unshift or add at the beginning of the list
    // Push or add at the end of the list
    push(val) {
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    // Traveser list
    indexOfItem = (value) => {
        if (!this.head) return "No item in list";

        let index = 0;

        // traverse list
        let currentNode = this.head;
        while (currentNode !== null) {
            if (currentNode.value === value) {
                return index
            }
            currentNode = currentNode.next;
            index++
        }
        return -1
    }

    // Check if list contains an item.
    containsItem = (value) => {
        return this.indexOfItem(value) !== -1;
    }

    // append = value => {
    //     const nodeList = new Node(value)
    //     // console.log('first', this.head)
    //     if (!this.head) {
    //         // console.log('****first****')
    //         this.head = nodeList;
    //         this.tail = nodeList;
    //     } else {
    //         // console.log('****secondheaddd****', this.head)
    //         this.head.next = nodeList;
    //         this.tail = nodeList;
    //         // console.log('****second****', this.head.next)
    //     }
    //     this.length++;
    //     // return this;
    // }

    removeLast = () => {
        // check if list is empty and return
        // traverse lists to the end
        // pick second last item and store it in variable
        // set tail to point to second last item
        // set second last item's pointer to null
        // decreament length


    }
    // getPrevNextNodes(index) {
    //     let count = 0;
    //     let prevNode = this.head;
    //     let nextNode = prevNode.next;

    //     while (count < index - 1) {
    //         prevNode = prevNode.next;
    //         nextNode = prevNode.next;
    //         count++;
    //     }

    //     return {
    //         prevNode,
    //         nextNode
    //     }
    // }


    reverse = () => {
        // check if list is empty and return
        // traverse lists to the end
        // make last item head
        // set next of last to second and so on
        // set head to tail and make it null
        // return length
        // [10 < - 30 < - 40 < - 25]
        console.log('hereeeethis.head111111', this.head)
        // let count = this.length;
        let prevNode = null;
        let current = this.head;
        // let nextNode = current.next;
        // let nextNode = prevNode.next;
        // let rev = this.tail;
        // if (!this.length) return;
        while (current !== null) {
            let nextNode = current.next;
            current.next = prevNode
            prevNode = current;
            current = nextNode;
        }
        this.head = prevNode

    }


    convArr = () => {
        let arr = [];
        let index = 0;
        let currentNode = this.head;
        // console.log("cureentnode------", currentNode)
        while (currentNode !== null) {
            // console.log("cureentnodeinside------", currentNode)
            arr[index++] = currentNode.value;
            // index++;
            currentNode = currentNode.next;
        }

        return arr;
    }

    //reverse linkedlist
    // [5 -> 3 -> 20 -> 8]
    // [5 <- 3 <- 20 <- 8]
    reverse = () => {
        if (!this.head) return "No item in list";
        let prevNode = null;
        let currentNode = this.head;

        while (currentNode !== null) {
            let nextNode = currentNode.next;
            currentNode.next = prevNode;
            prevNode = currentNode;
            currentNode = nextNode
        }
        this.head = prevNode
        return this;

    }
    //reverse linkedlist solution 2
    // [5 -> 3 -> 20 -> 8]
    // [5 <- 3 <- 20 <- 8]

    reverse2 = () => {
        if (!this.head) return "No item in list";
        let prevNode = this.head;
        let currentNode = this.head.next;

        while (currentNode !== null) {
            let nextNode = currentNode.next;
            currentNode.next = prevNode;
            prevNode = currentNode;
            currentNode = nextNode
        }
        this.tail = this.head;

        this.tail.next = null;
        this.head = prevNode;
        return this;
    }

    //reverse linkedlist solution 3

    // O(n) time & O(1) space
    reverse = (head) => {
        let node = head,
            previous,
            tmp;

        while (node) {
            // save next before we overwrite node.next!
            tmp = node.next;

            // reverse pointer
            node.next = previous;

            // step forward in the list
            previous = node;
            node = tmp;
        }

        return previous;
    }

    // Get kth node from the end
    // [5 -> 3 -> 20 -> 8]
    getKthNodeFromEnd = (k) => {
        if (!this.head) return "No item in list";

        let result = this.head;
        let current = this.head
        let count = 0;
        while (current != null) {
            if (count < k) {
                // console.log("count2222", count)
                count++;
            } else {
                result = result.next;
            }
            current = current.next;
        }
        return result.value;
    }

    // Get kth node from the end solution2
    // [5 -> 3 -> 20 -> 8]
    getKthNodeFromEnd2 = (k) => {
        if (!this.head) return "No item in list";

        let result = this.head;
        let current = this.head

        for (let i = 0; i < k - 1; i++) {
            current = current.next;
        }
        while (current != this.tail) {
            result = result.next;
            current = current.next;
        }
        return result.value;
    }

    //  Find the middle of a linked list in one pass.

    middleItem = () => {
        let first = this.head;
        let second = this.head;
        while (second !== this.tail && second.next !== this.tail) {
            second = second.next.next;
            first = first.next;
        }

        if (second !== this.tail) {
            console.log(first.value)
        } else {
            console.log(first.value, first.next.value)
        }
    }
}

const newItem = new LinkedLists();

const addItem = newItem.push(4)
const addItem2 = newItem.push(3)
const addItem3 = newItem.push(9)
// const addItem4 = newItem.append(2)
// const arrList = newItem.convArr()
// const addItem5 = newItem.prepend(9)
const revList = newItem.reverse();
const arrList = newItem.convArr()
console.log('revesrelists', revList)
console.log('hereeeeee', newItem)
