var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  //this._storage.set(i, v);
  var temp = [];
  var bucket = this._storage.get(i);
  if (bucket){
    temp.push([k, v]);
    this._storage.set(i, temp);
  }
  else {
    temp = bucket;
    temp.push([k, v]);
    this._storage.set(i, temp);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  //return this._storage.get(i);
  var bucket = this._storage.get(i);
  //for each item in bucket, see if the first value === k
  if (Array.isArray(bucket)){
    for (var j = 0; j < bucket.length; j++){
      if (bucket[j][0] === k){
        return bucket[j][1];
      }
    }
  }
  return bucket;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  //this._storage.set(i, null);
  var bucket = this._storage.get(i);
  if (bucket.length > 1){
    for (var j = 0; j < bucket.length; j++){
      if (bucket[j][0] === k){
        bucket.splice(j, 1);
      }
    }
    this._storage.set(i, bucket);
  }
  if (bucket.length = 1){
    this._storage.set(i, null);
  }

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
