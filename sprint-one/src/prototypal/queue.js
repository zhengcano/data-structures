var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
  newQueue.storage = {};

  return newQueue;
};

var queueMethods = {
  enqueue: function(value){
    var index = this.count(0);
    this.storage[index] = value;

  },
  dequeue: function(){
    var temp = this.storage[0];
    delete this.storage[0]
    var index = this.count(0, 1);
    delete this.storage[index];
    return temp;
  },
  size: function(){
    return this.count(0);
  },
  count: function(val, dec){
    for (var key in this.storage){
      val++;
      if (dec === 1){
        this.storage[key - 1] = this.storage[key];
      }
    }
    return val;
  }
};





