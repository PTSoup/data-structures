

// Instantiate a new graph
var Graph = function() {
  this._nodes = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  return this._nodes[node] = {};
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return Boolean(this._nodes[node]);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  if (this._nodes[node]){
    for (var key in this._nodes) {
      this.removeEdge(node, key);
    }
    delete this._nodes[node];
  } else {
    return Error(`Error trying to remove node`);
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return Boolean(this._nodes[fromNode][toNode]);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this._nodes[fromNode][toNode] = true;
  this._nodes[toNode][fromNode] = true;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this._nodes[fromNode][toNode];
  delete this._nodes[toNode][fromNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this._nodes) {
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 // The time complexity of Graph would be 0(n). Most of the methods/functions are constant time. Alvin and TJ.
 */


