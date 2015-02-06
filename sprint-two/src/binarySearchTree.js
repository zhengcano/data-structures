var BinarySearchTree = function(value){
  var newTree = Object.create(bsnMethods);
  newTree.value = value;

  return newTree;
};

bsnMethods = {};

bsnMethods.insert = function (value){
  if (value < this.value){
    if(this.hasOwnProperty('left')){
      this.left.insert(value);
    } else {
      this.left = BinarySearchTree(value);
    }
  }

  if (value > this.value){
    if(this.hasOwnProperty('right')){
      this.right.insert(value);
    } else {
      this.right = BinarySearchTree(value);
    }
  }


};

bsnMethods.contains = function (value){
  var isThere = false;
  if (value === this.value){
    isThere = true;
  } else if (value < this.value){
    if (this.hasOwnProperty('left')){
      isThere = this.left.contains(value);
    }
  }
  else {
    if (this.hasOwnProperty('right')){
      isThere = this.right.contains(value);
    }
  }
  return isThere;
};

bsnMethods.depthFirstLog = function (cb){
  cb(this.value);
  if (this.hasOwnProperty('left')){
    this.left.depthFirstLog(cb);
  }

  if (this.hasOwnProperty('right')){
    this.right.depthFirstLog(cb);
  }

};
/*
 * Complexity: What is the time complexity of the above functions?
 */
