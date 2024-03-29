var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);

};

HashTable.prototype._dump = function(){
	this._storage.each(function(item){
		console.log(item);
	});
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(i) || [];

  var found = false;
  _.each(bucket, function(obj, key){
  	if(obj.key === k){
  		obj.value = v;
  		found = true;
  	}
  });

  if(!found) bucket.push({key: k, value: v});

  this._storage.set(i, bucket);
}; // O(1)  - but with many collisions it may approach O(n)
   //       - that is why if buckets get filled the table
   //       - must be increased in size.

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(i);

  var result;
  _.each(bucket, function(obj){
  	//obj is an object
  	if(obj.key === k){
  		result = obj.value;
  	}
  });

  return result;

}; //O(1) - same as insert

HashTable.prototype.remove = function(k){
	var i= getIndexBelowMaxForKey(k, this._limit);

	var bucket = this._storage.get(i);

	_.each(bucket, function(obj){
		if(obj.key === k){
			obj.value = null;
		}
	});
}; // O(1)  - same as insert

/* our target data structure to handle collisions
[
  [{ key: k1, value: v1},  {key: k4, value: v4}],

  [{ key: k2, value: v2}],

  [{ key: k3, value: v3}],
]
*/

/*
 * Complexity: What is the time complexity of the above functions?
 */
