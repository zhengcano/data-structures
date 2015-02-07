var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.total = 0;

};

HashTable.prototype.resize = function(direction){
  var oldLimit = this._limit;
  if (direction === 'up') {
    this._limit = this._limit * 2;
  } else if (direction === 'down'){
    this._limit = this._limit * .5;
  }
  var newLimit = this._limit;

  var newStorage = LimitedArray(this._limit);

  this._storage.each( function (bucket){
    if (Array.isArray(bucket)){
        for (var i =0; i < bucket.length; i++){
          HashTable.prototype.insert(bucket[i][0], bucket[i][1], newStorage, newLimit);
        }
      }
    });

  this._storage = newStorage;
};

HashTable.prototype.insert = function(k, v, storage, limit){
  limit = limit || this._limit;
  var i = getIndexBelowMaxForKey(k, limit);
  var temp = [];
  storage = storage || this._storage;
  var bucket = storage.get(i);
  if (bucket === null || bucket === undefined){
    temp.push([k, v]);
    storage.set(i, temp);
    this.total++;
  }
  else {
    temp = bucket;
    temp.push([k, v]);
    storage.set(i, temp);
    this.total++;
  }
  if (storage === this._storage){
    if (this.total > (this._limit * 0.75)){
      this.resize('up');
    }
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
  console.log(bucket);
  if (Array.isArray(bucket)){
    if (bucket.length > 1){
      for (var j = 0; j < bucket.length; j++){
        if (bucket[j][0] === k){
          bucket.splice(j, 1);
        }
      }
      this._storage.set(i, bucket);
      this.total--;
    }

    if (bucket.length = 1){
      this._storage.set(i, null);
      this.total--;
    }
    if (this.total <= (this._limit * 0.25) && this._limit > 8){
      this.resize('down');
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
