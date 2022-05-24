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

  depthFirstPreOrder() {
    // RECURSIVE APPROACH:
    // create a variable to store the visited values
    let data = [];
    // store the root of the tree in a variable called current
    let current = this.root;
    // helper function that accepts a node
    function traverse(node) {
      // push the value of the node to the visited values array
      data.push(node);
      // if the node has a left property, call the helper function with the left property
      if (node.left) traverse(node.left);
      // if the node has a right property, call the helper function with the right property
      if (node.right) traverse(node.right);
    }
    // invoke the helper function with the current variable
    traverse(current);
    // return the visited values
    return data;
  }

  depthFirstPostOrder() {
    // RECURSIVE APPROACH:
    // create a variable to store the visited values
    let data = [];
    // store the root of the tree in a variable called current
    let current = this.root;
    // helper function that accepts a node
    function traverse(node) {
      // if the node has a left property, call the helper function with the left property
      if (node.left) traverse(node.left);
      // if the node has a right property, call the helper function with the right property
      if (node.right) traverse(node.right);
      // push the value of the node to the visited values array
      data.push(node);
    }
    // invoke the helper function with the current variable
    traverse(current);
    // return the visited values
    return data;
  }

  depthFirstInOrder() {
    // RECURSIVE APPROACH:
    // create a variable to store the visited values
    let data = [];
    // store the root of the tree in a variable called current
    let current = this.root;
    // helper function that accepts a node
    function traverse(node) {
      // if the node has a left property, call the helper function with the left property
      if (node.left) traverse(node.left);
      // push the value of the node to the visited values array
      data.push(node);
      // if the node has a right property, call the helper function with the right property
      if (node.right) traverse(node.right);
    }
    // invoke the helper function with the current variable
    traverse(current);
    // return the visited values
    return data;
  }
}
