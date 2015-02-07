var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = undefined;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  if (this._storage){
    this._storage = {};
  }
  this._storage[item] = item;
};

setPrototype.contains = function(item){
  var isThere = false;
  for (var key in this._storage){
    if (this._storage[key] === item){
      isThere = true;
    }
  }
  return isThere;
};

setPrototype.remove = function(item){
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
