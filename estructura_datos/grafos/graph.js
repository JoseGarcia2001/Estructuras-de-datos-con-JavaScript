class Graph {
  constructor() {
    this.graph = {};
    this.nodes = 0;
  }

  addVertex(node) {
    this.graph[node] = [];
    this.nodes++;
  }

  addEdge(vertex, connection) {
    this.graph[vertex].push(connection);
    this.graph[connection].push(vertex);
  }
}

const myGraph = new Graph();
myGraph.addVertex(1);
myGraph.addVertex(3);
myGraph.addVertex(4);
myGraph.addVertex(5);
myGraph.addVertex(6);
myGraph.addVertex(8);
