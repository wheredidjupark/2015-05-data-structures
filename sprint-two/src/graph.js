var Graph = function(){
  this.storage = {};
};

var GraphNode = function(name){
  this.name = name;
  this.edges = {};
};

Graph.prototype.addNode = function(node){
  //todo: makesure no existing node in graph
  this.storage[node] = new GraphNode(node);
};

Graph.prototype.contains = function(node){
  return (node in this.storage);
};

Graph.prototype.removeNode = function(node){
  var graph = this;

  _.each(this.storage[node].edges, function(neighbour){
    delete graph.storage[neighbour].edges[node];
  });

  delete this.storage[node];
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  var from = this.storage[fromNode];
  var to = this.storage[toNode];
  return !!(from.edges[toNode] && to.edges[fromNode]);
};

Graph.prototype.addEdge = function(fromNode, toNode){
  var from = this.storage[fromNode];
  var to = this.storage[toNode];

  from.edges[toNode] = true;
  to.edges[fromNode] = true;
};

Graph.prototype.removeEdge = function(fromNode, toNode){
	delete graph.storage[fromNode].edges[toNode];
	delete graph.storage[toNode].edges[fromNode];

};


Graph.prototype.forEachNode = function(cb){

 _.each( this.storage, function(node){
		cb(node.name);
	});
}

/*
 * Complexity: What is the time complexity of the above functions?
 */



