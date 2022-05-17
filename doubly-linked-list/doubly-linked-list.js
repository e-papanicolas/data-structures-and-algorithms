class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let node = new Node(val);
    // if this head is null, set the head and tail to the new node
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      // if not, set next property on tail to be the new node
      // set previous property on the new node to be the tail
      // set the tail to be the new node
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    // increment the length and return list
    this.length++;
    return this;
  }

  pop() {
    // if there is no tail, return undefined
    if (!this.head) return undefined;
    // store current tail in variable to return later
    let oldTail = this.tail;
    // if the length is 1, set head and tail to be null
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      // update tail to be the previous node
      // set the new tails next to null
      this.tail = oldTail.prev;
      this.tail.next = null;
      oldTail.prev = null;
    }
    // decrement the length and return the removed node
    this.length--;
    return oldTail;
  }

  shift() {
    // if list is empty return undefined
    if (!this.head) return undefined;
    // store current head in variable to return later
    let oldHead = this.head;
    // if list length is 1, set head and tail to be null
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      // update head to be next of old oldHead
      // set heads prev to null & old head next to null
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    // decerement the length and return old head
    this.length--;
    return oldHead;
  }

  unshift(val) {
    let node = new Node(val);
    // if list is empty set head and tail to be new node
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      // set prev on head to be new node
      // set next on new node to be head
      // update head to be new node
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
    // increment the length and return list
    this.length++;
    return this;
  }

  get(index) {
    // check for a valid index, less than 0 or equal to length return null
    if (index < 0 || index >= this.length) return null;
    // if index is less than or equal to half the length of the list
    // loop through the llist starting from the head towards the middle
    // return node when found
    if (index <= this.length / 2) {
      let count = 0;
      let current = this.head;
      while (count !== index) {
        current = current.next;
        count++;
      }
      return current;
    } else {
      // else if the index is greater than half the length of the list
      // loop through the list starting at the tail towards the middle
      // return node when found
      let count = this.length - 1;
      let current = this.tail;
      while (count !== index) {
        current = current.prev;
        count--;
      }
      return current;
    }
  }

  set(index, val) {
    // use get method to find node
    let found = this.get(index);
    // if node exists, update node with new value
    if (found !== null) {
      found.val = val;
      return true;
    }
    // if node does not exist return false
    return false;
  }

  insert(index, val) {
    // if index is < 0 or >= to length return false
    if (index < 0 || index >= this.length) return false;
    // if index is 0 use unshift
    if (index === 0) return !!this.unshift(val);
    // if index is same as length use push method
    if (index === this.length) return !!this.push(val);
    let newNode = new Node(val);
    // use get to access item at index - 1
    let prev = this.get(index - 1);
    // set next and prev on correct nodes to link everything together
    let after = prev.next;
    prev.next = newNode;
    newNode.prev = prev;
    newNode.next = after;
    after.prev = newNode;
    // increment the length and return true
    this.length++;
    return true;
  }

  remove(index) {
    // if index is < 0 or >= to length return undefined
    if (index < 0 || index >= this.length) return undefined;
    // if index is 0 use shift method
    if (index === 0) return !!this.shift();
    // if index is length - 1 use pop method
    if (index === this.length - 1) return !!this.pop();
    // use get to access node to be removed
    let removed = this.get(index);
    // update next and prev to remove node
    let prev = removed.prev;
    let next = removed.next;
    prev.next = next;
    next.prev = prev;
    // set prev and next on removed node to null
    removed.next = null;
    removed.prev = null;
    // decrement length and return removed node
    this.length--;
    return removed;
  }
}
