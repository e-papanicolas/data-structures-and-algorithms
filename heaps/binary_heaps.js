// storing heaps, represented as an array
// for any index of an array (n), the left child is stored at (2n + 1), the right child is stored at (2n + 2)
// using a child to find its parent: for any child node at index (n), its parent is stored at Math.floor(n - 1)/2

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(val) {
    // push value to the end and bubble up !
    // push value into the values property on the heap
    this.values.push(val);
    this.bubbleUp();
  }

  bubbleUp() {
    // bubble up: create a variable called index which is the length of the values property - 1
    // create a variable called parentIndex which is the floor of (index - 1)/ 2
    // keep looping as long as the values element at the parentIndex is less than the values element at the child index
    // swap the value of the values element at the parentIndex with the value of the element property at the child index
    // set the index to be the parentIndex and start over
    let index = this.values.length - 1;
    let element = this.values[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      if (element <= parent) break;

      this.values[parentIndex] = element;
      this.values[index] = parent;
      index = parentIndex;
    }
  }

  extractMax() {
    // remove the root, replace with the most recently added, adjust (down-heap, sink-down)
    // swap the first value in the values property with the last one
    // pop from the values property so you can return the value at the end
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    // return the old root
    return max;
  }

  sinkDown() {
    // parent index starts at 0 (root)
    let index = 0;
    let length = this.values.length;
    let element = this.values[0];
    while (true) {
      // find the index of the left child (2 * index + 1) and make sure it is not out of bounds
      let leftChildIdx = 2 * index + 1;
      // find the index of the right child (2 * index + 2) and make sure it is out of bounds
      let rightChildIdx = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;
      // if the left or right child is greater than the element, swap. if both left and right child are greater, swap with the largest
      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      // the child index swapped now becomes the new parent index
      this.values[index] = this.values[swap];
      this.values[swap] = element;
      // keep looping until neither child is greater than the element
      index = swap;
    }
  }
}
