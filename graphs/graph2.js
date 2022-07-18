class Graph { 
  constructor() {
    this.adjList = [];
  }

  addVertex(vertex) {
    if (!this.adjList[vertex]) this.adjList[vertex] = [];
  }

  addEdge(v1, v2) {
    this.adjList[v1].push(v2);
    this.adjList[v2].push(v1);
  }

  removeEdge(v1, v2) {
    this.adjList[v1].filter((v) => v !== v2);
    this.adjList[v2].filter((v) => v !== v1);
  }

  removeVertex(vertex) {
    while (this.adjList[vertex].length) {
      const adjVert = this.adjList[vertex].pop();
      this.removeEdge(vertex, adjVert);
    }
    delete this.adjList[vertex];
  }

  bfs(start) {
    let result = [];
    let seen = {};
    let current;
    let queue = [start];
    seen[start] = true;

    while (queue.length) {
      current = queue.shift();
      result.push(current);
      this.adjList[current].forEach((nei) => {
        if (!seen[nei]) {
          seen[nei] = true;
          queue.push(nei);
        }
      });
    }
    return result;
  }

  dfsRec(start) {
    let result = [];
    let seen = {};
    let adjacencyList = this.adjList;

    function dfsInner(ver) {
      if (!ver) return null;
      seen[ver] = true;
      result.push(ver);
      adjacencyList[ver].forEach((nei) => {
        if (!seen[nei]) {
          return dfsInner(nei);
        }
      });
    }
    dfsInner(start);
    return result;
  }

  dfsIter(start) {
    let result = [];
    let seen = {};
    let stack = [start];
    let current;

    seen[start] = true;

    while (stack.length) {
      current = stack.pop();
      result.push(current);
      if (!seen[current]) {
        this.adjList[current].forEach((nei) => {
          seen[nei] = true;
          stack.push(nei);
        });
      }
    }
    return result;
  }
}
