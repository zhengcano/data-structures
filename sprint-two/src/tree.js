var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.parent = null;

  // your code here
  newTree.children = [];  // fix me
  extend(newTree, treeMethods);
  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
  var child = Tree(value);
  child.parent = this;
  this.children.push(child);

};

treeMethods.removeFromParent = function(){
  for (var i = 0; i< this.parent.children.length; i++) {
    if ( this.parent.children[i] === this){
      this.parent.children.splice(i, 1);
    }
  }
  this.parent = null;
  return this;
};

treeMethods.contains = function(target){
  var isThere = false;
  if (this.value === target){
    isThere = true;
  }
  for(var i = 0; i < this.children.length; i++){
    if (this.children[i].contains(target)){
      isThere = true;
    }
  }
  return isThere;
};

treeMethods.traverse = function(cb, node){
  node = node || this;
  cb(node.value);
  for (var i = 0; i < node.children.length; i++){
    node.traverse(cb, node.children[i]);
  }
};

var extend = function(obj){
  for (var i =1; i<arguments.length; i++){
    for (var key in arguments[i]){
      obj[key]=arguments[i][key];
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
