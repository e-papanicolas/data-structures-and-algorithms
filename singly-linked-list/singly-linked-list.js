class Node {
  constructor(value) {
    this.val = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }

  push(val) {
    // create new node with the value passed in
    let node = new Node(val);
    // if there is no head, set head and tail to be new node
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    // increment the length by 1
    this.length++;
    // return list
    return this;
  }

  pop() {
    // if list is empty return undefined
    if (!this.head) return undefined;
    // loop through the list until reaching the tail, current will check if its the tail, and then new tail will move up the list after
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    // set the next property of the 2nd to last node to be null
    // set the tail to be the 2nd to last node
    this.tail = newTail;
    this.tail.next = null;
    // decrement the length
    this.length--;
    // if list is empty, set head and tail to null
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    // return the value of the node removed
    return current;
  }

  shift() {
    // remove a node from the beginning
    // if there are no nodes, return undefined
    if (!this.head) return undefined;
    // store the current head in a variable
    let oldHead = this.head;
    // set the head property to be the current head's next node
    this.head = oldHead.next;
    // decerement the length of the SinglyLinkedList
    this.length--;
    // if list is empty, set head and tail to null
    if (this.length === 0) {
      this.tail = null;
    }
    // return the value of node removed
    return oldHead;
  }

  unshift(val) {
    // add a node to the beginning of the list
    // create a new node with the value passed in
    let node = new Node(val);
    // if there is no head on the list, set the head and tail to be new node
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      // otherwise set the new node's next property to be the current head of the list
      node.next = this.head;
      // set the head property on the list to be the new node
      this.head = node;
    }
    // increment the length of the list
    this.length++;
    // return SinglyLinkedList
    return this;
  }

  get(index) {
    // retrieve a node by its position
    // takes in a number and traverses the list that many times
    // if index/position is less than 0 or greater than or equal to the length of the list, return null
    if (index < 0 || index >= this.length) return null;
    // loop through the list until you reach the index and return the node
    let count = 0;
    let current = this.head;
    while (count !== index) {
      current = current.next;
      count++;
    }
    return current;
  }

  set(index, val) {
    // accepts position/index and value and UPDATES it
    // use get function to find the specific node
    // if node is not found, return false
    // if node is found, set the value of tht node to be the value passed to the function and return true
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    // adding a node to the list at a specific position
    // if index/position is less than 0 or greater than the length of the list, return false
    if (index < 0 || index > this.length) return false;
    // if index is the same as the length, use push method
    // double bang operator coerces the returned value into a boolean for our return val
    if (index === this.length) return !!this.push(val);
    // if index is 0, unshift a new node to start of SinglyLinkedList
    if (index === 0) return !!this.unshift(val);

    // create a new node
    let node = new Node(val);
    // otherwise: use get to access node at the index - 1
    let prev = this.get(index - 1);
    let after = prev.next;
    // set the next property on that node to be the new node
    // set the next property on the new node to be the previous next
    node.next = after;
    prev.next = node;
    // increment the length
    this.length++;
    // return true
    return true;
  }

  remove(index) {
    // removes a node at a specific index/position
    // if index is less than 0 or greater than length return null
    if (index < 0 || index > this.length) return null;
    // if index is the same as the length - 1, use pop
    if (index === this.length - 1) return this.pop();
    // if index = 0, use shift
    if (index === 0) return this.shift();
    // otherwise, use get to access node at index - 1
    let prev = this.get(index - 1);
    let removed = prev.next;
    // set the next property on that node to be the next of the next node
    prev.next = removed.next;
    // decrement the length
    this.length--;
    // return the value of node removed
    return removed;
  }

  reverse() {
    // swap the head and tail, and current node, init to head
    // create vars next, previous
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next = this.head;
    let prev = null;
    // loop through SinglyLinkedList
    for (let i = 0; i < this.length; i++) {
      // set next to be the next property on whatever node is
      next = node.next;
      // set the next property on the node to whatver the prev was
      node.next = prev;
      // set the prev to be be the value of the node var
      prev = node;
      // set the node variable to be the value of next
      node = next;
    }
    return this;
  }
}
