var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this._size = 0;
  this._end = 0;
  this._storage = {};
  this._begin = 0;
};


Queue.prototype.enqueue =  function(value){
  this._storage[this._end]= value;
  this._size++;
  this._end++;
};

Queue.prototype.dequeue = function(){
  if(!(this._size <= 0)){
    var value = this._storage[this._begin];
    this._size--;
    this._begin++;
    return value;
  }
};

Queue.prototype.size = function(){
    return this._size;
};
