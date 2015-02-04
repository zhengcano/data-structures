var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value){
    var index = increment(0);
    storage[index] = value;
  };

  someInstance.pop = function(){
    var index = increment(-1);
    var temp = storage[index];
    delete storage[index];
    return temp;
  };

  someInstance.size = function(){
    var index = increment(0);
    return index;
  };

  var increment = function(value){
    for (var key in storage){
      value += 1;

    }
    return value;
  };

  return someInstance;
};
