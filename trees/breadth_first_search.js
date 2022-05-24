// ITERATIVE APPROACH:
// create a queue (array) and a variable to store the values of the nodes visited
// place the root node in the queue
// loop as long as there is anything in the queue
// dequeue a node from the queue and push the value of the node into the variable that stores the nodes
// if there is a left property on the node dequeued, add it to the queue
// if there is a right property on the node dequeued, add it to the queue
// return the variable that stores the values

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  breadthFirstSearch() {
    let data = [];
    let queue = [];
    let node = this.root;

    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      data.push(node);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }
}
