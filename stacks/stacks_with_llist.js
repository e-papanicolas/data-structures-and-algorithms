// singly linked list implementation
// with a linked list we are using shift/unshift as push/pop because constant time with a linked list adding to beginning
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    // create a new node with val passed in
    let node = new Node(val);
    // if there are no nodes in the stack, set the first and last to be the new node
    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      // if there is at least one node, create a var to store the current first property on the stack
      // reset the first property to be the new node
      // set the next property on the node to be the previously created variable
      let current = this.first;
      this.first = node;
      node.next = current;
    }
    // increment size and return size
    return ++this.size;
  }

  pop() {
    // if there are no nodes in the stack, return null
    if (!this.first) return null;
    // create a temp var to store the first property on the stack
    let current = this.first;
    // if there is only one node, set the first and last of stack to be null
    if (this.first === this.last) {
      this.last = null;
    }
    // set the first property to be the next property of the current first
    this.first = this.first.next;

    // decrement size and return value of node removed
    this.size--;
    return current.val;
  }

  peek() {
    return this.first;
  }

  clear() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
}
