class WeightedGraph {
  constructor() {
    this.adjList = {};
  }

  addVertex(vertex) {
    if (!this.adjList[vertex]) this.adjList[vertex] = [];
  }

  addEdge(v1, v2, weight) {
    this.adjList[v1].push({ node: v2, weight });
    this.adjList[v2].push({ node: v1, weight });
  }

  findShortestPath(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    let path = []; // result to return
    let smallest;

    // build initial state using above vars
    for (let v in this.adjList) {
      if (v === start) {
        distances[v] = 0;
        nodes.enqueue(v, 0);
      } else {
        distances[v] = Infinity;
        nodes.enqueue(v, Infinity);
      }
      previous[v] = null;
    }

    // as long as there is something to visit
    while (nodes.values.length) {
      smallest = nodes.dequeue().val;
      if (smallest === finish) {
        // DONE
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }

      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjList[smallest]) {
          // find neighboring nodes
          let nextNode = this.adjList[smallest][neighbor];
          // calculate new distance to neighboring node
          let candidate = distances[smallest] + nextNode.weight;
          let nextNeighbor = nextNode.node;
          if (candidate < distances[nextNeighbor]) {
            // update new smallest distance to neighbor
            distances[nextNeighbor] = candidate;
            // updating previous and how we got to neighbor
            previous[nextNeighbor] = smallest;
            // enqueue in priority queue with new priority
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }

    return path.concat(smallest).reverse();
  }
}

// simple priority queue (with sorting = O(n logn))
// use this to decide which node to visit next
class PriorityQueueNaive {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }

  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

// binary heap priority queue
class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element.priority >= parent.priority) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }
  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

// PSEUDO CODE
// this function should accept a starting and ending vertex
// create an object, distances, and set each key to be every vertex in the adjList, with a val of infinity, except for the starting vertex which should be 0
// after setting a value in the distances object, add each vertex with a priority of infinity to the priority queue, except the starting vertex which should be 0.
// create another object, previous, and set each key to be every vertex in the adjList, with a value of null
// start looping as long as there is anything in the priority queue
// -- dequeue a vertex from the priority queue
// -- if that vertex is the same as the ending vertex, we are done
// -- otherwise loop through each value in the adjList(neighbors) at that vertex
// -- -- calculate the distance to that vertex from the starting vertex
// -- -- if the distance is less than what is currently stored in the distance object
// -- -- -- update the distances object with the new lower distance
// -- -- -- update the previous object to contain that vertex
// -- -- -- enqueue the vertex with the total distance from the start node

const g = new WeightedGraph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");
g.addEdge("A", "B", 4);
g.addEdge("A", "C", 2);
g.addEdge("B", "E", 3);
g.addEdge("C", "D", 2);
g.addEdge("C", "F", 4);
g.addEdge("D", "E", 3);
g.addEdge("D", "F", 1);
g.addEdge("D", "F", 1);

g.findShortestPath("A", "E"); // ["A", "C", "D", "F", "E"]
