// undirected, unweighted graph 
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    // accepts the name of a vertex
    // should add a key to the list with the name of the vertex and set its value to be an empty array
    // duplicates will be ignored (can add extra handling)
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(v1, v2) {
    // should accept two vertices
    // find in the adjacencyList the key of v1 and push v2 to array
    // find in the adjacencyList the key of v2 and push v1 to array
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(v1, v2) {
    // reassign the key of v1 to be an array that does not contain v2
    // reassign the key of v2 to be an array that does not contain v1
    this.adjacencyList[v1].filter((v) => {
      return v !== v2;
    });

    this.adjacencyList[v2].filter((v) => {
      return v !== v1;
    });
  }

  removeVertex(vertex) {
    // remove all edges and the vertex itself
    // loop as long as there are any other vertices in the adjacency list for that vertex
    // inside the loop, call removeEdge function with the vertex we are removing and any values in the adjacencyList for that vertex
    // delete the key in the adjacencyList for that vertex
    while (this.adjacencyList[vertex].length) {
      const adjVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjVertex);
    }
    delete this.adjacencyList[vertex];
  }
}

let g = new Graph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");
g.depthFirstRecursive("A");

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F
