var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  _.extend(obj,{
    _size: 0,
    _top: 0,
    _storage: {}
  },
  stackMethods);
  return obj;
};

var stackMethods = {

  push: function(value){
    this._size++;
    this._storage[++this._top] = value;
  },

  pop: function(){
    if(this._size === 0) return undefined;
    var val = this._storage[this._top];
    this._size--;
    this._top--;
    return val;
  },

  size: function(){
    return this._size;
  }
};

