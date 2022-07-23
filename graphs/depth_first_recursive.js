// DFS (vertex):
// if vertex us empty, return (this is the base case)
// add vertex to results list
// mark vertex as visited
// {
//   "A": true,
//   "B": true,
//   "D": true
// }
// for each neighbor in the vertex's neighbors:
// if neighbor is not visited:
// recursively call dfs on neighbor

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

  depthFirstSearch(start) {
    // accepts a node to start at
    // create a list to store the end result
    // create an object to store visited vertices
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;
    // create a helper function which accepts a vertex
    (function dfs(vertex) {
      // the helper function should return early if the vertex is empty
      if (!vertex) return null;
      // the helper function should place the vertex it accepts into the visited object and push the vertex into the result array
      visited[vertex] = true;
      result.push(vertex);
      // loop over all of the values in the adjacency list for that vertex
      adjacencyList[vertex].forEach((neighbor) => {
        // if any of those values have not been visited, recursively invoke the helper with that vertex
        if (!visited[neighbor]) return dfs(neighbor);
      });
      // invoke the helper function with the starting vertex
    })(start);
    return result;
  }
}
