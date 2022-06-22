## NOTES

- consists of a finite (and possibly mutable) set of vertices or nodes or points, together with a set of unordered pairs of these vertices for an undirected graph or a set of ordered vertices for a directed graph
- collection of nodes and connections
- all nodes are equals, no heirarchical ordering like a tree with a root
- vertex = node, edge = connections

## USE CASES

- social networks
- location / mapping
- routing algorithms
- visual heirarchy
- file system optimizations
- recommendation algorithms

## TYPES

1. Undirected graph: there is no direction or polarity to the edges, they are two way connections
2. Directed graph: direction is represented with arrows, a one way direction is assigned to each edge
3. Unweighted graph: each edge has no value associated with it
4. Weighted graph: edges have values associated with them (think map with different distances between cities)

## STORING GRAPHS

1. Adjacency matrix (2d structure implemented with nested arrays for rows, columns of 1s and 0s representing edges)
2. Adjacency list (use an array or list to store the edges or a hash table with key value pairs), for a given key, the value is an array of connections

## BIG O

|V| - number of vertices
|E| - number of edges

- Add Vertex: List O(1), Matrix O(|V^2|)
- Add Edge: List O(1), Matrix O(1)
- Remove Vertex: List O(|V| + |E|), Matrix O(|V^2|)
- Remove Edge: List O(|E|), Matrix O(1)
- Query: List O(|V| + |E|), Matrix O(1)
- Storage: List O(|V| + |E|), Matrix O(|V^2|)

## BIG O KEY POINTS

### Adjacency List

- can take up less space(in sparse graphs)
- faster to iterate over all edges
- can be slower to lookup specific edge

### Adjacency Matrix

- takes up more space(in sparse graphs)
- slower to iterate over all edges
- faster to lookup specific edge
