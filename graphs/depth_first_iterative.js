// DFS-iterative(start):
// let s be a stack
// s.push(start)
// while s is not empty
// vertex = s.pop()
/// if vertex is not labeled as discovered
// visit vertex (add to result list)
// label vertex as discovered
// for each of vertex's neighbors, N do s.push(N)

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

  depthFirstIterative(start) {
    // accepts a starting node
    // create a stack to keep track of vertices
    // create a list to store the end result
    // create an object to store the visited vertices
    // add the starting vertex to the stack and mark it as visited
    let stack = [start];
    let visited = {};
    let result = [];
    let current;

    visited[start] = true;
    // while the stack has something in it
    while (stack.length) {
      // pop the next vertex from the stack
      current = stack.pop();
      result.push(current);
      // if that vertex hasnt been visited yet
      this.adjacencyList[current].forEach((neighbor) => {
        // mark it as visited, add it to the result list, push all of its neighbors into the stack
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    return result;
  }
}
