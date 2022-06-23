class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(v1, v2) {
    this.adjacencyList[v1].filter((v) => {
      return v !== v2;
    });

    this.adjacencyList[v2].filter((v) => {
      return v !== v1;
    });
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjVertex);
    }
    delete this.adjacencyList[vertex];
  }

  breadthFirstSearch(start) {
    // create a queue and place the starting vertex in it
    // create an array to store the result
    // create an object to store the nodes visited
    // mark the starting vertex as visited
    const queue = [start];
    const result = [];
    const visited = {};
    let current;
    visited[start] = true;
    // loop as long as there is anything in the queue
    while (queue.length) {
      // remove the first vertex in the queue and push it to visited
      current = queue.shift();
      result.push(current);
      // loop over each vertex in the adjacency list for the current vertex
      this.adjacencyList[current].forEach((neighbor) => {
        // if it is not inside the visited object, mark it as visited and enqueue the vertex
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return result;
  }
}
