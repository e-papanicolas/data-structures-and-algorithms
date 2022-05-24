class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.count = 0;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    // create a new node
    let newNode = new Node(val);
    // starting at the root:
    // check if there is a root, if not - the root now becomes that new node
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      // if there is a root, check if the value of the new node is greater than or less than the value of the root
      let current = this.root;
      while (true) {
        // if value already exists in the tree, return undefined
        if (val === current.val) return undefined;
        // if it is less:
        if (val < current.val) {
          // check to see if there is a node to the left
          if (current.left === null) {
            // if there is not, add that node as the left property
            current.left = newNode;
            return this;
          } else {
            // if there is, move to that node and repeat these steps
            current = current.left;
          }
          // if it is greater:
        } else if (val > current.val) {
          // check to see if there is a node to the right
          if (current.right === null) {
            // if there is not, add that node as the right property
            current.right = newNode;
            return this;
          } else {
            // if there is, move to that node and repeat these steps
            current = current.right;
          }
        }
      }
    }
  }

  contains(val) {
    // same steps as insert, except returning the found val instead of inserting
    if (this.root === null) return false;

    let current = this.root;
    let found = false;
    while (current && !found) {
      if (val < current.val) {
        current = current.left;
      } else if (val > current.val) {
        current = current.right;
      } else return true;
    }
    return false;
  }

  find(val) {
    let current = this.root;
    while (current.val !== val) {
      if (val < current.val) {
        current = current.left;
      } else {
        current = current.right;
      }
      if (current == null) {
        return null;
      }
    }
    return current;
  }

  getMin() {
    let current = this.root;
    while (!(current.left == null)) {
      current = current.left;
    }
    return current.val;
  }

  getMax() {
    let current = this.root;
    while (!(current.right == null)) {
      current = current.right;
    }
    return current.val;
  }

  update(val) {
    // use this to count occurrences of a value - node class has been updated to have a count
    let node = this.find(val);
    node.count++;
    return node;
  }

  remove(val) {
    root = removeNode(this.root, val);
  }

  removeNode(node, val) {
    if (node === null) {
      return null;
    }
    if (val == node.val) {
      // node has no children
      if (node.left == null && node.right == null) {
        return null;
      }
      // node has no left child
      if (node.left == null) {
        return node.right;
      }
      // node has no right child
      if (node.right == null) {
        return node.left;
      }
      // node has two children
      let tempNode = getMin(node.right);
      node.val = tempNode.val;
      node.right = removeNode(node.right, tempNode.val);
      return node;
    } else if (val < node.val) {
      node.left = removeNode(node.left, val);
      return node;
    } else {
      node.right = removeNode(node.right, val);
      return node;
    }
  }
}
