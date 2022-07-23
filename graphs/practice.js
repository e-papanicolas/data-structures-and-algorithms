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

  addVertex(v) {
    if (!this.adjList[v]) this.adjList[v] = [];
  }

  addEdge(v1, v2, weight) {
    this.adjList[v1].push({ node: v2, weight });
    this.adjList[v2].push({ node: v1, weight });
  }

  findShortestPath(start, end) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    let path = [];
    let current;

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

    while (nodes.values.length) {
      current = nodes.dequeue().val;
      if (current === end) {
        while (previous[current]) {
          path.push(current);
          current = previous[current];
        }
      }

      if (current || distances[current] !== Infinty) {
        for (let nei in this.adjList[current]) {
          let nextNode = this.adjList[current][nei];
          let candidate = nextNode.weight + distances[current];
          let nextNei = nextNode.node;
          if (candidate < distances[nextNei]) {
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
