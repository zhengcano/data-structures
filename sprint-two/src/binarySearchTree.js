var BinarySearchTree = function(value){
  var newTree = Object.create(bstMethods);
  newTree.value = value;
  newTree.left = null;
  newTree.right = null;

  return newTree;
};

bstMethods = {};

bstMethods.insert = function (value){
  if (value < this.value){
    if(this.left){
      this.left.insert(value);
    } else {
      this.left = BinarySearchTree(value);
    }
  }

  if (value > this.value){
    if(this.right){
      this.right.insert(value);
    } else {
      this.right = BinarySearchTree(value);
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

bstMethods.depthFirstLog = function (cb){
  cb(this.value);
  if (this.left){
    this.left.depthFirstLog(cb);
  }

  if (this.right){
    this.right.depthFirstLog(cb);
  }

};
/*
 * Complexity: What is the time complexity of the above functions?
 */
