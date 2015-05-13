var Queue = function(){
  var someInstance = {};
  var size = 0;
  //
  var firstItem = 0;
  var lastItem = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  //identical to array except that it cannot unshift & it cannot pop.
  someInstance.enqueue = function(value){
    storage[lastItem++] = value;
    size++;
  };

  someInstance.dequeue = function(){

    //access the first item
    //decrease the size by one
    if(size === 0) return undefined;

    var value = storage[firstItem];
    firstItem++;
    size--;
    return value;

  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
