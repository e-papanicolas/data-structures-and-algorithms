class PriorityQueue {
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

class Graph {
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

  findShortestPath(start, end) {
    const distances = {};
    const prev = {};
    const nodes = new PriorityQueue();
    let path = [];
    let current;

    // init state
    for (let v of this.adjList) {
      if (v === start) {
        distances[v] = 0;
        nodes.enqueue(v, 0);
      } else {
        distances[v] = Infinity;
        nodes.enqueue(v, Infinity);
      }
      prev[v] = null;
    }

    // start traversing
    while (nodes.values.length) {
      current = nodes.dequeue().val;

      if (current === end) {
        // done
        while (prev[current]) {
          path.push(current);
          current = prev[current];
        }
      }

      if (current || distances[current] !== Infinity) {
        for (let nei in this.adjList[current]) {
          let nextNode = this.adjList[current][nei];
          let candidate = distances[current] + nextNode.weight;
          let nextNei = nextNode.node;
          if (candidate < distances[nextNei]) {
            // update
            distances[nextNei] = candidate;
            previous[nextNei] = current;
            nodes.enqueue(nextNei, candidate);
          }
        }
      }
    }
    return path.concat(current).reverse();
  }
}
