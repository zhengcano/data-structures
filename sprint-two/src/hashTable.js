var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.sizeUp = function(){
  var oldLimit = this._limit;
  this._limit = this._limit * 2;
  var newStorage = LimitedArray(this._limit);
  this._storage.each( function (bucket){
    for (var i =0; i<bucket.length; i++){
      var h = getIndexBelowMaxForKey(bucket[i][0], this._limit);
      newStorage.set()
    }
  });
  this._storage = newStorage;
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  // if (argument[2] !== this._storage){
  // var total = 0;
  // this._storage.each(function(val){if (Array.isArray(val)){
  //   total++;});
  // }
  // if (total > (this._limit * 0.75)){
  //   this.sizeUp();
  // }
  var temp = [];
  var bucket = this._storage.get(i);
  if (bucket === null || bucket === undefined){
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
