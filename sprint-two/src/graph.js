

var Graph = function(){
};

Graph.prototype.addNode = function(node){
  this[node]  = new GraphNode();
};

Graph.prototype.contains = function(node){
  var isThere = false;
  for (var key in this){
    if (key === node){
      isThere = true;
    }
  }
  return isThere;
};

Graph.prototype.removeNode = function(node){
  delete this[node];
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  return Graph.prototype.contains.call(this[fromNode].edges, toNode);
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this[fromNode].edges[toNode] = 1;
  this[toNode].edges[fromNode] = 1;
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  delete this[fromNode].edges[toNode];
  delete this[toNode].edges[fromNode];
};

Graph.prototype.forEachNode = function(cb){
  for (var key in this){
    console.log(this, key, this[key]);
    if (this[key].edges !== undefined){
      cb(key);
    }
  }

};

var GraphNode = function (){
  this.edges = {};

};
/*
 * Complexity: What is the time complexity of the above functions?
 */



