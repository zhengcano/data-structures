var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};
Queue.prototype.enqueue = function (value) {
  this.storage[this.count(0)] = value;
};

Queue.prototype.dequeue = function () {
  var temp = this.storage[0];
  delete this.storage[0];

  delete this.storage[this.count(0, 1)];
  return temp;
};

Queue.prototype.size = function () {
  return this.count(0);
};

Queue.prototype.count = function (value) {
  for (var key in this.storage){
    value++;
    if (arguments[1] === 1){
      this.storage[key-1] = this.storage[key];
    }
  }
  return value;
};
