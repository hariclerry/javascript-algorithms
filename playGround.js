class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedLists {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // add item to an linkedlist
  addItem = (value) => {
    const nodeValue = new Node(value)
    if (!this.head) {
      this.head = nodeValue;
      this.tail = this.head;
    } else {
      this.tail.next = nodeValue;
      this.tail = nodeValue;
    }

    this.length++;
    return this;

  }

  // delete item from a linkedlist
  deleteFirst = () => {
    if (!this.head) return "No item in list";

    if (this.head === this.tail) {
      this.head = this.tail = null;
      return;
    }
    const firstItem = this.head;
    // const secondItem = this.head.next

    this.head = this.head.next;
    this.length--;
    return firstItem;

  }


  // delete item from a linkedlist
  deleteLast = () => {
    if (!this.head) return "No item in list";
    const tailNode = this.tail;
    // traverse list
    let currentNode = this.head;
    while (currentNode.next !== tailNode) {
      currentNode = currentNode.next;
    }
    const beforeTail = currentNode;
    this.tail = beforeTail;
    this.tail.next = null;
    this.length--;
    return tailNode;

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

  // Get kth node from the end
  // [5 -> 3 -> 20 -> 8]
  getKthNodeFromEnd = (k) => {
    if (!this.head) return "No item in list";

    let result = this.head;
    let current = this.head
    let count = 0;
    while (current != null) {
      if (count < k) {
        console.log("count2222", count)
        count++;
      } else {
        result = result.next;
      }
      current = current.next;
    }
    return result.value;
  }


  middleItem = () => {
    let first = this.head;
    let second = this.head;
    while (second !== this.tail && second.next !== this.tail) {
      second = second.next.next;
      first = first.next;
    }

    if (second === this.tail) {
      console.log(first.value)
    } else {
      console.log(first.value, first.next.value)
    }
  }

}

const linkedListItem = new LinkedLists();

const addFirst = linkedListItem.addItem(5)
const addFirst2 = linkedListItem.addItem(3)
const addFirst3 = linkedListItem.addItem(20)
const addFirst4 = linkedListItem.addItem(8)
const addFirst5 = linkedListItem.addItem(90)
const addFirst6 = linkedListItem.addItem(100)
// const deleteFirst = linkedListItem.deleteFirst()
// const deleteLast = linkedListItem.deleteLast()
// const containsItem = linkedListItem.containsItem(9)
// const indexOfItem = linkedListItem.indexOfItem(9)
// const reverse = linkedListItem.reverse();
// const getKthNodeFromEnd = linkedListItem.getKthNodeFromEnd(1)
const middleItem = linkedListItem.middleItem()

console.log("linkedListItemhereeee", middleItem)