class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

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

  // Pop or remove at the end of the list
  pop() {
    if (!this.head) return undefined;
    var current = this.head;
    var newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  // Shift or remove at the beginning of the list
  shift() {
    if (!this.head) return undefined;
    var currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }

  // Unshift or add at the beginning of the list
  unshift(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  // Get or find an item at the specified index in the list
  get(index) {
    if (index < 0 || index >= this.length) return null;
    var counter = 0;
    var current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  // Set or update a value of an item at the specified index in the list
  set(index, val) {
    var foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  // Insert or add an item at the specified index in the list
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);

    var newNode = new Node(val);
    var prev = this.get(index - 1);
    var temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  // Remove or delete an item at the specified index in the list
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    var previousNode = this.get(index - 1);
    var removed = previousNode.next;
    previousNode.next = removed.next;
    this.length--;
    return removed;
  }

  // Reverse the list order
  reverse() {
    var node = this.head;
    this.head = this.tail;
    this.tail = node;
    var next;
    var prev = null;
    for (var i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }

  // Helper method to print reverse;
  print() {
    var arr = [];
    var current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }

  // Alot of linked list problemes can be solved using two pointers

  reverse = () => {
    if (!this.head) return;
    let previous = this.head;
    let current = this.head.next;
    while (current) {
      const next = current.next;
      current.next = previous;
      previous = current;
      current = next;

    }
    // remove and reset head
    this.tail = this.head;
    this.tail.next = null;
    // make last the head
    this.head = previous;
  }

  getKthNodeFromEnd = (k) => {
    if (!this.head) return;

    // two pointers
    let first = this.head;
    let second = this.head;

    // move the second pointer to be k-1 distance from the first pointer
    for (let i = 0; i < k - 1; i++) {
      second = second.next;
      // return if node exceeds number of nodes
      if (second === null) return;
    }
    //iterate until the two pointers are properly positioned and move the pointers forward until the second pointer reaches the end of the list
    while (second !== this.tail) {
      first = first.next;
      second = second.next
    }
    return first.value;
  }
  // [10 --> 50 --> 2 --> 8 --> 30 --> 4]
  middleNode = () => {

    if (!this.first) return;
    // two pointers
    let first = this.first;
    let second = this.first;
    while (second !== this.last && second.next !== this.last) {
      // console.log("----", first)
      first = first.next;
      second = second.next.next;

    }
    // check to see if it's even or odd
    if (second === this.last) {
      return first.value;
    } else return console.log(first.value, first.next.value);
  }


  hasLoop = () => {
    let slow = this.first;
    let fast = this.first;

    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
      if (fast === slow) return true;
    }
    return false;
  }

}

const list = new SinglyLinkedList();

list.push(100);
list.push(201);
list.push(250);
list.push(350);
list.push(999);

// Create list with loop
createWithLoop = () => {
  const list = new SinglyLinkedList()
  list.addLast(10);
  list.addLast(20);
  list.addLast(30);

  // Get a reference to 30
  var node = list.last;

  list.addLast(40);
  list.addLast(50);

  // Create the loop
  list.last.next = node;

  return list;
}