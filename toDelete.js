class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class singlyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;

    }

    push(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            let temp = this.tail
            this.tail.next = newNode;
            newNode.prev = temp;
            this.tail = newNode;
        }

        this.length++;

        return this;
    }

    pop() {

        if (!this.head) {
            return undefined;
        }
        let currentTail = this.tail;
        this.tail = currentTail.prev
        currentTail.prev = null;
        this.tail.next = null

        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    shift() {
        if (!this.head) {
            return undefined;
        }

        let current = this.head;
        this.head = this.head.next;

        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return current;
    }

    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            let currentHead = this.head;

            this.head = newNode;

            this.head.next = currentHead;
        }
        this.length++;
        return this;
    }

    get(index) {

        if (this.length === 0 || index < 0) {
            return;
        }
        let current = this.head;
        let counter = 0;
        while (current !== null) {
            if (index === counter) {
                return current;
            }
            // console.log(current.val, prev)
            current = current.next;
            counter++;
        }
        return undefined;
    }

    set(index, value) {
        let node = this.get(index);
        if (!node) return false;
        else {
            node.val = value;
            return true;
        }
    }

    insert(index, value) {
        let newNode = new Node(value);

        if (index < 0 || index > this.length) return false;

        if (index === this.length) return !!this.push(value);

        if (index === 0) return !!this.unshift(value);

        let node = this.get(index - 1);
        let nextNode = node.next;
        node.next = newNode;
        newNode.next = nextNode;

        this.length++;

        return true

    }

    remove(index) {

        if (index < 0 || index > this.length) return undefined;

        if (index === this.length - 1) return !!this.pop();

        if (index === 0) return !!this.shift();

        let prevNode = this.get(index - 1);
        let temp = prevNode.next;

        prevNode.next = temp.next;

        this.length--
        return temp;

    }

    reverse() {
        let current = this.head
        let newHead = this.head;
        this.tail = newHead;

        let prev;
        let next;

        while (current) {
            next = prev.next;
            prev = current.next;

            current = current.next;
        }
    }
}

let list = new singlyLinkedList();

list.push('hari');
list.push('clerry');
list.push('tracy');
// list.pop();
// list.unshift('Trevor');
// let indexVal = list.get(2);
// let setValue = list.set(8, 'praise')
// list.insert(0, 'bright')
// list.remove(-1);

console.log('--------', list)