var Queue = function(){
  var someInstance = {};
  var front = 0;
  var back = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    someInstance[back] = value;
    back ++;
  };

  someInstance.dequeue = function(){
    var temp = someInstance[front];
    delete someInstance[front];
    if (back - front > 0){
      front ++;
    }
    return temp;

  };

  someInstance.size = function(){
    return back - front;
  };

  return someInstance;
};
