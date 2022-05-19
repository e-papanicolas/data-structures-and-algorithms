class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// in a linked list, using pop is slow, so we will add to the end and remove from the beginning

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    // add to the end of the queue
    let node = new Node(val);
    // check if queue is empty, set first and last to be the new node
    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      // otherwise set the next proeprty on the current last to be the new node, and then set the last property of the queue to be the node
      this.last.next = node;
      this.last = node;
    }
    return ++this.size;
  }

  dequeue() {
    // remove from the beginning of the queue
    // if there is no first, return null
    if (!this.first) return null;
    // store the first property in a variable
    let dequeued = this.first;
    // check if the first node = last node, only one node in the queue, if yes set first and last to null
    if (this.first === this.last) {
      this.last = null;
    }
    // if more then one node, set first to be the next property of first
    this.first = this.first.next;
    // decrement size and return value of dequeued node
    this.size--;
    return dequeued.val;
  }
}
