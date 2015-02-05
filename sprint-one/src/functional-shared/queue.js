var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = {};


  extend(newQueue, queueMethods);
  return newQueue;
};

var extend = function(obj){
  for (var i = 1; i < arguments.length; i++){
    for (var key in arguments[i]){
      obj[key] = arguments[i][key];
    }
  }
  obj.storage = {};
}

var queueMethods = {
  count : function(val){
    for (var key in this.storage){
      val++;
      if (arguments[1] === 1 ){
         this.storage[key - 1] = this.storage[key];
       }
    }
    return val;
  },
  enqueue: function(value){
    var index = this.count(0);
    this.storage[index] = value;
  },

  dequeue: function(){
    var temp = this.storage[0];
    delete this.storage[0];
    var index = this.count(0, 1);
    delete this.storage[index];
    return temp;
  },


  size: function(){
    return this.count(0);
  }
};
