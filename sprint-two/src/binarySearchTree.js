var BinarySearchTree = function(value){
  var newTree = Object.create(bstMethods);
  newTree.value = value;
  newTree.left = null;
  newTree.right = null;
  newTree.level = 0;
  newTree.self = newTree;

  return newTree;
};

bstMethods = {};

bstMethods.insert = function (value){
  if (value < this.value){
    if(this.left){
      this.left.insert(value);
    } else {
      this.left = BinarySearchTree(value);
      this.left.level = this.level + 1;
    }
  }

  if (value > this.value){
    if(this.right){
      this.right.insert(value);
    } else {
      this.right = BinarySearchTree(value);
      this.right.level = this.level + 1;
    }
  }

};

bstMethods.contains = function (value){
  if (value === this.value){
    return true;
  } else if (value < this.value){
    if (this.left){
      return this.left.contains(value);
    }
  }
  else {
    if (this.right){
      return this.right.contains(value);
    }
  }
  return false;
};

bstMethods.breadthFirstLog = function(cb){
  var storage = [];
  this.depthFirstLog(function(node){
    if(Array.isArray(storage[node.level])){
      storage[node.level].push(node.value);
    } else {
      storage[node.level] = [];
      storage[node.level].push(node.value);
    }
  }, 'self');
  for (var i = 0; i< storage.length; i++){
    for (var j = 0; j< storage[i].length; j++){
      cb(storage[i][j]);
    };
  };
};

bstMethods.depthFirstLog = function (cb, key){
  key = key || 'value';
  cb(this[key]);
  if (this.left){
    this.left.depthFirstLog(cb, key);
  }
  if (this.right){
    this.right.depthFirstLog(cb, key);
  }

};
/*
 * Complexity: What is the time complexity of the above functions?
 */
