var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  extend(newTree, treeMethods);
  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(Tree(value));

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

var extend = function(obj){
  for (var i =1; i<arguments.length; i++){
    for (var key in arguments[i]){
      obj[key]=arguments[i][key];
    }
  }
}

/*
 * Complexity: What is the time complexity of the above functions?
 */
