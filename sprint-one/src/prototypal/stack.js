var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create(stackMethods);

  return newStack;
};

var stackMethods = {};

stackMethods.push = function(value){
  this.storage[this.last] = value;
  this.last++;
};

stackMethods.pop = function(){
  if(this.last > 0){
    var temp = this.storage[this.last - 1];
    delete this.storage[this.last - 1];
    this.last--;
    return temp;
  }
};

stackMethods.size = function(){
  return this.last;
};

stackMethods.last = 0;

stackMethods.storage = {};
