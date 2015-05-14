var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = Object.create(queueMethods);

  _.extend(queue,{
    _size: 0,
    _end: 0,
    _begin: 0,
    _storage: {}
  });

  return queue;
};

var queueMethods = {

  enqueue: function(value){
    this._storage[this._end]= value;
    this._size++;
    this._end++;
  },
  dequeue: function(){
    if(!(this._size <= 0)){
      var value = this._storage[this._begin];
      this._size--;
      this._begin++;
      return value;
    }

  },
  size: function(){
    return this._size;
  }


};
