var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = {};
  newStack.back = 0;
  newStack.storage = {};
  extend(newStack, stackMethods);

  return newStack;
};

var stackMethods = {

};

stackMethods.push = function (value){
  this.storage[this.back] = value;
  this.back++;
};
stackMethods.pop = function (){
  var temp = this.storage[this.back-1];
  delete this.storage[this.back-1];
  if (this.back > 0){
    this.back--;
  }
  return temp;
};
stackMethods.size = function (){
  return this.back;
};

var extend = function (obj){
  for (var i = 1; i< arguments.length; i++){
    for (var key in arguments[i]){
      obj[key]=arguments[i][key];
    }
  }
};
